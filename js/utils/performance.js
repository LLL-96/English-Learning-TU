// 性能监控工具模块

const PerformanceMonitor = {
    marks: new Map(),
    measures: [],
    observers: [],
    
    /**
     * 初始化性能监控
     */
    init() {
        // 检查是否支持 Performance API
        if (!window.performance) {
            console.warn('当前浏览器不支持 Performance API');
            return false;
        }
        
        // 设置性能观察器
        this.setupObservers();
        
        // 记录初始标记
        this.mark('app-init');
        
        return true;
    },
    
    /**
     * 设置性能观察器
     */
    setupObservers() {
        // 观察长任务
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.duration > 50) {
                            console.warn(`长任务警告: ${entry.duration}ms`, entry);
                        }
                    }
                });
                observer.observe({ entryTypes: ['longtask'] });
                this.observers.push(observer);
            } catch (e) {
                // 浏览器可能不支持 longtask
            }
            
            // 观察资源加载
            try {
                const resourceObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.duration > 1000) {
                            console.warn(`资源加载缓慢: ${entry.name} - ${entry.duration}ms`);
                        }
                    }
                });
                resourceObserver.observe({ entryTypes: ['resource'] });
                this.observers.push(resourceObserver);
            } catch (e) {}
        }
    },
    
    /**
     * 添加性能标记
     * @param {string} name - 标记名称
     */
    mark(name) {
        if (window.performance && window.performance.mark) {
            window.performance.mark(name);
            this.marks.set(name, performance.now());
        }
    },
    
    /**
     * 测量两个标记之间的时间
     * @param {string} name - 测量名称
     * @param {string} startMark - 开始标记
     * @param {string} endMark - 结束标记
     * @returns {number|null}
     */
    measure(name, startMark, endMark) {
        if (window.performance && window.performance.measure) {
            try {
                window.performance.measure(name, startMark, endMark);
                const entries = window.performance.getEntriesByName(name);
                const duration = entries[entries.length - 1].duration;
                
                this.measures.push({
                    name,
                    duration,
                    timestamp: Date.now()
                });
                
                return duration;
            } catch (e) {
                console.error('性能测量失败:', e);
            }
        }
        return null;
    },
    
    /**
     * 开始计时
     * @param {string} label - 计时标签
     */
    startTimer(label) {
        this.marks.set(`timer-${label}`, performance.now());
    },
    
    /**
     * 结束计时
     * @param {string} label - 计时标签
     * @returns {number} 耗时（毫秒）
     */
    endTimer(label) {
        const startTime = this.marks.get(`timer-${label}`);
        if (startTime) {
            const duration = performance.now() - startTime;
            console.log(`[Timer] ${label}: ${duration.toFixed(2)}ms`);
            return duration;
        }
        return 0;
    },
    
    /**
     * 获取导航计时信息
     * @returns {Object}
     */
    getNavigationTiming() {
        if (!window.performance || !window.performance.timing) {
            return null;
        }
        
        const timing = window.performance.timing;
        
        return {
            // DNS 查询时间
            dnsLookup: timing.domainLookupEnd - timing.domainLookupStart,
            // TCP 连接时间
            tcpConnection: timing.connectEnd - timing.connectStart,
            // 服务器响应时间
            serverResponse: timing.responseEnd - timing.requestStart,
            // DOM 解析时间
            domParsing: timing.domComplete - timing.domLoading,
            // 页面完全加载时间
            totalLoad: timing.loadEventEnd - timing.navigationStart
        };
    },
    
    /**
     * 获取核心 Web 指标
     * @returns {Promise<Object>}
     */
    async getWebVitals() {
        const vitals = {};
        
        // Largest Contentful Paint (LCP)
        if ('PerformanceObserver' in window) {
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    vitals.lcp = lastEntry.renderTime || lastEntry.loadTime;
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {}
        }
        
        // First Input Delay (FID)
        try {
            const fidObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.processingStart && entry.startTime) {
                        vitals.fid = entry.processingStart - entry.startTime;
                    }
                }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {}
        
        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        try {
            const clsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                vitals.cls = clsValue;
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {}
        
        // 等待一段时间收集数据
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        return vitals;
    },
    
    /**
     * 生成性能报告
     * @returns {Object}
     */
    generateReport() {
        return {
            timestamp: new Date().toISOString(),
            navigationTiming: this.getNavigationTiming(),
            measures: this.measures,
            memory: performance.memory ? {
                usedJSHeapSize: performance.memory.usedJSHeapSize,
                totalJSHeapSize: performance.memory.totalJSHeapSize
            } : null,
            userAgent: navigator.userAgent,
            url: window.location.href
        };
    },
    
    /**
     * 打印性能报告到控制台
     */
    printReport() {
        const report = this.generateReport();
        console.group('性能报告');
        console.log('导航计时:', report.navigationTiming);
        console.log('自定义测量:', report.measures);
        console.log('内存使用:', report.memory);
        console.groupEnd();
    },
    
    /**
     * 清理性能数据
     */
    clear() {
        if (window.performance && window.performance.clearMarks) {
            window.performance.clearMarks();
            window.performance.clearMeasures();
        }
        this.marks.clear();
        this.measures = [];
    },
    
    /**
     * 监控函数执行时间
     * @param {Function} fn - 要监控的函数
     * @param {string} name - 名称
     * @returns {Function}
     */
    monitor(fn, name) {
        return (...args) => {
            this.startTimer(name);
            const result = fn.apply(this, args);
            
            // 处理异步函数
            if (result && typeof result.then === 'function') {
                return result.finally(() => {
                    this.endTimer(name);
                });
            }
            
            this.endTimer(name);
            return result;
        };
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PerformanceMonitor;
}
