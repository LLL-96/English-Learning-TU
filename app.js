// 小学英语同步学习平台 - 主应用逻辑
// 支持单元学习、收藏、听写、测试、统计等功能

// ==================== 全局状态 ====================
const state = {
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

let synth = window.speechSynthesis;
let studyTimer = null;

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', init);

function init() {
    loadVoices();
    loadFromStorage();
    setupEventListeners();
    updateVersionDisplay();
    updateGradeButtons();
    updateUnitNav();
    updateWordDisplay();
    startStudyTimer();
}

// ==================== 数据获取 ====================
function getCurrentData() {
    switch (state.currentVersion) {
        case 'pep':
            return typeof pepData !== 'undefined' ? pepData : null;
        case 'waiyan':
            return typeof waiyanData !== 'undefined' ? waiyanData : null;
        case 'general':
            return typeof generalData !== 'undefined' ? generalData : null;
        default:
            return null;
    }
}

function getCurrentGradeData() {
    const versionData = getCurrentData();
    if (!versionData || !versionData.grades) return null;

    // 根据学期选择返回对应的数据
    const gradeKey = state.currentSemester === 2 
        ? `${state.currentGrade}-2`  // 下册
        : state.currentGrade;         // 上册
    const gradeData = versionData.grades[gradeKey];
    if (!gradeData) return null;

    // 统一数据结构（按单元组织）
    if (gradeData.units) {
        return gradeData;
    }

    // 兼容旧版本：如果没有 units，返回 null
    console.warn('该年级数据未按单元组织');
    return null;
}

function getCurrentUnitData() {
    const gradeData = getCurrentGradeData();
    if (!gradeData || !gradeData.units) return null;
    
    return gradeData.units[state.currentUnit] || null;
}

function getAllWords() {
    const gradeData = getCurrentGradeData();
    if (!gradeData || !gradeData.units) return [];

    // 统一结构：合并所有单元的单词
    return gradeData.units.flatMap(unit =>
        (unit.words || []).map(word => ({...word, unit: unit.unitName}))
    );
}

function getCurrentUnitWords() {
    const unitData = getCurrentUnitData();
    return unitData ? (unitData.words || []) : [];
}

function getCurrentUnitTexts() {
    const unitData = getCurrentUnitData();
    return unitData ? (unitData.texts || []) : [];
}

// ==================== 事件监听 ====================
function setupEventListeners() {
    // 版本选择
    document.getElementById('version-select').addEventListener('change', function() {
        state.currentVersion = this.value;
        state.currentGrade = this.value === 'pep' ? 3 : (this.value === 'waiyan' ? 1 : 1);
        state.currentUnit = 0;
        state.currentWordIndex = 0;
        saveToStorage();
        updateVersionDisplay();
        updateGradeButtons();
        updateUnitNav();
        updateWordDisplay();
    });

    // 年级选择
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.currentGrade = parseInt(this.dataset.grade);
            state.currentUnit = 0;
            state.currentWordIndex = 0;
            saveToStorage();
            updateUnitNav();
            updateWordDisplay();
        });
    });

    // 学期选择
    document.querySelectorAll('.semester-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.semester-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.currentSemester = parseInt(this.dataset.semester);
            state.currentUnit = 0;
            state.currentWordIndex = 0;
            updateUnitNav();
            updateWordDisplay();
        });
    });

    // 单元选择
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('unit-btn')) {
            document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            state.currentUnit = parseInt(e.target.dataset.unit);
            state.currentWordIndex = 0;
            updateWordDisplay();
            updateUnitProgress();
        }
    });

    // 模式选择
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const mode = this.dataset.mode;
            switchMode(mode);
        });
    });

    // 课文选择
    const textSelect = document.getElementById('text-select');
    if (textSelect) {
        textSelect.addEventListener('change', function() {
            state.currentTextIndex = parseInt(this.value);
            updateTextDisplay();
        });
    }

    // 朗读速度
    const rateInput = document.getElementById('rate');
    const rateValue = document.getElementById('rate-value');
    if (rateInput && rateValue) {
        rateInput.addEventListener('input', function() {
            rateValue.textContent = this.value;
        });
    }

    // 语音类型选择
    const accentSelect = document.getElementById('accent-select');
    if (accentSelect) {
        accentSelect.addEventListener('change', function() {
            state.accent = this.value;
            localStorage.setItem('englishCS-accent', this.value);
            loadVoices(); // 重新加载语音列表
        });
    }

    // 夜间模式
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }

    // 收藏按钮
    const favoritesBtn = document.getElementById('favorites-btn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', () => switchMode('favorites'));
    }

    // 统计按钮
    const statsBtn = document.getElementById('stats-btn');
    if (statsBtn) {
        statsBtn.addEventListener('click', () => switchMode('stats'));
    }

    // 听写输入
    const dictationInput = document.getElementById('dictation-input');
    if (dictationInput) {
        dictationInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkDictationAnswer();
            }
        });
    }
}

// ==================== 界面更新 ====================
function updateVersionDisplay() {
    const versionData = getCurrentData();
    const versionDesc = document.getElementById('version-desc');

    if (versionDesc && versionData && versionData.description) {
        versionDesc.textContent = versionData.description;
    }

    // 根据版本数据显示学期选择器
    const semesterSelector = document.getElementById('semester-selector');
    if (semesterSelector) {
        // 人教版 PEP 有上下册，外研社版和通用大纲版暂时只有上册
        if (state.currentVersion === 'pep') {
            semesterSelector.style.display = 'flex';
        } else {
            // 外研社版和通用大纲版暂时隐藏下册按钮
            semesterSelector.style.display = 'flex';
            const semesterBtns = semesterSelector.querySelectorAll('.semester-btn');
            semesterBtns.forEach(btn => {
                if (btn.dataset.semester === '2') {
                    btn.style.display = 'none';
                }
            });
            // 确保上册被选中
            state.currentSemester = 1;
            semesterBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.semester === '1');
            });
        }
    }
}

