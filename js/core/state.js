// 核心状态管理模块
// 使用 Proxy 实现响应式状态

const StateManager = {
    state: null,
    listeners: new Map(),
    
    // 初始化状态
    init() {
        const initialState = {
            currentVersion: 'pep',
            currentGrade: 3,
            currentSemester: 1,
            currentUnit: 0,
            currentMode: 'words',
            currentWordIndex: 0,
            currentTextIndex: 0,
            voices: [],
            
            // 学习数据
            favorites: [],
            studyStats: {
                studyTime: 0,
                wordsLearned: 0,
                dictationHistory: [],
                testHistory: []
            },
            
            // 测试状态
            testScore: 0,
            currentQuestion: 1,
            currentTestWord: null,
            
            // 听写状态
            dictationIndex: 0,
            dictationWords: [],
            dictationResults: [],
            
            // 夜间模式
            darkMode: false,
            
            // 语音偏好
            accent: 'auto',
            
            // 拼写练习状态
            spellingIndex: 0,
            spellingWords: [],
            spellingResults: [],
            
            // 连读状态
            isPlayingAll: false
        };
        
        this.state = this.createReactiveState(initialState);
        return this.state;
    },
    
    // 创建响应式状态
    createReactiveState(initialState) {
        const self = this;
        
        return new Proxy(initialState, {
            set(target, key, value) {
                const oldValue = target[key];
                target[key] = value;
                
                if (oldValue !== value) {
                    self.notify(key, value, oldValue);
                }
                
                return true;
            }
        });
    },
    
    // 订阅状态变化
    subscribe(key, callback) {
        if (!this.listeners.has(key)) {
            this.listeners.set(key, new Set());
        }
        this.listeners.get(key).add(callback);
        
        // 返回取消订阅函数
        return () => {
            this.listeners.get(key).delete(callback);
        };
    },
    
    // 通知监听器
    notify(key, newValue, oldValue) {
        const callbacks = this.listeners.get(key);
        if (callbacks) {
            callbacks.forEach(callback => {
                try {
                    callback(newValue, oldValue, key);
                } catch (error) {
                    console.error(`状态监听回调错误 [${key}]:`, error);
                }
            });
        }
    },
    
    // 获取状态
    get(key) {
        return key ? this.state[key] : this.state;
    },
    
    // 设置状态
    set(key, value) {
        if (typeof key === 'object') {
            Object.assign(this.state, key);
        } else {
            this.state[key] = value;
        }
    },
    
    // 批量更新
    batchUpdate(updates) {
        Object.entries(updates).forEach(([key, value]) => {
            this.state[key] = value;
        });
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StateManager;
}
