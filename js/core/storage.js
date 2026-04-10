// 本地存储管理模块

const StorageManager = {
    STORAGE_KEY: 'englishLearningState',
    
    // 保存状态到本地存储
    save(state) {
        try {
            const data = {
                currentVersion: state.currentVersion,
                currentGrade: state.currentGrade,
                currentSemester: state.currentSemester,
                currentUnit: state.currentUnit,
                favorites: state.favorites,
                studyStats: state.studyStats,
                darkMode: state.darkMode,
                accent: state.accent
            };
            
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            return { success: true };
        } catch (error) {
            console.error('保存数据失败:', error);
            
            // 检查是否是存储空间不足
            if (error.name === 'QuotaExceededError') {
                return { 
                    success: false, 
                    error: '存储空间已满，请清理浏览器数据',
                    type: 'quota_exceeded'
                };
            }
            
            return { 
                success: false, 
                error: '保存数据失败',
                type: 'unknown'
            };
        }
    },
    
    // 从本地存储加载状态
    load() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            
            if (!saved) {
                return { success: true, data: null };
            }
            
            const data = JSON.parse(saved);
            
            // 数据验证和默认值
            const validatedData = {
                currentVersion: data.currentVersion || 'pep',
                currentGrade: data.currentGrade || (data.currentVersion === 'pep' ? 3 : 1),
                currentSemester: data.currentSemester || 1,
                currentUnit: data.currentUnit || 0,
                favorites: Array.isArray(data.favorites) ? data.favorites : [],
                studyStats: {
                    studyTime: data.studyStats?.studyTime || 0,
                    wordsLearned: data.studyStats?.wordsLearned || 0,
                    dictationHistory: Array.isArray(data.studyStats?.dictationHistory) 
                        ? data.studyStats.dictationHistory : [],
                    testHistory: Array.isArray(data.studyStats?.testHistory) 
                        ? data.studyStats.testHistory : []
                },
                darkMode: Boolean(data.darkMode),
                accent: data.accent || 'auto'
            };
            
            return { success: true, data: validatedData };
        } catch (error) {
            console.error('加载数据失败:', error);
            return { 
                success: false, 
                error: '加载数据失败',
                data: null
            };
        }
    },
    
    // 清除存储
    clear() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            return { success: true };
        } catch (error) {
            console.error('清除数据失败:', error);
            return { success: false, error: error.message };
        }
    },
    
    // 导出数据（用于备份）
    export() {
        const result = this.load();
        if (result.success && result.data) {
            return JSON.stringify(result.data, null, 2);
        }
        return null;
    },
    
    // 导入数据
    import(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            return { success: true };
        } catch (error) {
            console.error('导入数据失败:', error);
            return { success: false, error: '数据格式无效' };
        }
    },
    
    // 获取存储使用情况
    getUsage() {
        try {
            let totalSize = 0;
            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    totalSize += localStorage[key].length * 2; // UTF-16 编码
                }
            }
            return {
                used: totalSize,
                usedMB: (totalSize / 1024 / 1024).toFixed(2)
            };
        } catch (error) {
            return { used: 0, usedMB: '0.00' };
        }
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageManager;
}