function updateGradeButtons() {
    const versionData = getCurrentData();
    const startGrade = versionData ? (versionData.startGrade || 1) : 1;
    const buttons = document.querySelectorAll('.grade-btn');

    buttons.forEach(btn => {
        const grade = parseInt(btn.dataset.grade);
        if (grade >= startGrade) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
            btn.classList.remove('active');
        }
    });

    // 如果当前年级不在有效范围内，切换到起始年级
    if (state.currentGrade < startGrade) {
        state.currentGrade = startGrade;
    }
    
    // 确保当前年级的按钮被激活
    buttons.forEach(btn => {
        const grade = parseInt(btn.dataset.grade);
        if (grade === state.currentGrade) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateUnitNav() {
    const gradeData = getCurrentGradeData();
    const unitButtons = document.getElementById('unit-buttons');
    
    if (!unitButtons) return;
    
    unitButtons.innerHTML = '';
    
    if (!gradeData || !gradeData.units) {
        unitButtons.innerHTML = '<p class="empty-hint">该年级暂无单元数据</p>';
        return;
    }
    
    gradeData.units.forEach((unit, index) => {
        const btn = document.createElement('button');
        btn.className = `unit-btn ${index === state.currentUnit ? 'active' : ''}`;
        btn.dataset.unit = index;
        
        const wordCount = unit.words ? unit.words.length : 0;
        const learnedCount = getLearnedCount(index);
        
        btn.innerHTML = `
            ${unit.unitName}
            <span class="unit-status">${learnedCount}/${wordCount} 词</span>
        `;
        
        unitButtons.appendChild(btn);
    });
    
    updateCurrentUnitName();
}

function updateCurrentUnitName() {
    const unitData = getCurrentUnitData();
    const nameEl = document.getElementById('current-unit-name');
    if (nameEl && unitData) {
        nameEl.textContent = unitData.unitName;
    }
}

function switchMode(mode) {
    state.currentMode = mode;
    
    // 更新按钮状态
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    
    // 隐藏所有内容区
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // 显示目标内容区
    const targetSection = document.getElementById(mode + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
        setTimeout(() => targetSection.classList.add('active'), 10);
    }
    
    // 初始化特定模式
    switch(mode) {
        case 'words':
            updateWordDisplay();
            break;
        case 'texts':
            updateTextDisplay();
            break;
        case 'dictation':
            initDictation();
            break;
        case 'test':
            initTest();
            break;
        case 'spelling':
            initSpelling();
            break;
        case 'tags':
            renderTagsList();
            break;
        case 'favorites':
            renderFavorites();
            break;
        case 'stats':
            updateStats();
            break;
    }
}

// ==================== 单词学习 ====================
function updateWordDisplay() {
    const words = getCurrentUnitWords();
    
    if (words.length === 0) {
        return;
    }
    
    if (state.currentWordIndex >= words.length) {
        state.currentWordIndex = 0;
    }
    
    const word = words[state.currentWordIndex];
    
    // 更新显示
    const elements = {
        word: document.querySelector('.english-word'),
        phonetic: document.querySelector('.phonetic'),
        meaning: document.querySelector('.chinese-meaning'),
        sentenceEn: document.querySelector('.sentence-en'),
        sentenceCn: document.querySelector('.sentence-cn'),
        tags: document.querySelector('.word-tags'),
        progressFill: document.querySelector('.progress-fill'),
        progressText: document.querySelector('.progress-text'),
        wordIndex: document.querySelector('.word-index')
    };
    
    if (elements.word) elements.word.textContent = word.word;
    if (elements.phonetic) elements.phonetic.textContent = word.phonetic;
    if (elements.meaning) elements.meaning.textContent = word.meaning;
    if (elements.sentenceEn) elements.sentenceEn.textContent = word.example;
    if (elements.sentenceCn) elements.sentenceCn.textContent = word.exampleCn;
    if (elements.wordIndex) elements.wordIndex.textContent = state.currentWordIndex + 1;
    
    // 隐藏例句
    const exampleSection = document.querySelector('.example-sentence');
    if (exampleSection) {
        exampleSection.style.display = 'none';
    }
    
    // 显示标签
    if (elements.tags && word.tags) {
        elements.tags.innerHTML = word.tags.map(tag => 
            `<span class="word-tag">${tag}</span>`
        ).join('');
    } else if (elements.tags) {
        elements.tags.innerHTML = '';
    }
    
    // 更新进度
    if (elements.progressFill && elements.progressText) {
        const progress = ((state.currentWordIndex + 1) / words.length) * 100;
        elements.progressFill.style.width = progress + '%';
        elements.progressText.textContent = `${state.currentWordIndex + 1} / ${words.length}`;
    }
    
    // 更新收藏按钮状态
    updateFavoriteButton();
    
    // 更新列表视图
    updateWordListView();
    
    // 更新单元进度
    updateUnitProgress();
}

function updateWordListView() {
    const words = getCurrentUnitWords();
    const tbody = document.getElementById('word-table-body');
    
    if (!tbody) return;
    
    tbody.innerHTML = words.map((word, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${word.word}</strong></td>
            <td>${word.phonetic}</td>
            <td>${word.meaning}</td>
            <td>${word.tags ? word.tags.map(t => `<span class="word-tag">${t}</span>`).join('') : ''}</td>
            <td class="word-table-actions">
                <button class="btn-table-action btn-speak-sm" onclick="speakWordAt(${index})">🔊</button>
                <button class="btn-table-action btn-fav-sm" onclick="toggleFavoriteAt(${index})">⭐</button>
            </td>
        </tr>
    `).join('');
}

function toggleWordList() {
    const cardView = document.getElementById('word-card-view');
    const listView = document.getElementById('word-list-view');
    
    if (cardView.style.display === 'none') {
        cardView.style.display = 'block';
        listView.style.display = 'none';
    } else {
        cardView.style.display = 'none';
        listView.style.display = 'block';
    }
}

function speakWordAt(index) {
    const words = getCurrentUnitWords();
    if (words[index]) {
        speak(words[index].word);
    }
}

// ==================== 单词操作 ====================
function speakWord() {
    const words = getCurrentUnitWords();
    if (words[state.currentWordIndex]) {
        speak(words[state.currentWordIndex].word);
        markWordAsLearned();
    }
}

function speakSentence() {
    const words = getCurrentUnitWords();
    if (words[state.currentWordIndex]) {
        speak(words[state.currentWordIndex].example);
    }
}

function showExample() {
    const exampleSection = document.querySelector('.example-sentence');
    if (exampleSection) {
        exampleSection.style.display = exampleSection.style.display === 'none' ? 'block' : 'none';
    }
}

function prevWord() {
    const words = getCurrentUnitWords();
    if (state.currentWordIndex > 0) {
        state.currentWordIndex--;
        updateWordDisplay();
    }
}

function nextWord() {
    const words = getCurrentUnitWords();
    if (state.currentWordIndex < words.length - 1) {
        state.currentWordIndex++;
        updateWordDisplay();
        markWordAsLearned();
    }
}

function playAllWords() {
    // 如果正在连读，则停止
    if (state.isPlayingAll) {
        stopPlayAll();
        return;
    }

    const words = getCurrentUnitWords();
    let index = 0;
    state.isPlayingAll = true;

    // 更新按钮文本
    updatePlayAllButton(true);

    function playNext() {
        if (!state.isPlayingAll || index >= words.length) {
            state.isPlayingAll = false;
            updatePlayAllButton(false);
            return;
        }
        
        speak(words[index].word);
        index++;
        setTimeout(playNext, 1500);
    }

    playNext();
}

function stopPlayAll() {
    state.isPlayingAll = false;
    synth.cancel();
    updatePlayAllButton(false);
}

function updatePlayAllButton(isPlaying) {
    const buttons = document.querySelectorAll('.word-list-actions .btn-action');
    buttons.forEach(btn => {
        if (btn.textContent.includes('连读')) {
            if (isPlaying) {
                btn.textContent = '⏹️ 停止连读';
                btn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
            } else {
                btn.textContent = '🔊 连读全部';
                btn.style.background = '';
            }
        }
    });
}

// ==================== 收藏功能 ====================
function getWordKey(word) {
    return `${state.currentVersion}-${state.currentGrade}-${state.currentUnit}-${word.word}`;
}

function toggleFavorite() {
    const words = getCurrentUnitWords();
    if (words[state.currentWordIndex]) {
        toggleFavoriteAt(state.currentWordIndex);
    }
}

function toggleFavoriteAt(index) {
    const words = getCurrentUnitWords();
    const word = words[index];
    if (!word) return;
    
    const key = getWordKey(word);
    const favIndex = state.favorites.findIndex(f => f.key === key);
    
    if (favIndex > -1) {
        state.favorites.splice(favIndex, 1);
    } else {
        state.favorites.push({
            key: key,
            word: word.word,
            phonetic: word.phonetic,
            meaning: word.meaning,
            example: word.example,
            exampleCn: word.exampleCn,
            tags: word.tags,
            unit: getCurrentUnitData()?.unitName,
            addedAt: Date.now()
        });
    }
    
    saveToStorage();
    updateFavoriteButton();
    
    if (state.currentMode === 'favorites') {
        renderFavorites();
    }
}

function updateFavoriteButton() {
    const btn = document.querySelector('.btn-favorite');
    if (!btn) return;

    const words = getCurrentUnitWords();
    const word = words[state.currentWordIndex];
    if (!word) return;

    const key = getWordKey(word);
    const isFavorite = state.favorites.some(f => f.key === key);
    btn.textContent = isFavorite ? '★' : '☆';
    
    // 添加/移除 active 类以触发 CSS 动画
    if (isFavorite) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}

function renderFavorites() {
    const container = document.getElementById('favorites-list');
    if (!container) return;
    
    if (state.favorites.length === 0) {
        container.innerHTML = '<p class="empty-hint">暂无收藏单词</p>';
        return;
    }
    
    container.innerHTML = state.favorites.map(fav => `
        <div class="favorite-item">
            <div>
                <div class="favorite-word">${fav.word}</div>
                <div class="favorite-meaning">${fav.meaning}</div>
                <div style="font-size:0.8em;color:#999;">${fav.unit || ''}</div>
            </div>
            <button class="btn-remove-fav" onclick="removeFavorite('${fav.key}')">✕</button>
        </div>
    `).join('');
}

function removeFavorite(key) {
    state.favorites = state.favorites.filter(f => f.key !== key);
    saveToStorage();
    renderFavorites();
}

// ==================== 课文朗读 ====================
function updateTextDisplay() {
    const texts = getCurrentUnitTexts();
    const textSelect = document.getElementById('text-select');
    
    if (!textSelect) return;
    
    // 更新选择器
    textSelect.innerHTML = '';
    texts.forEach((text, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${text.lesson} - ${text.title}`;
        textSelect.appendChild(option);
    });
    
    if (texts.length === 0) {
        return;
    }
    
    if (state.currentTextIndex >= texts.length) {
        state.currentTextIndex = 0;
    }
    
    textSelect.value = state.currentTextIndex;
    
    // 显示课文
    const text = texts[state.currentTextIndex];
    const textTitle = document.getElementById('text-title');
    const textBody = document.getElementById('text-body');
    
    if (textTitle) textTitle.textContent = `${text.lesson} - ${text.title}`;
    
    if (textBody) {
        textBody.innerHTML = '';
        text.content.forEach((line, index) => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'text-line';
            lineDiv.innerHTML = `
                <span class="text-en">${line.en}</span>
                <span class="text-cn">${line.cn}</span>
                <button class="btn-speak-line" onclick="speakTextLine(${index})">🔊</button>
            `;
            textBody.appendChild(lineDiv);
        });
    }
}

function speakTextLine(index) {
    const texts = getCurrentUnitTexts();
    if (texts[state.currentTextIndex] && texts[state.currentTextIndex].content[index]) {
        speak(texts[state.currentTextIndex].content[index].en);
    }
}

function speakFullText() {
    const texts = getCurrentUnitTexts();
    if (texts[state.currentTextIndex]) {
        const text = texts[state.currentTextIndex];
        const fullText = text.content.map(line => line.en).join('. ');
        speak(fullText);
    }
}

function printText() {
    window.print();
}

function printWordList() {
    window.print();
}

// ==================== 语音合成 ====================
function loadVoices() {
    const voiceSelect = document.getElementById('voice-select');
    const accentSelect = document.getElementById('accent-select');

    if (!voiceSelect || !accentSelect) return;

    // 先设置回调，再获取语音（Chrome 异步加载）
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = loadVoices;
    }

    state.voices = synth.getVoices();
    
    // 如果没有语音，等待加载
    if (state.voices.length === 0) return;

    // 加载保存的语音偏好
    const savedAccent = localStorage.getItem('englishCS-accent');
    if (savedAccent) {
        state.accent = savedAccent;
        accentSelect.value = savedAccent;
    }

    // 清空并重新填充语音列表
    voiceSelect.innerHTML = '<option value="">默认语音</option>';

    // 根据选择的语音类型过滤
    const selectedAccent = accentSelect.value || 'auto';
    let filteredVoices = state.voices;

    if (selectedAccent !== 'auto') {
        filteredVoices = state.voices.filter(v => v.lang && v.lang.startsWith(selectedAccent));
    } else {
        // 自动选择：优先显示英语语音
        filteredVoices = state.voices.filter(v => v.lang && v.lang.startsWith('en'));
    }

    filteredVoices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = state.voices.indexOf(voice);
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

// 获取选择的语音
function getSelectedVoice() {
    const voiceSelect = document.getElementById('voice-select');
    const voiceIndex = voiceSelect ? voiceSelect.value : '';
    
    // 优先使用用户选择的语音
    if (voiceIndex !== '' && state.voices[voiceIndex]) {
        return state.voices[voiceIndex];
    }
    
    // 根据语音偏好选择语音
    return state.voices.find(v => {
        if (state.accent === 'en-US') {
            return v.lang && v.lang.startsWith('en-US');
        } else if (state.accent === 'en-GB') {
            return v.lang && v.lang.startsWith('en-GB');
        } else {
            // 自动选择：任意英语语音
            return v.lang && v.lang.startsWith('en');
        }
    });
}

function speak(text) {
    if (synth.speaking) {
        synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const rateInput = document.getElementById('rate');

    utterance.rate = rateInput ? parseFloat(rateInput.value) : 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    // 使用公共函数获取语音
    const voice = getSelectedVoice();
    if (voice) {
        utterance.voice = voice;
    }

    synth.speak(utterance);
}

// ==================== 单词听写 ====================
function initDictation() {
    const words = getCurrentUnitWords();
    state.dictationWords = [...words].sort(() => Math.random() - 0.5);
    state.dictationIndex = 0;
    state.dictationResults = [];
    
    const dictationTotal = document.getElementById('dictation-total');
    if (dictationTotal) {
        dictationTotal.textContent = Math.min(10, state.dictationWords.length);
    }
    
    const dictationResult = document.getElementById('dictation-result');
    const dictationArea = document.querySelector('.dictation-area');
    if (dictationResult) dictationResult.style.display = 'none';
    if (dictationArea) dictationArea.style.display = 'block';
}

function startDictation() {
    initDictation();
    const dictationNum = document.getElementById('dictation-num');
    if (dictationNum) dictationNum.textContent = '1';
    
    const dictationInput = document.getElementById('dictation-input');
    if (dictationInput) {
        dictationInput.value = '';
        dictationInput.disabled = false;
        dictationInput.focus();
    }
    
    const dictationFeedback = document.getElementById('dictation-feedback');
    if (dictationFeedback) {
        dictationFeedback.textContent = '';
        dictationFeedback.className = 'dictation-feedback';
    }
    
    const dictationAnswer = document.getElementById('dictation-answer');
    if (dictationAnswer) dictationAnswer.style.display = 'none';
    
    // 自动播放第一个单词
    setTimeout(() => playDictationWord(), 500);
}

function playDictationWord() {
    if (state.dictationIndex >= state.dictationWords.length) {
        showDictationResult();
        return;
    }
    
    const word = state.dictationWords[state.dictationIndex];
    speak(word.word);
    
    const dictationNum = document.getElementById('dictation-num');
    if (dictationNum) {
        dictationNum.textContent = state.dictationIndex + 1;
    }
}

function checkDictationAnswer() {
    const dictationInput = document.getElementById('dictation-input');
    const dictationFeedback = document.getElementById('dictation-feedback');
    const dictationAnswer = document.getElementById('dictation-answer');
    
    if (!dictationInput || !dictationFeedback) return;
    
    const userAnswer = dictationInput.value.trim().toLowerCase();
    const correctWord = state.dictationWords[state.dictationIndex];
    
    if (!correctWord) return;
    
    const isCorrect = userAnswer === correctWord.word.toLowerCase();
    state.dictationResults.push(isCorrect);
    
    if (isCorrect) {
        dictationFeedback.textContent = '✅ 正确！';
        dictationFeedback.className = 'dictation-feedback correct';
    } else {
        dictationFeedback.textContent = '❌ 错误';
        dictationFeedback.className = 'dictation-feedback wrong';
        if (dictationAnswer) {
            dictationAnswer.textContent = `正确答案：${correctWord.word}`;
            dictationAnswer.style.display = 'block';
        }
    }
    
    dictationInput.disabled = true;
    
    // 自动进入下一个
    setTimeout(() => {
        state.dictationIndex++;
        
        if (state.dictationIndex >= state.dictationWords.length || 
            state.dictationIndex >= 10) {
            showDictationResult();
        } else {
            dictationInput.value = '';
            dictationInput.disabled = false;
            dictationInput.focus();
            dictationFeedback.textContent = '';
            if (dictationAnswer) dictationAnswer.style.display = 'none';
            playDictationWord();
        }
    }, 1500);
}

function showDictationAnswer() {
    const dictationAnswer = document.getElementById('dictation-answer');
    const correctWord = state.dictationWords[state.dictationIndex];

    if (dictationAnswer && correctWord) {
        dictationAnswer.textContent = `答案：${correctWord.word} ${correctWord.phonetic}`;
        dictationAnswer.style.display = 'block';
    }
}

function skipDictationWord() {
    if (state.dictationIndex >= state.dictationWords.length) {
        return;
    }

    const dictationInput = document.getElementById('dictation-input');
    const dictationFeedback = document.getElementById('dictation-feedback');
    const dictationAnswer = document.getElementById('dictation-answer');

    // 标记为跳过（不算正确也不算错误）
    state.dictationResults.push(null);

    if (dictationFeedback) {
        dictationFeedback.textContent = '⏭️ 已跳过';
        dictationFeedback.className = 'dictation-feedback';
    }

    if (dictationInput) {
        dictationInput.value = '';
        dictationInput.disabled = true;
    }

    // 进入下一个
    setTimeout(() => {
        state.dictationIndex++;

        if (state.dictationIndex >= state.dictationWords.length ||
            state.dictationIndex >= 10) {
            showDictationResult();
        } else {
            if (dictationInput) {
                dictationInput.value = '';
                dictationInput.disabled = false;
                dictationInput.focus();
            }
            if (dictationFeedback) dictationFeedback.textContent = '';
            if (dictationAnswer) dictationAnswer.style.display = 'none';
            playDictationWord();
        }
    }, 1000);
}

function showDictationResult() {
    const dictationArea = document.querySelector('.dictation-area');
    const dictationResult = document.getElementById('dictation-result');
    
    if (dictationArea) dictationArea.style.display = 'none';
    if (dictationResult) dictationResult.style.display = 'block';
    
    const correctCount = state.dictationResults.filter(r => r).length;
    const totalCount = state.dictationResults.length;
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    
    document.getElementById('dictation-accuracy').textContent = accuracy + '%';
    document.getElementById('dictation-correct').textContent = correctCount;
    document.getElementById('dictation-all').textContent = totalCount;
    
    // 保存听写记录
    state.studyStats.dictationHistory.push({
        date: Date.now(),
        accuracy: accuracy,
        correct: correctCount,
        total: totalCount
    });
    
    saveToStorage();
}

// ==================== 单元测试 ====================
function initTest() {
    state.testScore = 0;
    state.currentQuestion = 1;
    
    const scoreEl = document.getElementById('score');
    const questionNumEl = document.getElementById('question-num');
    const resultDiv = document.getElementById('test-result');
    const finalResult = document.getElementById('test-final-result');
    
    if (scoreEl) scoreEl.textContent = '0';
    if (questionNumEl) questionNumEl.textContent = '1';
    if (resultDiv) resultDiv.style.display = 'none';
    if (finalResult) finalResult.style.display = 'none';
    
    generateQuestion();
}

function generateQuestion() {
    const words = getCurrentUnitWords();

    if (words.length < 4) {
        const optionsContainer = document.getElementById('test-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = '<p style="text-align:center;color:#999;">单词数量不足，无法生成测试题（至少需要 4 个单词）</p>';
        }
        return;
    }

    // 随机选择一个单词作为正确答案
    const correctIndex = Math.floor(Math.random() * words.length);
    state.currentTestWord = words[correctIndex];

    // 生成 3 个错误选项
    const options = [state.currentTestWord];
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        if (!options.find(o => o.meaning === randomWord.meaning)) {
            options.push(randomWord);
        }
    }

    // 打乱选项顺序
    options.sort(() => Math.random() - 0.5);

    // 显示选项
    const optionsContainer = document.getElementById('test-options');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';

        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.meaning;
            btn.onclick = () => checkAnswer(option, state.currentTestWord);
            optionsContainer.appendChild(btn);
        });
    }

    const resultDiv = document.getElementById('test-result');
    if (resultDiv) {
        resultDiv.style.display = 'none';
    }
}

