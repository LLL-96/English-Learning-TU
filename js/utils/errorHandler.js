// 错误处理工具模块

const ErrorHandler = {
    errors: [],
    maxErrors: 50,
    listeners: [],
    
    /**
     * 记录错误
     * @param {Error|string} error - 错误对象或消息
     * @param {string} context - 错误上下文
     */
    log(error, context = '') {
        const errorInfo = {
            timestamp: new Date().toISOString(),
            message: error.message || error,
            stack: error.stack,
            context: context,
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        
        this.errors.push(errorInfo);
        
        // 限制错误日志数量
        if (this.errors.length > this.maxErrors) {
            this.errors.shift();
        }
        
        // 控制台输出
        console.error(`[Error] ${context}:`, error);
        
        // 通知监听器
        this.notifyListeners(errorInfo);
        
        return errorInfo;
    },
    
    /**
     * 添加错误监听器
     * @param {Function} callback - 回调函数
     */
    addListener(callback) {
        this.listeners.push(callback);
    },
    
    /**
     * 移除错误监听器
     * @param {Function} callback - 回调函数
     */
    removeListener(callback) {
        const index = this.listeners.indexOf(callback);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    },
    
    /**
     * 通知所有监听器
     * @param {Object} errorInfo - 错误信息
     */
    notifyListeners(errorInfo) {
        this.listeners.forEach(callback => {
            try {
                callback(errorInfo);
            } catch (e) {
                console.error('错误监听器执行失败:', e);
            }
        });
    },
    
    /**
     * 获取所有错误
     * @returns {Array}
     */
    getErrors() {
        return [...this.errors];
    },
    
    /**
     * 清除错误记录
     */
    clear() {
        this.errors = [];
    },
    
    /**
     * 包装函数，自动捕获错误
     * @param {Function} fn - 要包装的函数
     * @param {string} context - 上下文
     * @returns {Function}
     */
    wrap(fn, context = '') {
        return (...args) => {
            try {
                return fn.apply(this, args);
            } catch (error) {
                this.log(error, context);
                throw error;
            }
        };
    },
    
    /**
     * 异步函数包装
     * @param {Function} fn - 要包装的异步函数
     * @param {string} context - 上下文
     * @returns {Function}
     */
    asyncWrap(fn, context = '') {
        return async (...args) => {
            try {
                return await fn.apply(this, args);
            } catch (error) {
                this.log(error, context);
                throw error;
            }
        };
    },
    
    /**
     * 设置全局错误监听
     */
    setupGlobalHandlers() {
        // JavaScript 运行时错误
        window.addEventListener('error', (event) => {
            this.log(event.error || event.message, 'Global');
            this.showUserFriendlyMessage('抱歉，发生了一些错误，请刷新页面重试。');
            
            // 阻止默认处理
            event.preventDefault();
        });
        
        // Promise 未处理的 rejection
        window.addEventListener('unhandledrejection', (event) => {
            this.log(event.reason, 'Unhandled Promise');
            this.showUserFriendlyMessage('操作失败，请稍后重试。');
            
            event.preventDefault();
        });
        
        // 资源加载错误
        window.addEventListener('error', (event) => {
            if (event.target && (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT')) {
                this.log(`资源加载失败: ${event.target.src}`, 'Resource');
            }
        }, true);
    },
    
    /**
     * 显示用户友好的错误提示
     * @param {string} message - 错误消息
     * @param {Object} options - 选项
     */
    showUserFriendlyMessage(message, options = {}) {
        const duration = options.duration || 3000;
        const type = options.type || 'error';
        
        // 创建或获取提示元素
        let toast = document.getElementById('error-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'error-toast';
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 12px 24px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10000;
                font-size: 14px;
                opacity: 0;
                transition: opacity 0.3s, transform 0.3s;
                pointer-events: none;
            `;
            document.body.appendChild(toast);
        }
        
        // 根据类型设置颜色
        const colors = {
            error: '#ff4444',
            warning: '#ff9800',
            info: '#2196f3',
            success: '#4caf50'
        };
        
        toast.style.background = colors[type] || colors.error;
        toast.style.color = 'white';
        toast.textContent = message;
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        
        // 自动隐藏
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(-20px)';
        }, duration);
    },
    
    /**
     * 导出错误报告
     * @returns {string} JSON 格式的错误报告
     */
    exportReport() {
        const report = {
            exportTime: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            errors: this.errors
        };
        
        return JSON.stringify(report, null, 2);
    }
};

// 自动设置全局错误监听
if (typeof window !== 'undefined') {
    ErrorHandler.setupGlobalHandlers();
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ErrorHandler;
}
