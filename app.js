// 小学英语同步学习平台 - 主应用逻辑
// 支持单元学习、收藏、听写、测试、统计等功能
// 使用 js/core/ 和 js/utils/ 模块

// ==================== 初始化模块 ====================
// 使用 StateManager 创建响应式状态
const state = StateManager.init();

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', init);

function init() {
    try {
        PerformanceMonitor.init();
        PerformanceMonitor.startTimer('app-init');
        
        // 初始化移动端优化
        MobileOptimizer.init();
        
        // 将已同步加载的数据注册到 DataLoader 缓存
        // 使用 window 对象显式检查，避免 const/let 作用域问题
        if (window.pepData) DataLoader.setCache('pep', window.pepData);
        if (window.waiyanData) DataLoader.setCache('waiyan', window.waiyanData);
        if (window.generalData) DataLoader.setCache('general', window.generalData);
        
        loadVoices();
        loadFromStorage();
        setupEventListeners();
        updateVersionDisplay();
        updateGradeButtons();
        updateUnitNav();
        updateWordDisplay();
        startStudyTimer();
        
        // 异步预加载其他版本数据（不阻塞主流程）
        const otherVersions = ['pep', 'waiyan', 'general'].filter(v => !DataLoader.getFromCache(v));
        if (otherVersions.length > 0) {
            DataLoader.preload(otherVersions);
        }
        
        // 订阅关键状态变化，防抖自动保存（避免遗漏）
        let saveTimer = null;
        const debounceSave = () => {
            clearTimeout(saveTimer);
            saveTimer = setTimeout(() => saveToStorage(), 500);
        };
        ['currentVersion', 'currentGrade', 'currentSemester', 'currentUnit', 'accent', 'darkMode'].forEach(key => {
            StateManager.subscribe(key, debounceSave);
        });
        StateManager.subscribe('darkMode', (val) => {
            document.body.classList.toggle('dark-mode', val);
            const toggle = document.getElementById('theme-toggle');
            if (toggle) toggle.textContent = val ? '☀️' : '🌙';
        });
        
        PerformanceMonitor.endTimer('app-init');
        console.log('应用初始化成功');
    } catch (error) {
        ErrorHandler.log(error, 'Init');
        ErrorHandler.showUserFriendlyMessage('应用初始化失败，请刷新页面重试。');
    }
}

// ==================== 数据获取 ====================
function getCurrentData() {
    // 优先从 DataLoader 缓存获取
    const cached = DataLoader.getFromCache(state.currentVersion);
    if (cached) return cached;
    
    // 回退到全局变量（使用 window 对象显式检查）
    const versionMap = {
        'pep': window.pepData || null,
        'waiyan': window.waiyanData || null,
        'general': window.generalData || null
    };
    
    const data = versionMap[state.currentVersion] || null;
    // 如果从全局变量获取到数据，同步写入缓存
    if (data) DataLoader.setCache(state.currentVersion, data);
    return data;
}

// 异步加载指定版本数据
async function ensureVersionData(version) {
    try {
        const data = await DataLoader.loadVersionData(version);
        return data;
    } catch (error) {
        ErrorHandler.log(error, 'DataLoader');
        ErrorHandler.showUserFriendlyMessage(`加载${version === 'pep' ? '人教版' : version === 'waiyan' ? '外研社版' : '通用版'}数据失败，请检查网络连接`, { type: 'warning' });
        return null;
    }
}

