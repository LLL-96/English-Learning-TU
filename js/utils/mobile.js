// 移动端优化模块
// 提供触摸反馈、手势支持等移动端优化

const MobileOptimizer = {
    // 触摸状态
    touchState: {
        startX: 0,
        startY: 0,
        startTime: 0,
        isTouching: false
    },
    
    // 配置
    config: {
        touchFeedback: true,
        swipeEnabled: true,
        longPressDelay: 500,
        doubleTapDelay: 300
    },
    
    /**
     * 初始化移动端优化
     */
    init() {
        // 检测是否为触摸设备
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (!isTouchDevice) {
            console.log('[MobileOptimizer] 非触摸设备，跳过移动端优化');
            return false;
        }
        
        console.log('[MobileOptimizer] 初始化移动端优化');
        
        // 设置触摸反馈
        if (this.config.touchFeedback) {
            this.setupTouchFeedback();
        }
        
        // 设置手势支持
        if (this.config.swipeEnabled) {
            this.setupSwipeGestures();
        }
        
        // 设置双击缩放阻止
        this.setupDoubleTapPrevention();
        
        // 设置视口优化
        this.optimizeViewport();
        
        return true;
    },
    
    /**
     * 设置触摸反馈
     */
    setupTouchFeedback() {
        // 添加触摸反馈样式
        const style = document.createElement('style');
        style.textContent = `
            .touch-feedback {
                position: relative;
                overflow: hidden;
            }
            
            .touch-feedback::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                background: rgba(0, 0, 0, 0.1);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
                pointer-events: none;
            }
            
            .touch-feedback:active::after {
                animation: ripple 0.4s ease-out;
            }
            
            @keyframes ripple {
                to {
                    transform: translate(-50%, -50%) scale(3);
                    opacity: 0;
                }
            }
            
            /* 按钮点击效果 */
            .btn-touch-feedback {
                transition: transform 0.1s, background-color 0.2s;
            }
            
            .btn-touch-feedback:active {
                transform: scale(0.95);
                background-color: rgba(0, 0, 0, 0.05);
            }
            
            /* 卡片点击效果 */
            .card-touch-feedback {
                transition: transform 0.2s, box-shadow 0.2s;
            }
            
            .card-touch-feedback:active {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
        `;
        document.head.appendChild(style);
        
        // 为可点击元素添加触摸反馈
        document.addEventListener('touchstart', (e) => {
            const target = e.target.closest('button, .btn, .card, a, [role="button"]');
            if (target) {
                target.classList.add('touch-feedback');
                
                if (target.tagName === 'BUTTON' || target.classList.contains('btn')) {
                    target.classList.add('btn-touch-feedback');
                } else if (target.classList.contains('card')) {
                    target.classList.add('card-touch-feedback');
                }
            }
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            const target = e.target.closest('.touch-feedback');
            if (target) {
                setTimeout(() => {
                    target.classList.remove('touch-feedback');
                }, 300);
            }
        }, { passive: true });
    },
    
    /**
     * 设置滑动手势
     */
    setupSwipeGestures() {
        let startX = 0;
        let startY = 0;
        let startTime = 0;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const deltaTime = endTime - startTime;
            
            // 快速滑动检测
            if (deltaTime < 300) {
                // 水平滑动
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                        this.onSwipeRight();
                    } else {
                        this.onSwipeLeft();
                    }
                }
                // 垂直滑动
                else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
                    if (deltaY > 0) {
                        this.onSwipeDown();
                    } else {
                        this.onSwipeUp();
                    }
                }
            }
        }, { passive: true });
    },
    
    /**
     * 向左滑动
     */
    onSwipeLeft() {
        console.log('[MobileOptimizer] 向左滑动');
        // 触发前进操作
        document.dispatchEvent(new CustomEvent('swipeleft'));
    },
    
    /**
     * 向右滑动
     */
    onSwipeRight() {
        console.log('[MobileOptimizer] 向右滑动');
        // 触发后退操作
        document.dispatchEvent(new CustomEvent('swiperight'));
    },
    
    /**
     * 向上滑动
     */
    onSwipeUp() {
        console.log('[MobileOptimizer] 向上滑动');
        document.dispatchEvent(new CustomEvent('swipeup'));
    },
    
    /**
     * 向下滑动
     */
    onSwipeDown() {
        console.log('[MobileOptimizer] 向下滑动');
        document.dispatchEvent(new CustomEvent('swipedown'));
    },
    
    /**
     * 阻止双击缩放
     */
    setupDoubleTapPrevention() {
        let lastTouchEnd = 0;
        
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= this.config.doubleTapDelay) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });
        
        // 阻止双指缩放
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
    },
    
    /**
     * 优化视口
     */
    optimizeViewport() {
        // 确保视口设置正确
        let viewport = document.querySelector('meta[name="viewport"]');
        
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            document.head.appendChild(viewport);
        }
        
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        
        // 隐藏地址栏（iOS）
        window.addEventListener('load', () => {
            setTimeout(() => {
                window.scrollTo(0, 1);
            }, 0);
        });
    },
    
    /**
     * 添加长按支持
     * @param {Element} element - 目标元素
     * @param {Function} callback - 长按回调
     */
    addLongPress(element, callback) {
        let pressTimer;
        
        const startPress = (e) => {
            pressTimer = setTimeout(() => {
                callback(e);
            }, this.config.longPressDelay);
        };
        
        const cancelPress = () => {
            clearTimeout(pressTimer);
        };
        
        element.addEventListener('touchstart', startPress, { passive: true });
        element.addEventListener('touchend', cancelPress, { passive: true });
        element.addEventListener('touchmove', cancelPress, { passive: true });
    },
    
    /**
     * 添加摇一摇支持
     * @param {Function} callback - 摇动回调
     * @param {number} threshold - 摇动阈值
     */
    addShake(callback, threshold = 15) {
        if (!window.DeviceMotionEvent) {
            console.warn('[MobileOptimizer] 设备不支持摇一摇');
            return;
        }
        
        let lastX = 0;
        let lastY = 0;
        let lastZ = 0;
        let lastUpdate = 0;
        let shakeCount = 0;
        
        window.addEventListener('devicemotion', (e) => {
            const current = e.accelerationIncludingGravity;
            const curTime = Date.now();
            
            if ((curTime - lastUpdate) > 100) {
                const diffTime = curTime - lastUpdate;
                lastUpdate = curTime;
                
                const speed = Math.abs(
                    current.x + current.y + current.z - 
                    lastX - lastY - lastZ
                ) / diffTime * 10000;
                
                if (speed > threshold) {
                    shakeCount++;
                    if (shakeCount > 2) {
                        callback();
                        shakeCount = 0;
                    }
                }
                
                lastX = current.x;
                lastY = current.y;
                lastZ = current.z;
            }
        });
    },
    
    /**
     * 检测设备方向
     * @returns {string} 'portrait' | 'landscape'
     */
    getOrientation() {
        if (window.orientation !== undefined) {
            return Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait';
        }
        return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    },
    
    /**
     * 监听方向变化
     * @param {Function} callback - 回调函数
     */
    onOrientationChange(callback) {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                callback(this.getOrientation());
            }, 100);
        });
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileOptimizer;
}