function playTestAudio() {
    if (state.currentTestWord) {
        speak(state.currentTestWord.word);
    }
}

function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.option-btn');
    const resultDiv = document.getElementById('test-result');
    const resultText = document.getElementById('result-text');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct.meaning) {
            btn.classList.add('correct');
        } else if (btn.textContent === selected.meaning && selected !== correct) {
            btn.classList.add('wrong');
        }
    });
    
    if (resultDiv && resultText) {
        resultDiv.style.display = 'block';

        if (selected.meaning === correct.meaning) {
            state.testScore++;
            const scoreEl = document.getElementById('score');
            if (scoreEl) scoreEl.textContent = state.testScore;
            resultDiv.className = 'test-result correct';
            resultText.textContent = '✅ 回答正确！';
        } else {
            resultDiv.className = 'test-result wrong';
            resultText.textContent = `❌ 回答错误！正确答案是：${correct.meaning}`;
        }
    }
}

function nextQuestion() {
    if (state.currentQuestion < 10 && state.currentQuestion < getCurrentUnitWords().length) {
        state.currentQuestion++;
        const questionNumEl = document.getElementById('question-num');
        if (questionNumEl) questionNumEl.textContent = state.currentQuestion;
        generateQuestion();
    } else {
        // 测试结束
        showTestFinalResult();
    }
}

