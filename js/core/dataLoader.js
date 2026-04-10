// 数据加载器模块
// 实现数据懒加载和缓存

const DataLoader = {
    // 数据缓存
    cache: new Map(),
    
    // 加载状态
    loadingStates: new Map(),
    
    // 配置
    config: {
        cacheEnabled: true,
        cacheMaxAge: 5 * 60 * 1000, // 5分钟
        retryAttempts: 3,
        retryDelay: 1000
    },
    
    /**
     * 加载版本数据
     * @param {string} version - 版本名称 (pep, waiyan, general)
     * @returns {Promise<Object>}
     */
    async loadVersionData(version) {
        // 检查缓存
        const cached = this.getFromCache(version);
        if (cached) {
            console.log(`[DataLoader] 从缓存加载 ${version} 数据`);
            return cached;
        }
        
        // 检查是否正在加载
        if (this.loadingStates.has(version)) {
            return this.loadingStates.get(version);
        }
        
        // 开始加载
        const loadPromise = this.doLoadVersion(version);
        this.loadingStates.set(version, loadPromise);
        
        try {
            const data = await loadPromise;
            this.setCache(version, data);
            return data;
        } finally {
            this.loadingStates.delete(version);
        }
    },
    
    /**
     * 实际加载版本数据
     * @param {string} version - 版本名称
     * @returns {Promise<Object>}
     */
    async doLoadVersion(version) {
        const versionMap = {
            'pep': 'pepData',
            'waiyan': 'waiyanData',
            'general': 'generalData'
        };
        
        const dataName = versionMap[version];
        
        if (!dataName) {
            throw new Error(`未知版本: ${version}`);
        }
        
        // 检查全局变量（同步加载的数据）
        if (typeof window[dataName] !== 'undefined') {
            console.log(`[DataLoader] 使用同步加载的 ${version} 数据`);
            return window[dataName];
        }
        
        // 尝试动态导入（如果数据文件支持模块化）
        try {
            const module = await import(`../../versions/${version}.js`);
            return module.default || module;
        } catch (e) {
            console.warn(`[DataLoader] 动态导入失败:`, e);
        }
        
        throw new Error(`无法加载版本数据: ${version}`);
    },
    
    /**
     * 加载特定年级数据
     * @param {string} version - 版本
     * @param {number} grade - 年级
     * @param {number} semester - 学期
     * @returns {Promise<Object>}
     */
    async loadGradeData(version, grade, semester = 1) {
        const cacheKey = `${version}-${grade}-${semester}`;
        
        // 检查缓存
        const cached = this.getFromCache(cacheKey);
        if (cached) {
            return cached;
        }
        
        // 加载完整版本数据
        const versionData = await this.loadVersionData(version);
        
        if (!versionData || !versionData.grades) {
            throw new Error(`版本数据无效: ${version}`);
        }
        
        // 获取年级数据
        const gradeKey = `${grade}-${semester === 1 ? '上册' : '下册'}`;
        const gradeData = versionData.grades[gradeKey];
        
        if (!gradeData) {
            throw new Error(`未找到年级数据: ${version} ${gradeKey}`);
        }
        
        // 缓存年级数据
        this.setCache(cacheKey, gradeData);
        
        return gradeData;
    },
    
    /**
     * 预加载数据
     * @param {Array} keys - 要预加载的键列表
     */
    async preload(keys) {
        const promises = keys.map(key => {
            if (typeof key === 'string') {
                return this.loadVersionData(key).catch(e => {
                    console.warn(`[DataLoader] 预加载失败: ${key}`, e);
                    return null;
                });
            } else if (typeof key === 'object') {
                return this.loadGradeData(key.version, key.grade, key.semester).catch(e => {
                    console.warn(`[DataLoader] 预加载失败:`, key, e);
                    return null;
                });
            }
        });
        
        await Promise.all(promises);
        console.log('[DataLoader] 预加载完成');
    },
    
    /**
     * 从缓存获取
     * @param {string} key - 缓存键
     * @returns {Object|null}
     */
    getFromCache(key) {
        if (!this.config.cacheEnabled) {
            return null;
        }
        
        const cached = this.cache.get(key);
        if (!cached) {
            return null;
        }
        
        // 检查是否过期
        if (Date.now() - cached.timestamp > this.config.cacheMaxAge) {
            this.cache.delete(key);
            return null;
        }
        
        return cached.data;
    },
    
    /**
     * 设置缓存
     * @param {string} key - 缓存键
     * @param {Object} data - 数据
     */
    setCache(key, data) {
        if (!this.config.cacheEnabled) {
            return;
        }
        
        this.cache.set(key, {
            data,
            timestamp: Date.now()
        });
    },
    
    /**
     * 清除缓存
     * @param {string} key - 特定键或全部
     */
    clearCache(key) {
        if (key) {
            this.cache.delete(key);
        } else {
            this.cache.clear();
        }
    },
    
    /**
     * 获取缓存统计
     * @returns {Object}
     */
    getCacheStats() {
        let totalSize = 0;
        const entries = [];
        
        this.cache.forEach((value, key) => {
            const size = JSON.stringify(value.data).length;
            totalSize += size;
            entries.push({
                key,
                size,
                age: Date.now() - value.timestamp
            });
        });
        
        return {
            count: this.cache.size,
            totalSize,
            totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
            entries
        };
    },
    
    /**
     * 配置加载器
     * @param {Object} options - 配置选项
     */
    configure(options) {
        Object.assign(this.config, options);
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataLoader;
}