function getCurrentGradeData() {
    const versionData = getCurrentData();
    if (!versionData || !versionData.grades) return null;

    const gradeKey = state.currentSemester === 2 
        ? `${state.currentGrade}-2`
        : state.currentGrade;
    const gradeData = versionData.grades[gradeKey];
    if (!gradeData) return null;

    if (gradeData.units) {
        return gradeData;
    }

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
    // 版本选择（支持异步加载数据）
    document.getElementById('version-select').addEventListener('change', async function() {
        const newVersion = this.value;
        
        // 显示加载状态
        LoadingManager.show('正在加载教材数据...');
        
        // 确保数据已加载
        const versionData = await ensureVersionData(newVersion);
        
        if (!versionData) {
            LoadingManager.hide();
            ErrorHandler.showUserFriendlyMessage('数据加载失败，请刷新页面重试', { type: 'warning' });
            // 恢复之前的版本选择
            this.value = state.currentVersion;
            return;
        }
        
        state.currentVersion = newVersion;
        state.currentGrade = newVersion === 'pep' ? 3 : (newVersion === 'waiyan' ? 1 : 1);
        state.currentUnit = 0;
        state.currentWordIndex = 0;
        state.currentTextIndex = 0;
        saveToStorage();
        updateVersionDisplay();
        updateGradeButtons();
        updateUnitNav();
        updateWordDisplay();
        updateTextDisplay();
        
        LoadingManager.hide();
        
        // 预加载其他版本数据（后台加载，不阻塞）
        const otherVersions = ['pep', 'waiyan', 'general'].filter(v => v !== newVersion);
        DataLoader.preload(otherVersions);
    });

    // 年级选择
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.currentGrade = parseInt(this.dataset.grade);
            state.currentUnit = 0;
            state.currentWordIndex = 0;
            state.currentTextIndex = 0;
            saveToStorage();
            updateUnitNav();
            updateWordDisplay();
            updateTextDisplay();
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
            state.currentTextIndex = 0;
            saveToStorage();
            updateUnitNav();
            updateWordDisplay();
            updateTextDisplay();
        });
    });

    // 单元选择（使用 closest 处理子元素点击）
    document.addEventListener('click', function(e) {
        const unitBtn = e.target.closest('.unit-btn');
        if (unitBtn) {
            document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
            unitBtn.classList.add('active');
            state.currentUnit = parseInt(unitBtn.dataset.unit);
            state.currentWordIndex = 0;
            state.currentTextIndex = 0;
            saveToStorage();
            updateWordDisplay();
            updateTextDisplay();
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
            saveToStorage();
            loadVoices();
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

    // 滑动手势支持（移动端翻页）
    document.addEventListener('swipeleft', () => {
        if (state.currentMode === 'words') nextWord();
    });
    document.addEventListener('swiperight', () => {
        if (state.currentMode === 'words') prevWord();
    });
}

// ==================== 界面更新 ====================
function updateVersionDisplay() {
    const versionData = getCurrentData();
    const versionDesc = document.getElementById('version-desc');

    if (versionDesc && versionData && versionData.description) {
        versionDesc.textContent = versionData.description;
    }

    const semesterSelector = document.getElementById('semester-selector');
    if (semesterSelector) {
        semesterSelector.style.display = 'flex';
        const semesterBtns = semesterSelector.querySelectorAll('.semester-btn');
        semesterBtns.forEach(btn => {
            btn.style.display = 'inline-block';
            btn.classList.toggle('active', parseInt(btn.dataset.semester) === state.currentSemester);
        });
    }
}

function updateGradeButtons() {
    const versionData = getCurrentData();
    const startGrade = versionData ? (versionData.startGrade || 1) : 1;
    
    if (state.currentGrade < startGrade) {
        state.currentGrade = startGrade;
    }
    
    const buttons = document.querySelectorAll('.grade-btn');
    
    requestAnimationFrame(() => {
        buttons.forEach(btn => {
            const grade = parseInt(btn.dataset.grade);
            const shouldShow = grade >= startGrade;
            const isActive = grade === state.currentGrade;
            
            btn.style.cssText = shouldShow ? 'display: block;' : 'display: none;';
            btn.classList.toggle('active', isActive);
        });
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
    
    const fragment = document.createDocumentFragment();
    
    gradeData.units.forEach((unit, index) => {
        const btn = document.createElement('button');
        btn.className = `unit-btn ${index === state.currentUnit ? 'active' : ''}`;
        btn.dataset.unit = index;
        
        const wordCount = unit.words ? unit.words.length : 0;
        const learnedCount = getLearnedCount(index);
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = unit.unitName;
        
        const statusSpan = document.createElement('span');
        statusSpan.className = 'unit-status';
        statusSpan.textContent = `${learnedCount}/${wordCount} 词`;
        
        btn.appendChild(nameSpan);
        btn.appendChild(statusSpan);
        
        fragment.appendChild(btn);
    });
    
    unitButtons.appendChild(fragment);
    
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
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(mode + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
        setTimeout(() => targetSection.classList.add('active'), 10);
    }
    
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
    
    if (!words || words.length === 0) {
        const wordEl = document.querySelector('.english-word');
        if (wordEl) wordEl.textContent = '暂无单词数据';
        return;
    }
    
    if (state.currentWordIndex >= words.length) {
        state.currentWordIndex = 0;
    }
    
    const word = words[state.currentWordIndex];
    
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
    
    const exampleSection = document.querySelector('.example-sentence');
    if (exampleSection) {
        exampleSection.style.display = 'none';
    }
    
    if (elements.tags && word.tags) {
        elements.tags.innerHTML = word.tags.map(tag => 
            `<span class="word-tag">${tag}</span>`
        ).join('');
    } else if (elements.tags) {
        elements.tags.innerHTML = '';
    }
    
    if (elements.progressFill && elements.progressText) {
        const progress = ((state.currentWordIndex + 1) / words.length) * 100;
        elements.progressFill.style.width = progress + '%';
        elements.progressText.textContent = `${state.currentWordIndex + 1} / ${words.length}`;
    }
    
    updateFavoriteButton();
    updateWordListView();
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
    if (state.isPlayingAll) {
        stopPlayAll();
        return;
    }

    const words = getCurrentUnitWords();
    if (words.length === 0) return;
    
    state.isPlayingAll = true;
    updatePlayAllButton(true);

    const rateInput = document.getElementById('rate');
    const rate = rateInput ? parseFloat(rateInput.value) : 0.8;
    const voice = getSelectedVoice();
    const accentMap = { 'en-US': 'us', 'en-GB': 'uk', 'auto': 'auto' };
    const accent = accentMap[state.accent] || 'auto';

    const texts = words.map(w => w.word);
    
    SpeechManager.speakAll(texts, {
        rate,
        accent,
        voice,
        pauseBetween: 800,
        onProgress: (i) => {
            // 高亮当前播放的单词
            state.currentWordIndex = i;
            updateWordDisplay();
        }
    }).then(() => {
        state.isPlayingAll = false;
        updatePlayAllButton(false);
    }).catch(() => {
        // 用户停止或其他错误
        state.isPlayingAll = false;
        updatePlayAllButton(false);
    });
}

function stopPlayAll() {
    state.isPlayingAll = false;
    SpeechManager.stop();
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
    
    const text = texts[state.currentTextIndex];
    const textTitle = document.getElementById('text-title');
    const textBody = document.getElementById('text-body');
    
    if (textTitle) textTitle.textContent = `${text.lesson} - ${text.title}`;
    
    if (textBody) {
        textBody.innerHTML = '';
        const fragment = document.createDocumentFragment();
        text.content.forEach((line, index) => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'text-line';
            lineDiv.innerHTML = `
                <span class="text-en">${line.en}</span>
                <span class="text-cn">${line.cn}</span>
                <button class="btn-speak-line" onclick="speakTextLine(${index})">🔊</button>
            `;
            fragment.appendChild(lineDiv);
        });
        textBody.appendChild(fragment);
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

    // 使用 SpeechManager 加载语音
    SpeechManager.loadVoices();
    state.voices = SpeechManager.voices;
    
    // Chrome 异步加载处理
    if (SpeechManager.synth.onvoiceschanged !== undefined) {
        SpeechManager.synth.onvoiceschanged = () => {
            SpeechManager.loadVoices();
            state.voices = SpeechManager.voices;
            populateVoiceList();
        };
    }

    // 加载保存的语音偏好
    const savedAccent = StorageManager.load().data?.accent;
    if (savedAccent) {
        state.accent = savedAccent;
        accentSelect.value = savedAccent;
    }

    populateVoiceList();
}

function populateVoiceList() {
    const voiceSelect = document.getElementById('voice-select');
    const accentSelect = document.getElementById('accent-select');
    if (!voiceSelect) return;

    voiceSelect.innerHTML = '<option value="">默认语音</option>';

    const selectedAccent = accentSelect ? accentSelect.value : 'auto';
    let filteredVoices = state.voices;

    if (selectedAccent !== 'auto') {
        filteredVoices = state.voices.filter(v => v.lang && v.lang.startsWith(selectedAccent));
    } else {
        filteredVoices = state.voices.filter(v => v.lang && v.lang.startsWith('en'));
    }

    filteredVoices.forEach((voice) => {
        const option = document.createElement('option');
        option.value = state.voices.indexOf(voice);
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

function getSelectedVoice() {
    const voiceSelect = document.getElementById('voice-select');
    const voiceIndex = voiceSelect ? voiceSelect.value : '';
    
    if (voiceIndex !== '' && state.voices[voiceIndex]) {
        return state.voices[voiceIndex];
    }
    
    // 使用 SpeechManager 的语音选择
    const accentMap = { 'en-US': 'us', 'en-GB': 'uk', 'auto': 'auto' };
    const accent = accentMap[state.accent] || 'auto';
    return SpeechManager.getBestVoice(accent);
}

function speak(text) {
    const rateInput = document.getElementById('rate');
    const rate = rateInput ? parseFloat(rateInput.value) : 0.8;
    const voice = getSelectedVoice();
    const accentMap = { 'en-US': 'us', 'en-GB': 'uk', 'auto': 'auto' };
    const accent = accentMap[state.accent] || 'auto';

    SpeechManager.speak(text, { rate, accent, voice }).catch(() => {
        // 语音合成失败时静默处理
    });
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

    state.dictationResults.push(null);

    if (dictationFeedback) {
        dictationFeedback.textContent = '⏭️ 已跳过';
        dictationFeedback.className = 'dictation-feedback';
    }

    if (dictationInput) {
        dictationInput.value = '';
        dictationInput.disabled = true;
    }

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
    
    const accEl = document.getElementById('dictation-accuracy');
    const corEl = document.getElementById('dictation-correct');
    const allEl = document.getElementById('dictation-all');
    if (accEl) accEl.textContent = accuracy + '%';
    if (corEl) corEl.textContent = correctCount;
    if (allEl) allEl.textContent = totalCount;
    
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

    const correctIndex = Math.floor(Math.random() * words.length);
    state.currentTestWord = words[correctIndex];

    const options = [state.currentTestWord];
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        if (!options.find(o => o.meaning === randomWord.meaning)) {
            options.push(randomWord);
        }
    }

    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('test-options');
    if (optionsContainer) {
        const fragment = document.createDocumentFragment();
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.meaning;
            btn.onclick = () => checkAnswer(option, state.currentTestWord);
            fragment.appendChild(btn);
        });
        optionsContainer.innerHTML = '';
        optionsContainer.appendChild(fragment);
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
        showTestFinalResult();
    }
}

function showTestFinalResult() {
    const testCard = document.querySelector('.test-card');
    const finalResult = document.getElementById('test-final-result');

    if (testCard) testCard.style.display = 'none';
    if (finalResult) {
        finalResult.style.display = 'block';

        const totalQuestions = state.currentQuestion;
        const finalScore = Math.round((state.testScore / totalQuestions) * 100);
        
        const scoreEl = document.getElementById('final-score');
        const commentEl = document.getElementById('final-comment');
        if (scoreEl) scoreEl.textContent = finalScore;

        let comment = '';
        if (finalScore >= 90) comment = '🎉 太棒了！';
        else if (finalScore >= 70) comment = '👍 不错哦！';
        else if (finalScore >= 60) comment = '💪 继续加油！';
        else comment = '📚 多多练习！';

        if (commentEl) commentEl.textContent = comment;
    }

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
    
    const allTags = new Set();
    words.forEach(word => {
        if (word.tags) {
            word.tags.forEach(tag => allTags.add(tag));
        }
    });
    
    tagsList.innerHTML = Array.from(allTags).map(tag =>
        `<button class="tag-btn" data-tag="${tag}">${tag}</button>`
    ).join('');
    
    tagsList.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tag = this.dataset.tag;
            
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
    const minutes = Math.round(state.studyStats.studyTime / 60);
    const studyTimeEl = document.getElementById('stat-study-time');
    const wordsLearnedEl = document.getElementById('stat-words-learned');
    const dictationRateEl = document.getElementById('stat-dictation-rate');
    const testAvgEl = document.getElementById('stat-test-avg');
    
    if (studyTimeEl) studyTimeEl.textContent = `${minutes} 分钟`;
    if (wordsLearnedEl) wordsLearnedEl.textContent = `${state.studyStats.wordsLearned} 词`;
    
    const dictationHistory = state.studyStats.dictationHistory;
    if (dictationHistory.length > 0) {
        const avgAccuracy = Math.round(
            dictationHistory.reduce((sum, h) => sum + h.accuracy, 0) / dictationHistory.length
        );
        if (dictationRateEl) dictationRateEl.textContent = `${avgAccuracy}%`;
    } else {
        if (dictationRateEl) dictationRateEl.textContent = '0%';
    }
    
    const testHistory = state.studyStats.testHistory;
    if (testHistory.length > 0) {
        const avgScore = Math.round(
            testHistory.reduce((sum, h) => sum + h.score, 0) / testHistory.length
        );
        if (testAvgEl) testAvgEl.textContent = `${avgScore} 分`;
    } else {
        if (testAvgEl) testAvgEl.textContent = '0 分';
    }
    
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

    const dictationHistory = state.studyStats.dictationHistory;
    const dictationRate = dictationHistory.length > 0 
        ? Math.round(dictationHistory.reduce((sum, h) => sum + h.accuracy, 0) / dictationHistory.length)
        : 0;

    const testHistory = state.studyStats.testHistory;
    const testAvg = testHistory.length > 0
        ? Math.round(testHistory.reduce((sum, h) => sum + h.score, 0) / testHistory.length)
        : 0;

    const exportData = {
        exportDate: new Date().toLocaleString('zh-CN'),
        appVersion: 'v2.2',
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

    const jsonData = JSON.stringify(exportData, null, 2);
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
    
    if (ringFill) {
        const circumference = 2 * Math.PI * 36;
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
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.textContent = state.darkMode ? '☀️' : '🌙';
    saveToStorage();
}

// ==================== 存储功能（使用 StorageManager）====================
function saveToStorage() {
    const result = StorageManager.save(state);
    if (!result.success) {
        ErrorHandler.log(new Error(result.error), 'Storage');
        if (result.type === 'quota_exceeded') {
            alert('⚠️ 存储空间已满，请清理浏览器数据');
        }
    }
}

function loadFromStorage() {
    const result = StorageManager.load();
    
    if (result.success && result.data) {
        const data = result.data;
        state.currentVersion = data.currentVersion;
        state.currentGrade = data.currentGrade;
        state.currentSemester = data.currentSemester;
        state.currentUnit = data.currentUnit;
        state.favorites = data.favorites;
        state.studyStats = data.studyStats;
        state.darkMode = data.darkMode;
        state.accent = data.accent;
    } else {
        const defaultGrade = state.currentVersion === 'pep' ? 3 : 1;
        state.currentGrade = defaultGrade;
    }

    // 加载夜间模式
    if (state.darkMode) {
        document.body.classList.add('dark-mode');
        const toggle = document.getElementById('theme-toggle');
        if (toggle) toggle.textContent = '☀️';
    }
}

function resetProgress() {
    if (confirm('确定要重置学习进度吗？（收藏和统计将保留）')) {
        state.currentWordIndex = 0;
        state.currentTextIndex = 0;
        
        for (let i = 0; i < 20; i++) {
            localStorage.removeItem(`learned-${state.currentVersion}-${state.currentGrade}-${i}`);
        }
        
        updateWordDisplay();
        updateTextDisplay();
        alert('进度已重置！');
    }
}

// ==================== 学习计时器（使用 TimerManager）====================
function startStudyTimer() {
    TimerManager.start('study', () => {
        state.studyStats.studyTime += 10;
        if (state.currentMode === 'stats') {
            updateStats();
        }
    }, 10000);
}

// 页面关闭前保存和清理
window.addEventListener('beforeunload', () => {
    TimerManager.stopAll();
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

    setTimeout(() => playSpellingWord(), 500);
}

function playSpellingWord() {
    if (state.spellingIndex >= state.spellingWords.length) {
        showSpellingResult();
        return;
    }

    const word = state.spellingWords[state.spellingIndex];
    speak(word.word);

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
    const voice = getSelectedVoice();
    const accentMap = { 'en-US': 'us', 'en-GB': 'uk', 'auto': 'auto' };
    const accent = accentMap[state.accent] || 'auto';

    SpeechManager.speak(word.word, { rate: 0.5, accent, voice }).catch(() => {});
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

    state.spellingResults.push(null);

    if (spellingFeedback) {
        spellingFeedback.textContent = '⏭️ 已跳过';
        spellingFeedback.className = 'spelling-feedback';
    }

    if (spellingInput) {
        spellingInput.value = '';
        spellingInput.disabled = true;
    }

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