function showTestFinalResult() {
    const testCard = document.querySelector('.test-card');
    const finalResult = document.getElementById('test-final-result');

    if (testCard) testCard.style.display = 'none';
    if (finalResult) {
        finalResult.style.display = 'block';

        // 计算百分制分数
        const totalQuestions = state.currentQuestion;
        const finalScore = Math.round((state.testScore / totalQuestions) * 100);
        
        document.getElementById('final-score').textContent = finalScore;

        let comment = '';
        if (finalScore >= 90) comment = '🎉 太棒了！';
        else if (finalScore >= 70) comment = '👍 不错哦！';
        else if (finalScore >= 60) comment = '💪 继续加油！';
        else comment = '📚 多多练习！';

        document.getElementById('final-comment').textContent = comment;
    }

    // 保存测试记录（使用百分制分数）
    const totalQuestions = state.currentQuestion;
    const finalScore = Math.round((state.testScore / totalQuestions) * 100);
    
    state.studyStats.testHistory.push({
        date: Date.now(),
        score: finalScore,
        unit: getCurrentUnitData()?.unitName
    });

    saveToStorage();
}

// ==================== 标签分类 ====================
function renderTagsList() {
    const words = getCurrentUnitWords();
    const tagsList = document.getElementById('tags-list');
    const taggedWords = document.getElementById('tagged-words');
    
    if (!tagsList) return;
    
    // 收集所有标签
    const allTags = new Set();
    words.forEach(word => {
        if (word.tags) {
            word.tags.forEach(tag => allTags.add(tag));
        }
    });
    
    // 显示标签按钮
    tagsList.innerHTML = Array.from(allTags).map(tag =>
        `<button class="tag-btn" data-tag="${tag}">${tag}</button>`
    ).join('');
    
    // 添加点击事件
    tagsList.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tag = this.dataset.tag;
            
            // 切换选中状态
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                taggedWords.innerHTML = '<p class="tag-hint">点击标签查看对应单词</p>';
            } else {
                tagsList.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderTaggedWords(tag);
            }
        });
    });
}

