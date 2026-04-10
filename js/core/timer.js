// 计时器管理模块
// 修复内存泄漏，支持暂停/恢复

const TimerManager = {
    timers: new Map(),
    pausedTimers: new Map(),
    
    /**
     * 启动计时器
     * @param {string} id - 计时器ID
     * @param {Function} callback - 回调函数
     * @param {number} interval - 间隔时间（毫秒）
     * @returns {number} 计时器ID
     */
    start(id, callback, interval) {
        // 先停止已有的同名计时器
        this.stop(id);
        
        const timer = setInterval(() => {
            try {
                callback();
            } catch (error) {
                console.error(`计时器 [${id}] 执行错误:`, error);
                this.stop(id);
            }
        }, interval);
        
        this.timers.set(id, {
            timer,
            callback,
            interval,
            startTime: Date.now()
        });
        
        return timer;
    },
    
    /**
     * 停止计时器
     * @param {string} id - 计时器ID
     */
    stop(id) {
        const timerData = this.timers.get(id);
        if (timerData) {
            clearInterval(timerData.timer);
            this.timers.delete(id);
        }
    },
    
    /**
     * 停止所有计时器
     */
    stopAll() {
        this.timers.forEach((data, id) => {
            clearInterval(data.timer);
        });
        this.timers.clear();
    },
    
    /**
     * 暂停所有计时器
     */
    pauseAll() {
        this.timers.forEach((data, id) => {
            clearInterval(data.timer);
            this.pausedTimers.set(id, data);
        });
        this.timers.clear();
    },
    
    /**
     * 恢复所有暂停的计时器
     */
    resumeAll() {
        this.pausedTimers.forEach((data, id) => {
            this.start(id, data.callback, data.interval);
        });
        this.pausedTimers.clear();
    },
    
    /**
     * 检查计时器是否存在
     * @param {string} id - 计时器ID
     * @returns {boolean}
     */
    has(id) {
        return this.timers.has(id);
    },
    
    /**
     * 获取计时器信息
     * @param {string} id - 计时器ID
     * @returns {Object|null}
     */
    getInfo(id) {
        const data = this.timers.get(id);
        if (data) {
            return {
                id,
                interval: data.interval,
                runningTime: Date.now() - data.startTime
            };
        }
        return null;
    },
    
    /**
     * 获取所有计时器列表
     * @returns {Array}
     */
    list() {
        return Array.from(this.timers.keys());
    },
    
    /**
     * 设置页面可见性监听
     * 页面后台时自动暂停，前台时恢复
     */
    setupVisibilityHandler() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                console.log('页面进入后台，暂停计时器');
                this.pauseAll();
            } else {
                console.log('页面回到前台，恢复计时器');
                this.resumeAll();
            }
        });
    }
};

// 自动设置页面可见性监听
if (typeof document !== 'undefined') {
    TimerManager.setupVisibilityHandler();
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimerManager;
}
