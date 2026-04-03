// 外研社版英语教材数据 - 一年级起点（完整版）
// 依据最新教材编写，包含 1-6 年级所有单元的单词和课文
// 数据结构已统一：word, phonetic, meaning, example, exampleCn, tags
const waiyanData = {
  versionId: "waiyan",
  versionName: "外研社版",
  description: "外语教学与研究出版社 | 一年级起点 | 南方地区广泛使用",
  startGrade: 1,
  lastUpdated: "2026-01",
  grades: {
    // ==================== 一年级 ====================
    1: {
      semester: "全一册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Greetings",
          words: [
            { word: "hello", phonetic: "/həˈloʊ/", meaning: "你好", example: "Hello, I'm Panpan.", exampleCn: "你好，我是盼盼。", tags: ["问候", "四会词"] },
            { word: "hi", phonetic: "/haɪ/", meaning: "嗨", example: "Hi, I'm Lingling.", exampleCn: "嗨，我是玲玲。", tags: ["问候", "四会词"] },
            { word: "goodbye", phonetic: "/ˌɡʊdˈbaɪ/", meaning: "再见", example: "Goodbye, Lingling.", exampleCn: "再见，玲玲。", tags: ["问候", "四会词"] },
            { word: "bye", phonetic: "/baɪ/", meaning: "拜拜", example: "Bye, Panpan.", exampleCn: "拜拜，盼盼。", tags: ["问候", "三会词"] },
            { word: "I", phonetic: "/aɪ/", meaning: "我", example: "I am a boy.", exampleCn: "我是一个男孩。", tags: ["代词", "四会词"] },
            { word: "am", phonetic: "/æm/", meaning: "是", example: "I am six.", exampleCn: "我六岁。", tags: ["动词", "四会词"] },
            { word: "I'm", phonetic: "/aɪm/", meaning: "我是", example: "I'm Sam.", exampleCn: "我是萨姆。", tags: ["缩写", "四会词"] },
            { word: "you", phonetic: "/juː/", meaning: "你", example: "How are you?", exampleCn: "你好吗？", tags: ["代词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 1 Unit 1",
              title: "Hello",
              content: [
                { en: "Hello, I'm Panpan.", cn: "你好，我是盼盼。" },
                { en: "Hello, I'm Lingling.", cn: "你好，我是玲玲。" },
                { en: "Goodbye, Panpan.", cn: "再见，盼盼。" },
                { en: "Goodbye, Lingling.", cn: "再见，玲玲。" }
              ]
            }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Introductions",
          words: [
            { word: "what", phonetic: "/wɒt/", meaning: "什么", example: "What's your name?", exampleCn: "你叫什么名字？", tags: ["疑问词", "四会词"] },
            { word: "is", phonetic: "/ɪz/", meaning: "是", example: "It is a cat.", exampleCn: "它是一只猫。", tags: ["动词", "四会词"] },
            { word: "it", phonetic: "/ɪt/", meaning: "它", example: "It is red.", exampleCn: "它是红色的。", tags: ["代词", "四会词"] },
            { word: "it's", phonetic: "/ɪts/", meaning: "它是", example: "It's a dog.", exampleCn: "它是一只狗。", tags: ["缩写", "四会词"] },
            { word: "name", phonetic: "/neɪm/", meaning: "名字", example: "My name is Sam.", exampleCn: "我的名字是萨姆。", tags: ["基础", "四会词"] },
            { word: "my", phonetic: "/maɪ/", meaning: "我的", example: "My name is Amy.", exampleCn: "我的名字是艾米。", tags: ["代词", "四会词"] },
            { word: "a", phonetic: "/ə/", meaning: "一个", example: "It is a dog.", exampleCn: "它是一只狗。", tags: ["冠词", "四会词"] },
            { word: "an", phonetic: "/ən/", meaning: "一个", example: "It is an apple.", exampleCn: "它是一个苹果。", tags: ["冠词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 2 Unit 1",
              title: "What's your name?",
              content: [
                { en: "What's your name?", cn: "你叫什么名字？" },
                { en: "I'm Sam.", cn: "我是萨姆。" },
                { en: "How are you?", cn: "你好吗？" },
                { en: "I'm fine, thank you.", cn: "我很好，谢谢。" }
              ]
            }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Numbers",
          words: [
            { word: "one", phonetic: "/wʌn/", meaning: "一", example: "One cat.", exampleCn: "一只猫。", tags: ["数字", "四会词"] },
            { word: "two", phonetic: "/tuː/", meaning: "二", example: "Two dogs.", exampleCn: "两只狗。", tags: ["数字", "四会词"] },
            { word: "three", phonetic: "/θriː/", meaning: "三", example: "Three birds.", exampleCn: "三只鸟。", tags: ["数字", "四会词"] },
            { word: "four", phonetic: "/fɔːr/", meaning: "四", example: "Four apples.", exampleCn: "四个苹果。", tags: ["数字", "四会词"] },
            { word: "five", phonetic: "/faɪv/", meaning: "五", example: "Five bananas.", exampleCn: "五根香蕉。", tags: ["数字", "四会词"] },
            { word: "six", phonetic: "/sɪks/", meaning: "六", example: "Six pears.", exampleCn: "六个梨。", tags: ["数字", "四会词"] },
            { word: "seven", phonetic: "/ˈsevn/", meaning: "七", example: "Seven oranges.", exampleCn: "七个橙子。", tags: ["数字", "四会词"] },
            { word: "eight", phonetic: "/eɪt/", meaning: "八", example: "Eight pandas.", exampleCn: "八只熊猫。", tags: ["数字", "四会词"] },
            { word: "nine", phonetic: "/naɪn/", meaning: "九", example: "Nine cats.", exampleCn: "九只猫。", tags: ["数字", "四会词"] },
            { word: "ten", phonetic: "/ten/", meaning: "十", example: "Ten dogs.", exampleCn: "十只狗。", tags: ["数字", "四会词"] },
            { word: "cat", phonetic: "/kæt/", meaning: "猫", example: "The cat is cute.", exampleCn: "猫很可爱。", tags: ["动物", "四会词"] },
            { word: "dog", phonetic: "/dɒɡ/", meaning: "狗", example: "I have a dog.", exampleCn: "我有一只狗。", tags: ["动物", "四会词"] },
            { word: "bird", phonetic: "/bɜːrd/", meaning: "鸟", example: "The bird can fly.", exampleCn: "鸟会飞。", tags: ["动物", "四会词"] },
            { word: "panda", phonetic: "/ˈpændə/", meaning: "熊猫", example: "The panda is black and white.", exampleCn: "熊猫是黑白相间的。", tags: ["动物", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 3 Unit 1",
              title: "Numbers",
              content: [
                { en: "One cat, two cats.", cn: "一只猫，两只猫。" },
                { en: "Three dogs, four dogs.", cn: "三只狗，四只狗。" },
                { en: "Five birds, six birds.", cn: "五只鸟，六只鸟。" },
                { en: "Seven, eight, nine, ten!", cn: "七、八、九、十！" }
              ]
            }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Colors",
          words: [
            { word: "red", phonetic: "/red/", meaning: "红色", example: "I like red.", exampleCn: "我喜欢红色。", tags: ["颜色", "四会词"] },
            { word: "blue", phonetic: "/bluː/", meaning: "蓝色", example: "The sky is blue.", exampleCn: "天空是蓝色的。", tags: ["颜色", "四会词"] },
            { word: "yellow", phonetic: "/ˈjeləʊ/", meaning: "黄色", example: "The banana is yellow.", exampleCn: "香蕉是黄色的。", tags: ["颜色", "四会词"] },
            { word: "green", phonetic: "/ɡriːn/", meaning: "绿色", example: "The grass is green.", exampleCn: "草是绿色的。", tags: ["颜色", "四会词"] },
            { word: "black", phonetic: "/blæk/", meaning: "黑色", example: "The cat is black.", exampleCn: "猫是黑色的。", tags: ["颜色", "四会词"] },
            { word: "white", phonetic: "/waɪt/", meaning: "白色", example: "The snow is white.", exampleCn: "雪是白色的。", tags: ["颜色", "四会词"] },
            { word: "apple", phonetic: "/ˈæpl/", meaning: "苹果", example: "I like apples.", exampleCn: "我喜欢苹果。", tags: ["水果", "四会词"] },
            { word: "banana", phonetic: "/bəˈnɑːnə/", meaning: "香蕉", example: "Monkeys like bananas.", exampleCn: "猴子喜欢香蕉。", tags: ["水果", "四会词"] },
            { word: "pear", phonetic: "/peər/", meaning: "梨", example: "This pear is sweet.", exampleCn: "这个梨很甜。", tags: ["水果", "三会词"] },
            { word: "orange", phonetic: "/ˈɒrɪndʒ/", meaning: "橙子", example: "I like oranges.", exampleCn: "我喜欢橙子。", tags: ["水果", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 4 Unit 1",
              title: "Colors",
              content: [
                { en: "It's red.", cn: "它是红色的。" },
                { en: "It's blue.", cn: "它是蓝色的。" },
                { en: "It's yellow.", cn: "它是黄色的。" },
                { en: "It's green.", cn: "它是绿色的。" }
              ]
            }
          ]
        },
        {
          unitId: "M5",
          unitName: "Module 5 School Things",
          words: [
            { word: "boy", phonetic: "/bɔɪ/", meaning: "男孩", example: "He is a boy.", exampleCn: "他是一个男孩。", tags: ["人物", "四会词"] },
            { word: "girl", phonetic: "/ɡɜːrl/", meaning: "女孩", example: "She is a girl.", exampleCn: "她是一个女孩。", tags: ["人物", "四会词"] },
            { word: "teacher", phonetic: "/ˈtiːtʃər/", meaning: "老师", example: "She is a teacher.", exampleCn: "她是一名老师。", tags: ["人物", "四会词"] },
            { word: "pupil", phonetic: "/ˈpjuːpl/", meaning: "小学生", example: "I am a pupil.", exampleCn: "我是一名小学生。", tags: ["人物", "三会词"] },
            { word: "school", phonetic: "/skuːl/", meaning: "学校", example: "I go to school.", exampleCn: "我去上学。", tags: ["地点", "四会词"] },
            { word: "bag", phonetic: "/bæɡ/", meaning: "书包", example: "My bag is red.", exampleCn: "我的书包是红色的。", tags: ["文具", "四会词"] },
            { word: "book", phonetic: "/bʊk/", meaning: "书", example: "This is my book.", exampleCn: "这是我的书。", tags: ["文具", "四会词"] },
            { word: "pen", phonetic: "/pen/", meaning: "钢笔", example: "I have a pen.", exampleCn: "我有一支钢笔。", tags: ["文具", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 5 Unit 1",
              title: "School",
              content: [
                { en: "This is my school.", cn: "这是我的学校。" },
                { en: "This is my bag.", cn: "这是我的书包。" },
                { en: "This is my book.", cn: "这是我的书。" },
                { en: "This is my pen.", cn: "这是我的钢笔。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 二年级 ====================
    2: {
      semester: "全一册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Animals",
          words: [
            { word: "elephant", phonetic: "/ˈelɪfənt/", meaning: "大象", example: "The elephant is big.", exampleCn: "大象很大。", tags: ["动物", "四会词"] },
            { word: "tiger", phonetic: "/ˈtaɪɡər/", meaning: "老虎", example: "The tiger is strong.", exampleCn: "老虎很强壮。", tags: ["动物", "四会词"] },
            { word: "lion", phonetic: "/ˈlaɪən/", meaning: "狮子", example: "The lion is the king.", exampleCn: "狮子是百兽之王。", tags: ["动物", "三会词"] },
            { word: "monkey", phonetic: "/ˈmʌŋki/", meaning: "猴子", example: "The monkey is funny.", exampleCn: "猴子很有趣。", tags: ["动物", "四会词"] },
            { word: "small", phonetic: "/smɔːl/", meaning: "小的", example: "The mouse is small.", exampleCn: "老鼠很小。", tags: ["形容词", "四会词"] },
            { word: "big", phonetic: "/bɪɡ/", meaning: "大的", example: "The elephant is big.", exampleCn: "大象很大。", tags: ["形容词", "四会词"] },
            { word: "fat", phonetic: "/fæt/", meaning: "胖的", example: "The pig is fat.", exampleCn: "猪很胖。", tags: ["形容词", "四会词"] },
            { word: "thin", phonetic: "/θɪn/", meaning: "瘦的", example: "The monkey is thin.", exampleCn: "猴子很瘦。", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 1 Unit 1",
              title: "Animals",
              content: [
                { en: "Look at the elephant.", cn: "看那头大象。" },
                { en: "It's big.", cn: "它很大。" },
                { en: "Look at the monkey.", cn: "看那只猴子。" },
                { en: "It's small and thin.", cn: "它又小又瘦。" }
              ]
            }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Body Parts",
          words: [
            { word: "head", phonetic: "/hed/", meaning: "头", example: "Touch your head.", exampleCn: "摸摸你的头。", tags: ["身体", "四会词"] },
            { word: "face", phonetic: "/feɪs/", meaning: "脸", example: "Wash your face.", exampleCn: "洗洗你的脸。", tags: ["身体", "四会词"] },
            { word: "nose", phonetic: "/nəʊz/", meaning: "鼻子", example: "This is my nose.", exampleCn: "这是我的鼻子。", tags: ["身体", "四会词"] },
            { word: "eye", phonetic: "/aɪ/", meaning: "眼睛", example: "I have two eyes.", exampleCn: "我有两只眼睛。", tags: ["身体", "四会词"] },
            { word: "ear", phonetic: "/ɪər/", meaning: "耳朵", example: "These are my ears.", exampleCn: "这些是我的耳朵。", tags: ["身体", "四会词"] },
            { word: "mouth", phonetic: "/maʊθ/", meaning: "嘴巴", example: "Open your mouth.", exampleCn: "张开你的嘴巴。", tags: ["身体", "四会词"] },
            { word: "hair", phonetic: "/heər/", meaning: "头发", example: "She has long hair.", exampleCn: "她有长头发。", tags: ["身体", "三会词"] },
            { word: "tall", phonetic: "/tɔːl/", meaning: "高的", example: "The giraffe is tall.", exampleCn: "长颈鹿很高。", tags: ["形容词", "四会词"] },
            { word: "short", phonetic: "/ʃɔːt/", meaning: "矮的", example: "I am short.", exampleCn: "我很矮。", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 2 Unit 1",
              title: "My Body",
              content: [
                { en: "Touch your head.", cn: "摸摸你的头。" },
                { en: "Touch your nose.", cn: "摸摸你的鼻子。" },
                { en: "Touch your eyes.", cn: "摸摸你的眼睛。" },
                { en: "Touch your ears.", cn: "摸摸你的耳朵。" }
              ]
            }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Food",
          words: [
            { word: "like", phonetic: "/laɪk/", meaning: "喜欢", example: "I like football.", exampleCn: "我喜欢足球。", tags: ["动词", "四会词"] },
            { word: "don't", phonetic: "/dəʊnt/", meaning: "不", example: "I don't like swimming.", exampleCn: "我不喜欢游泳。", tags: ["动词", "四会词"] },
            { word: "breakfast", phonetic: "/ˈbrekfəst/", meaning: "早餐", example: "I eat breakfast at 7.", exampleCn: "我 7 点吃早餐。", tags: ["餐食", "三会词"] },
            { word: "lunch", phonetic: "/lʌntʃ/", meaning: "午餐", example: "I have lunch at school.", exampleCn: "我在学校吃午餐。", tags: ["餐食", "三会词"] },
            { word: "dinner", phonetic: "/ˈdɪnər/", meaning: "晚餐", example: "Dinner is ready.", exampleCn: "晚餐准备好了。", tags: ["餐食", "三会词"] },
            { word: "milk", phonetic: "/mɪlk/", meaning: "牛奶", example: "I drink milk.", exampleCn: "我喝牛奶。", tags: ["饮品", "四会词"] },
            { word: "water", phonetic: "/ˈwɔːtər/", meaning: "水", example: "I drink water.", exampleCn: "我喝水。", tags: ["饮品", "四会词"] },
            { word: "juice", phonetic: "/dʒuːs/", meaning: "果汁", example: "I like apple juice.", exampleCn: "我喜欢苹果汁。", tags: ["饮品", "四会词"] },
            { word: "rice", phonetic: "/raɪs/", meaning: "米饭", example: "I eat rice.", exampleCn: "我吃米饭。", tags: ["食物", "四会词"] },
            { word: "noodles", phonetic: "/ˈnuːdlz/", meaning: "面条", example: "I like noodles.", exampleCn: "我喜欢面条。", tags: ["食物", "三会词"] },
            { word: "meat", phonetic: "/miːt/", meaning: "肉", example: "I eat meat.", exampleCn: "我吃肉。", tags: ["食物", "四会词"] },
            { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼", example: "I like fish.", exampleCn: "我喜欢鱼。", tags: ["食物", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 3 Unit 1",
              title: "Food",
              content: [
                { en: "Do you like rice?", cn: "你喜欢米饭吗？" },
                { en: "Yes, I do.", cn: "是的，我喜欢。" },
                { en: "Do you like meat?", cn: "你喜欢肉吗？" },
                { en: "No, I don't.", cn: "不，我不喜欢。" }
              ]
            }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Daily Routine",
          words: [
            { word: "get up", phonetic: "/ɡet ʌp/", meaning: "起床", example: "I get up at 7.", exampleCn: "我 7 点起床。", tags: ["日常", "三会词"] },
            { word: "go to school", phonetic: "/ɡəʊ tuː skuːl/", meaning: "去上学", example: "I go to school at 8.", exampleCn: "我 8 点去上学。", tags: ["日常", "三会词"] },
            { word: "go home", phonetic: "/ɡəʊ həʊm/", meaning: "回家", example: "I go home at 4.", exampleCn: "我 4 点回家。", tags: ["日常", "三会词"] },
            { word: "go to bed", phonetic: "/ɡəʊ tuː bed/", meaning: "睡觉", example: "I go to bed at 9.", exampleCn: "我 9 点睡觉。", tags: ["日常", "三会词"] },
            { word: "watch TV", phonetic: "/wɒtʃ ˌtiː ˈviː/", meaning: "看电视", example: "I watch TV in the evening.", exampleCn: "我晚上看电视。", tags: ["日常", "三会词"] },
            { word: "have", phonetic: "/hæv/", meaning: "有", example: "I have a book.", exampleCn: "我有一本书。", tags: ["动词", "四会词"] },
            { word: "has", phonetic: "/hæz/", meaning: "有", example: "She has a doll.", exampleCn: "她有一个洋娃娃。", tags: ["动词", "四会词"] },
            { word: "they", phonetic: "/ðeɪ/", meaning: "他们", example: "They are my friends.", exampleCn: "他们是我的朋友。", tags: ["代词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 4 Unit 1",
              title: "My Day",
              content: [
                { en: "I get up at 7.", cn: "我 7 点起床。" },
                { en: "I go to school at 8.", cn: "我 8 点去上学。" },
                { en: "I go home at 4.", cn: "我 4 点回家。" },
                { en: "I go to bed at 9.", cn: "我 9 点睡觉。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 三年级 ====================
    3: {
      semester: "全一册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Time",
          words: [
            { word: "morning", phonetic: "/ˈmɔːrnɪŋ/", meaning: "早上", example: "Good morning!", exampleCn: "早上好！", tags: ["时间", "四会词"] },
            { word: "afternoon", phonetic: "/ˌæftərˈnuːn/", meaning: "下午", example: "Good afternoon!", exampleCn: "下午好！", tags: ["时间", "四会词"] },
            { word: "evening", phonetic: "/ˈiːvnɪŋ/", meaning: "晚上", example: "Good evening!", exampleCn: "晚上好！", tags: ["时间", "四会词"] },
            { word: "night", phonetic: "/naɪt/", meaning: "夜晚", example: "Good night!", exampleCn: "晚安！", tags: ["时间", "四会词"] },
            { word: "today", phonetic: "/təˈdeɪ/", meaning: "今天", example: "Today is Monday.", exampleCn: "今天是星期一。", tags: ["时间", "四会词"] },
            { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", meaning: "明天", example: "See you tomorrow.", exampleCn: "明天见。", tags: ["时间", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 1 Unit 1",
              title: "Greetings",
              content: [
                { en: "Good morning!", cn: "早上好！" },
                { en: "Good afternoon!", cn: "下午好！" },
                { en: "Good evening!", cn: "晚上好！" },
                { en: "Good night!", cn: "晚安！" }
              ]
            }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Days of Week",
          words: [
            { word: "Monday", phonetic: "/ˈmʌndeɪ/", meaning: "星期一", example: "I like Monday.", exampleCn: "我喜欢星期一。", tags: ["星期", "四会词"] },
            { word: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", meaning: "星期二", example: "Tuesday is fun.", exampleCn: "星期二很有趣。", tags: ["星期", "四会词"] },
            { word: "Wednesday", phonetic: "/ˈwenzdeɪ/", meaning: "星期三", example: "It's Wednesday today.", exampleCn: "今天是星期三。", tags: ["星期", "三会词"] },
            { word: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", meaning: "星期四", example: "Thursday is near Friday.", exampleCn: "星期四离星期五很近。", tags: ["星期", "三会词"] },
            { word: "Friday", phonetic: "/ˈfraɪdeɪ/", meaning: "星期五", example: "I love Friday!", exampleCn: "我喜欢星期五！", tags: ["星期", "四会词"] },
            { word: "Saturday", phonetic: "/ˈsætərdeɪ/", meaning: "星期六", example: "Saturday is the weekend.", exampleCn: "星期六是周末。", tags: ["星期", "三会词"] },
            { word: "Sunday", phonetic: "/ˈsʌndeɪ/", meaning: "星期日", example: "Sunday is a rest day.", exampleCn: "星期日是休息日。", tags: ["星期", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 2 Unit 1",
              title: "My Week",
              content: [
                { en: "Today is Monday.", cn: "今天是星期一。" },
                { en: "Tomorrow is Tuesday.", cn: "明天是星期二。" },
                { en: "I like Friday.", cn: "我喜欢星期五。" },
                { en: "Saturday is the weekend.", cn: "星期六是周末。" }
              ]
            }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Weather",
          words: [
            { word: "warm", phonetic: "/wɔːrm/", meaning: "温暖的", example: "Spring is warm.", exampleCn: "春天很温暖。", tags: ["天气", "四会词"] },
            { word: "hot", phonetic: "/hɒt/", meaning: "热的", example: "Summer is hot.", exampleCn: "夏天很热。", tags: ["天气", "四会词"] },
            { word: "cool", phonetic: "/kuːl/", meaning: "凉爽的", example: "Autumn is cool.", exampleCn: "秋天很凉爽。", tags: ["天气", "四会词"] },
            { word: "cold", phonetic: "/kəʊld/", meaning: "冷的", example: "Winter is cold.", exampleCn: "冬天很冷。", tags: ["天气", "四会词"] },
            { word: "sunny", phonetic: "/ˈsʌni/", meaning: "晴朗的", example: "It's sunny today.", exampleCn: "今天天气晴朗。", tags: ["天气", "四会词"] },
            { word: "rainy", phonetic: "/ˈreɪni/", meaning: "下雨的", example: "It's rainy today.", exampleCn: "今天下雨。", tags: ["天气", "四会词"] },
            { word: "cloudy", phonetic: "/ˈklaʊdi/", meaning: "多云的", example: "It's cloudy today.", exampleCn: "今天多云。", tags: ["天气", "三会词"] },
            { word: "windy", phonetic: "/ˈwɪndi/", meaning: "有风的", example: "It's windy today.", exampleCn: "今天有风。", tags: ["天气", "三会词"] },
            { word: "snowy", phonetic: "/ˈsnəʊi/", meaning: "下雪的", example: "It's snowy in winter.", exampleCn: "冬天下雪。", tags: ["天气", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 3 Unit 1",
              title: "Weather",
              content: [
                { en: "What's the weather like today?", cn: "今天天气怎么样？" },
                { en: "It's sunny and warm.", cn: "晴朗温暖。" },
                { en: "Let's go to the park.", cn: "我们去公园吧。" },
                { en: "Great idea!", cn: "好主意！" }
              ]
            }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Seasons",
          words: [
            { word: "spring", phonetic: "/sprɪŋ/", meaning: "春天", example: "Spring is warm.", exampleCn: "春天很温暖。", tags: ["季节", "四会词"] },
            { word: "summer", phonetic: "/ˈsʌmər/", meaning: "夏天", example: "Summer is hot.", exampleCn: "夏天很热。", tags: ["季节", "四会词"] },
            { word: "autumn", phonetic: "/ˈɔːtəm/", meaning: "秋天", example: "Autumn is cool.", exampleCn: "秋天很凉爽。", tags: ["季节", "四会词"] },
            { word: "winter", phonetic: "/ˈwɪntər/", meaning: "冬天", example: "Winter is cold.", exampleCn: "冬天很冷。", tags: ["季节", "四会词"] },
            { word: "fly", phonetic: "/flaɪ/", meaning: "飞", example: "Birds can fly.", exampleCn: "鸟会飞。", tags: ["动词", "四会词"] },
            { word: "swim", phonetic: "/swɪm/", meaning: "游泳", example: "Fish can swim.", exampleCn: "鱼会游泳。", tags: ["动词", "四会词"] },
            { word: "run", phonetic: "/rʌn/", meaning: "跑", example: "I can run fast.", exampleCn: "我能跑得很快。", tags: ["动词", "四会词"] },
            { word: "jump", phonetic: "/dʒʌmp/", meaning: "跳", example: "The rabbit can jump.", exampleCn: "兔子会跳。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 4 Unit 1",
              title: "Seasons",
              content: [
                { en: "What's your favourite season?", cn: "你最喜欢的季节是什么？" },
                { en: "I like spring.", cn: "我喜欢春天。" },
                { en: "It's warm.", cn: "它很温暖。" },
                { en: "We can fly kites.", cn: "我们可以放风筝。" }
              ]
            }
          ]
        },
        {
          unitId: "M5",
          unitName: "Module 5 Actions",
          words: [
            { word: "walk", phonetic: "/wɔːk/", meaning: "走", example: "I walk to school.", exampleCn: "我走路去上学。", tags: ["动词", "四会词"] },
            { word: "sing", phonetic: "/sɪŋ/", meaning: "唱歌", example: "I like to sing.", exampleCn: "我喜欢唱歌。", tags: ["动词", "四会词"] },
            { word: "dance", phonetic: "/dɑːns/", meaning: "跳舞", example: "She can dance well.", exampleCn: "她跳舞跳得很好。", tags: ["动词", "四会词"] },
            { word: "play", phonetic: "/pleɪ/", meaning: "玩", example: "Let's play football.", exampleCn: "我们踢足球吧。", tags: ["动词", "四会词"] },
            { word: "read", phonetic: "/riːd/", meaning: "读", example: "I like to read books.", exampleCn: "我喜欢读书。", tags: ["动词", "四会词"] },
            { word: "write", phonetic: "/raɪt/", meaning: "写", example: "Write your name.", exampleCn: "写下你的名字。", tags: ["动词", "四会词"] },
            { word: "draw", phonetic: "/drɔː/", meaning: "画", example: "Draw a picture.", exampleCn: "画一幅画。", tags: ["动词", "四会词"] },
            { word: "listen", phonetic: "/ˈlɪsn/", meaning: "听", example: "Listen to me.", exampleCn: "听我说。", tags: ["动词", "四会词"] },
            { word: "speak", phonetic: "/spiːk/", meaning: "说", example: "Speak English, please.", exampleCn: "请说英语。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 5 Unit 1",
              title: "I Can...",
              content: [
                { en: "I can sing.", cn: "我会唱歌。" },
                { en: "I can dance.", cn: "我会跳舞。" },
                { en: "I can read.", cn: "我会读书。" },
                { en: "I can write.", cn: "我会写字。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 四年级 ====================
    4: {
      semester: "全一册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Family",
          words: [
            { word: "friend", phonetic: "/frend/", meaning: "朋友", example: "He is my friend.", exampleCn: "他是我的朋友。", tags: ["人物", "四会词"] },
            { word: "friends", phonetic: "/frendz/", meaning: "朋友们", example: "They are my friends.", exampleCn: "他们是我的朋友们。", tags: ["人物", "三会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "哥哥/弟弟", example: "This is my brother.", exampleCn: "这是我的哥哥。", tags: ["家人", "四会词"] },
            { word: "sister", phonetic: "/ˈsɪstər/", meaning: "姐姐/妹妹", example: "This is my sister.", exampleCn: "这是我的姐姐。", tags: ["家人", "四会词"] },
            { word: "father", phonetic: "/ˈfɑːðər/", meaning: "父亲", example: "My father is a teacher.", exampleCn: "我的父亲是一名老师。", tags: ["家人", "四会词"] },
            { word: "mother", phonetic: "/ˈmʌðər/", meaning: "母亲", example: "My mother is a doctor.", exampleCn: "我的母亲是一名医生。", tags: ["家人", "四会词"] },
            { word: "grandpa", phonetic: "/ˈɡrænpɑː/", meaning: "爷爷/外公", example: "My grandpa is old.", exampleCn: "我的爷爷老了。", tags: ["家人", "四会词"] },
            { word: "grandma", phonetic: "/ˈɡrænmɑː/", meaning: "奶奶/外婆", example: "My grandma is kind.", exampleCn: "我的奶奶很和蔼。", tags: ["家人", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 1 Unit 1",
              title: "My Family",
              content: [
                { en: "This is my family.", cn: "这是我的家庭。" },
                { en: "This is my father.", cn: "这是我的父亲。" },
                { en: "He is a teacher.", cn: "他是一名老师。" },
                { en: "This is my mother.", cn: "这是我的母亲。" },
                { en: "She is a doctor.", cn: "她是一名医生。" }
              ]
            }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Extended Family",
          words: [
            { word: "uncle", phonetic: "/ˈʌŋkl/", meaning: "叔叔/舅舅", example: "My uncle is tall.", exampleCn: "我的叔叔很高。", tags: ["家人", "三会词"] },
            { word: "aunt", phonetic: "/ɑːnt/", meaning: "阿姨/姑姑", example: "My aunt is pretty.", exampleCn: "我的阿姨很漂亮。", tags: ["家人", "三会词"] },
            { word: "cousin", phonetic: "/ˈkʌzn/", meaning: "堂/表兄弟姐妹", example: "My cousin is my age.", exampleCn: "我的堂兄和我同岁。", tags: ["家人", "三会词"] },
            { word: "baby", phonetic: "/ˈbeɪbi/", meaning: "婴儿", example: "The baby is cute.", exampleCn: "婴儿很可爱。", tags: ["人物", "三会词"] },
            { word: "job", phonetic: "/dʒɒb/", meaning: "工作", example: "What's your job?", exampleCn: "你的工作是什么？", tags: ["职业", "三会词"] },
            { word: "doctor", phonetic: "/ˈdɒktər/", meaning: "医生", example: "He is a doctor.", exampleCn: "他是一名医生。", tags: ["职业", "四会词"] },
            { word: "nurse", phonetic: "/nɜːrs/", meaning: "护士", example: "She is a nurse.", exampleCn: "她是一名护士。", tags: ["职业", "四会词"] },
            { word: "driver", phonetic: "/ˈdraɪvər/", meaning: "司机", example: "He is a driver.", exampleCn: "他是一名司机。", tags: ["职业", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 2 Unit 1",
              title: "My Uncle",
              content: [
                { en: "This is my uncle.", cn: "这是我的叔叔。" },
                { en: "He is a doctor.", cn: "他是一名医生。" },
                { en: "This is my aunt.", cn: "这是我的阿姨。" },
                { en: "She is a nurse.", cn: "她是一名护士。" }
              ]
            }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 My Home",
          words: [
            { word: "home", phonetic: "/həʊm/", meaning: "家", example: "This is my home.", exampleCn: "这是我的家。", tags: ["地点", "四会词"] },
            { word: "room", phonetic: "/ruːm/", meaning: "房间", example: "This is my room.", exampleCn: "这是我的房间。", tags: ["地点", "四会词"] },
            { word: "bedroom", phonetic: "/ˈbedruːm/", meaning: "卧室", example: "My bedroom is small.", exampleCn: "我的卧室很小。", tags: ["地点", "四会词"] },
            { word: "living room", phonetic: "/ˈlɪvɪŋ ruːm/", meaning: "客厅", example: "We watch TV in the living room.", exampleCn: "我们在客厅看电视。", tags: ["地点", "三会词"] },
            { word: "kitchen", phonetic: "/ˈkɪtʃɪn/", meaning: "厨房", example: "Mom cooks in the kitchen.", exampleCn: "妈妈在厨房做饭。", tags: ["地点", "三会词"] },
            { word: "bathroom", phonetic: "/ˈbæθruːm/", meaning: "浴室", example: "I wash in the bathroom.", exampleCn: "我在浴室洗漱。", tags: ["地点", "三会词"] },
            { word: "study", phonetic: "/ˈstʌdi/", meaning: "书房", example: "I study in the study.", exampleCn: "我在书房学习。", tags: ["地点", "三会词"] },
            { word: "farmer", phonetic: "/ˈfɑːrmər/", meaning: "农民", example: "He is a farmer.", exampleCn: "他是一名农民。", tags: ["职业", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 3 Unit 1",
              title: "My Home",
              content: [
                { en: "Welcome to my home!", cn: "欢迎来到我家！" },
                { en: "This is the living room.", cn: "这是客厅。" },
                { en: "That is my bedroom.", cn: "那是我的卧室。" },
                { en: "I love my home.", cn: "我爱我的家。" }
              ]
            }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Furniture",
          words: [
            { word: "bed", phonetic: "/bed/", meaning: "床", example: "This is my bed.", exampleCn: "这是我的床。", tags: ["家具", "四会词"] },
            { word: "sofa", phonetic: "/ˈsəʊfə/", meaning: "沙发", example: "Sit on the sofa.", exampleCn: "坐在沙发上。", tags: ["家具", "三会词"] },
            { word: "table", phonetic: "/ˈteɪbl/", meaning: "桌子", example: "This is a table.", exampleCn: "这是一张桌子。", tags: ["家具", "四会词"] },
            { word: "phone", phonetic: "/fəʊn/", meaning: "电话", example: "This is my phone.", exampleCn: "这是我的电话。", tags: ["物品", "三会词"] },
            { word: "computer", phonetic: "/kəmˈpjuːtər/", meaning: "电脑", example: "I play on the computer.", exampleCn: "我在电脑上玩。", tags: ["物品", "三会词"] },
            { word: "TV", phonetic: "/ˌtiː ˈviː/", meaning: "电视", example: "We watch TV.", exampleCn: "我们看电视。", tags: ["物品", "三会词"] },
            { word: "fridge", phonetic: "/frɪdʒ/", meaning: "冰箱", example: "The food is in the fridge.", exampleCn: "食物在冰箱里。", tags: ["家具", "三会词"] },
            { word: "cook", phonetic: "/kʊk/", meaning: "厨师", example: "She is a cook.", exampleCn: "她是一名厨师。", tags: ["职业", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 4 Unit 1",
              title: "My Room",
              content: [
                { en: "This is my room.", cn: "这是我的房间。" },
                { en: "This is my bed.", cn: "这是我的床。" },
                { en: "This is my computer.", cn: "这是我的电脑。" },
                { en: "I like my room.", cn: "我喜欢我的房间。" }
              ]
            }
          ]
        },
        {
          unitId: "M5",
          unitName: "Module 5 Professions",
          words: [
            { word: "policeman", phonetic: "/pəˈliːsmən/", meaning: "警察", example: "He is a policeman.", exampleCn: "他是一名警察。", tags: ["职业", "四会词"] },
            { word: "fireman", phonetic: "/ˈfaɪərmən/", meaning: "消防员", example: "He is a fireman.", exampleCn: "他是一名消防员。", tags: ["职业", "四会词"] },
            { word: "teacher", phonetic: "/ˈtiːtʃər/", meaning: "老师", example: "She is a teacher.", exampleCn: "她是一名老师。", tags: ["职业", "四会词"] },
            { word: "doctor", phonetic: "/ˈdɒktər/", meaning: "医生", example: "He is a doctor.", exampleCn: "他是一名医生。", tags: ["职业", "四会词"] },
            { word: "nurse", phonetic: "/nɜːrs/", meaning: "护士", example: "She is a nurse.", exampleCn: "她是一名护士。", tags: ["职业", "四会词"] },
            { word: "driver", phonetic: "/ˈdraɪvər/", meaning: "司机", example: "He is a driver.", exampleCn: "他是一名司机。", tags: ["职业", "四会词"] },
            { word: "farmer", phonetic: "/ˈfɑːrmər/", meaning: "农民", example: "He is a farmer.", exampleCn: "他是一名农民。", tags: ["职业", "四会词"] },
            { word: "cook", phonetic: "/kʊk/", meaning: "厨师", example: "She is a cook.", exampleCn: "她是一名厨师。", tags: ["职业", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 5 Unit 1",
              title: "Jobs",
              content: [
                { en: "What's your father?", cn: "你父亲是做什么的？" },
                { en: "He's a policeman.", cn: "他是一名警察。" },
                { en: "What's your mother?", cn: "你母亲是做什么的？" },
                { en: "She's a nurse.", cn: "她是一名护士。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 五年级 ====================
    5: {
      semester: "全一册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Position",
          words: [
            { word: "clock", phonetic: "/klɒk/", meaning: "时钟", example: "The clock is on the wall.", exampleCn: "时钟在墙上。", tags: ["物品", "四会词"] },
            { word: "plant", phonetic: "/plɑːnt/", meaning: "植物", example: "There is a plant.", exampleCn: "有一株植物。", tags: ["物品", "三会词"] },
            { word: "bottle", phonetic: "/ˈbɒtl/", meaning: "瓶子", example: "There is a bottle.", exampleCn: "有一个瓶子。", tags: ["物品", "三会词"] },
            { word: "water bottle", phonetic: "/ˈwɔːtər ˈbɒtl/", meaning: "水瓶", example: "This is my water bottle.", exampleCn: "这是我的水瓶。", tags: ["物品", "三会词"] },
            { word: "bike", phonetic: "/baɪk/", meaning: "自行车", example: "I ride a bike.", exampleCn: "我骑自行车。", tags: ["交通", "四会词"] },
            { word: "photo", phonetic: "/ˈfəʊtəʊ/", meaning: "照片", example: "This is a photo of my family.", exampleCn: "这是一张我的全家福。", tags: ["物品", "三会词"] },
            { word: "front", phonetic: "/frʌnt/", meaning: "前面", example: "In front of the house.", exampleCn: "在房子前面。", tags: ["方位", "三会词"] },
            { word: "behind", phonetic: "/bɪˈhaɪnd/", meaning: "后面", example: "Behind the door.", exampleCn: "在门后面。", tags: ["方位", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 1 Unit 1",
              title: "Where Is It?",
              content: [
                { en: "Where is the clock?", cn: "时钟在哪里？" },
                { en: "It's on the wall.", cn: "它在墙上。" },
                { en: "Where is the plant?", cn: "植物在哪里？" },
                { en: "It's behind the door.", cn: "它在门后面。" }
              ]
            }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 More Positions",
          words: [
            { word: "beside", phonetic: "/bɪˈsaɪd/", meaning: "旁边", example: "Beside the window.", exampleCn: "在窗户旁边。", tags: ["方位", "三会词"] },
            { word: "between", phonetic: "/bɪˈtwiːn/", meaning: "中间", example: "Between the two books.", exampleCn: "在两本书中间。", tags: ["方位", "三会词"] },
            { word: "above", phonetic: "/əˈbʌv/", meaning: "上面", example: "Above the desk.", exampleCn: "在书桌上面。", tags: ["方位", "三会词"] },
            { word: "below", phonetic: "/bɪˈləʊ/", meaning: "下面", example: "Below the chair.", exampleCn: "在椅子下面。", tags: ["方位", "三会词"] },
            { word: "in", phonetic: "/ɪn/", meaning: "在...里面", example: "In the box.", exampleCn: "在盒子里面。", tags: ["方位", "四会词"] },
            { word: "on", phonetic: "/ɒn/", meaning: "在...上面", example: "On the table.", exampleCn: "在桌子上面。", tags: ["方位", "四会词"] },
            { word: "under", phonetic: "/ˈʌndər/", meaning: "在...下面", example: "Under the bed.", exampleCn: "在床下面。", tags: ["方位", "四会词"] },
            { word: "near", phonetic: "/nɪər/", meaning: "靠近", example: "Near the window.", exampleCn: "靠近窗户。", tags: ["方位", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 2 Unit 1",
              title: "Positions",
              content: [
                { en: "The cat is on the bed.", cn: "猫在床上。" },
                { en: "The dog is under the table.", cn: "狗在桌子下面。" },
                { en: "The bird is beside the window.", cn: "鸟在窗户旁边。" },
                { en: "The ball is between the chairs.", cn: "球在两把椅子中间。" }
              ]
            }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Nature",
          words: [
            { word: "there", phonetic: "/ðeər/", meaning: "那里", example: "Over there.", exampleCn: "在那里。", tags: ["方位", "四会词"] },
            { word: "here", phonetic: "/hɪər/", meaning: "这里", example: "Come here.", exampleCn: "来这里。", tags: ["方位", "四会词"] },
            { word: "forest", phonetic: "/ˈfɒrɪst/", meaning: "森林", example: "There is a forest.", exampleCn: "有一片森林。", tags: ["自然", "四会词"] },
            { word: "river", phonetic: "/ˈrɪvər/", meaning: "河流", example: "There is a river.", exampleCn: "有一条河。", tags: ["自然", "四会词"] },
            { word: "lake", phonetic: "/leɪk/", meaning: "湖泊", example: "There is a lake.", exampleCn: "有一个湖。", tags: ["自然", "四会词"] },
            { word: "mountain", phonetic: "/ˈmaʊntən/", meaning: "山", example: "There is a mountain.", exampleCn: "有一座山。", tags: ["自然", "三会词"] },
            { word: "hill", phonetic: "/hɪl/", meaning: "小山", example: "There is a hill.", exampleCn: "有一座小山。", tags: ["自然", "三会词"] },
            { word: "tree", phonetic: "/triː/", meaning: "树", example: "There are many trees.", exampleCn: "有很多树。", tags: ["自然", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 3 Unit 1",
              title: "In Nature",
              content: [
                { en: "There is a forest.", cn: "有一片森林。" },
                { en: "There is a river.", cn: "有一条河。" },
                { en: "There is a lake.", cn: "有一个湖。" },
                { en: "There are many trees.", cn: "有很多树。" }
              ]
            }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 More Nature",
          words: [
            { word: "flower", phonetic: "/ˈflaʊər/", meaning: "花", example: "There are many flowers.", exampleCn: "有很多花。", tags: ["自然", "四会词"] },
            { word: "grass", phonetic: "/ɡrɑːs/", meaning: "草", example: "The grass is green.", exampleCn: "草是绿色的。", tags: ["自然", "四会词"] },
            { word: "village", phonetic: "/ˈvɪlɪdʒ/", meaning: "村庄", example: "There is a village.", exampleCn: "有一个村庄。", tags: ["地点", "三会词"] },
            { word: "city", phonetic: "/ˈsɪti/", meaning: "城市", example: "There is a city.", exampleCn: "有一座城市。", tags: ["地点", "三会词"] },
            { word: "bridge", phonetic: "/brɪdʒ/", meaning: "桥", example: "There is a bridge.", exampleCn: "有一座桥。", tags: ["地点", "三会词"] },
            { word: "building", phonetic: "/ˈbɪldɪŋ/", meaning: "建筑物", example: "There is a tall building.", exampleCn: "有一座高楼。", tags: ["地点", "三会词"] },
            { word: "house", phonetic: "/haʊs/", meaning: "房子", example: "There is a house.", exampleCn: "有一座房子。", tags: ["地点", "四会词"] },
            { word: "boat", phonetic: "/bəʊt/", meaning: "小船", example: "There is a boat on the lake.", exampleCn: "湖上有一条船。", tags: ["交通", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 4 Unit 1",
              title: "My Village",
              content: [
                { en: "There is a village.", cn: "有一个村庄。" },
                { en: "There is a river near the village.", cn: "村庄附近有一条河。" },
                { en: "There are many houses.", cn: "有很多房子。" },
                { en: "I love my village.", cn: "我爱我的村庄。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 六年级 ====================
    6: {
      semester: "全一册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Past Experiences",
          words: [
            { word: "yesterday", phonetic: "/ˈjestərdeɪ/", meaning: "昨天", example: "Yesterday was Sunday.", exampleCn: "昨天是星期天。", tags: ["时间", "四会词"] },
            { word: "last", phonetic: "/lɑːst/", meaning: "上一个", example: "Last week I went to the park.", exampleCn: "上周我去了公园。", tags: ["时间", "三会词"] },
            { word: "went", phonetic: "/went/", meaning: "去（过去式）", example: "I went to school.", exampleCn: "我去了学校。", tags: ["动词", "四会词"] },
            { word: "saw", phonetic: "/sɔː/", meaning: "看见（过去式）", example: "I saw a dog.", exampleCn: "我看见了一只狗。", tags: ["动词", "三会词"] },
            { word: "ate", phonetic: "/eɪt/", meaning: "吃（过去式）", example: "I ate an apple.", exampleCn: "我吃了一个苹果。", tags: ["动词", "三会词"] },
            { word: "had", phonetic: "/hæd/", meaning: "有（过去式）", example: "I had a good time.", exampleCn: "我玩得很开心。", tags: ["动词", "四会词"] },
            { word: "was", phonetic: "/wɒz/", meaning: "是（过去式）", example: "It was fun.", exampleCn: "这很有趣。", tags: ["动词", "四会词"] },
            { word: "were", phonetic: "/wɜːr/", meaning: "是（过去式复数）", example: "They were happy.", exampleCn: "他们很开心。", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 1 Unit 1",
              title: "Yesterday",
              content: [
                { en: "Where did you go yesterday?", cn: "你昨天去哪里了？" },
                { en: "I went to the park.", cn: "我去了公园。" },
                { en: "Did you have fun?", cn: "你玩得开心吗？" },
                { en: "Yes, I did.", cn: "是的，我很开心。" }
              ]
            }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Future Plans",
          words: [
            { word: "will", phonetic: "/wɪl/", meaning: "将要", example: "I will go to school.", exampleCn: "我将要去学校。", tags: ["动词", "四会词"] },
            { word: "going to", phonetic: "/ˈɡəʊɪŋ tuː/", meaning: "打算", example: "I'm going to read a book.", exampleCn: "我打算读一本书。", tags: ["短语", "四会词"] },
            { word: "plan", phonetic: "/plæn/", meaning: "计划", example: "What's your plan?", exampleCn: "你的计划是什么？", tags: ["名词", "三会词"] },
            { word: "travel", phonetic: "/ˈtrævl/", meaning: "旅行", example: "I will travel to Beijing.", exampleCn: "我将去北京旅行。", tags: ["动词", "四会词"] },
            { word: "visit", phonetic: "/ˈvɪzɪt/", meaning: "参观", example: "I will visit the Great Wall.", exampleCn: "我将参观长城。", tags: ["动词", "四会词"] },
            { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", meaning: "明天", example: "I will go tomorrow.", exampleCn: "我明天去。", tags: ["时间", "四会词"] },
            { word: "next", phonetic: "/nekst/", meaning: "下一个", example: "Next week is holiday.", exampleCn: "下周是假期。", tags: ["时间", "三会词"] },
            { word: "soon", phonetic: "/suːn/", meaning: "很快", example: "I will come back soon.", exampleCn: "我很快就会回来。", tags: ["时间", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 2 Unit 1",
              title: "My Plan",
              content: [
                { en: "What are you going to do?", cn: "你打算做什么？" },
                { en: "I'm going to visit my grandma.", cn: "我打算去看望我奶奶。" },
                { en: "That sounds great!", cn: "听起来很棒！" },
                { en: "Have a good time!", cn: "玩得开心！" }
              ]
            }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Comparisons",
          words: [
            { word: "than", phonetic: "/ðæn/", meaning: "比", example: "I'm taller than you.", exampleCn: "我比你高。", tags: ["介词", "四会词"] },
            { word: "older", phonetic: "/ˈəʊldər/", meaning: "更老的", example: "My grandpa is older.", exampleCn: "我的爷爷更老。", tags: ["形容词", "四会词"] },
            { word: "younger", phonetic: "/ˈjʌŋɡər/", meaning: "更年轻的", example: "My sister is younger.", exampleCn: "我的姐姐更年轻。", tags: ["形容词", "四会词"] },
            { word: "taller", phonetic: "/ˈtɔːlər/", meaning: "更高的", example: "He is taller than me.", exampleCn: "他比我高。", tags: ["形容词", "四会词"] },
            { word: "shorter", phonetic: "/ˈʃɔːrtər/", meaning: "更矮的", example: "She is shorter than me.", exampleCn: "她比我矮。", tags: ["形容词", "四会词"] },
            { word: "longer", phonetic: "/ˈlɒŋɡər/", meaning: "更长的", example: "The snake is longer.", exampleCn: "蛇更长。", tags: ["形容词", "四会词"] },
            { word: "stronger", phonetic: "/ˈstrɒŋɡər/", meaning: "更强壮的", example: "The elephant is stronger.", exampleCn: "大象更强壮。", tags: ["形容词", "三会词"] },
            { word: "better", phonetic: "/ˈbetər/", meaning: "更好的", example: "This one is better.", exampleCn: "这个更好。", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 3 Unit 1",
              title: "Comparisons",
              content: [
                { en: "I'm taller than you.", cn: "我比你高。" },
                { en: "The elephant is bigger than the dog.", cn: "大象比狗大。" },
                { en: "The monkey is smaller than the tiger.", cn: "猴子比老虎小。" },
                { en: "I'm older than my sister.", cn: "我比我姐姐大。" }
              ]
            }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Hobbies",
          words: [
            { word: "hobby", phonetic: "/ˈhɒbi/", meaning: "爱好", example: "What's your hobby?", exampleCn: "你的爱好是什么？", tags: ["名词", "四会词"] },
            { word: "collect", phonetic: "/kəˈlekt/", meaning: "收集", example: "I collect stamps.", exampleCn: "我收集邮票。", tags: ["动词", "四会词"] },
            { word: "stamp", phonetic: "/stæmp/", meaning: "邮票", example: "I have many stamps.", exampleCn: "我有很多邮票。", tags: ["名词", "三会词"] },
            { word: "hobby", phonetic: "/ˈhɒbi/", meaning: "爱好", example: "My hobby is reading.", exampleCn: "我的爱好是阅读。", tags: ["名词", "四会词"] },
            { word: "interest", phonetic: "/ˈɪntrəst/", meaning: "兴趣", example: "I have many interests.", exampleCn: "我有很多兴趣。", tags: ["名词", "三会词"] },
            { word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", meaning: "享受", example: "I enjoy reading.", exampleCn: "我喜欢阅读。", tags: ["动词", "四会词"] },
            { word: "prefer", phonetic: "/prɪˈfɜːr/", meaning: "更喜欢", example: "I prefer music.", exampleCn: "我更喜欢音乐。", tags: ["动词", "三会词"] },
            { word: "favorite", phonetic: "/ˈfeɪvərɪt/", meaning: "最喜欢的", example: "What's your favorite color?", exampleCn: "你最喜欢的颜色是什么？", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 4 Unit 1",
              title: "My Hobby",
              content: [
                { en: "What's your hobby?", cn: "你的爱好是什么？" },
                { en: "I like collecting stamps.", cn: "我喜欢收集邮票。" },
                { en: "That's interesting!", cn: "真有趣！" },
                { en: "I enjoy reading books.", cn: "我喜欢读书。" }
              ]
            }
          ]
        },
        {
          unitId: "M5",
          unitName: "Module 5 Review",
          words: [
            { word: "primary school", phonetic: "/ˈpraɪməri skuːl/", meaning: "小学", example: "I'm in primary school.", exampleCn: "我在上小学。", tags: ["地点", "三会词"] },
            { word: "middle school", phonetic: "/ˌmɪdl ˈskuːl/", meaning: "中学", example: "I will go to middle school.", exampleCn: "我将上中学。", tags: ["地点", "三会词"] },
            { word: "graduate", phonetic: "/ˈɡrædʒueɪt/", meaning: "毕业", example: "I will graduate soon.", exampleCn: "我即将毕业。", tags: ["动词", "三会词"] },
            { word: "memory", phonetic: "/ˈmeməri/", meaning: "回忆", example: "I have many good memories.", exampleCn: "我有很多美好的回忆。", tags: ["名词", "三会词"] },
            { word: "future", phonetic: "/ˈfjuːtʃər/", meaning: "未来", example: "The future is bright.", exampleCn: "未来是光明的。", tags: ["名词", "四会词"] },
            { word: "dream", phonetic: "/driːm/", meaning: "梦想", example: "My dream is to be a teacher.", exampleCn: "我的梦想是成为一名老师。", tags: ["名词", "四会词"] },
            { word: "wish", phonetic: "/wɪʃ/", meaning: "祝愿", example: "Best wishes to you!", exampleCn: "向你致以最美好的祝愿！", tags: ["名词", "三会词"] },
            { word: "good luck", phonetic: "/ɡʊd lʌk/", meaning: "好运", example: "Good luck to you!", exampleCn: "祝你好运！", tags: ["短语", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 5 Unit 1",
              title: "Goodbye, Primary School",
              content: [
                { en: "I will graduate soon.", cn: "我即将毕业。" },
                { en: "I have many good memories.", cn: "我有很多美好的回忆。" },
                { en: "I will go to middle school.", cn: "我将上中学。" },
                { en: "Best wishes to you!", cn: "向你致以最美好的祝愿！" }
              ]
            }
          ]
        }
      ]
    }
  }
};