function renderTaggedWords(tag) {
    const words = getCurrentUnitWords();
    const taggedWords = document.getElementById('tagged-words');
    
    if (!taggedWords) return;
    
    const filteredWords = words.filter(word => word.tags && word.tags.includes(tag));
    
    if (filteredWords.length === 0) {
        taggedWords.innerHTML = '<p class="tag-hint">该标签下没有单词</p>';
        return;
    }
    
    taggedWords.innerHTML = `
        <h4 style="margin-bottom:15px;color:#667eea;">"${tag}" 标签下的单词 (${filteredWords.length}个)</h4>
        <div class="tagged-word-list">
            ${filteredWords.map((word, index) => `
                <div class="tagged-word-item" onclick="selectWord(${index})">
                    <div class="en">${word.word}</div>
                    <div class="cn">${word.meaning}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function selectWord(index) {
    state.currentWordIndex = index;
    switchMode('words');
    updateWordDisplay();
}

// ==================== 学习统计 ====================
function updateStats() {
    // 学习时长
    const minutes = Math.round(state.studyStats.studyTime / 60);
    document.getElementById('stat-study-time').textContent = `${minutes} 分钟`;
    
    // 已学单词
    document.getElementById('stat-words-learned').textContent = `${state.studyStats.wordsLearned} 词`;
    
    // 听写正确率
    const dictationHistory = state.studyStats.dictationHistory;
    if (dictationHistory.length > 0) {
        const avgAccuracy = Math.round(
            dictationHistory.reduce((sum, h) => sum + h.accuracy, 0) / dictationHistory.length
        );
        document.getElementById('stat-dictation-rate').textContent = `${avgAccuracy}%`;
    } else {
        document.getElementById('stat-dictation-rate').textContent = '0%';
    }
    
    // 测试平均分
    const testHistory = state.studyStats.testHistory;
    if (testHistory.length > 0) {
        const avgScore = Math.round(
            testHistory.reduce((sum, h) => sum + h.score, 0) / testHistory.length
        );
        document.getElementById('stat-test-avg').textContent = `${avgScore} 分`;
    } else {
        document.getElementById('stat-test-avg').textContent = '0 分';
    }
    
    // 学习进度图表
    updateProgressBars();
}

function updateProgressBars() {
    const container = document.getElementById('progress-bars');
    if (!container) return;

    const gradeData = getCurrentGradeData();
    if (!gradeData || !gradeData.units) {
        container.innerHTML = '<p class="empty-hint">暂无数据</p>';
        return;
    }

    container.innerHTML = gradeData.units.map((unit, index) => {
        const wordCount = unit.words ? unit.words.length : 0;
        const learnedCount = getLearnedCount(index);
        const percent = wordCount > 0 ? Math.round((learnedCount / wordCount) * 100) : 0;

        return `
            <div class="unit-progress-bar">
                <span class="unit-name">${unit.unitId}</span>
                <div class="progress-track">
                    <div class="progress-fill-sm" style="width: ${percent}%"></div>
                </div>
                <span class="progress-text-sm">${learnedCount}/${wordCount} (${percent}%)</span>
            </div>
        `;
    }).join('');
}

// ==================== 导出学习进度 ====================
function exportProgress() {
    const studyTime = Math.round(state.studyStats.studyTime / 60);
    const wordsLearned = state.studyStats.wordsLearned;

    // 听写统计
    const dictationHistory = state.studyStats.dictationHistory;
    const dictationRate = dictationHistory.length > 0 
        ? Math.round(dictationHistory.reduce((sum, h) => sum + h.accuracy, 0) / dictationHistory.length)
        : 0;

    // 测试统计
    const testHistory = state.studyStats.testHistory;
    const testAvg = testHistory.length > 0
        ? Math.round(testHistory.reduce((sum, h) => sum + h.score, 0) / testHistory.length)
        : 0;

    // 构建导出数据
    const exportData = {
        exportDate: new Date().toLocaleString('zh-CN'),
        appVersion: 'v2.0',
        studyStats: {
            studyTime: studyTime + ' 分钟',
            wordsLearned: wordsLearned + ' 词',
            dictationRate: dictationRate + '%',
            dictationAttempts: dictationHistory.length,
            testAverage: testAvg + ' 分',
            testCount: testHistory.length
        },
        currentProgress: {
            version: state.currentVersion,
            grade: state.currentGrade,
            semester: state.currentSemester === 1 ? '上册' : '下册',
            currentUnit: getCurrentUnitData()?.unitName || '未知'
        },
        favorites: state.favorites.map(f => ({
            word: f.word,
            meaning: f.meaning,
            unit: f.unit,
            addedAt: new Date(f.addedAt).toLocaleString('zh-CN')
        }))
    };

    // 转换为 JSON 字符串
    const jsonData = JSON.stringify(exportData, null, 2);

    // 创建下载链接
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `学习进度_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('✅ 学习进度已导出为 JSON 文件！');
}

// ==================== 单元进度 ====================
function updateUnitProgress() {
    const words = getCurrentUnitWords();
    const percentEl = document.getElementById('unit-progress-percent');
    const detailEl = document.getElementById('unit-progress-detail');
    const ringFill = document.querySelector('.progress-ring-fill');
    
    if (!percentEl || !detailEl) return;
    
    const learnedCount = getLearnedCount(state.currentUnit);
    const totalCount = words.length;
    const percent = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;
    
    percentEl.textContent = percent + '%';
    detailEl.textContent = `已学 ${learnedCount} / 共 ${totalCount} 词`;
    
    // 更新环形进度条
    if (ringFill) {
        const circumference = 2 * Math.PI * 36; // r=36
        const offset = circumference - (percent / 100) * circumference;
        ringFill.style.strokeDashoffset = offset;
    }
}

function getLearnedCount(unitIndex) {
    const key = `learned-${state.currentVersion}-${state.currentGrade}-${unitIndex}`;
    const learned = localStorage.getItem(key);
    return learned ? JSON.parse(learned).length : 0;
}

function markWordAsLearned() {
    const key = `learned-${state.currentVersion}-${state.currentGrade}-${state.currentUnit}`;
    let learned = localStorage.getItem(key);
    learned = learned ? JSON.parse(learned) : [];
    
    const words = getCurrentUnitWords();
    const word = words[state.currentWordIndex];
    
    if (word && !learned.includes(word.word)) {
        learned.push(word.word);
        localStorage.setItem(key, JSON.stringify(learned));
        state.studyStats.wordsLearned = learned.length;
    }
}

function resetStats() {
    if (confirm('确定要重置所有学习统计吗？')) {
        state.studyStats = {
            studyTime: 0,
            wordsLearned: 0,
            dictationHistory: [],
            testHistory: []
        };
        
        // 清除学习进度
        for (let i = 0; i < 10; i++) {
            localStorage.removeItem(`learned-${state.currentVersion}-${state.currentGrade}-${i}`);
        }
        
        saveToStorage();
        updateStats();
        alert('统计已重置！');
    }
}

// ==================== 夜间模式 ====================
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark-mode', state.darkMode);
    document.getElementById('theme-toggle').textContent = state.darkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', state.darkMode);
}

// ==================== 存储功能 ====================
function saveToStorage() {
    try {
        localStorage.setItem('englishLearningState', JSON.stringify({
            currentVersion: state.currentVersion,
            currentGrade: state.currentGrade,
            currentSemester: state.currentSemester,
            currentUnit: state.currentUnit,
            favorites: state.favorites,
            studyStats: state.studyStats,
            darkMode: state.darkMode,
            accent: state.accent
        }));
    } catch (e) {
        console.error('保存数据失败:', e);
        alert('⚠️ 保存数据失败，可能是存储空间已满');
    }
}

function loadFromStorage() {
    try {
        const saved = localStorage.getItem('englishLearningState');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                state.currentVersion = data.currentVersion || 'pep';
                // 根据版本设置正确的默认年级
                const defaultGrade = state.currentVersion === 'pep' ? 3 : 1;
                state.currentGrade = data.currentGrade || defaultGrade;
                state.currentSemester = data.currentSemester || 1;
                state.currentUnit = data.currentUnit || 0;
                state.favorites = data.favorites || [];
                state.studyStats = data.studyStats || {
                    studyTime: 0,
                    wordsLearned: 0,
                    dictationHistory: [],
                    testHistory: []
                };
                state.darkMode = data.darkMode || false;
                state.accent = data.accent || 'auto';
            } catch (e) {
                console.error('解析数据失败:', e);
            }
        }
    } catch (e) {
        console.error('加载数据失败:', e);
    }

    // 加载夜间模式
    if (state.darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '☀️';
    }
}

function resetProgress() {
    if (confirm('确定要重置学习进度吗？（收藏和统计将保留）')) {
        state.currentWordIndex = 0;
        state.currentTextIndex = 0;
        
        // 清除单元学习进度
        for (let i = 0; i < 20; i++) {
            localStorage.removeItem(`learned-${state.currentVersion}-${state.currentGrade}-${i}`);
        }
        
        updateWordDisplay();
        updateTextDisplay();
        alert('进度已重置！');
    }
}

// ==================== 学习计时器 ====================
function startStudyTimer() {
    studyTimer = setInterval(() => {
        state.studyStats.studyTime += 10;
        if (state.currentMode === 'stats') {
            updateStats();
        }
    }, 10000); // 每 10 秒增加一次
}

// 页面关闭前保存
window.addEventListener('beforeunload', () => {
    saveToStorage();
});

// ==================== 拼写练习 ====================
function initSpelling() {
    const words = getCurrentUnitWords();
    state.spellingWords = [...words].sort(() => Math.random() - 0.5);
    state.spellingIndex = 0;
    state.spellingResults = [];

    const spellingTotal = document.getElementById('spelling-total');
    if (spellingTotal) {
        spellingTotal.textContent = Math.min(10, state.spellingWords.length);
    }

    const spellingResult = document.getElementById('spelling-result');
    const spellingArea = document.querySelector('.spelling-area');
    if (spellingResult) spellingResult.style.display = 'none';
    if (spellingArea) spellingArea.style.display = 'block';
}

function startSpelling() {
    initSpelling();
    const spellingNum = document.getElementById('spelling-num');
    if (spellingNum) spellingNum.textContent = '1';

    const spellingInput = document.getElementById('spelling-input');
    if (spellingInput) {
        spellingInput.value = '';
        spellingInput.disabled = false;
        spellingInput.focus();
    }

    const spellingFeedback = document.getElementById('spelling-feedback');
    if (spellingFeedback) {
        spellingFeedback.textContent = '';
        spellingFeedback.className = 'spelling-feedback';
    }

    const spellingHint = document.getElementById('spelling-hint');
    if (spellingHint) spellingHint.style.display = 'none';

    const spellingMeaning = document.getElementById('spelling-meaning');
    if (spellingMeaning) spellingMeaning.textContent = '';

    // 自动播放第一个单词
    setTimeout(() => playSpellingWord(), 500);
}

function playSpellingWord() {
    if (state.spellingIndex >= state.spellingWords.length) {
        showSpellingResult();
        return;
    }

    const word = state.spellingWords[state.spellingIndex];
    speak(word.word);

    // 显示中文意思作为提示
    const spellingMeaning = document.getElementById('spelling-meaning');
    if (spellingMeaning) {
        spellingMeaning.textContent = `💭 ${word.meaning}`;
    }

    const spellingNum = document.getElementById('spelling-num');
    if (spellingNum) {
        spellingNum.textContent = state.spellingIndex + 1;
    }
}

function playSpellingSlow() {
    if (state.spellingIndex >= state.spellingWords.length) {
        return;
    }

    const word = state.spellingWords[state.spellingIndex];

    if (synth.speaking) {
        synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.rate = 0.5; // 更慢的语速
    utterance.pitch = 1;
    utterance.volume = 1;

    // 使用公共函数获取语音
    const voice = getSelectedVoice();
    if (voice) {
        utterance.voice = voice;
    }

    synth.speak(utterance);
}

function checkSpellingAnswer() {
    const spellingInput = document.getElementById('spelling-input');
    const spellingFeedback = document.getElementById('spelling-feedback');
    const spellingHint = document.getElementById('spelling-hint');

    if (!spellingInput || !spellingFeedback) return;

    const userAnswer = spellingInput.value.trim().toLowerCase();
    const correctWord = state.spellingWords[state.spellingIndex];

    if (!correctWord) return;

    const isCorrect = userAnswer === correctWord.word.toLowerCase();
    state.spellingResults.push(isCorrect);

    if (isCorrect) {
        spellingFeedback.textContent = '✅ 正确！拼写完全正确！';
        spellingFeedback.className = 'spelling-feedback correct';
    } else {
        spellingFeedback.textContent = `❌ 错误`;
        spellingFeedback.className = 'spelling-feedback wrong';
        if (spellingHint) {
            spellingHint.innerHTML = `正确答案：<strong>${correctWord.word}</strong> ${correctWord.phonetic}`;
            spellingHint.style.display = 'block';
        }
    }

    spellingInput.disabled = true;

    // 自动进入下一个
    setTimeout(() => {
        state.spellingIndex++;

        if (state.spellingIndex >= state.spellingWords.length ||
            state.spellingIndex >= 10) {
            showSpellingResult();
        } else {
            spellingInput.value = '';
            spellingInput.disabled = false;
            spellingInput.focus();
            spellingFeedback.textContent = '';
            if (spellingHint) spellingHint.style.display = 'none';
            playSpellingWord();
        }
    }, 2000);
}

function showSpellingHint() {
    const word = state.spellingWords[state.spellingIndex];
    const spellingHint = document.getElementById('spelling-hint');
    
    if (spellingHint && word) {
        // 显示单词的首字母和长度
        const firstLetter = word.word.charAt(0);
        const length = word.word.length;
        const masked = firstLetter + '_'.repeat(length - 1);
        spellingHint.innerHTML = `💡 提示：<strong>${masked}</strong>（${length} 个字母）`;
        spellingHint.style.display = 'block';
    }
}

function skipSpellingWord() {
    if (state.spellingIndex >= state.spellingWords.length) {
        return;
    }

    const spellingInput = document.getElementById('spelling-input');
    const spellingFeedback = document.getElementById('spelling-feedback');
    const spellingHint = document.getElementById('spelling-hint');

    // 标记为跳过
    state.spellingResults.push(null);

    if (spellingFeedback) {
        spellingFeedback.textContent = '⏭️ 已跳过';
        spellingFeedback.className = 'spelling-feedback';
    }

    if (spellingInput) {
        spellingInput.value = '';
        spellingInput.disabled = true;
    }

    // 进入下一个
    setTimeout(() => {
        state.spellingIndex++;

        if (state.spellingIndex >= state.spellingWords.length ||
            state.spellingIndex >= 10) {
            showSpellingResult();
        } else {
            if (spellingInput) {
                spellingInput.value = '';
                spellingInput.disabled = false;
                spellingInput.focus();
            }
            if (spellingFeedback) spellingFeedback.textContent = '';
            if (spellingHint) spellingHint.style.display = 'none';
            playSpellingWord();
        }
    }, 1000);
}

function showSpellingResult() {
    const spellingArea = document.querySelector('.spelling-area');
    const spellingResult = document.getElementById('spelling-result');

    if (spellingArea) spellingArea.style.display = 'none';
    if (spellingResult) spellingResult.style.display = 'block';

    const correctCount = state.spellingResults.filter(r => r).length;
    const totalCount = state.spellingResults.length;
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

    const accuracyEl = document.getElementById('spelling-accuracy');
    const correctEl = document.getElementById('spelling-correct');
    const allEl = document.getElementById('spelling-all');
    const reviewEl = document.getElementById('spelling-review');

    if (accuracyEl) accuracyEl.textContent = accuracy + '%';
    if (correctEl) correctEl.textContent = correctCount;
    if (allEl) allEl.textContent = totalCount;

    // 显示错误的单词回顾
    if (reviewEl) {
        const wrongWords = state.spellingResults
            .map((result, index) => {
                if (!result) {
                    const word = state.spellingWords[index];
                    return word ? `<div class="review-item wrong">
                        <span class="review-word">${word.word}</span>
                        <span class="review-meaning">${word.meaning}</span>
                    </div>` : '';
                }
                return '';
            })
            .filter(Boolean)
            .join('');

        if (wrongWords) {
            reviewEl.innerHTML = `<h5>需要复习的单词：</h5>${wrongWords}`;
        } else {
            reviewEl.innerHTML = '<p class="perfect-score">🎉 太棒了！全部正确！</p>';
        }
    }

    // 保存拼写练习结果
    saveToStorage();
}

// 拼写输入框事件监听
document.addEventListener('DOMContentLoaded', function() {
    const spellingInput = document.getElementById('spelling-input');
    if (spellingInput) {
        spellingInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkSpellingAnswer();
            }
        });
    }
});

// 暴露全局函数供 HTML 调用
window.speakWord = speakWord;
window.speakSentence = speakSentence;
window.showExample = showExample;
window.prevWord = prevWord;
window.nextWord = nextWord;
window.toggleWordList = toggleWordList;
window.playAllWords = playAllWords;
window.printWordList = printWordList;
window.toggleFavorite = toggleFavorite;
window.toggleFavoriteAt = toggleFavoriteAt;
window.removeFavorite = removeFavorite;
window.speakWordAt = speakWordAt;
window.speakTextLine = speakTextLine;
window.speakFullText = speakFullText;
window.printText = printText;
window.startDictation = startDictation;
window.playDictationWord = playDictationWord;
window.checkDictationAnswer = checkDictationAnswer;
window.showDictationAnswer = showDictationAnswer;
window.playTestAudio = playTestAudio;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.initTest = initTest;
window.selectWord = selectWord;
window.resetStats = resetStats;
window.resetProgress = resetProgress;
window.startSpelling = startSpelling;
window.playSpellingWord = playSpellingWord;
window.playSpellingSlow = playSpellingSlow;
window.showSpellingHint = showSpellingHint;
window.skipSpellingWord = skipSpellingWord;
window.skipDictationWord = skipDictationWord;
window.exportProgress = exportProgress;
