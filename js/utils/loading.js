// 加载管理器模块
// 提供骨架屏、进度条等加载体验优化

const LoadingManager = {
    // 加载状态
    isLoading: false,
    progress: 0,
    currentTask: '',
    
    // 配置
    config: {
        skeletonEnabled: true,
        progressBarEnabled: true,
        minDisplayTime: 500, // 最少显示时间（毫秒）
    },
    
    /**
     * 显示加载状态
     * @param {string} message - 加载提示文字
     */
    show(message = '加载中...') {
        this.isLoading = true;
        this.currentTask = message;
        this.progress = 0;
        
        this.createLoadingOverlay();
        this.updateLoadingText(message);
        
        // 显示骨架屏
        if (this.config.skeletonEnabled) {
            this.showSkeleton();
        }
        
        // 显示进度条
        if (this.config.progressBarEnabled) {
            this.showProgressBar();
        }
    },
    
    /**
     * 隐藏加载状态
     */
    hide() {
        this.isLoading = false;
        this.progress = 100;
        
        // 延迟隐藏，确保用户能看到完成状态
        setTimeout(() => {
            this.removeLoadingOverlay();
            this.hideSkeleton();
            this.hideProgressBar();
        }, 300);
    },
    
    /**
     * 更新进度
     * @param {number} percent - 进度百分比 (0-100)
     * @param {string} message - 进度提示
     */
    updateProgress(percent, message) {
        this.progress = Math.min(100, Math.max(0, percent));
        
        if (message) {
            this.currentTask = message;
            this.updateLoadingText(message);
        }
        
        // 更新进度条
        const progressBar = document.getElementById('loading-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${this.progress}%`;
        }
        
        // 更新进度文字
        const progressText = document.getElementById('loading-progress-text');
        if (progressText) {
            progressText.textContent = `${Math.round(this.progress)}%`;
        }
    },
    
    /**
     * 异步加载资源
     * @param {Array} resources - 资源列表
     * @param {Function} onProgress - 进度回调
     * @returns {Promise<Array>}
     */
    async loadResources(resources, onProgress) {
        const total = resources.length;
        const results = [];
        
        this.show(`加载 ${total} 个资源...`);
        
        for (let i = 0; i < total; i++) {
            const resource = resources[i];
            
            try {
                this.updateProgress(
                    (i / total) * 100,
                    `加载中... (${i + 1}/${total})`
                );
                
                const result = await this.loadResource(resource);
                results.push({ success: true, data: result, resource });
            } catch (error) {
                console.error(`[LoadingManager] 资源加载失败:`, resource, error);
                results.push({ success: false, error, resource });
            }
            
            if (onProgress) {
                onProgress(i + 1, total);
            }
        }
        
        this.updateProgress(100, '加载完成');
        this.hide();
        
        return results;
    },
    
    /**
     * 加载单个资源
     * @param {string|Object} resource - 资源
     * @returns {Promise}
     */
    loadResource(resource) {
        if (typeof resource === 'string') {
            // 字符串类型，作为 URL 加载
            return fetch(resource).then(r => r.text());
        } else if (resource.type === 'script') {
            return this.loadScript(resource.url);
        } else if (resource.type === 'style') {
            return this.loadStyle(resource.url);
        } else if (resource.type === 'json') {
            return fetch(resource.url).then(r => r.json());
        } else if (resource.type === 'image') {
            return this.loadImage(resource.url);
        }
        
        return Promise.reject(new Error(`未知资源类型: ${resource}`));
    },
    
    /**
     * 加载脚本
     * @param {string} url - 脚本 URL
     * @returns {Promise}
     */
    loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    },
    
    /**
     * 加载样式
     * @param {string} url - 样式 URL
     * @returns {Promise}
     */
    loadStyle(url) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    },
    
    /**
     * 加载图片
     * @param {string} url - 图片 URL
     * @returns {Promise}
     */
    loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = url;
        });
    },
    
    /**
     * 创建加载遮罩层
     */
    createLoadingOverlay() {
        let overlay = document.getElementById('loading-overlay');
        
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'loading-overlay';
            overlay.innerHTML = `
                <div class="loading-spinner"></div>
                <div class="loading-text">加载中...</div>
                <div class="loading-progress-container">
                    <div class="loading-progress-bar" id="loading-progress-bar"></div>
                </div>
                <div class="loading-progress-text" id="loading-progress-text">0%</div>
            `;
            
            // 添加样式
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.95);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.3s;
            `;
            
            // 添加内部元素样式
            const style = document.createElement('style');
            style.textContent = `
                #loading-overlay .loading-spinner {
                    width: 50px;
                    height: 50px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 20px;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                #loading-overlay .loading-text {
                    font-size: 16px;
                    color: #333;
                    margin-bottom: 20px;
                }
                
                #loading-overlay .loading-progress-container {
                    width: 200px;
                    height: 6px;
                    background: #e0e0e0;
                    border-radius: 3px;
                    overflow: hidden;
                    margin-bottom: 10px;
                }
                
                #loading-overlay .loading-progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    width: 0%;
                    transition: width 0.3s;
                }
                
                #loading-overlay .loading-progress-text {
                    font-size: 14px;
                    color: #666;
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(overlay);
        }
        
        overlay.style.opacity = '1';
        overlay.style.display = 'flex';
    },
    
    /**
     * 移除加载遮罩层
     */
    removeLoadingOverlay() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    },
    
    /**
     * 更新加载文字
     * @param {string} text - 文字内容
     */
    updateLoadingText(text) {
        const textEl = document.querySelector('#loading-overlay .loading-text');
        if (textEl) {
            textEl.textContent = text;
        }
    },
    
    /**
     * 显示骨架屏
     */
    showSkeleton() {
        // 为内容区域添加骨架屏样式
        const contentAreas = document.querySelectorAll('.content-section');
        contentAreas.forEach(area => {
            area.classList.add('skeleton-loading');
        });
    },
    
    /**
     * 隐藏骨架屏
     */
    hideSkeleton() {
        const contentAreas = document.querySelectorAll('.content-section');
        contentAreas.forEach(area => {
            area.classList.remove('skeleton-loading');
        });
    },
    
    /**
     * 显示进度条
     */
    showProgressBar() {
        // 已在 createLoadingOverlay 中创建
    },
    
    /**
     * 隐藏进度条
     */
    hideProgressBar() {
        // 已在 removeLoadingOverlay 中处理
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoadingManager;
}
