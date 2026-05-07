// 语音合成工具模块

const SpeechManager = {
    synth: window.speechSynthesis,
    voices: [],
    currentUtterance: null,
    isPlaying: false,
    
    /**
     * 初始化语音合成
     */
    init() {
        if (!this.synth) {
            console.warn('当前浏览器不支持语音合成');
            return false;
        }
        
        this.loadVoices();
        
        // Chrome 需要等待 voicesloaded 事件
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => this.loadVoices();
        }
        
        return true;
    },
    
    /**
     * 加载可用语音
     */
    loadVoices() {
        this.voices = this.synth.getVoices();
        console.log(`加载了 ${this.voices.length} 个语音`);
    },
    
    /**
     * 获取最佳语音
     * @param {string} accent - 语音偏好 ('uk', 'us', 'auto')
     * @returns {SpeechSynthesisVoice|null}
     */
    getBestVoice(accent = 'auto') {
        if (this.voices.length === 0) {
            this.loadVoices();
        }
        
        // 优先选择英语语音
        let preferredVoices = this.voices.filter(v => v.lang.startsWith('en'));
        
        if (preferredVoices.length === 0) {
            return this.voices[0] || null;
        }
        
        // 根据偏好选择
        if (accent === 'uk') {
            const ukVoice = preferredVoices.find(v => 
                v.lang.includes('GB') || v.name.includes('UK') || v.name.includes('British')
            );
            if (ukVoice) return ukVoice;
        } else if (accent === 'us') {
            const usVoice = preferredVoices.find(v => 
                v.lang.includes('US') || v.name.includes('US') || v.name.includes('American')
            );
            if (usVoice) return usVoice;
        }
        
        return preferredVoices[0];
    },
    
    /**
     * 朗读文本
     * @param {string} text - 要朗读的文本
     * @param {Object} options - 选项
     * @returns {Promise}
     */
    speak(text, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this.synth) {
                reject(new Error('语音合成不可用'));
                return;
            }
            
            // 停止当前播放
            this.stop();
            
            const utterance = new SpeechSynthesisUtterance(text);
            // 优先使用传入的 voice，否则根据 accent 自动选择
            const voice = options.voice || this.getBestVoice(options.accent);
            
            if (voice) {
                utterance.voice = voice;
            }
            
            utterance.rate = options.rate || 0.8;
            utterance.pitch = options.pitch || 1;
            utterance.volume = options.volume || 1;
            
            utterance.onstart = () => {
                this.isPlaying = true;
                this.currentUtterance = utterance;
                if (options.onStart) options.onStart();
            };
            
            utterance.onend = () => {
                this.isPlaying = false;
                this.currentUtterance = null;
                if (options.onEnd) options.onEnd();
                resolve();
            };
            
            utterance.onerror = (event) => {
                this.isPlaying = false;
                this.currentUtterance = null;
                // interrupted/canceled 是正常的停止行为，不应报错
                if (event.error === 'interrupted' || event.error === 'canceled') {
                    resolve();
                    return;
                }
                console.error('语音合成错误:', event);
                if (options.onError) options.onError(event);
                reject(event);
            };
            
            this.synth.speak(utterance);
        });
    },
    
    /**
     * 停止朗读
     */
    stop() {
        if (this.synth) {
            this.synth.cancel();
        }
        this.isPlaying = false;
        this.currentUtterance = null;
    },
    
    /**
     * 暂停朗读
     */
    pause() {
        if (this.synth) {
            this.synth.pause();
        }
    },
    
    /**
     * 恢复朗读
     */
    resume() {
        if (this.synth) {
            this.synth.resume();
        }
    },
    
    /**
     * 朗读单词（带拼写）
     * @param {string} word - 单词
     * @param {Object} options - 选项
     */
    async speakWord(word, options = {}) {
        // 先朗读单词
        await this.speak(word, options);
        
        // 如果需要拼写
        if (options.spell) {
            await new Promise(resolve => setTimeout(resolve, 500));
            const spelling = word.split('').join(', ');
            await this.speak(spelling, { ...options, rate: 0.6 });
        }
    },
    
    /**
     * 连续朗读多个文本
     * @param {Array} texts - 文本数组
     * @param {Object} options - 选项
     */
    async speakAll(texts, options = {}) {
        for (let i = 0; i < texts.length; i++) {
            if (options.onProgress) {
                options.onProgress(i, texts.length);
            }
            
            // 使用 speak 但跳过 stop 调用，避免取消前一个语音
            await this._speakWithoutStop(texts[i], options);
            
            // 文本间暂停
            if (i < texts.length - 1) {
                await new Promise(resolve => 
                    setTimeout(resolve, options.pauseBetween || 1000)
                );
            }
        }
    },
    
    /**
     * 朗读文本（不停止当前播放，内部使用）
     * @param {string} text - 要朗读的文本
     * @param {Object} options - 选项
     * @returns {Promise}
     */
    _speakWithoutStop(text, options = {}) {
        return new Promise((resolve, reject) => {
            if (!this.synth) {
                reject(new Error('语音合成不可用'));
                return;
            }
            
            const utterance = new SpeechSynthesisUtterance(text);
            const voice = options.voice || this.getBestVoice(options.accent);
            
            if (voice) {
                utterance.voice = voice;
            }
            
            utterance.rate = options.rate || 0.8;
            utterance.pitch = options.pitch || 1;
            utterance.volume = options.volume || 1;
            
            utterance.onstart = () => {
                this.isPlaying = true;
                this.currentUtterance = utterance;
                if (options.onStart) options.onStart();
            };
            
            utterance.onend = () => {
                this.isPlaying = false;
                this.currentUtterance = null;
                if (options.onEnd) options.onEnd();
                resolve();
            };
            
            utterance.onerror = (event) => {
                this.isPlaying = false;
                this.currentUtterance = null;
                // interrupted 错误是正常的停止行为，不应报错
                if (event.error === 'interrupted' || event.error === 'canceled') {
                    resolve();
                    return;
                }
                console.error('语音合成错误:', event);
                if (options.onError) options.onError(event);
                reject(event);
            };
            
            this.synth.speak(utterance);
        });
    },
    
    /**
     * 检查是否正在播放
     * @returns {boolean}
     */
    isSpeaking() {
        return this.isPlaying;
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpeechManager;
}
