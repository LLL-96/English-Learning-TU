// 外研社版英语教材数据 - 一年级起点（完整版）
// 依据最新教材编写，包含 1-6 年级所有单元的单词和课文
// 数据结构已统一：word, phonetic, meaning, example, exampleCn, tags
var waiyanData = window.waiyanData = {
  versionId: "waiyan",
  versionName: "外研社版",
  description: "外语教学与研究出版社 | 一年级起点 | 南方地区广泛使用",
  startGrade: 1,
  lastUpdated: "2026-01",
  grades: {
    // ==================== 一年级上册 ====================
    1: {
      semester: "上册",
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
        },
        {
          unitId: "M6",
          unitName: "Module 6 Classroom",
          words: [
            { word: "classroom", phonetic: "/ˈklɑːsruːm/", meaning: "教室", example: "This is my classroom.", exampleCn: "这是我的教室。", tags: ["地点", "四会词"] },
            { word: "desk", phonetic: "/desk/", meaning: "课桌", example: "This is my desk.", exampleCn: "这是我的课桌。", tags: ["物品", "四会词"] },
            { word: "chair", phonetic: "/tʃeər/", meaning: "椅子", example: "Sit on the chair.", exampleCn: "坐在椅子上。", tags: ["物品", "四会词"] },
            { word: "pencil", phonetic: "/ˈpensl/", meaning: "铅笔", example: "I have a pencil.", exampleCn: "我有一支铅笔。", tags: ["文具", "四会词"] },
            { word: "ruler", phonetic: "/ˈruːlər/", meaning: "尺子", example: "This is my ruler.", exampleCn: "这是我的尺子。", tags: ["文具", "四会词"] },
            { word: "eraser", phonetic: "/ɪˈreɪzər/", meaning: "橡皮", example: "I have an eraser.", exampleCn: "我有一块橡皮。", tags: ["文具", "三会词"] },
            { word: "crayon", phonetic: "/ˈkreɪən/", meaning: "蜡笔", example: "I like crayons.", exampleCn: "我喜欢蜡笔。", tags: ["文具", "三会词"] },
            { word: "chalk", phonetic: "/tʃɔːk/", meaning: "粉笔", example: "The teacher uses chalk.", exampleCn: "老师用粉笔。", tags: ["文具", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 6 Unit 1",
              title: "Classroom",
              content: [
                { en: "This is my classroom.", cn: "这是我的教室。" },
                { en: "This is my desk.", cn: "这是我的课桌。" },
                { en: "This is my chair.", cn: "这是我的椅子。" },
                { en: "I like my classroom.", cn: "我喜欢我的教室。" }
              ]
            }
          ]
        },
        {
          unitId: "M7",
          unitName: "Module 7 Happy Birthday",
          words: [
            { word: "happy", phonetic: "/ˈhæpi/", meaning: "快乐的", example: "Happy birthday!", exampleCn: "生日快乐！", tags: ["形容词", "四会词"] },
            { word: "birthday", phonetic: "/ˈbɜːrθdeɪ/", meaning: "生日", example: "Today is my birthday.", exampleCn: "今天是我的生日。", tags: ["名词", "四会词"] },
            { word: "cake", phonetic: "/keɪk/", meaning: "蛋糕", example: "I like cake.", exampleCn: "我喜欢蛋糕。", tags: ["食物", "四会词"] },
            { word: "present", phonetic: "/ˈpreznt/", meaning: "礼物", example: "This is a present.", exampleCn: "这是一个礼物。", tags: ["名词", "四会词"] },
            { word: "party", phonetic: "/ˈpɑːrti/", meaning: "派对", example: "Come to my party.", exampleCn: "来参加我的派对。", tags: ["名词", "三会词"] },
            { word: "candle", phonetic: "/ˈkændl/", meaning: "蜡烛", example: "Blow out the candles.", exampleCn: "吹灭蜡烛。", tags: ["名词", "三会词"] },
            { word: "how old", phonetic: "/haʊ oʊld/", meaning: "几岁", example: "How old are you?", exampleCn: "你几岁了？", tags: ["短语", "四会词"] },
            { word: "one", phonetic: "/wʌn/", meaning: "一", example: "I am one.", exampleCn: "我一岁。", tags: ["数字", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 7 Unit 1",
              title: "Happy Birthday",
              content: [
                { en: "Happy birthday, Sam!", cn: "生日快乐，萨姆！" },
                { en: "Thank you!", cn: "谢谢你！" },
                { en: "How old are you?", cn: "你几岁了？" },
                { en: "I'm six.", cn: "我六岁了。" }
              ]
            }
          ]
        },
        {
          unitId: "M8",
          unitName: "Module 8 Animals",
          words: [
            { word: "cat", phonetic: "/kæt/", meaning: "猫", example: "It's a cat.", exampleCn: "它是一只猫。", tags: ["动物", "四会词"] },
            { word: "dog", phonetic: "/dɒɡ/", meaning: "狗", example: "It's a dog.", exampleCn: "它是一只狗。", tags: ["动物", "四会词"] },
            { word: "bird", phonetic: "/bɜːrd/", meaning: "鸟", example: "It's a bird.", exampleCn: "它是一只鸟。", tags: ["动物", "四会词"] },
            { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼", example: "It's a fish.", exampleCn: "它是一条鱼。", tags: ["动物", "四会词"] },
            { word: "panda", phonetic: "/ˈpændə/", meaning: "熊猫", example: "The panda is cute.", exampleCn: "熊猫很可爱。", tags: ["动物", "四会词"] },
            { word: "monkey", phonetic: "/ˈmʌŋki/", meaning: "猴子", example: "The monkey is funny.", exampleCn: "猴子很滑稽。", tags: ["动物", "三会词"] },
            { word: "tiger", phonetic: "/ˈtaɪɡər/", meaning: "老虎", example: "The tiger is big.", exampleCn: "老虎很大。", tags: ["动物", "三会词"] },
            { word: "lion", phonetic: "/ˈlaɪən/", meaning: "狮子", example: "The lion is strong.", exampleCn: "狮子很强壮。", tags: ["动物", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 8 Unit 1",
              title: "Animals",
              content: [
                { en: "What's this?", cn: "这是什么？" },
                { en: "It's a cat.", cn: "它是一只猫。" },
                { en: "What's that?", cn: "那是什么？" },
                { en: "It's a panda.", cn: "它是一只熊猫。" }
              ]
            }
          ]
        },
        {
          unitId: "M9",
          unitName: "Module 9 Family",
          words: [
            { word: "father", phonetic: "/ˈfɑːðər/", meaning: "父亲", example: "This is my father.", exampleCn: "这是我的父亲。", tags: ["家人", "四会词"] },
            { word: "mother", phonetic: "/ˈmʌðər/", meaning: "母亲", example: "This is my mother.", exampleCn: "这是我的母亲。", tags: ["家人", "四会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "兄弟", example: "This is my brother.", exampleCn: "这是我的兄弟。", tags: ["家人", "四会词"] },
            { word: "sister", phonetic: "/ˈsɪstər/", meaning: "姐妹", example: "This is my sister.", exampleCn: "这是我的姐妹。", tags: ["家人", "四会词"] },
            { word: "grandpa", phonetic: "/ˈɡrænpɑː/", meaning: "爷爷", example: "This is my grandpa.", exampleCn: "这是我的爷爷。", tags: ["家人", "三会词"] },
            { word: "grandma", phonetic: "/ˈɡrænmɑː/", meaning: "奶奶", example: "This is my grandma.", exampleCn: "这是我的奶奶。", tags: ["家人", "三会词"] },
            { word: "family", phonetic: "/ˈfæməli/", meaning: "家庭", example: "This is my family.", exampleCn: "这是我的家庭。", tags: ["名词", "四会词"] },
            { word: "friend", phonetic: "/frend/", meaning: "朋友", example: "This is my friend.", exampleCn: "这是我的朋友。", tags: ["人物", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 9 Unit 1",
              title: "Family",
              content: [
                { en: "This is my father.", cn: "这是我的父亲。" },
                { en: "This is my mother.", cn: "这是我的母亲。" },
                { en: "This is my family.", cn: "这是我的家庭。" },
                { en: "I love my family.", cn: "我爱我的家庭。" }
              ]
            }
          ]
        },
        {
          unitId: "M10",
          unitName: "Module 10 Review",
          words: [
            { word: "yes", phonetic: "/jes/", meaning: "是的", example: "Yes, it is.", exampleCn: "是的，它是。", tags: ["感叹", "四会词"] },
            { word: "no", phonetic: "/nəʊ/", meaning: "不", example: "No, it isn't.", exampleCn: "不，它不是。", tags: ["感叹", "四会词"] },
            { word: "please", phonetic: "/pliːz/", meaning: "请", example: "Sit down, please.", exampleCn: "请坐下。", tags: ["礼貌", "四会词"] },
            { word: "sorry", phonetic: "/ˈsɒri/", meaning: "对不起", example: "Sorry!", exampleCn: "对不起！", tags: ["礼貌", "四会词"] },
            { word: "thank you", phonetic: "/θæŋk juː/", meaning: "谢谢你", example: "Thank you!", exampleCn: "谢谢你！", tags: ["礼貌", "四会词"] },
            { word: "stand up", phonetic: "/stænd ʌp/", meaning: "起立", example: "Stand up, please.", exampleCn: "请起立。", tags: ["短语", "四会词"] },
            { word: "sit down", phonetic: "/sɪt daʊn/", meaning: "坐下", example: "Sit down, please.", exampleCn: "请坐下。", tags: ["短语", "四会词"] },
            { word: "again", phonetic: "/əˈɡen/", meaning: "再一次", example: "Say it again.", exampleCn: "再说一遍。", tags: ["副词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 10 Unit 1",
              title: "Review",
              content: [
                { en: "Hello! What's your name?", cn: "你好！你叫什么名字？" },
                { en: "I'm Sam.", cn: "我是萨姆。" },
                { en: "How old are you?", cn: "你几岁了？" },
                { en: "I'm six.", cn: "我六岁了。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 二年级上册 ====================
    2: {
      semester: "上册",
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
        },
        { unitId: "M5", unitName: "Module 5 Sports", words: [
          { word: "football", phonetic: "/ˈfʊtbɔːl/", meaning: "足球", example: "I play football.", exampleCn: "我踢足球。", tags: ["运动", "四会词"] },
          { word: "basketball", phonetic: "/ˈbɑːskɪtbɔːl/", meaning: "篮球", example: "I like basketball.", exampleCn: "我喜欢篮球。", tags: ["运动", "四会词"] },
          { word: "table tennis", phonetic: "/ˈteɪbl ˈtenɪs/", meaning: "乒乓球", example: "I play table tennis.", exampleCn: "我打乒乓球。", tags: ["运动", "三会词"] },
          { word: "swimming", phonetic: "/ˈswɪmɪŋ/", meaning: "游泳", example: "I like swimming.", exampleCn: "我喜欢游泳。", tags: ["运动", "四会词"] },
          { word: "running", phonetic: "/ˈrʌnɪŋ/", meaning: "跑步", example: "I like running.", exampleCn: "我喜欢跑步。", tags: ["运动", "四会词"] },
          { word: "jump", phonetic: "/dʒʌmp/", meaning: "跳", example: "I can jump high.", exampleCn: "我能跳得很高。", tags: ["动词", "四会词"] },
          { word: "ride", phonetic: "/raɪd/", meaning: "骑", example: "I ride a bike.", exampleCn: "我骑自行车。", tags: ["动词", "四会词"] },
          { word: "skip", phonetic: "/skɪp/", meaning: "跳绳", example: "I like skipping.", exampleCn: "我喜欢跳绳。", tags: ["动词", "三会词"] }
        ], texts: [{ lesson: "Module 5 Unit 1", title: "Sports", content: [{ en: "Do you like football?", cn: "你喜欢足球吗？" }, { en: "Yes, I do. I like basketball too.", cn: "是的。我也喜欢篮球。" }, { en: "What about swimming?", cn: "游泳呢？" }, { en: "I like swimming very much!", cn: "我非常喜欢游泳！" }] }] },
        { unitId: "M6", unitName: "Module 6 Festivals", words: [
          { word: "Christmas", phonetic: "/ˈkrɪsməs/", meaning: "圣诞节", example: "Merry Christmas!", exampleCn: "圣诞快乐！", tags: ["节日", "四会词"] },
          { word: "New Year", phonetic: "/njuː jɪər/", meaning: "新年", example: "Happy New Year!", exampleCn: "新年快乐！", tags: ["节日", "四会词"] },
          { word: "present", phonetic: "/ˈpreznt/", meaning: "礼物", example: "I have a present.", exampleCn: "我有一个礼物。", tags: ["名词", "四会词"] },
          { word: "tree", phonetic: "/triː/", meaning: "树", example: "A Christmas tree.", exampleCn: "圣诞树。", tags: ["名词", "四会词"] },
          { word: "card", phonetic: "/kɑːrd/", meaning: "卡片", example: "I made a card.", exampleCn: "我做了一张卡片。", tags: ["名词", "三会词"] },
          { word: "song", phonetic: "/sɒŋ/", meaning: "歌曲", example: "We sing songs.", exampleCn: "我们唱歌。", tags: ["名词", "四会词"] },
          { word: "dinner", phonetic: "/ˈdɪnər/", meaning: "晚餐", example: "We have a big dinner.", exampleCn: "我们吃一顿丰盛的晚餐。", tags: ["名词", "三会词"] },
          { word: "celebrate", phonetic: "/ˈselɪbreɪt/", meaning: "庆祝", example: "We celebrate together.", exampleCn: "我们一起庆祝。", tags: ["动词", "三会词"] }
        ], texts: [{ lesson: "Module 6 Unit 1", title: "Festivals", content: [{ en: "Merry Christmas!", cn: "圣诞快乐！" }, { en: "Merry Christmas!", cn: "圣诞快乐！" }, { en: "What do you do at Christmas?", cn: "你圣诞节做什么？" }, { en: "We sing songs and have dinner.", cn: "我们唱歌和吃晚餐。" }] }] },
        { unitId: "M7", unitName: "Module 7 Feelings", words: [
          { word: "happy", phonetic: "/ˈhæpi/", meaning: "开心的", example: "I'm happy.", exampleCn: "我很开心。", tags: ["情感", "四会词"] },
          { word: "sad", phonetic: "/sæd/", meaning: "伤心的", example: "I'm sad.", exampleCn: "我很伤心。", tags: ["情感", "四会词"] },
          { word: "angry", phonetic: "/ˈæŋɡri/", meaning: "生气的", example: "Don't be angry.", exampleCn: "别生气。", tags: ["情感", "四会词"] },
          { word: "tired", phonetic: "/taɪərd/", meaning: "疲劳的", example: "I'm tired.", exampleCn: "我累了。", tags: ["情感", "四会词"] },
          { word: "hungry", phonetic: "/ˈhʌŋɡri/", meaning: "饥饿的", example: "I'm hungry.", exampleCn: "我饿了。", tags: ["情感", "四会词"] },
          { word: "thirsty", phonetic: "/ˈθɜːrsti/", meaning: "口渴的", example: "I'm thirsty.", exampleCn: "我渴了。", tags: ["情感", "三会词"] },
          { word: "scared", phonetic: "/skeərd/", meaning: "害怕的", example: "I'm scared.", exampleCn: "我害怕。", tags: ["情感", "三会词"] },
          { word: "excited", phonetic: "/ɪkˈsaɪtɪd/", meaning: "兴奋的", example: "I'm excited!", exampleCn: "我很兴奋！", tags: ["情感", "三会词"] }
        ], texts: [{ lesson: "Module 7 Unit 1", title: "Feelings", content: [{ en: "How are you feeling?", cn: "你感觉怎么样？" }, { en: "I'm happy.", cn: "我很开心。" }, { en: "Why are you sad?", cn: "你为什么伤心？" }, { en: "Because I lost my pen.", cn: "因为我丢了钢笔。" }] }] },
        { unitId: "M8", unitName: "Module 8 Time", words: [
          { word: "o'clock", phonetic: "/əˈklɒk/", meaning: "点钟", example: "It's six o'clock.", exampleCn: "六点了。", tags: ["时间", "四会词"] },
          { word: "half past", phonetic: "/hɑːf pɑːst/", meaning: "半点", example: "It's half past three.", exampleCn: "三点半了。", tags: ["时间", "四会词"] },
          { word: "time", phonetic: "/taɪm/", meaning: "时间", example: "What time is it?", exampleCn: "几点了？", tags: ["时间", "四会词"] },
          { word: "late", phonetic: "/leɪt/", meaning: "迟的", example: "I'm late.", exampleCn: "我迟到了。", tags: ["形容词", "四会词"] },
          { word: "early", phonetic: "/ˈɜːrli/", meaning: "早的", example: "I'm early.", exampleCn: "我来早了。", tags: ["形容词", "三会词"] },
          { word: "watch", phonetic: "/wɒtʃ/", meaning: "手表", example: "I have a watch.", exampleCn: "我有一块手表。", tags: ["名词", "四会词"] },
          { word: "clock", phonetic: "/klɒk/", meaning: "钟", example: "Look at the clock.", exampleCn: "看钟。", tags: ["名词", "四会词"] },
          { word: "quarter", phonetic: "/ˈkwɔːrtər/", meaning: "一刻钟", example: "A quarter past three.", exampleCn: "三点一刻。", tags: ["时间", "三会词"] }
        ], texts: [{ lesson: "Module 8 Unit 1", title: "Time", content: [{ en: "What time is it?", cn: "几点了？" }, { en: "It's eight o'clock.", cn: "八点了。" }, { en: "Time for school!", cn: "该上学了！" }, { en: "Let's go!", cn: "走吧！" }] }] },
        { unitId: "M9", unitName: "Module 9 Shopping", words: [
          { word: "shop", phonetic: "/ʃɒp/", meaning: "商店", example: "I go to the shop.", exampleCn: "我去商店。", tags: ["地点", "四会词"] },
          { word: "buy", phonetic: "/baɪ/", meaning: "买", example: "I want to buy a book.", exampleCn: "我想买一本书。", tags: ["动词", "四会词"] },
          { word: "money", phonetic: "/ˈmʌni/", meaning: "钱", example: "I have some money.", exampleCn: "我有一些钱。", tags: ["名词", "三会词"] },
          { word: "please", phonetic: "/pliːz/", meaning: "请", example: "Two apples, please.", exampleCn: "请给我两个苹果。", tags: ["感叹词", "四会词"] },
          { word: "thank you", phonetic: "/θæŋk juː/", meaning: "谢谢", example: "Thank you very much.", exampleCn: "非常感谢。", tags: ["短语", "四会词"] },
          { word: "how much", phonetic: "/haʊ mʌtʃ/", meaning: "多少钱", example: "How much is it?", exampleCn: "多少钱？" , tags: ["短语", "四会词"] },
          { word: "want", phonetic: "/wɒnt/", meaning: "想要", example: "I want an apple.", exampleCn: "我想要一个苹果。", tags: ["动词", "四会词"] },
          { word: "need", phonetic: "/niːd/", meaning: "需要", example: "I need a pen.", exampleCn: "我需要一支钢笔。", tags: ["动词", "三会词"] }
        ], texts: [{ lesson: "Module 9 Unit 1", title: "Shopping", content: [{ en: "Can I help you?", cn: "我能帮你吗？" }, { en: "I want to buy a pen.", cn: "我想买一支钢笔。" }, { en: "How much is it?", cn: "多少钱？" }, { en: "Five yuan.", cn: "五元。" }] }] },
        { unitId: "M10", unitName: "Module 10 Review", words: [
          { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
          { word: "again", phonetic: "/əˈɡen/", meaning: "再次", example: "Read it again.", exampleCn: "再读一遍。", tags: ["副词", "四会词"] },
          { word: "well", phonetic: "/wel/", meaning: "好地", example: "I did well.", exampleCn: "我做得很好。", tags: ["副词", "四会词"] },
          { word: "good", phonetic: "/ɡʊd/", meaning: "好的", example: "Good job!", exampleCn: "做得好！", tags: ["形容词", "四会词"] },
          { word: "great", phonetic: "/ɡreɪt/", meaning: "极好的", example: "That's great!", exampleCn: "太棒了！", tags: ["形容词", "四会词"] },
          { word: "all", phonetic: "/ɔːl/", meaning: "全部", example: "We all like it.", exampleCn: "我们都喜欢。", tags: ["代词", "三会词"] },
          { word: "right", phonetic: "/raɪt/", meaning: "对的", example: "That's right.", exampleCn: "对了。", tags: ["形容词", "四会词"] },
          { word: "together", phonetic: "/təˈɡeðər/", meaning: "一起", example: "Let's play together.", exampleCn: "让我们一起玩。", tags: ["副词", "四会词"] }
        ], texts: [{ lesson: "Module 10 Unit 1", title: "Review", content: [{ en: "What did we learn this term?", cn: "这学期我们学了什么？" }, { en: "We learned about sports and feelings.", cn: "我们学了运动和感受。" }, { en: "And time and shopping too!", cn: "还有时间和购物！" }, { en: "Great! Let's review together!", cn: "太好了！让我们一起复习！" }] }] }
      ]
    },
    // ==================== 三年级上册 ====================
    3: {
      semester: "上册",
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
        },
        { unitId: "M6", unitName: "Module 6 Subjects", words: [
          { word: "Chinese", phonetic: "/tʃaɪˈniːz/", meaning: "语文", example: "I like Chinese.", exampleCn: "我喜欢语文。", tags: ["学科", "四会词"] },
          { word: "math", phonetic: "/mæθ/", meaning: "数学", example: "I like math.", exampleCn: "我喜欢数学。", tags: ["学科", "四会词"] },
          { word: "English", phonetic: "/ˈɪŋɡlɪʃ/", meaning: "英语", example: "I study English.", exampleCn: "我学英语。", tags: ["学科", "四会词"] },
          { word: "science", phonetic: "/ˈsaɪəns/", meaning: "科学", example: "Science is fun.", exampleCn: "科学很有趣。", tags: ["学科", "四会词"] },
          { word: "music", phonetic: "/ˈmjuːzɪk/", meaning: "音乐", example: "I like music class.", exampleCn: "我喜欢音乐课。", tags: ["学科", "四会词"] },
          { word: "art", phonetic: "/ɑːrt/", meaning: "美术", example: "I like art.", exampleCn: "我喜欢美术。", tags: ["学科", "四会词"] },
          { word: "PE", phonetic: "/ˌpiː ˈiː/", meaning: "体育", example: "I like PE.", exampleCn: "我喜欢体育。", tags: ["学科", "四会词"] },
          { word: "lesson", phonetic: "/ˈlesn/", meaning: "课", example: "We have a lesson.", exampleCn: "我们上课了。", tags: ["名词", "三会词"] }
        ], texts: [{ lesson: "Module 6 Unit 1", title: "Subjects", content: [{ en: "What's your favourite subject?", cn: "你最喜欢的学科是什么？" }, { en: "My favourite subject is English.", cn: "我最喜欢的学科是英语。" }, { en: "I like PE too.", cn: "我也喜欢体育。" }, { en: "We have PE on Monday.", cn: "我们星期一有体育课。" }] }] },
        { unitId: "M7", unitName: "Module 7 Months", words: [
          { word: "January", phonetic: "/ˈdʒænjuəri/", meaning: "一月", example: "It's January.", exampleCn: "一月了。", tags: ["月份", "四会词"] },
          { word: "February", phonetic: "/ˈfebruəri/", meaning: "二月", example: "It's February.", exampleCn: "二月了。", tags: ["月份", "四会词"] },
          { word: "March", phonetic: "/mɑːrtʃ/", meaning: "三月", example: "It's March.", exampleCn: "三月了。", tags: ["月份", "四会词"] },
          { word: "April", phonetic: "/ˈeɪprəl/", meaning: "四月", example: "It's April.", exampleCn: "四月了。", tags: ["月份", "三会词"] },
          { word: "May", phonetic: "/meɪ/", meaning: "五月", example: "It's May.", exampleCn: "五月了。", tags: ["月份", "四会词"] },
          { word: "June", phonetic: "/dʒuːn/", meaning: "六月", example: "It's June.", exampleCn: "六月了。", tags: ["月份", "四会词"] },
          { word: "July", phonetic: "/dʒuˈlaɪ/", meaning: "七月", example: "It's July.", exampleCn: "七月了。", tags: ["月份", "三会词"] },
          { word: "August", phonetic: "/ˈɔːɡəst/", meaning: "八月", example: "It's August.", exampleCn: "八月了。", tags: ["月份", "三会词"] },
          { word: "September", phonetic: "/sepˈtembər/", meaning: "九月", example: "School starts in September.", exampleCn: "九月开学。", tags: ["月份", "四会词"] },
          { word: "October", phonetic: "/ɒkˈtəʊbər/", meaning: "十月", example: "It's October.", exampleCn: "十月了。", tags: ["月份", "三会词"] },
          { word: "November", phonetic: "/nəʊˈvembər/", meaning: "十一月", example: "It's November.", exampleCn: "十一月了。", tags: ["月份", "三会词"] },
          { word: "December", phonetic: "/dɪˈsembər/", meaning: "十二月", example: "It's December.", exampleCn: "十二月了。", tags: ["月份", "四会词"] }
        ], texts: [{ lesson: "Module 7 Unit 1", title: "Months", content: [{ en: "When is your birthday?", cn: "你的生日是什么时候？" }, { en: "It's in March.", cn: "在三月。" }, { en: "My birthday is in September.", cn: "我的生日在九月。" }, { en: "That's nice!", cn: "真好！" }] }] },
        { unitId: "M8", unitName: "Module 8 Habits", words: [
          { word: "always", phonetic: "/ˈɔːlweɪz/", meaning: "总是", example: "I always brush my teeth.", exampleCn: "我总是刷牙。", tags: ["副词", "四会词"] },
          { word: "usually", phonetic: "/ˈjuːʒuəli/", meaning: "通常", example: "I usually go to school by bus.", exampleCn: "我通常坐公交车上学。", tags: ["副词", "四会词"] },
          { word: "often", phonetic: "/ˈɒfn/", meaning: "经常", example: "I often read books.", exampleCn: "我经常读书。", tags: ["副词", "四会词"] },
          { word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", meaning: "有时候", example: "I sometimes watch TV.", exampleCn: "我有时候看电视。", tags: ["副词", "四会词"] },
          { word: "never", phonetic: "/ˈnevər/", meaning: "从不", example: "I never eat in class.", exampleCn: "我从不在课上吃东西。", tags: ["副词", "三会词"] },
          { word: "habit", phonetic: "/ˈhæbɪt/", meaning: "习惯", example: "Good habits are important.", exampleCn: "好习惯很重要。", tags: ["名词", "四会词"] },
          { word: "healthy", phonetic: "/ˈhelθi/", meaning: "健康的", example: "Eat healthy food.", exampleCn: "吃健康的食物。", tags: ["形容词", "四会词"] },
          { word: "exercise", phonetic: "/ˈeksərsaɪz/", meaning: "锻炼", example: "I exercise every day.", exampleCn: "我每天锻炼。", tags: ["名词", "三会词"] }
        ], texts: [{ lesson: "Module 8 Unit 1", title: "Habits", content: [{ en: "What do you usually do after school?", cn: "你放学后通常做什么？" }, { en: "I usually do my homework.", cn: "我通常做作业。" }, { en: "Do you always read books?", cn: "你总是读书吗？" }, { en: "Yes, I often read before bed.", cn: "是的，我经常睡前读书。" }] }] },
        { unitId: "M9", unitName: "Module 9 Festivals", words: [
          { word: "Spring Festival", phonetic: "/sprɪŋ ˈfestɪvl/", meaning: "春节", example: "Spring Festival is coming.", exampleCn: "春节快到了。", tags: ["节日", "四会词"] },
          { word: "Mid-Autumn", phonetic: "/mɪd ˈɔːtəm/", meaning: "中秋", example: "Mid-Autumn Festival is in autumn.", exampleCn: "中秋节在秋天。", tags: ["节日", "四会词"] },
          { word: "Dragon Boat", phonetic: "/ˈdræɡən bəʊt/", meaning: "龙舟", example: "Dragon Boat Festival is fun.", exampleCn: "端午节很有趣。", tags: ["节日", "三会词"] },
          { word: "lantern", phonetic: "/ˈlæntərn/", meaning: "灯笼", example: "I like lanterns.", exampleCn: "我喜欢灯笼。", tags: ["名词", "四会词"] },
          { word: "mooncake", phonetic: "/ˈmuːnkeɪk/", meaning: "月饼", example: "I like mooncakes.", exampleCn: "我喜欢月饼。", tags: ["食物", "四会词"] },
          { word: "zongzi", phonetic: "/ˈzɒŋzɪ/", meaning: "粽子", example: "We eat zongzi.", exampleCn: "我们吃粽子。", tags: ["食物", "三会词"] },
          { word: "dumpling", phonetic: "/ˈdʌmplɪŋ/", meaning: "饺子", example: "We eat dumplings.", exampleCn: "我们吃饺子。", tags: ["食物", "四会词"] },
          { word: "celebrate", phonetic: "/ˈselɪbreɪt/", meaning: "庆祝", example: "We celebrate Spring Festival.", exampleCn: "我们庆祝春节。", tags: ["动词", "四会词"] }
        ], texts: [{ lesson: "Module 9 Unit 1", title: "Festivals", content: [{ en: "What's your favourite festival?", cn: "你最喜欢的节日是什么？" }, { en: "I like Spring Festival.", cn: "我喜欢春节。" }, { en: "What do you do?", cn: "你们做什么？" }, { en: "We eat dumplings and celebrate.", cn: "我们吃饺子庆祝。" }] }] },
        { unitId: "M10", unitName: "Module 10 Review", words: [
          { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
          { word: "again", phonetic: "/əˈɡen/", meaning: "再次", example: "Let's sing it again.", exampleCn: "让我们再唱一遍。", tags: ["副词", "四会词"] },
          { word: "well", phonetic: "/wel/", meaning: "好地", example: "You did well.", exampleCn: "你做得很好。", tags: ["副词", "四会词"] },
          { word: "good", phonetic: "/ɡʊd/", meaning: "好的", example: "Good job!", exampleCn: "做得好！", tags: ["形容词", "四会词"] },
          { word: "great", phonetic: "/ɡreɪt/", meaning: "极好的", example: "That's great!", exampleCn: "太棒了！", tags: ["形容词", "四会词"] },
          { word: "all", phonetic: "/ɔːl/", meaning: "全部", example: "We all like it.", exampleCn: "我们都喜欢。", tags: ["代词", "三会词"] },
          { word: "right", phonetic: "/raɪt/", meaning: "对的", example: "That's right.", exampleCn: "对了。", tags: ["形容词", "四会词"] },
          { word: "together", phonetic: "/təˈɡeðər/", meaning: "一起", example: "Let's read together.", exampleCn: "让我们一起读。", tags: ["副词", "四会词"] }
        ], texts: [{ lesson: "Module 10 Unit 1", title: "Review", content: [{ en: "What did we learn this term?", cn: "这学期我们学了什么？" }, { en: "We learned about subjects and months.", cn: "我们学了学科和月份。" }, { en: "And festivals too!", cn: "还有节日！" }, { en: "Great! Let's review together!", cn: "太好了！让我们一起复习！" }] }] }
      ]
    },
    // ==================== 四年级上册 ====================
    4: {
      semester: "上册",
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
        },
        {
          unitId: "M6",
          unitName: "Module 6 Food",
          words: [
            { word: "rice", phonetic: "/raɪs/", meaning: "米饭", example: "I like rice.", exampleCn: "我喜欢米饭。", tags: ["食物", "四会词"] },
            { word: "noodles", phonetic: "/ˈnuːdlz/", meaning: "面条", example: "I like noodles.", exampleCn: "我喜欢面条。", tags: ["食物", "四会词"] },
            { word: "meat", phonetic: "/miːt/", meaning: "肉", example: "Do you like meat?", exampleCn: "你喜欢肉吗？", tags: ["食物", "四会词"] },
            { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼肉", example: "I like fish.", exampleCn: "我喜欢鱼肉。", tags: ["食物", "四会词"] },
            { word: "milk", phonetic: "/mɪlk/", meaning: "牛奶", example: "I drink milk.", exampleCn: "我喝牛奶。", tags: ["饮料", "四会词"] },
            { word: "bread", phonetic: "/bred/", meaning: "面包", example: "I like bread.", exampleCn: "我喜欢面包。", tags: ["食物", "四会词"] },
            { word: "dumpling", phonetic: "/ˈdʌmplɪŋ/", meaning: "饺子", example: "I like dumplings.", exampleCn: "我喜欢饺子。", tags: ["食物", "三会词"] },
            { word: "hamburger", phonetic: "/ˈhæmbɜːrɡər/", meaning: "汉堡包", example: "I like hamburgers.", exampleCn: "我喜欢汉堡包。", tags: ["食物", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 6 Unit 1",
              title: "Food",
              content: [
                { en: "Do you like rice?", cn: "你喜欢米饭吗？" },
                { en: "Yes, I do.", cn: "是的，我喜欢。" },
                { en: "Do you like noodles?", cn: "你喜欢面条吗？" },
                { en: "No, I don't.", cn: "不，我不喜欢。" }
              ]
            }
          ]
        },
        {
          unitId: "M7",
          unitName: "Module 7 Days of the Week",
          words: [
            { word: "Monday", phonetic: "/ˈmʌndeɪ/", meaning: "星期一", example: "I go to school on Monday.", exampleCn: "我星期一去上学。", tags: ["时间", "四会词"] },
            { word: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", meaning: "星期二", example: "I have English on Tuesday.", exampleCn: "我星期二有英语课。", tags: ["时间", "四会词"] },
            { word: "Wednesday", phonetic: "/ˈwenzdeɪ/", meaning: "星期三", example: "I play football on Wednesday.", exampleCn: "我星期三踢足球。", tags: ["时间", "四会词"] },
            { word: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", meaning: "星期四", example: "I have music on Thursday.", exampleCn: "我星期四有音乐课。", tags: ["时间", "四会词"] },
            { word: "Friday", phonetic: "/ˈfraɪdeɪ/", meaning: "星期五", example: "I like Friday.", exampleCn: "我喜欢星期五。", tags: ["时间", "四会词"] },
            { word: "Saturday", phonetic: "/ˈsætərdeɪ/", meaning: "星期六", example: "I play on Saturday.", exampleCn: "我星期六玩耍。", tags: ["时间", "四会词"] },
            { word: "Sunday", phonetic: "/ˈsʌndeɪ/", meaning: "星期日", example: "I rest on Sunday.", exampleCn: "我星期日休息。", tags: ["时间", "四会词"] },
            { word: "week", phonetic: "/wiːk/", meaning: "周", example: "There are seven days in a week.", exampleCn: "一周有七天。", tags: ["时间", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 7 Unit 1",
              title: "Days of the Week",
              content: [
                { en: "What day is it today?", cn: "今天星期几？" },
                { en: "It's Monday.", cn: "今天是星期一。" },
                { en: "What do you do on Monday?", cn: "你星期一做什么？" },
                { en: "I go to school.", cn: "我去上学。" }
              ]
            }
          ]
        },
        {
          unitId: "M8",
          unitName: "Module 8 Weather",
          words: [
            { word: "sunny", phonetic: "/ˈsʌni/", meaning: "晴朗的", example: "It's sunny today.", exampleCn: "今天天气晴朗。", tags: ["天气", "四会词"] },
            { word: "rainy", phonetic: "/ˈreɪni/", meaning: "下雨的", example: "It's rainy today.", exampleCn: "今天下雨。", tags: ["天气", "四会词"] },
            { word: "cloudy", phonetic: "/ˈklaʊdi/", meaning: "多云的", example: "It's cloudy today.", exampleCn: "今天多云。", tags: ["天气", "四会词"] },
            { word: "windy", phonetic: "/ˈwɪndi/", meaning: "有风的", example: "It's windy today.", exampleCn: "今天有风。", tags: ["天气", "四会词"] },
            { word: "snowy", phonetic: "/ˈsnəʊi/", meaning: "下雪的", example: "It's snowy today.", exampleCn: "今天下雪。", tags: ["天气", "三会词"] },
            { word: "hot", phonetic: "/hɒt/", meaning: "热的", example: "It's hot in summer.", exampleCn: "夏天很热。", tags: ["天气", "四会词"] },
            { word: "cold", phonetic: "/kəʊld/", meaning: "冷的", example: "It's cold in winter.", exampleCn: "冬天很冷。", tags: ["天气", "四会词"] },
            { word: "warm", phonetic: "/wɔːrm/", meaning: "温暖的", example: "It's warm in spring.", exampleCn: "春天很温暖。", tags: ["天气", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 8 Unit 1",
              title: "Weather",
              content: [
                { en: "What's the weather like today?", cn: "今天天气怎么样？" },
                { en: "It's sunny.", cn: "天气晴朗。" },
                { en: "What's the weather like in winter?", cn: "冬天天气怎么样？" },
                { en: "It's cold.", cn: "很冷。" }
              ]
            }
          ]
        },
        {
          unitId: "M9",
          unitName: "Module 9 Seasons",
          words: [
            { word: "spring", phonetic: "/sprɪŋ/", meaning: "春天", example: "I like spring.", exampleCn: "我喜欢春天。", tags: ["季节", "四会词"] },
            { word: "summer", phonetic: "/ˈsʌmər/", meaning: "夏天", example: "Summer is hot.", exampleCn: "夏天很热。", tags: ["季节", "四会词"] },
            { word: "autumn", phonetic: "/ˈɔːtəm/", meaning: "秋天", example: "Autumn is cool.", exampleCn: "秋天很凉爽。", tags: ["季节", "四会词"] },
            { word: "winter", phonetic: "/ˈwɪntər/", meaning: "冬天", example: "Winter is cold.", exampleCn: "冬天很冷。", tags: ["季节", "四会词"] },
            { word: "cool", phonetic: "/kuːl/", meaning: "凉爽的", example: "Autumn is cool.", exampleCn: "秋天很凉爽。", tags: ["天气", "四会词"] },
            { word: "season", phonetic: "/ˈsiːzn/", meaning: "季节", example: "There are four seasons.", exampleCn: "有四个季节。", tags: ["名词", "四会词"] },
            { word: "swim", phonetic: "/swɪm/", meaning: "游泳", example: "I swim in summer.", exampleCn: "我夏天游泳。", tags: ["动词", "四会词"] },
            { word: "ski", phonetic: "/skiː/", meaning: "滑雪", example: "I ski in winter.", exampleCn: "我冬天滑雪。", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 9 Unit 1",
              title: "Seasons",
              content: [
                { en: "What's your favorite season?", cn: "你最喜欢哪个季节？" },
                { en: "I like spring.", cn: "我喜欢春天。" },
                { en: "Why?", cn: "为什么？" },
                { en: "Because it's warm and sunny.", cn: "因为天气温暖又晴朗。" }
              ]
            }
          ]
        },
        {
          unitId: "M10",
          unitName: "Module 10 Review",
          words: [
            { word: "year", phonetic: "/jɪər/", meaning: "年", example: "Happy New Year!", exampleCn: "新年快乐！", tags: ["时间", "四会词"] },
            { word: "month", phonetic: "/mʌnθ/", meaning: "月", example: "There are twelve months.", exampleCn: "有十二个月。", tags: ["时间", "四会词"] },
            { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
            { word: "term", phonetic: "/tɜːrm/", meaning: "学期", example: "This term is over.", exampleCn: "这个学期结束了。", tags: ["名词", "三会词"] },
            { word: "holiday", phonetic: "/ˈhɒlədeɪ/", meaning: "假期", example: "Have a good holiday!", exampleCn: "假期愉快！", tags: ["名词", "四会词"] },
            { word: "homework", phonetic: "/ˈhəʊmwɜːrk/", meaning: "家庭作业", example: "I do my homework.", exampleCn: "我做我的家庭作业。", tags: ["名词", "四会词"] },
            { word: "ready", phonetic: "/ˈredi/", meaning: "准备好的", example: "I'm ready.", exampleCn: "我准备好了。", tags: ["形容词", "三会词"] },
            { word: "great", phonetic: "/ɡreɪt/", meaning: "伟大的；太好了", example: "That's great!", exampleCn: "太好了！", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 10 Unit 1",
              title: "Review",
              content: [
                { en: "What did you learn this term?", cn: "这学期你学了什么？" },
                { en: "I learned about family and jobs.", cn: "我学了关于家庭和职业。" },
                { en: "We also learned about weather and seasons.", cn: "我们还学了天气和季节。" },
                { en: "Great! Have a good holiday!", cn: "太好了！假期愉快！" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 五年级上册 ====================
    5: {
      semester: "上册",
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
        },
        {
          unitId: "M5",
          unitName: "Module 5 School Life",
          words: [
            { word: "subject", phonetic: "/ˈsʌbdʒɪkt/", meaning: "科目", example: "What's your favorite subject?", exampleCn: "你最喜欢的科目是什么？", tags: ["名词", "四会词"] },
            { word: "English", phonetic: "/ˈɪŋɡlɪʃ/", meaning: "英语", example: "I like English.", exampleCn: "我喜欢英语。", tags: ["科目", "四会词"] },
            { word: "Chinese", phonetic: "/tʃaɪˈniːz/", meaning: "语文", example: "I study Chinese.", exampleCn: "我学语文。", tags: ["科目", "四会词"] },
            { word: "maths", phonetic: "/mæθs/", meaning: "数学", example: "Maths is fun.", exampleCn: "数学很有趣。", tags: ["科目", "四会词"] },
            { word: "science", phonetic: "/ˈsaɪəns/", meaning: "科学", example: "I like science.", exampleCn: "我喜欢科学。", tags: ["科目", "四会词"] },
            { word: "music", phonetic: "/ˈmjuːzɪk/", meaning: "音乐", example: "I have music on Monday.", exampleCn: "我星期一有音乐课。", tags: ["科目", "四会词"] },
            { word: "art", phonetic: "/ɑːrt/", meaning: "美术", example: "I like art class.", exampleCn: "我喜欢美术课。", tags: ["科目", "四会词"] },
            { word: "PE", phonetic: "/piː iː/", meaning: "体育", example: "I like PE.", exampleCn: "我喜欢体育。", tags: ["科目", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 5 Unit 1",
              title: "School Subjects",
              content: [
                { en: "What's your favorite subject?", cn: "你最喜欢的科目是什么？" },
                { en: "My favorite subject is English.", cn: "我最喜欢的科目是英语。" },
                { en: "Why do you like English?", cn: "你为什么喜欢英语？" },
                { en: "Because it's interesting.", cn: "因为它很有趣。" }
              ]
            }
          ]
        },
        {
          unitId: "M6",
          unitName: "Module 6 Daily Routine",
          words: [
            { word: "get up", phonetic: "/ɡet ʌp/", meaning: "起床", example: "I get up at six.", exampleCn: "我六点起床。", tags: ["短语", "四会词"] },
            { word: "go to school", phonetic: "/ɡəʊ tuː skuːl/", meaning: "去上学", example: "I go to school at seven.", exampleCn: "我七点去上学。", tags: ["短语", "四会词"] },
            { word: "go home", phonetic: "/ɡəʊ həʊm/", meaning: "回家", example: "I go home at four.", exampleCn: "我四点回家。", tags: ["短语", "四会词"] },
            { word: "go to bed", phonetic: "/ɡəʊ tuː bed/", meaning: "上床睡觉", example: "I go to bed at nine.", exampleCn: "我九点上床睡觉。", tags: ["短语", "四会词"] },
            { word: "breakfast", phonetic: "/ˈbrekfəst/", meaning: "早餐", example: "I have breakfast at seven.", exampleCn: "我七点吃早餐。", tags: ["名词", "四会词"] },
            { word: "lunch", phonetic: "/lʌntʃ/", meaning: "午餐", example: "I have lunch at twelve.", exampleCn: "我十二点吃午餐。", tags: ["名词", "四会词"] },
            { word: "dinner", phonetic: "/ˈdɪnər/", meaning: "晚餐", example: "I have dinner at six.", exampleCn: "我六点吃晚餐。", tags: ["名词", "四会词"] },
            { word: "o'clock", phonetic: "/əˈklɒk/", meaning: "点钟", example: "It's six o'clock.", exampleCn: "六点了。", tags: ["时间", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 6 Unit 1",
              title: "My Day",
              content: [
                { en: "What time do you get up?", cn: "你几点起床？" },
                { en: "I get up at six o'clock.", cn: "我六点起床。" },
                { en: "What time do you go to school?", cn: "你几点去上学？" },
                { en: "I go to school at seven o'clock.", cn: "我七点去上学。" }
              ]
            }
          ]
        },
        {
          unitId: "M7",
          unitName: "Module 7 Abilities",
          words: [
            { word: "can", phonetic: "/kæn/", meaning: "能，会", example: "I can swim.", exampleCn: "我会游泳。", tags: ["动词", "四会词"] },
            { word: "run", phonetic: "/rʌn/", meaning: "跑", example: "I can run fast.", exampleCn: "我能跑得快。", tags: ["动词", "四会词"] },
            { word: "jump", phonetic: "/dʒʌmp/", meaning: "跳", example: "I can jump high.", exampleCn: "我能跳得高。", tags: ["动词", "四会词"] },
            { word: "swim", phonetic: "/swɪm/", meaning: "游泳", example: "I can swim.", exampleCn: "我会游泳。", tags: ["动词", "四会词"] },
            { word: "fly", phonetic: "/flaɪ/", meaning: "飞", example: "Birds can fly.", exampleCn: "鸟会飞。", tags: ["动词", "三会词"] },
            { word: "sing", phonetic: "/sɪŋ/", meaning: "唱歌", example: "I can sing.", exampleCn: "我会唱歌。", tags: ["动词", "四会词"] },
            { word: "dance", phonetic: "/dɑːns/", meaning: "跳舞", example: "She can dance.", exampleCn: "她会跳舞。", tags: ["动词", "四会词"] },
            { word: "draw", phonetic: "/drɔː/", meaning: "画画", example: "I can draw a picture.", exampleCn: "我会画画。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 7 Unit 1",
              title: "Abilities",
              content: [
                { en: "What can you do?", cn: "你会做什么？" },
                { en: "I can swim.", cn: "我会游泳。" },
                { en: "Can you run fast?", cn: "你能跑得快吗？" },
                { en: "Yes, I can.", cn: "是的，我能。" }
              ]
            }
          ]
        },
        {
          unitId: "M8",
          unitName: "Module 8 Weekend",
          words: [
            { word: "weekend", phonetic: "/ˌwiːkˈend/", meaning: "周末", example: "I like the weekend.", exampleCn: "我喜欢周末。", tags: ["时间", "四会词"] },
            { word: "park", phonetic: "/pɑːrk/", meaning: "公园", example: "I go to the park.", exampleCn: "我去公园。", tags: ["地点", "四会词"] },
            { word: "play", phonetic: "/pleɪ/", meaning: "玩", example: "I play football.", exampleCn: "我踢足球。", tags: ["动词", "四会词"] },
            { word: "read", phonetic: "/riːd/", meaning: "阅读", example: "I read books.", exampleCn: "我读书。", tags: ["动词", "四会词"] },
            { word: "watch", phonetic: "/wɒtʃ/", meaning: "观看", example: "I watch TV.", exampleCn: "我看电视。", tags: ["动词", "四会词"] },
            { word: "visit", phonetic: "/ˈvɪzɪt/", meaning: "拜访", example: "I visit my grandma.", exampleCn: "我去看望奶奶。", tags: ["动词", "四会词"] },
            { word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", meaning: "有时", example: "Sometimes I go to the park.", exampleCn: "有时我去公园。", tags: ["副词", "三会词"] },
            { word: "always", phonetic: "/ˈɔːlweɪz/", meaning: "总是", example: "I always read books.", exampleCn: "我总是读书。", tags: ["副词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 8 Unit 1",
              title: "Weekend",
              content: [
                { en: "What do you do at the weekend?", cn: "你周末做什么？" },
                { en: "I go to the park.", cn: "我去公园。" },
                { en: "Do you play football?", cn: "你踢足球吗？" },
                { en: "Yes, I do.", cn: "是的，我踢。" }
              ]
            }
          ]
        },
        {
          unitId: "M9",
          unitName: "Module 9 Feelings",
          words: [
            { word: "happy", phonetic: "/ˈhæpi/", meaning: "开心的", example: "I'm happy.", exampleCn: "我很开心。", tags: ["情感", "四会词"] },
            { word: "sad", phonetic: "/sæd/", meaning: "伤心的", example: "I'm sad.", exampleCn: "我很伤心。", tags: ["情感", "四会词"] },
            { word: "angry", phonetic: "/ˈæŋɡri/", meaning: "生气的", example: "Don't be angry.", exampleCn: "不要生气。", tags: ["情感", "四会词"] },
            { word: "tired", phonetic: "/taɪərd/", meaning: "疲倦的", example: "I'm tired.", exampleCn: "我很累。", tags: ["情感", "四会词"] },
            { word: "hungry", phonetic: "/ˈhʌŋɡri/", meaning: "饥饿的", example: "I'm hungry.", exampleCn: "我饿了。", tags: ["情感", "四会词"] },
            { word: "thirsty", phonetic: "/ˈθɜːrsti/", meaning: "口渴的", example: "I'm thirsty.", exampleCn: "我渴了。", tags: ["情感", "四会词"] },
            { word: "scared", phonetic: "/skeərd/", meaning: "害怕的", example: "I'm scared.", exampleCn: "我很害怕。", tags: ["情感", "三会词"] },
            { word: "excited", phonetic: "/ɪkˈsaɪtɪd/", meaning: "兴奋的", example: "I'm excited!", exampleCn: "我很兴奋！", tags: ["情感", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 9 Unit 1",
              title: "Feelings",
              content: [
                { en: "How do you feel?", cn: "你感觉怎么样？" },
                { en: "I'm happy.", cn: "我很开心。" },
                { en: "Why are you sad?", cn: "你为什么伤心？" },
                { en: "Because I lost my pen.", cn: "因为我丢了钢笔。" }
              ]
            }
          ]
        },
        {
          unitId: "M10",
          unitName: "Module 10 Review",
          words: [
            { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
            { word: "exam", phonetic: "/ɪɡˈzæm/", meaning: "考试", example: "I have an exam.", exampleCn: "我有一场考试。", tags: ["名词", "四会词"] },
            { word: "test", phonetic: "/test/", meaning: "测试", example: "We have a test today.", exampleCn: "我们今天有测试。", tags: ["名词", "四会词"] },
            { word: "study", phonetic: "/ˈstʌdi/", meaning: "学习", example: "I study hard.", exampleCn: "我努力学习。", tags: ["动词", "四会词"] },
            { word: "well", phonetic: "/wel/", meaning: "好地", example: "I did well.", exampleCn: "我做得很好。", tags: ["副词", "四会词"] },
            { word: "try", phonetic: "/traɪ/", meaning: "尝试", example: "Try your best!", exampleCn: "尽力！", tags: ["动词", "四会词"] },
            { word: "holiday", phonetic: "/ˈhɒlədeɪ/", meaning: "假期", example: "Have a good holiday!", exampleCn: "假期愉快！", tags: ["名词", "四会词"] },
            { word: "wish", phonetic: "/wɪʃ/", meaning: "祝愿", example: "Best wishes!", exampleCn: "最美好的祝愿！", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 10 Unit 1",
              title: "Review",
              content: [
                { en: "What did you learn this term?", cn: "这学期你学了什么？" },
                { en: "I learned about nature and positions.", cn: "我学了关于自然和方位。" },
                { en: "We also learned about school life.", cn: "我们还学了学校生活。" },
                { en: "Great! Have a good holiday!", cn: "太好了！假期愉快！" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 六年级上册 ====================
    6: {
      semester: "上册",
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
        },
        {
          unitId: "M6",
          unitName: "Module 6 Festival",
          words: [
            { word: "festival", phonetic: "/ˈfestɪvl/", meaning: "节日", example: "Spring Festival is coming.", exampleCn: "春节要来了。", tags: ["名词", "四会词"] },
            { word: "Christmas", phonetic: "/ˈkrɪsməs/", meaning: "圣诞节", example: "Merry Christmas!", exampleCn: "圣诞快乐！", tags: ["节日", "四会词"] },
            { word: "Thanksgiving", phonetic: "/ˌθæŋksˈɡɪvɪŋ/", meaning: "感恩节", example: "Happy Thanksgiving!", exampleCn: "感恩节快乐！", tags: ["节日", "三会词"] },
            { word: "Lantern", phonetic: "/ˈlæntərn/", meaning: "灯笼", example: "We make lanterns.", exampleCn: "我们做灯笼。", tags: ["名词", "三会词"] },
            { word: "dragon", phonetic: "/ˈdræɡən/", meaning: "龙", example: "We have a dragon dance.", exampleCn: "我们舞龙。", tags: ["名词", "四会词"] },
            { word: "tradition", phonetic: "/trəˈdɪʃən/", meaning: "传统", example: "It's a Chinese tradition.", exampleCn: "这是中国的传统。", tags: ["名词", "三会词"] },
            { word: "decorate", phonetic: "/ˈdekəreɪt/", meaning: "装饰", example: "We decorate the tree.", exampleCn: "我们装饰树。", tags: ["动词", "三会词"] },
            { word: "celebrate", phonetic: "/ˈselɪbreɪt/", meaning: "庆祝", example: "We celebrate New Year.", exampleCn: "我们庆祝新年。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 6 Unit 1",
              title: "Festivals",
              content: [
                { en: "What's your favorite festival?", cn: "你最喜欢的节日是什么？" },
                { en: "I like Spring Festival.", cn: "我喜欢春节。" },
                { en: "What do you do at Spring Festival?", cn: "你在春节做什么？" },
                { en: "We have a big family dinner.", cn: "我们吃一顿丰盛的家庭晚餐。" }
              ]
            }
          ]
        },
        {
          unitId: "M7",
          unitName: "Module 7 Pen Friends",
          words: [
            { word: "pen friend", phonetic: "/pen frend/", meaning: "笔友", example: "I have a pen friend.", exampleCn: "我有一个笔友。", tags: ["名词", "四会词"] },
            { word: "address", phonetic: "/əˈdres/", meaning: "地址", example: "What's your address?", exampleCn: "你的地址是什么？", tags: ["名词", "四会词"] },
            { word: "letter", phonetic: "/ˈletər/", meaning: "信", example: "I write a letter.", exampleCn: "我写一封信。", tags: ["名词", "四会词"] },
            { word: "stamp", phonetic: "/stæmp/", meaning: "邮票", example: "I collect stamps.", exampleCn: "我收集邮票。", tags: ["名词", "三会词"] },
            { word: "country", phonetic: "/ˈkʌntri/", meaning: "国家", example: "What country do you live in?", exampleCn: "你住在哪个国家？", tags: ["名词", "四会词"] },
            { word: "Australia", phonetic: "/ɒˈstreɪliə/", meaning: "澳大利亚", example: "My pen friend is from Australia.", exampleCn: "我的笔友来自澳大利亚。", tags: ["地名", "三会词"] },
            { word: "America", phonetic: "/əˈmerɪkə/", meaning: "美国", example: "She lives in America.", exampleCn: "她住在美国。", tags: ["地名", "三会词"] },
            { word: "England", phonetic: "/ˈɪŋɡlənd/", meaning: "英格兰", example: "He is from England.", exampleCn: "他来自英格兰。", tags: ["地名", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 7 Unit 1",
              title: "Pen Friends",
              content: [
                { en: "Do you have a pen friend?", cn: "你有笔友吗？" },
                { en: "Yes, I do.", cn: "是的，我有。" },
                { en: "Where does she live?", cn: "她住在哪里？" },
                { en: "She lives in London.", cn: "她住在伦敦。" }
              ]
            }
          ]
        },
        {
          unitId: "M8",
          unitName: "Module 8 Rules",
          words: [
            { word: "rule", phonetic: "/ruːl/", meaning: "规则", example: "We must follow the rules.", exampleCn: "我们必须遵守规则。", tags: ["名词", "四会词"] },
            { word: "must", phonetic: "/mʌst/", meaning: "必须", example: "You must be quiet.", exampleCn: "你必须安静。", tags: ["动词", "四会词"] },
            { word: "should", phonetic: "/ʃʊd/", meaning: "应该", example: "You should study hard.", exampleCn: "你应该努力学习。", tags: ["动词", "四会词"] },
            { word: "mustn't", phonetic: "/ˈmʌsnt/", meaning: "不准", example: "You mustn't run here.", exampleCn: "你不准在这里跑。", tags: ["动词", "四会词"] },
            { word: "quiet", phonetic: "/ˈkwaɪət/", meaning: "安静的", example: "Be quiet, please.", exampleCn: "请安静。", tags: ["形容词", "四会词"] },
            { word: "careful", phonetic: "/ˈkeəfl/", meaning: "小心的", example: "Be careful!", exampleCn: "小心！", tags: ["形容词", "四会词"] },
            { word: "cross", phonetic: "/krɒs/", meaning: "穿过", example: "Don't cross the road.", exampleCn: "不要穿过马路。", tags: ["动词", "三会词"] },
            { word: "danger", phonetic: "/ˈdeɪndʒər/", meaning: "危险", example: "Danger!", exampleCn: "危险！", tags: ["名词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Module 8 Unit 1",
              title: "Rules",
              content: [
                { en: "What rules do you have at school?", cn: "你们学校有什么规则？" },
                { en: "We must be quiet in the library.", cn: "我们在图书馆必须安静。" },
                { en: "We mustn't run in the hallway.", cn: "我们不能在走廊跑。" },
                { en: "We should be polite.", cn: "我们应该有礼貌。" }
              ]
            }
          ]
        },
        {
          unitId: "M9",
          unitName: "Module 9 Accidents",
          words: [
            { word: "accident", phonetic: "/ˈæksɪdənt/", meaning: "事故", example: "There was an accident.", exampleCn: "发生了一起事故。", tags: ["名词", "三会词"] },
            { word: "happen", phonetic: "/ˈhæpən/", meaning: "发生", example: "What happened?", exampleCn: "发生了什么？", tags: ["动词", "四会词"] },
            { word: "fall", phonetic: "/fɔːl/", meaning: "摔倒", example: "He fell down.", exampleCn: "他摔倒了。", tags: ["动词", "四会词"] },
            { word: "cut", phonetic: "/kʌt/", meaning: "割伤", example: "I cut my finger.", exampleCn: "我割伤了手指。", tags: ["动词", "四会词"] },
            { word: "hurt", phonetic: "/hɜːrt/", meaning: "受伤", example: "My leg hurts.", exampleCn: "我的腿受伤了。", tags: ["动词", "四会词"] },
            { word: "hospital", phonetic: "/ˈhɒspɪtl/", meaning: "医院", example: "He went to the hospital.", exampleCn: "他去了医院。", tags: ["地点", "四会词"] },
            { word: "medicine", phonetic: "/ˈmedsn/", meaning: "药", example: "Take some medicine.", exampleCn: "吃点药。", tags: ["名词", "三会词"] },
            { word: "careful", phonetic: "/ˈkeəfl/", meaning: "小心的", example: "Be careful next time.", exampleCn: "下次小心。", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 9 Unit 1",
              title: "Accidents",
              content: [
                { en: "What happened to you?", cn: "你怎么了？" },
                { en: "I fell off my bike.", cn: "我从自行车上摔下来了。" },
                { en: "Are you OK?", cn: "你没事吧？" },
                { en: "I hurt my leg.", cn: "我伤了腿。" }
              ]
            }
          ]
        },
        {
          unitId: "M10",
          unitName: "Module 10 Review",
          words: [
            { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
            { word: "graduate", phonetic: "/ˈɡrædʒueɪt/", meaning: "毕业", example: "I will graduate soon.", exampleCn: "我即将毕业。", tags: ["动词", "三会词"] },
            { word: "memory", phonetic: "/ˈmeməri/", meaning: "回忆", example: "I have many good memories.", exampleCn: "我有很多美好的回忆。", tags: ["名词", "四会词"] },
            { word: "friendship", phonetic: "/ˈfrendʃɪp/", meaning: "友谊", example: "Our friendship is forever.", exampleCn: "我们的友谊是永远的。", tags: ["名词", "四会词"] },
            { word: "remember", phonetic: "/rɪˈmembər/", meaning: "记住", example: "I will remember you.", exampleCn: "我会记住你。", tags: ["动词", "四会词"] },
            { word: "miss", phonetic: "/mɪs/", meaning: "想念", example: "I will miss you.", exampleCn: "我会想念你的。", tags: ["动词", "四会词"] },
            { word: "forever", phonetic: "/fərˈevər/", meaning: "永远", example: "Friends forever!", exampleCn: "永远的朋友！", tags: ["副词", "三会词"] },
            { word: "goodbye", phonetic: "/ˌɡʊdˈbaɪ/", meaning: "再见", example: "Goodbye, my friends!", exampleCn: "再见，我的朋友们！", tags: ["问候", "四会词"] }
          ],
          texts: [
            {
              lesson: "Module 10 Unit 1",
              title: "Review & Farewell",
              content: [
                { en: "We will graduate soon.", cn: "我们即将毕业。" },
                { en: "I will miss all my friends.", cn: "我会想念所有的朋友。" },
                { en: "Let's keep in touch.", cn: "让我们保持联系。" },
                { en: "Best wishes for the future!", cn: "对未来的最美好祝愿！" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 一年级下册 ====================
    "1-2": {
      semester: "下册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Colours",
          words: [
            { word: "red", phonetic: "/red/", meaning: "红色", example: "It's red.", exampleCn: "它是红色的。", tags: ["颜色", "四会词"] },
            { word: "yellow", phonetic: "/ˈjeləʊ/", meaning: "黄色", example: "It's yellow.", exampleCn: "它是黄色的。", tags: ["颜色", "四会词"] },
            { word: "blue", phonetic: "/bluː/", meaning: "蓝色", example: "It's blue.", exampleCn: "它是蓝色的。", tags: ["颜色", "四会词"] },
            { word: "green", phonetic: "/ɡriːn/", meaning: "绿色", example: "It's green.", exampleCn: "它是绿色的。", tags: ["颜色", "四会词"] },
            { word: "black", phonetic: "/blæk/", meaning: "黑色", example: "It's black.", exampleCn: "它是黑色的。", tags: ["颜色", "四会词"] },
            { word: "white", phonetic: "/waɪt/", meaning: "白色", example: "It's white.", exampleCn: "它是白色的。", tags: ["颜色", "四会词"] },
            { word: "orange", phonetic: "/ˈɒrɪndʒ/", meaning: "橙色", example: "It's orange.", exampleCn: "它是橙色的。", tags: ["颜色", "三会词"] },
            { word: "colour", phonetic: "/ˈkʌlər/", meaning: "颜色", example: "What colour?", exampleCn: "什么颜色？", tags: ["颜色", "三会词"] }
          ],
          texts: [
            { lesson: "Module 1 Unit 1", title: "Colours", content: [{ en: "What colour is it?", cn: "它是什么颜色？" }, { en: "It's red.", cn: "它是红色的。" }] }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Animals",
          words: [
            { word: "panda", phonetic: "/ˈpændə/", meaning: "熊猫", example: "It's a panda.", exampleCn: "它是一只熊猫。", tags: ["动物", "四会词"] },
            { word: "monkey", phonetic: "/ˈmʌŋki/", meaning: "猴子", example: "It's a monkey.", exampleCn: "它是一只猴子。", tags: ["动物", "四会词"] },
            { word: "elephant", phonetic: "/ˈelɪfənt/", meaning: "大象", example: "It's an elephant.", exampleCn: "它是一头大象。", tags: ["动物", "四会词"] },
            { word: "tiger", phonetic: "/ˈtaɪɡər/", meaning: "老虎", example: "It's a tiger.", exampleCn: "它是一只老虎。", tags: ["动物", "四会词"] },
            { word: "lion", phonetic: "/ˈlaɪən/", meaning: "狮子", example: "It's a lion.", exampleCn: "它是一只狮子。", tags: ["动物", "四会词"] },
            { word: "zoo", phonetic: "/zuː/", meaning: "动物园", example: "Let's go to the zoo.", exampleCn: "我们去动物园吧。", tags: ["地点", "四会词"] },
            { word: "bear", phonetic: "/beər/", meaning: "熊", example: "It's a bear.", exampleCn: "它是一只熊。", tags: ["动物", "三会词"] },
            { word: "giraffe", phonetic: "/dʒəˈrɑːf/", meaning: "长颈鹿", example: "It's a giraffe.", exampleCn: "它是一只长颈鹿。", tags: ["动物", "三会词"] }
          ],
          texts: [
            { lesson: "Module 2 Unit 1", title: "Animals", content: [{ en: "What's this?", cn: "这是什么？" }, { en: "It's a panda.", cn: "它是一只熊猫。" }] }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Food",
          words: [
            { word: "rice", phonetic: "/raɪs/", meaning: "米饭", example: "I like rice.", exampleCn: "我喜欢米饭。", tags: ["食物", "四会词"] },
            { word: "noodles", phonetic: "/ˈnuːdlz/", meaning: "面条", example: "I like noodles.", exampleCn: "我喜欢面条。", tags: ["食物", "四会词"] },
            { word: "meat", phonetic: "/miːt/", meaning: "肉", example: "I like meat.", exampleCn: "我喜欢肉。", tags: ["食物", "四会词"] },
            { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼", example: "I like fish.", exampleCn: "我喜欢鱼。", tags: ["食物", "四会词"] },
            { word: "milk", phonetic: "/mɪlk/", meaning: "牛奶", example: "I like milk.", exampleCn: "我喜欢牛奶。", tags: ["食物", "四会词"] },
            { word: "like", phonetic: "/laɪk/", meaning: "喜欢", example: "I like apples.", exampleCn: "我喜欢苹果。", tags: ["动词", "四会词"] },
            { word: "pass", phonetic: "/pɑːs/", meaning: "传递", example: "Pass me the rice.", exampleCn: "把米饭递给我。", tags: ["动词", "三会词"] },
            { word: "but", phonetic: "/bʌt/", meaning: "但是", example: "I like noodles, but...", exampleCn: "我喜欢面条，但是...", tags: ["连词", "三会词"] }
          ],
          texts: [
            { lesson: "Module 3 Unit 1", title: "Food", content: [{ en: "Do you like meat?", cn: "你喜欢肉吗？" }, { en: "Yes, I do.", cn: "是的，我喜欢。" }] }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Family",
          words: [
            { word: "mother", phonetic: "/ˈmʌðər/", meaning: "母亲", example: "This is my mother.", exampleCn: "这是我的妈妈。", tags: ["家庭", "四会词"] },
            { word: "father", phonetic: "/ˈfɑːðər/", meaning: "父亲", example: "This is my father.", exampleCn: "这是我的爸爸。", tags: ["家庭", "四会词"] },
            { word: "sister", phonetic: "/ˈsɪstər/", meaning: "姐妹", example: "This is my sister.", exampleCn: "这是我的姐妹。", tags: ["家庭", "四会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "兄弟", example: "This is my brother.", exampleCn: "这是我的兄弟。", tags: ["家庭", "四会词"] },
            { word: "grandma", phonetic: "/ˈɡrænmɑː/", meaning: "奶奶", example: "This is my grandma.", exampleCn: "这是我的奶奶。", tags: ["家庭", "四会词"] },
            { word: "grandpa", phonetic: "/ˈɡrænpɑː/", meaning: "爷爷", example: "This is my grandpa.", exampleCn: "这是我的爷爷。", tags: ["家庭", "四会词"] },
            { word: "she's", phonetic: "/ʃiːz/", meaning: "她是", example: "She's my mother.", exampleCn: "她是我的妈妈。", tags: ["缩写", "三会词"] },
            { word: "he's", phonetic: "/hiːz/", meaning: "他是", example: "He's my father.", exampleCn: "他是我的爸爸。", tags: ["缩写", "三会词"] }
          ],
          texts: [
            { lesson: "Module 4 Unit 1", title: "Family", content: [{ en: "Is this your mother?", cn: "这是你的妈妈吗？" }, { en: "Yes, it is.", cn: "是的。" }] }
          ]
        },
        { unitId: "M5", unitName: "Module 5 Toys", words: [
          { word: "toy", phonetic: "/tɔɪ/", meaning: "玩具", example: "I like toys.", exampleCn: "我喜欢玩具。", tags: ["名词", "四会词"] },
          { word: "ball", phonetic: "/bɔːl/", meaning: "球", example: "I have a ball.", exampleCn: "我有一个球。", tags: ["玩具", "四会词"] },
          { word: "doll", phonetic: "/dɒl/", meaning: "洋娃娃", example: "She has a doll.", exampleCn: "她有一个洋娃娃。", tags: ["玩具", "四会词"] },
          { word: "kite", phonetic: "/kaɪt/", meaning: "风筝", example: "Fly a kite.", exampleCn: "放风筝。", tags: ["玩具", "四会词"] },
          { word: "car", phonetic: "/kɑːr/", meaning: "小汽车", example: "I have a toy car.", exampleCn: "我有一辆玩具车。", tags: ["玩具", "四会词"] },
          { word: "teddy bear", phonetic: "/ˈtedi beər/", meaning: "泰迪熊", example: "I love my teddy bear.", exampleCn: "我爱我的泰迪熊。", tags: ["玩具", "三会词"] },
          { word: "game", phonetic: "/ɡeɪm/", meaning: "游戏", example: "Let's play a game.", exampleCn: "我们来玩游戏。", tags: ["名词", "三会词"] },
          { word: "play", phonetic: "/pleɪ/", meaning: "玩", example: "Let's play!", exampleCn: "我们来玩吧！", tags: ["动词", "四会词"] }
        ], texts: [{ lesson: "Module 5 Unit 1", title: "Toys", content: [{ en: "What's your favourite toy?", cn: "你最喜欢的玩具是什么？" }, { en: "My favourite toy is a teddy bear.", cn: "我最喜欢的玩具是泰迪熊。" }, { en: "I like balls.", cn: "我喜欢球。" }, { en: "Let's play together!", cn: "我们一起玩吧！" }] }] },
        { unitId: "M6", unitName: "Module 6 Body", words: [
          { word: "head", phonetic: "/hed/", meaning: "头", example: "Touch your head.", exampleCn: "摸摸你的头。", tags: ["身体", "四会词"] },
          { word: "face", phonetic: "/feɪs/", meaning: "脸", example: "Wash your face.", exampleCn: "洗洗脸。", tags: ["身体", "四会词"] },
          { word: "eye", phonetic: "/aɪ/", meaning: "眼睛", example: "I have two eyes.", exampleCn: "我有两只眼睛。", tags: ["身体", "四会词"] },
          { word: "ear", phonetic: "/ɪər/", meaning: "耳朵", example: "I have two ears.", exampleCn: "我有两只耳朵。", tags: ["身体", "四会词"] },
          { word: "nose", phonetic: "/nəʊz/", meaning: "鼻子", example: "Touch your nose.", exampleCn: "摸摸你的鼻子。", tags: ["身体", "四会词"] },
          { word: "mouth", phonetic: "/maʊθ/", meaning: "嘴巴", example: "Open your mouth.", exampleCn: "张开嘴巴。", tags: ["身体", "四会词"] },
          { word: "hand", phonetic: "/hænd/", meaning: "手", example: "Wave your hand.", exampleCn: "挥挥手。", tags: ["身体", "四会词"] },
          { word: "foot", phonetic: "/fʊt/", meaning: "脚", example: "Stamp your foot.", exampleCn: "跺跺脚。", tags: ["身体", "三会词"] }
        ], texts: [{ lesson: "Module 6 Unit 1", title: "My Body", content: [{ en: "Touch your head.", cn: "摸摸你的头。" }, { en: "Touch your nose.", cn: "摸摸你的鼻子。" }, { en: "Wave your hands.", cn: "挥挥手。" }, { en: "Stamp your foot.", cn: "跺跺脚。" }] }] },
        { unitId: "M7", unitName: "Module 7 Classroom Things", words: [
          { word: "pencil", phonetic: "/ˈpensl/", meaning: "铅笔", example: "I have a pencil.", exampleCn: "我有一支铅笔。", tags: ["文具", "四会词"] },
          { word: "pen", phonetic: "/pen/", meaning: "钢笔", example: "This is my pen.", exampleCn: "这是我的钢笔。", tags: ["文具", "四会词"] },
          { word: "ruler", phonetic: "/ˈruːlər/", meaning: "尺子", example: "I have a ruler.", exampleCn: "我有一把尺子。", tags: ["文具", "四会词"] },
          { word: "eraser", phonetic: "/ɪˈreɪzər/", meaning: "橡皮", example: "I have an eraser.", exampleCn: "我有一块橡皮。", tags: ["文具", "三会词"] },
          { word: "book", phonetic: "/bʊk/", meaning: "书", example: "Open your book.", exampleCn: "打开你的书。", tags: ["文具", "四会词"] },
          { word: "bag", phonetic: "/bæɡ/", meaning: "书包", example: "My bag is big.", exampleCn: "我的书包很大。", tags: ["文具", "四会词"] },
          { word: "desk", phonetic: "/desk/", meaning: "课桌", example: "This is my desk.", exampleCn: "这是我的课桌。", tags: ["物品", "三会词"] },
          { word: "chair", phonetic: "/tʃeər/", meaning: "椅子", example: "Sit on the chair.", exampleCn: "坐在椅子上。", tags: ["物品", "三会词"] }
        ], texts: [{ lesson: "Module 7 Unit 1", title: "Classroom Things", content: [{ en: "What's this?", cn: "这是什么？" }, { en: "It's a pencil.", cn: "它是一支铅笔。" }, { en: "What's that?", cn: "那是什么？" }, { en: "It's a ruler.", cn: "它是一把尺子。" }] }] },
        { unitId: "M8", unitName: "Module 8 Friends", words: [
          { word: "friend", phonetic: "/frend/", meaning: "朋友", example: "She is my friend.", exampleCn: "她是我的朋友。", tags: ["名词", "四会词"] },
          { word: "she", phonetic: "/ʃiː/", meaning: "她", example: "She is tall.", exampleCn: "她很高。", tags: ["代词", "四会词"] },
          { word: "he", phonetic: "/hiː/", meaning: "他", example: "He is short.", exampleCn: "他很矮。", tags: ["代词", "四会词"] },
          { word: "tall", phonetic: "/tɔːl/", meaning: "高的", example: "She is tall.", exampleCn: "她很高。", tags: ["形容词", "四会词"] },
          { word: "short", phonetic: "/ʃɔːt/", meaning: "矮的", example: "He is short.", exampleCn: "他很矮。", tags: ["形容词", "四会词"] },
          { word: "big", phonetic: "/bɪɡ/", meaning: "大的", example: "The dog is big.", exampleCn: "这只狗很大。", tags: ["形容词", "四会词"] },
          { word: "small", phonetic: "/smɔːl/", meaning: "小的", example: "The cat is small.", exampleCn: "这只猫很小。", tags: ["形容词", "四会词"] },
          { word: "cute", phonetic: "/kjuːt/", meaning: "可爱的", example: "She is cute.", exampleCn: "她很可爱。", tags: ["形容词", "三会词"] }
        ], texts: [{ lesson: "Module 8 Unit 1", title: "My Friends", content: [{ en: "This is my friend.", cn: "这是我的朋友。" }, { en: "She is tall and cute.", cn: "她又高又可爱。" }, { en: "This is my friend too.", cn: "这也是我的朋友。" }, { en: "He is short and funny.", cn: "他又矮又有趣。" }] }] },
        { unitId: "M9", unitName: "Module 9 Clothes", words: [
          { word: "shirt", phonetic: "/ʃɜːrt/", meaning: "衬衫", example: "I have a shirt.", exampleCn: "我有一件衬衫。", tags: ["服装", "四会词"] },
          { word: "dress", phonetic: "/dres/", meaning: "连衣裙", example: "I like the dress.", exampleCn: "我喜欢这条连衣裙。", tags: ["服装", "四会词"] },
          { word: "coat", phonetic: "/kəʊt/", meaning: "外套", example: "Put on your coat.", exampleCn: "穿上你的外套。", tags: ["服装", "四会词"] },
          { word: "hat", phonetic: "/hæt/", meaning: "帽子", example: "I have a hat.", exampleCn: "我有一顶帽子。", tags: ["服装", "三会词"] },
          { word: "shoes", phonetic: "/ʃuːz/", meaning: "鞋子", example: "Put on your shoes.", exampleCn: "穿上你的鞋子。", tags: ["服装", "四会词"] },
          { word: "socks", phonetic: "/sɒks/", meaning: "袜子", example: "I have socks.", exampleCn: "我有袜子。", tags: ["服装", "三会词"] },
          { word: "T-shirt", phonetic: "/ˈtiː ʃɜːrt/", meaning: "T恤", example: "I like my T-shirt.", exampleCn: "我喜欢我的T恤。", tags: ["服装", "三会词"] },
          { word: "put on", phonetic: "/pʊt ɒn/", meaning: "穿上", example: "Put on your shoes.", exampleCn: "穿上你的鞋子。", tags: ["短语", "四会词"] }
        ], texts: [{ lesson: "Module 9 Unit 1", title: "Clothes", content: [{ en: "Have you got a dress?", cn: "你有连衣裙吗？" }, { en: "Yes, I have.", cn: "是的，我有。" }, { en: "What colour is it?", cn: "它是什么颜色的？" }, { en: "It's red.", cn: "红色的。" }] }] },
        { unitId: "M10", unitName: "Module 10 Review", words: [
          { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
          { word: "again", phonetic: "/əˈɡen/", meaning: "再次", example: "Read it again.", exampleCn: "再读一遍。", tags: ["副词", "四会词"] },
          { word: "test", phonetic: "/test/", meaning: "测试", example: "We have a test.", exampleCn: "我们有一个测试。", tags: ["名词", "三会词"] },
          { word: "well", phonetic: "/wel/", meaning: "好地", example: "I did well.", exampleCn: "我做得很好。", tags: ["副词", "四会词"] },
          { word: "good", phonetic: "/ɡʊd/", meaning: "好的", example: "Good job!", exampleCn: "做得好！", tags: ["形容词", "四会词"] },
          { word: "great", phonetic: "/ɡreɪt/", meaning: "极好的", example: "Great!", exampleCn: "太棒了！", tags: ["形容词", "四会词"] },
          { word: "try", phonetic: "/traɪ/", meaning: "尝试", example: "Try your best.", exampleCn: "尽你最大的努力。", tags: ["动词", "四会词"] },
          { word: "best", phonetic: "/best/", meaning: "最好的", example: "Do your best.", exampleCn: "做到最好。", tags: ["副词", "三会词"] }
        ], texts: [{ lesson: "Module 10 Unit 1", title: "Review", content: [{ en: "What did we learn this year?", cn: "今年我们学了什么？" }, { en: "We learned about toys and body.", cn: "我们学了玩具和身体。" }, { en: "And clothes too!", cn: "还有衣服！" }, { en: "Great! Let's keep learning!", cn: "太好了！我们继续学习！" }] }] }
      ]
    },
    // ==================== 二年级下册 ====================
    "2-2": {
      semester: "下册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Weather",
          words: [
            { word: "weather", phonetic: "/ˈweðər/", meaning: "天气", example: "What's the weather like?", exampleCn: "天气怎么样？", tags: ["天气", "四会词"] },
            { word: "sunny", phonetic: "/ˈsʌni/", meaning: "晴朗的", example: "It's sunny today.", exampleCn: "今天天气晴朗。", tags: ["天气", "四会词"] },
            { word: "windy", phonetic: "/ˈwɪndi/", meaning: "有风的", example: "It's windy today.", exampleCn: "今天有风。", tags: ["天气", "四会词"] },
            { word: "rainy", phonetic: "/ˈreɪni/", meaning: "下雨的", example: "It's rainy today.", exampleCn: "今天下雨。", tags: ["天气", "四会词"] },
            { word: "cloudy", phonetic: "/ˈklaʊdi/", meaning: "多云的", example: "It's cloudy today.", exampleCn: "今天多云。", tags: ["天气", "四会词"] },
            { word: "snowy", phonetic: "/ˈsnəʊi/", meaning: "下雪的", example: "It's snowy today.", exampleCn: "今天下雪。", tags: ["天气", "四会词"] },
            { word: "hot", phonetic: "/hɒt/", meaning: "热的", example: "It's hot today.", exampleCn: "今天很热。", tags: ["天气", "三会词"] },
            { word: "cold", phonetic: "/kəʊld/", meaning: "冷的", example: "It's cold today.", exampleCn: "今天很冷。", tags: ["天气", "三会词"] }
          ],
          texts: [
            { lesson: "Module 1 Unit 1", title: "Weather", content: [{ en: "What's the weather like?", cn: "天气怎么样？" }, { en: "It's sunny.", cn: "天气晴朗。" }] }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Activities",
          words: [
            { word: "read", phonetic: "/riːd/", meaning: "阅读", example: "I like reading.", exampleCn: "我喜欢阅读。", tags: ["活动", "四会词"] },
            { word: "run", phonetic: "/rʌn/", meaning: "跑步", example: "I like running.", exampleCn: "我喜欢跑步。", tags: ["活动", "四会词"] },
            { word: "swim", phonetic: "/swɪm/", meaning: "游泳", example: "I like swimming.", exampleCn: "我喜欢游泳。", tags: ["活动", "四会词"] },
            { word: "sing", phonetic: "/sɪŋ/", meaning: "唱歌", example: "I like singing.", exampleCn: "我喜欢唱歌。", tags: ["活动", "四会词"] },
            { word: "dance", phonetic: "/dɑːns/", meaning: "跳舞", example: "I like dancing.", exampleCn: "我喜欢跳舞。", tags: ["活动", "四会词"] },
            { word: "draw", phonetic: "/drɔː/", meaning: "画画", example: "I like drawing.", exampleCn: "我喜欢画画。", tags: ["活动", "四会词"] },
            { word: "these", phonetic: "/ðiːz/", meaning: "这些", example: "What are these?", exampleCn: "这些是什么？", tags: ["代词", "三会词"] },
            { word: "those", phonetic: "/ðəʊz/", meaning: "那些", example: "What are those?", exampleCn: "那些是什么？", tags: ["代词", "三会词"] }
          ],
          texts: [
            { lesson: "Module 2 Unit 1", title: "Activities", content: [{ en: "Do you like reading?", cn: "你喜欢阅读吗？" }, { en: "Yes, I do.", cn: "是的，我喜欢。" }] }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Clothes",
          words: [
            { word: "shirt", phonetic: "/ʃɜːrt/", meaning: "衬衫", example: "I have a shirt.", exampleCn: "我有一件衬衫。", tags: ["服装", "四会词"] },
            { word: "skirt", phonetic: "/skɜːrt/", meaning: "裙子", example: "I have a skirt.", exampleCn: "我有一条裙子。", tags: ["服装", "四会词"] },
            { word: "trousers", phonetic: "/ˈtraʊzərz/", meaning: "裤子", example: "I have trousers.", exampleCn: "我有一条裤子。", tags: ["服装", "四会词"] },
            { word: "shoes", phonetic: "/ʃuːz/", meaning: "鞋子", example: "I have shoes.", exampleCn: "我有一双鞋。", tags: ["服装", "四会词"] },
            { word: "socks", phonetic: "/sɒks/", meaning: "袜子", example: "I have socks.", exampleCn: "我有袜子。", tags: ["服装", "四会词"] },
            { word: "dress", phonetic: "/dres/", meaning: "连衣裙", example: "I have a dress.", exampleCn: "我有一条连衣裙。", tags: ["服装", "四会词"] },
            { word: "coat", phonetic: "/kəʊt/", meaning: "外套", example: "I have a coat.", exampleCn: "我有一件外套。", tags: ["服装", "三会词"] },
            { word: "hat", phonetic: "/hæt/", meaning: "帽子", example: "I have a hat.", exampleCn: "我有一顶帽子。", tags: ["服装", "三会词"] }
          ],
          texts: [
            { lesson: "Module 3 Unit 1", title: "Clothes", content: [{ en: "Have you got a shirt?", cn: "你有衬衫吗？" }, { en: "Yes, I have.", cn: "是的，我有。" }] }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Seasons",
          words: [
            { word: "spring", phonetic: "/sprɪŋ/", meaning: "春天", example: "It's spring.", exampleCn: "现在是春天。", tags: ["季节", "四会词"] },
            { word: "summer", phonetic: "/ˈsʌmər/", meaning: "夏天", example: "It's summer.", exampleCn: "现在是夏天。", tags: ["季节", "四会词"] },
            { word: "autumn", phonetic: "/ˈɔːtəm/", meaning: "秋天", example: "It's autumn.", exampleCn: "现在是秋天。", tags: ["季节", "四会词"] },
            { word: "winter", phonetic: "/ˈwɪntər/", meaning: "冬天", example: "It's winter.", exampleCn: "现在是冬天。", tags: ["季节", "四会词"] },
            { word: "warm", phonetic: "/wɔːrm/", meaning: "温暖的", example: "It's warm in spring.", exampleCn: "春天很温暖。", tags: ["天气", "四会词"] },
            { word: "cool", phonetic: "/kuːl/", meaning: "凉爽的", example: "It's cool in autumn.", exampleCn: "秋天很凉爽。", tags: ["天气", "四会词"] },
            { word: "fly", phonetic: "/flaɪ/", meaning: "放（风筝）", example: "I fly a kite.", exampleCn: "我放风筝。", tags: ["活动", "三会词"] },
            { word: "kite", phonetic: "/kaɪt/", meaning: "风筝", example: "I fly a kite.", exampleCn: "我放风筝。", tags: ["玩具", "三会词"] }
          ],
          texts: [
            { lesson: "Module 4 Unit 1", title: "Seasons", content: [{ en: "What's your favourite season?", cn: "你最喜欢的季节是什么？" }, { en: "My favourite season is spring.", cn: "我最喜欢的季节是春天。" }] }
          ]
        },
        { unitId: "M5", unitName: "Module 5 Pets", words: [
          { word: "pet", phonetic: "/pet/", meaning: "宠物", example: "I have a pet.", exampleCn: "我有一只宠物。", tags: ["名词", "四会词"] },
          { word: "rabbit", phonetic: "/ˈræbɪt/", meaning: "兔子", example: "The rabbit is white.", exampleCn: "兔子是白色的。", tags: ["动物", "四会词"] },
          { word: "bird", phonetic: "/bɜːrd/", meaning: "鸟", example: "The bird can sing.", exampleCn: "鸟会唱歌。", tags: ["动物", "四会词"] },
          { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼", example: "I have a pet fish.", exampleCn: "我有一条宠物鱼。", tags: ["动物", "四会词"] },
          { word: "turtle", phonetic: "/ˈtɜːrtl/", meaning: "乌龟", example: "The turtle is slow.", exampleCn: "乌龟很慢。", tags: ["动物", "三会词"] },
          { word: "hamster", phonetic: "/ˈhæmstər/", meaning: "仓鼠", example: "I like hamsters.", exampleCn: "我喜欢仓鼠。", tags: ["动物", "三会词"] },
          { word: "feed", phonetic: "/fiːd/", meaning: "喂养", example: "I feed my pet every day.", exampleCn: "我每天喂我的宠物。", tags: ["动词", "四会词"] },
          { word: "cute", phonetic: "/kjuːt/", meaning: "可爱的", example: "The rabbit is cute.", exampleCn: "兔子很可爱。", tags: ["形容词", "四会词"] }
        ], texts: [{ lesson: "Module 5 Unit 1", title: "Pets", content: [{ en: "Have you got a pet?", cn: "你有宠物吗？" }, { en: "Yes, I've got a rabbit.", cn: "是的，我有一只兔子。" }, { en: "What colour is it?", cn: "它是什么颜色的？" }, { en: "It's white. It's very cute.", cn: "白色的。它非常可爱。" }] }] },
        { unitId: "M6", unitName: "Module 6 Places", words: [
          { word: "park", phonetic: "/pɑːrk/", meaning: "公园", example: "Let's go to the park.", exampleCn: "我们去公园吧。", tags: ["地点", "四会词"] },
          { word: "zoo", phonetic: "/zuː/", meaning: "动物园", example: "I like the zoo.", exampleCn: "我喜欢动物园。", tags: ["地点", "四会词"] },
          { word: "shop", phonetic: "/ʃɒp/", meaning: "商店", example: "Let's go to the shop.", exampleCn: "我们去商店吧。", tags: ["地点", "四会词"] },
          { word: "hospital", phonetic: "/ˈhɒspɪtl/", meaning: "医院", example: "She is in the hospital.", exampleCn: "她在医院里。", tags: ["地点", "四会词"] },
          { word: "cinema", phonetic: "/ˈsɪnəmə/", meaning: "电影院", example: "I go to the cinema.", exampleCn: "我去电影院。", tags: ["地点", "三会词"] },
          { word: "library", phonetic: "/ˈlaɪbreri/", meaning: "图书馆", example: "I read in the library.", exampleCn: "我在图书馆看书。", tags: ["地点", "三会词"] },
          { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", meaning: "操场", example: "We play on the playground.", exampleCn: "我们在操场上玩。", tags: ["地点", "四会词"] },
          { word: "near", phonetic: "/nɪər/", meaning: "附近", example: "The park is near my home.", exampleCn: "公园在我家附近。", tags: ["介词", "三会词"] }
        ], texts: [{ lesson: "Module 6 Unit 1", title: "Places", content: [{ en: "Where do you go on Sunday?", cn: "星期天你去哪里？" }, { en: "I go to the park.", cn: "我去公园。" }, { en: "Is it near your home?", cn: "它在你家附近吗？" }, { en: "Yes, it is.", cn: "是的。" }] }] },
        { unitId: "M7", unitName: "Module 7 Numbers 11-20", words: [
          { word: "eleven", phonetic: "/ɪˈlevn/", meaning: "十一", example: "I have eleven books.", exampleCn: "我有十一本书。", tags: ["数字", "四会词"] },
          { word: "twelve", phonetic: "/twelv/", meaning: "十二", example: "There are twelve months.", exampleCn: "有十二个月。", tags: ["数字", "四会词"] },
          { word: "thirteen", phonetic: "/ˌθɜːrˈtiːn/", meaning: "十三", example: "I am thirteen.", exampleCn: "我十三岁。", tags: ["数字", "四会词"] },
          { word: "fourteen", phonetic: "/ˌfɔːrˈtiːn/", meaning: "十四", example: "Fourteen cats.", exampleCn: "十四只猫。", tags: ["数字", "三会词"] },
          { word: "fifteen", phonetic: "/ˌfɪfˈtiːn/", meaning: "十五", example: "Fifteen dogs.", exampleCn: "十五只狗。", tags: ["数字", "三会词"] },
          { word: "sixteen", phonetic: "/ˌsɪksˈtiːn/", meaning: "十六", example: "Sixteen birds.", exampleCn: "十六只鸟。", tags: ["数字", "三会词"] },
          { word: "seventeen", phonetic: "/ˌsevnˈtiːn/", meaning: "十七", example: "Seventeen pencils.", exampleCn: "十七支铅笔。", tags: ["数字", "三会词"] },
          { word: "eighteen", phonetic: "/ˌeɪˈtiːn/", meaning: "十八", example: "Eighteen apples.", exampleCn: "十八个苹果。", tags: ["数字", "三会词"] },
          { word: "nineteen", phonetic: "/ˌnaɪnˈtiːn/", meaning: "十九", example: "Nineteen oranges.", exampleCn: "十九个橙子。", tags: ["数字", "三会词"] },
          { word: "twenty", phonetic: "/ˈtwenti/", meaning: "二十", example: "Twenty students.", exampleCn: "二十名学生。", tags: ["数字", "四会词"] }
        ], texts: [{ lesson: "Module 7 Unit 1", title: "Numbers", content: [{ en: "How many apples do you have?", cn: "你有多少个苹果？" }, { en: "I have fifteen apples.", cn: "我有十五个苹果。" }, { en: "How many books?", cn: "多少本书？" }, { en: "Twenty books.", cn: "二十本书。" }] }] },
        { unitId: "M8", unitName: "Module 8 Directions", words: [
          { word: "left", phonetic: "/left/", meaning: "左边", example: "Turn left.", exampleCn: "向左转。", tags: ["方位", "四会词"] },
          { word: "right", phonetic: "/raɪt/", meaning: "右边", example: "Turn right.", exampleCn: "向右转。", tags: ["方位", "四会词"] },
          { word: "straight", phonetic: "/streɪt/", meaning: "直走", example: "Go straight.", exampleCn: "直走。", tags: ["方位", "四会词"] },
          { word: "turn", phonetic: "/tɜːrn/", meaning: "转弯", example: "Turn left here.", exampleCn: "在这里左转。", tags: ["动词", "四会词"] },
          { word: "up", phonetic: "/ʌp/", meaning: "向上", example: "Go up the hill.", exampleCn: "上山。", tags: ["方位", "四会词"] },
          { word: "down", phonetic: "/daʊn/", meaning: "向下", example: "Go down the hill.", exampleCn: "下山。", tags: ["方位", "四会词"] },
          { word: "next to", phonetic: "/nekst tuː/", meaning: "紧挨着", example: "It's next to the school.", exampleCn: "它紧挨着学校。", tags: ["介词", "三会词"] },
          { word: "between", phonetic: "/bɪˈtwiːn/", meaning: "在...之间", example: "It's between the park and the shop.", exampleCn: "它在公园和商店之间。", tags: ["介词", "三会词"] }
        ], texts: [{ lesson: "Module 8 Unit 1", title: "Directions", content: [{ en: "Where is the park?", cn: "公园在哪里？" }, { en: "Go straight and turn left.", cn: "直走然后左转。" }, { en: "Thank you!", cn: "谢谢！" }, { en: "You're welcome.", cn: "不客气。" }] }] },
        { unitId: "M9", unitName: "Module 9 Music", words: [
          { word: "music", phonetic: "/ˈmjuːzɪk/", meaning: "音乐", example: "I like music.", exampleCn: "我喜欢音乐。", tags: ["名词", "四会词"] },
          { word: "piano", phonetic: "/piˈænəʊ/", meaning: "钢琴", example: "Play the piano.", exampleCn: "弹钢琴。", tags: ["乐器", "四会词"] },
          { word: "guitar", phonetic: "/ɡɪˈtɑːr/", meaning: "吉他", example: "Play the guitar.", exampleCn: "弹吉他。", tags: ["乐器", "三会词"] },
          { word: "drum", phonetic: "/drʌm/", meaning: "鼓", example: "Play the drum.", exampleCn: "打鼓。", tags: ["乐器", "三会词"] },
          { word: "sing", phonetic: "/sɪŋ/", meaning: "唱歌", example: "I like singing.", exampleCn: "我喜欢唱歌。", tags: ["动词", "四会词"] },
          { word: "song", phonetic: "/sɒŋ/", meaning: "歌曲", example: "I like this song.", exampleCn: "我喜欢这首歌。", tags: ["名词", "四会词"] },
          { word: "listen", phonetic: "/ˈlɪsn/", meaning: "听", example: "Listen to the music.", exampleCn: "听音乐。", tags: ["动词", "四会词"] },
          { word: "dance", phonetic: "/dɑːns/", meaning: "跳舞", example: "I like dancing.", exampleCn: "我喜欢跳舞。", tags: ["动词", "四会词"] }
        ], texts: [{ lesson: "Module 9 Unit 1", title: "Music", content: [{ en: "Do you like music?", cn: "你喜欢音乐吗？" }, { en: "Yes, I like singing.", cn: "是的，我喜欢唱歌。" }, { en: "Can you play the piano?", cn: "你会弹钢琴吗？" }, { en: "No, but I can play the drum.", cn: "不会，但我会打鼓。" }] }] },
        { unitId: "M10", unitName: "Module 10 Review", words: [
          { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
          { word: "again", phonetic: "/əˈɡen/", meaning: "再次", example: "Let's read it again.", exampleCn: "让我们再读一遍。", tags: ["副词", "四会词"] },
          { word: "well", phonetic: "/wel/", meaning: "好地", example: "I can read well.", exampleCn: "我读得很好。", tags: ["副词", "四会词"] },
          { word: "good", phonetic: "/ɡʊd/", meaning: "好的", example: "Good job!", exampleCn: "做得好！", tags: ["形容词", "四会词"] },
          { word: "great", phonetic: "/ɡreɪt/", meaning: "极好的", example: "That's great!", exampleCn: "太棒了！", tags: ["形容词", "四会词"] },
          { word: "try", phonetic: "/traɪ/", meaning: "尝试", example: "Try again.", exampleCn: "再试一次。", tags: ["动词", "四会词"] },
          { word: "all", phonetic: "/ɔːl/", meaning: "全部", example: "We all like English.", exampleCn: "我们都喜欢英语。", tags: ["代词", "三会词"] },
          { word: "right", phonetic: "/raɪt/", meaning: "对的", example: "That's right.", exampleCn: "对了。", tags: ["形容词", "四会词"] }
        ], texts: [{ lesson: "Module 10 Unit 1", title: "Review", content: [{ en: "What did we learn this year?", cn: "今年我们学了什么？" }, { en: "We learned about pets and places.", cn: "我们学了宠物和地点。" }, { en: "And numbers and directions!", cn: "还有数字和方向！" }, { en: "Great! Let's keep learning!", cn: "太好了！我们继续学习！" }] }] }
      ]
    },
    // ==================== 三年级下册 ====================
    "3-2": {
      semester: "下册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Alphabet",
          words: [
            { word: "favourite", phonetic: "/ˈfeɪvərɪt/", meaning: "最喜欢的", example: "My favourite colour is blue.", exampleCn: "我最喜欢的颜色是蓝色。", tags: ["形容词", "四会词"] },
            { word: "song", phonetic: "/sɒŋ/", meaning: "歌曲", example: "My favourite song.", exampleCn: "我最喜欢的歌曲。", tags: ["娱乐", "四会词"] },
            { word: "TV", phonetic: "/ˌtiː ˈviː/", meaning: "电视", example: "I watch TV.", exampleCn: "我看电视。", tags: ["电器", "四会词"] },
            { word: "toy", phonetic: "/tɔɪ/", meaning: "玩具", example: "My favourite toy.", exampleCn: "我最喜欢的玩具。", tags: ["玩具", "四会词"] },
            { word: "computer", phonetic: "/kəmˈpjuːtər/", meaning: "电脑", example: "I play computer games.", exampleCn: "我玩电脑游戏。", tags: ["电器", "四会词"] },
            { word: "game", phonetic: "/ɡeɪm/", meaning: "游戏", example: "I like this game.", exampleCn: "我喜欢这个游戏。", tags: ["娱乐", "四会词"] },
            { word: "car", phonetic: "/kɑːr/", meaning: "小汽车", example: "I have a toy car.", exampleCn: "我有一辆玩具车。", tags: ["玩具", "三会词"] },
            { word: "ship", phonetic: "/ʃɪp/", meaning: "轮船", example: "I have a toy ship.", exampleCn: "我有一艘玩具船。", tags: ["玩具", "三会词"] }
          ],
          texts: [
            { lesson: "Module 1 Unit 1", title: "Favourite Things", content: [{ en: "What's your favourite song?", cn: "你最喜欢的歌曲是什么？" }, { en: "My favourite song is ABC.", cn: "我最喜欢的歌曲是ABC。" }] }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Positions",
          words: [
            { word: "on", phonetic: "/ɒn/", meaning: "在...上面", example: "The book is on the desk.", exampleCn: "书在桌子上。", tags: ["介词", "四会词"] },
            { word: "under", phonetic: "/ˈʌndər/", meaning: "在...下面", example: "The ball is under the chair.", exampleCn: "球在椅子下面。", tags: ["介词", "四会词"] },
            { word: "in", phonetic: "/ɪn/", meaning: "在...里面", example: "The pen is in the box.", exampleCn: "笔在盒子里。", tags: ["介词", "四会词"] },
            { word: "behind", phonetic: "/bɪˈhaɪnd/", meaning: "在...后面", example: "The cat is behind the door.", exampleCn: "猫在门后面。", tags: ["介词", "四会词"] },
            { word: "box", phonetic: "/bɒks/", meaning: "盒子", example: "It's in the box.", exampleCn: "它在盒子里。", tags: ["物品", "四会词"] },
            { word: "bedroom", phonetic: "/ˈbedruːm/", meaning: "卧室", example: "This is my bedroom.", exampleCn: "这是我的卧室。", tags: ["地点", "四会词"] },
            { word: "living room", phonetic: "/ˈlɪvɪŋ ruːm/", meaning: "客厅", example: "This is the living room.", exampleCn: "这是客厅。", tags: ["地点", "三会词"] },
            { word: "kitchen", phonetic: "/ˈkɪtʃɪn/", meaning: "厨房", example: "This is the kitchen.", exampleCn: "这是厨房。", tags: ["地点", "三会词"] }
          ],
          texts: [
            { lesson: "Module 2 Unit 1", title: "Positions", content: [{ en: "Where's the bird?", cn: "鸟在哪里？" }, { en: "It's in the box.", cn: "它在盒子里。" }] }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Travel",
          words: [
            { word: "by", phonetic: "/baɪ/", meaning: "乘（交通工具）", example: "I go to school by bus.", exampleCn: "我乘公交车上学。", tags: ["介词", "四会词"] },
            { word: "bus", phonetic: "/bʌs/", meaning: "公共汽车", example: "I go by bus.", exampleCn: "我乘公交车。", tags: ["交通", "四会词"] },
            { word: "car", phonetic: "/kɑːr/", meaning: "小汽车", example: "I go by car.", exampleCn: "我乘小汽车。", tags: ["交通", "四会词"] },
            { word: "bike", phonetic: "/baɪk/", meaning: "自行车", example: "I go by bike.", exampleCn: "我骑自行车。", tags: ["交通", "四会词"] },
            { word: "walk", phonetic: "/wɔːk/", meaning: "步行", example: "I walk to school.", exampleCn: "我步行上学。", tags: ["动词", "四会词"] },
            { word: "goes", phonetic: "/ɡəʊz/", meaning: "去（第三人称）", example: "She goes to school.", exampleCn: "她去上学。", tags: ["动词", "四会词"] },
            { word: "work", phonetic: "/wɜːrk/", meaning: "工作", example: "He goes to work.", exampleCn: "他去上班。", tags: ["动词", "三会词"] },
            { word: "go to work", phonetic: "/ɡəʊ tuː wɜːrk/", meaning: "去上班", example: "My father goes to work.", exampleCn: "我爸爸去上班。", tags: ["短语", "三会词"] }
          ],
          texts: [
            { lesson: "Module 3 Unit 1", title: "Travel", content: [{ en: "How do you go to school?", cn: "你怎么去上学？" }, { en: "I go to school by bus.", cn: "我乘公交车上学。" }] }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Holidays",
          words: [
            { word: "holiday", phonetic: "/ˈhɒlədeɪ/", meaning: "假期", example: "We have a holiday.", exampleCn: "我们有一个假期。", tags: ["时间", "四会词"] },
            { word: "weekend", phonetic: "/ˌwiːkˈend/", meaning: "周末", example: "At the weekend.", exampleCn: "在周末。", tags: ["时间", "四会词"] },
            { word: "place", phonetic: "/pleɪs/", meaning: "地方", example: "What place?", exampleCn: "什么地方？", tags: ["地点", "四会词"] },
            { word: "British", phonetic: "/ˈbrɪtɪʃ/", meaning: "英国的", example: "British Museum", exampleCn: "大英博物馆", tags: ["国家", "四会词"] },
            { word: "museum", phonetic: "/mjuˈziːəm/", meaning: "博物馆", example: "the British Museum", exampleCn: "大英博物馆", tags: ["地点", "四会词"] },
            { word: "the Great Wall", phonetic: "/ðə ɡreɪt wɔːl/", meaning: "长城", example: "I visited the Great Wall.", exampleCn: "我参观了长城。", tags: ["地点", "四会词"] },
            { word: "visit", phonetic: "/ˈvɪzɪt/", meaning: "参观", example: "I visited Beijing.", exampleCn: "我参观了北京。", tags: ["动词", "三会词"] },
            { word: "went", phonetic: "/went/", meaning: "去（过去式）", example: "I went to Beijing.", exampleCn: "我去了北京。", tags: ["动词", "三会词"] }
          ],
          texts: [
            { lesson: "Module 4 Unit 1", title: "Holidays", content: [{ en: "Where did you go?", cn: "你去了哪里？" }, { en: "I went to the Great Wall.", cn: "我去了长城。" }] }
          ]
        },
        { unitId: "M5", unitName: "Module 5 Abilities", words: [
          { word: "can", phonetic: "/kæn/", meaning: "能够", example: "I can swim.", exampleCn: "我会游泳。", tags: ["动词", "四会词"] },
          { word: "could", phonetic: "/kʊd/", meaning: "能够（过去式）", example: "I could read when I was five.", exampleCn: "我五岁时就能读书。", tags: ["动词", "四会词"] },
          { word: "able", phonetic: "/ˈeɪbl/", meaning: "能干的", example: "I'm able to do it.", exampleCn: "我能做这件事。", tags: ["形容词", "三会词"] },
          { word: "climb", phonetic: "/klaɪm/", meaning: "爬", example: "I can climb the tree.", exampleCn: "我会爬树。", tags: ["动词", "四会词"] },
          { word: "catch", phonetic: "/kætʃ/", meaning: "接住", example: "Catch the ball!", exampleCn: "接住球！", tags: ["动词", "四会词"] },
          { word: "carry", phonetic: "/ˈkæri/", meaning: "搬运", example: "I can carry the bag.", exampleCn: "我能搬动这个包。", tags: ["动词", "三会词"] },
          { word: "help", phonetic: "/help/", meaning: "帮助", example: "Can I help you?", exampleCn: "我能帮你吗？", tags: ["动词", "四会词"] },
          { word: "try", phonetic: "/traɪ/", meaning: "尝试", example: "Try again!", exampleCn: "再试一次！", tags: ["动词", "四会词"] }
        ], texts: [{ lesson: "Module 5 Unit 1", title: "Abilities", content: [{ en: "What can you do?", cn: "你会做什么？" }, { en: "I can swim and climb.", cn: "我会游泳和爬树。" }, { en: "Can you catch the ball?", cn: "你会接球吗？" }, { en: "Yes, I can!", cn: "是的，我会！" }] }] },
        { unitId: "M6", unitName: "Module 6 Descriptions", words: [
          { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", meaning: "美丽的", example: "The flower is beautiful.", exampleCn: "花很美丽。", tags: ["形容词", "四会词"] },
          { word: "clever", phonetic: "/ˈklevər/", meaning: "聪明的", example: "She is clever.", exampleCn: "她很聪明。", tags: ["形容词", "四会词"] },
          { word: "kind", phonetic: "/kaɪnd/", meaning: "善良的", example: "She is kind.", exampleCn: "她很善良。", tags: ["形容词", "四会词"] },
          { word: "brave", phonetic: "/breɪv/", meaning: "勇敢的", example: "He is brave.", exampleCn: "他很勇敢。", tags: ["形容词", "三会词"] },
          { word: "shy", phonetic: "/ʃaɪ/", meaning: "害羞的", example: "She is shy.", exampleCn: "她很害羞。", tags: ["形容词", "四会词"] },
          { word: "friendly", phonetic: "/ˈfrendli/", meaning: "友好的", example: "He is friendly.", exampleCn: "他很友好。", tags: ["形容词", "四会词"] },
          { word: "naughty", phonetic: "/ˈnɔːti/", meaning: "淘气的", example: "The boy is naughty.", exampleCn: "男孩很淘气。", tags: ["形容词", "三会词"] },
          { word: "quiet", phonetic: "/ˈkwaɪət/", meaning: "安静的", example: "She is quiet.", exampleCn: "她很安静。", tags: ["形容词", "四会词"] }
        ], texts: [{ lesson: "Module 6 Unit 1", title: "Descriptions", content: [{ en: "What is she like?", cn: "她是什么样的？" }, { en: "She is kind and clever.", cn: "她善良又聪明。" }, { en: "What about him?", cn: "他呢？" }, { en: "He is brave and friendly.", cn: "他勇敢又友好。" }] }] },
        { unitId: "M7", unitName: "Module 7 Phone Calls", words: [
          { word: "phone", phonetic: "/fəʊn/", meaning: "电话", example: "Answer the phone.", exampleCn: "接电话。", tags: ["名词", "四会词"] },
          { word: "call", phonetic: "/kɔːl/", meaning: "打电话", example: "I'll call you.", exampleCn: "我会给你打电话。", tags: ["动词", "四会词"] },
          { word: "answer", phonetic: "/ˈɑːnsər/", meaning: "回答", example: "Answer the phone.", exampleCn: "接电话。", tags: ["动词", "四会词"] },
          { word: "message", phonetic: "/ˈmesɪdʒ/", meaning: "消息", example: "Can I leave a message?", exampleCn: "我可以留言吗？", tags: ["名词", "四会词"] },
          { word: "number", phonetic: "/ˈnʌmbər/", meaning: "号码", example: "What's your phone number?", exampleCn: "你的电话号码是多少？", tags: ["名词", "四会词"] },
          { word: "ring", phonetic: "/rɪŋ/", meaning: "响铃", example: "The phone is ringing.", exampleCn: "电话在响。", tags: ["动词", "三会词"] },
          { word: "speak", phonetic: "/spiːk/", meaning: "说话", example: "Can I speak to Lingling?", exampleCn: "我可以跟玲玲说话吗？", tags: ["动词", "四会词"] },
          { word: "busy", phonetic: "/ˈbɪzi/", meaning: "忙碌的", example: "She is busy now.", exampleCn: "她现在很忙。", tags: ["形容词", "三会词"] }
        ], texts: [{ lesson: "Module 7 Unit 1", title: "Phone Calls", content: [{ en: "Hello, can I speak to Sam?", cn: "你好，我可以和萨姆说话吗？" }, { en: "Speaking.", cn: "我就是。" }, { en: "Do you want to play?", cn: "你想玩吗？" }, { en: "Yes, let's go to the park!", cn: "好啊，我们去公园吧！" }] }] },
        { unitId: "M8", unitName: "Module 8 Health", words: [
          { word: "ill", phonetic: "/ɪl/", meaning: "生病的", example: "I'm ill.", exampleCn: "我生病了。", tags: ["形容词", "四会词"] },
          { word: "headache", phonetic: "/ˈhedeɪk/", meaning: "头痛", example: "I have a headache.", exampleCn: "我头痛。", tags: ["名词", "四会词"] },
          { word: "fever", phonetic: "/ˈfiːvər/", meaning: "发烧", example: "I have a fever.", exampleCn: "我发烧了。", tags: ["名词", "四会词"] },
          { word: "cough", phonetic: "/kɒf/", meaning: "咳嗽", example: "I have a cough.", exampleCn: "我咳嗽。", tags: ["名词", "四会词"] },
          { word: "cold", phonetic: "/kəʊld/", meaning: "感冒", example: "I have a cold.", exampleCn: "我感冒了。", tags: ["名词", "四会词"] },
          { word: "medicine", phonetic: "/ˈmedɪsn/", meaning: "药", example: "Take the medicine.", exampleCn: "吃药。", tags: ["名词", "三会词"] },
          { word: "rest", phonetic: "/rest/", meaning: "休息", example: "Have a rest.", exampleCn: "休息一下。", tags: ["名词", "四会词"] },
          { word: "better", phonetic: "/ˈbetər/", meaning: "更好的", example: "I feel better.", exampleCn: "我感觉好多了。", tags: ["形容词", "四会词"] }
        ], texts: [{ lesson: "Module 8 Unit 1", title: "Health", content: [{ en: "What's the matter?", cn: "怎么了？" }, { en: "I have a headache.", cn: "我头痛。" }, { en: "You should have a rest.", cn: "你应该休息一下。" }, { en: "Thank you.", cn: "谢谢。" }] }] },
        { unitId: "M9", unitName: "Module 9 Picnic", words: [
          { word: "picnic", phonetic: "/ˈpɪknɪk/", meaning: "野餐", example: "Let's have a picnic.", exampleCn: "我们去野餐吧。", tags: ["名词", "四会词"] },
          { word: "take", phonetic: "/teɪk/", meaning: "带", example: "Take your bag.", exampleCn: "带上你的包。", tags: ["动词", "四会词"] },
          { word: "bring", phonetic: "/brɪŋ/", meaning: "带来", example: "Bring some fruit.", exampleCn: "带些水果来。", tags: ["动词", "四会词"] },
          { word: "great", phonetic: "/ɡreɪt/", meaning: "极好的", example: "That's a great idea!", exampleCn: "好主意！", tags: ["形容词", "四会词"] },
          { word: "idea", phonetic: "/aɪˈdɪə/", meaning: "主意", example: "Good idea!", exampleCn: "好主意！", tags: ["名词", "四会词"] },
          { word: "sure", phonetic: "/ʃʊər/", meaning: "当然", example: "Sure!", exampleCn: "当然！", tags: ["形容词", "三会词"] },
          { word: "why", phonetic: "/waɪ/", meaning: "为什么", example: "Why not?", exampleCn: "为什么不呢？", tags: ["疑问词", "四会词"] },
          { word: "because", phonetic: "/bɪˈkɒz/", meaning: "因为", example: "Because it's sunny.", exampleCn: "因为天气晴朗。", tags: ["连词", "四会词"] }
        ], texts: [{ lesson: "Module 9 Unit 1", title: "Picnic", content: [{ en: "Will you have a picnic?", cn: "你们要野餐吗？" }, { en: "Yes, we will.", cn: "是的。" }, { en: "What will you take?", cn: "你们要带什么？" }, { en: "I'll take some sandwiches and juice.", cn: "我要带三明治和果汁。" }] }] },
        { unitId: "M10", unitName: "Module 10 Review", words: [
          { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
          { word: "term", phonetic: "/tɜːrm/", meaning: "学期", example: "This term is ending.", exampleCn: "这个学期要结束了。", tags: ["名词", "四会词"] },
          { word: "finish", phonetic: "/ˈfɪnɪʃ/", meaning: "完成", example: "I finished the book.", exampleCn: "我读完了这本书。", tags: ["动词", "四会词"] },
          { word: "learn", phonetic: "/lɜːrn/", meaning: "学习", example: "I learned a lot.", exampleCn: "我学到了很多。", tags: ["动词", "四会词"] },
          { word: "holiday", phonetic: "/ˈhɒlədeɪ/", meaning: "假期", example: "Summer holiday is coming.", exampleCn: "暑假快到了。", tags: ["名词", "四会词"] },
          { word: "ready", phonetic: "/ˈredi/", meaning: "准备好的", example: "I'm ready for the holiday.", exampleCn: "我准备好放假了。", tags: ["形容词", "三会词"] },
          { word: "wish", phonetic: "/wɪʃ/", meaning: "祝愿", example: "I wish you a good holiday.", exampleCn: "祝你假期愉快。", tags: ["动词", "四会词"] },
          { word: "hard", phonetic: "/hɑːrd/", meaning: "努力地", example: "Work hard!", exampleCn: "努力！", tags: ["副词", "四会词"] }
        ], texts: [{ lesson: "Module 10 Unit 1", title: "Review", content: [{ en: "What did you learn this term?", cn: "这学期你学了什么？" }, { en: "I learned about abilities and health.", cn: "我学了关于能力和健康的知识。" }, { en: "We also learned about phone calls.", cn: "我们还学了打电话。" }, { en: "Great! Have a good holiday!", cn: "太好了！假期愉快！" }] }] }
      ]
    },
    // ==================== 四年级下册 ====================
    "4-2": {
      semester: "下册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Future",
          words: [
            { word: "robot", phonetic: "/ˈrəʊbɒt/", meaning: "机器人", example: "Robots will do everything.", exampleCn: "机器人将会做所有事情。", tags: ["科技", "四会词"] },
            { word: "everything", phonetic: "/ˈevriθɪŋ/", meaning: "所有事情", example: "Everything is ready.", exampleCn: "所有事情都准备好了。", tags: ["代词", "四会词"] },
            { word: "housework", phonetic: "/ˈhaʊswɜːrk/", meaning: "家务", example: "Do the housework.", exampleCn: "做家务。", tags: ["家务", "四会词"] },
            { word: "learn", phonetic: "/lɜːrn/", meaning: "学习", example: "Robots will learn.", exampleCn: "机器人将会学习。", tags: ["动词", "四会词"] },
            { word: "our", phonetic: "/ˈaʊər/", meaning: "我们的", example: "This is our house.", exampleCn: "这是我们的房子。", tags: ["代词", "四会词"] },
            { word: "will", phonetic: "/wɪl/", meaning: "将要", example: "I will go.", exampleCn: "我将要走。", tags: ["助动词", "四会词"] },
            { word: "won't", phonetic: "/wəʊnt/", meaning: "将不会", example: "I won't go.", exampleCn: "我将不会走。", tags: ["缩写", "三会词"] },
            { word: "homework", phonetic: "/ˈhəʊmwɜːrk/", meaning: "家庭作业", example: "Do your homework.", exampleCn: "做你的家庭作业。", tags: ["学习", "三会词"] }
          ],
          texts: [
            { lesson: "Module 1 Unit 1", title: "Future", content: [{ en: "Will robots do the housework?", cn: "机器人会做家务吗？" }, { en: "Yes, they will.", cn: "是的，它们会。" }] }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Plans",
          words: [
            { word: "Monday", phonetic: "/ˈmʌndeɪ/", meaning: "星期一", example: "On Monday.", exampleCn: "在星期一。", tags: ["时间", "四会词"] },
            { word: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", meaning: "星期二", example: "On Tuesday.", exampleCn: "在星期二。", tags: ["时间", "四会词"] },
            { word: "Wednesday", phonetic: "/ˈwenzdeɪ/", meaning: "星期三", example: "On Wednesday.", exampleCn: "在星期三。", tags: ["时间", "四会词"] },
            { word: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", meaning: "星期四", example: "On Thursday.", exampleCn: "在星期四。", tags: ["时间", "四会词"] },
            { word: "Friday", phonetic: "/ˈfraɪdeɪ/", meaning: "星期五", example: "On Friday.", exampleCn: "在星期五。", tags: ["时间", "四会词"] },
            { word: "Saturday", phonetic: "/ˈsætərdeɪ/", meaning: "星期六", example: "On Saturday.", exampleCn: "在星期六。", tags: ["时间", "四会词"] },
            { word: "Sunday", phonetic: "/ˈsʌndeɪ/", meaning: "星期日", example: "On Sunday.", exampleCn: "在星期日。", tags: ["时间", "四会词"] },
            { word: "have", phonetic: "/hæv/", meaning: "有", example: "I have a picnic.", exampleCn: "我野餐。", tags: ["动词", "四会词"] }
          ],
          texts: [
            { lesson: "Module 2 Unit 1", title: "Plans", content: [{ en: "Will you take your kite?", cn: "你会带你的风筝吗？" }, { en: "Yes, I will.", cn: "是的，我会。" }] }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Countries",
          words: [
            { word: "country", phonetic: "/ˈkʌntri/", meaning: "国家", example: "Which country?", exampleCn: "哪个国家？", tags: ["国家", "四会词"] },
            { word: "Australia", phonetic: "/ɒˈstreɪliə/", meaning: "澳大利亚", example: "I live in Australia.", exampleCn: "我住在澳大利亚。", tags: ["国家", "四会词"] },
            { word: "Australian", phonetic: "/ɒˈstreɪliən/", meaning: "澳大利亚的", example: "I'm Australian.", exampleCn: "我是澳大利亚人。", tags: ["国家", "四会词"] },
            { word: "language", phonetic: "/ˈlæŋɡwɪdʒ/", meaning: "语言", example: "What language?", exampleCn: "什么语言？", tags: ["语言", "四会词"] },
            { word: "kangaroo", phonetic: "/ˌkæŋɡəˈruː/", meaning: "袋鼠", example: "I like kangaroos.", exampleCn: "我喜欢袋鼠。", tags: ["动物", "四会词"] },
            { word: "back", phonetic: "/bæk/", meaning: "后面的", example: "Kangaroos have strong back legs.", exampleCn: "袋鼠有强壮的后腿。", tags: ["形容词", "四会词"] },
            { word: "English", phonetic: "/ˈɪŋɡlɪʃ/", meaning: "英语", example: "I speak English.", exampleCn: "我说英语。", tags: ["语言", "三会词"] },
            { word: "speak", phonetic: "/spiːk/", meaning: "说", example: "I speak English.", exampleCn: "我说英语。", tags: ["动词", "三会词"] }
          ],
          texts: [
            { lesson: "Module 3 Unit 1", title: "Countries", content: [{ en: "Where do you live?", cn: "你住在哪里？" }, { en: "I live in Australia.", cn: "我住在澳大利亚。" }] }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Library",
          words: [
            { word: "library", phonetic: "/ˈlaɪbreri/", meaning: "图书馆", example: "I go to the library.", exampleCn: "我去图书馆。", tags: ["地点", "四会词"] },
            { word: "find", phonetic: "/faɪnd/", meaning: "找到", example: "I can't find it.", exampleCn: "我找不到它。", tags: ["动词", "四会词"] },
            { word: "CD", phonetic: "/ˌsiː ˈdiː/", meaning: "激光唱片", example: "I want a CD.", exampleCn: "我想要一张CD。", tags: ["物品", "四会词"] },
            { word: "bring", phonetic: "/brɪŋ/", meaning: "带来", example: "Bring back the book.", exampleCn: "把书带回来。", tags: ["动词", "四会词"] },
            { word: "use", phonetic: "/juːz/", meaning: "使用", example: "Can I use it?", exampleCn: "我能用它吗？", tags: ["动词", "四会词"] },
            { word: "card", phonetic: "/kɑːrd/", meaning: "卡片", example: "Here's my library card.", exampleCn: "这是我的借书卡。", tags: ["物品", "四会词"] },
            { word: "heavy", phonetic: "/ˈhevi/", meaning: "重的", example: "The bag is heavy.", exampleCn: "这个包很重。", tags: ["形容词", "三会词"] },
            { word: "dictionary", phonetic: "/ˈdɪkʃəneri/", meaning: "词典", example: "I need a dictionary.", exampleCn: "我需要一本词典。", tags: ["学习", "三会词"] }
          ],
          texts: [
            { lesson: "Module 4 Unit 1", title: "Library", content: [{ en: "Where are the books?", cn: "书在哪里？" }, { en: "They are on Shelf C.", cn: "它们在C书架上。" }] }
          ]
        },
        { unitId: "M5", unitName: "Module 5 Food and Drink", words: [
          { word: "sandwich", phonetic: "/ˈsænwɪtʃ/", meaning: "三明治", example: "I like sandwiches.", exampleCn: "我喜欢三明治。", tags: ["食物", "四会词"] },
          { word: "hamburger", phonetic: "/ˈhæmbɜːrɡər/", meaning: "汉堡包", example: "I want a hamburger.", exampleCn: "我想要一个汉堡包。", tags: ["食物", "四会词"] },
          { word: "chips", phonetic: "/tʃɪps/", meaning: "薯条", example: "I like chips.", exampleCn: "我喜欢薯条。", tags: ["食物", "四会词"] },
          { word: "sausage", phonetic: "/ˈsɒsɪdʒ/", meaning: "香肠", example: "I like sausages.", exampleCn: "我喜欢香肠。", tags: ["食物", "三会词"] },
          { word: "chocolate", phonetic: "/ˈtʃɒklət/", meaning: "巧克力", example: "I love chocolate.", exampleCn: "我爱巧克力。", tags: ["食物", "四会词"] },
          { word: "biscuit", phonetic: "/ˈbɪskɪt/", meaning: "饼干", example: "Have a biscuit.", exampleCn: "吃块饼干。", tags: ["食物", "三会词"] },
          { word: "tea", phonetic: "/tiː/", meaning: "茶", example: "Would you like some tea?", exampleCn: "你想喝茶吗？", tags: ["饮料", "四会词"] },
          { word: "coffee", phonetic: "/ˈkɒfi/", meaning: "咖啡", example: "I like coffee.", exampleCn: "我喜欢咖啡。", tags: ["饮料", "三会词"] }
        ], texts: [{ lesson: "Module 5 Unit 1", title: "Food and Drink", content: [{ en: "What would you like to eat?", cn: "你想吃什么？" }, { en: "I'd like a hamburger, please.", cn: "我想要一个汉堡包。" }, { en: "Anything to drink?", cn: "要喝什么吗？" }, { en: "A cup of tea, please.", cn: "请来一杯茶。" }] }] },
        { unitId: "M6", unitName: "Module 6 Music", words: [
          { word: "music", phonetic: "/ˈmjuːzɪk/", meaning: "音乐", example: "I like music.", exampleCn: "我喜欢音乐。", tags: ["名词", "四会词"] },
          { word: "piano", phonetic: "/piˈænəʊ/", meaning: "钢琴", example: "She plays the piano.", exampleCn: "她弹钢琴。", tags: ["乐器", "四会词"] },
          { word: "guitar", phonetic: "/ɡɪˈtɑːr/", meaning: "吉他", example: "He plays the guitar.", exampleCn: "他弹吉他。", tags: ["乐器", "四会词"] },
          { word: "drum", phonetic: "/drʌm/", meaning: "鼓", example: "Play the drums.", exampleCn: "打鼓。", tags: ["乐器", "三会词"] },
          { word: "violin", phonetic: "/ˌvaɪəˈlɪn/", meaning: "小提琴", example: "I like the violin.", exampleCn: "我喜欢小提琴。", tags: ["乐器", "三会词"] },
          { word: "concert", phonetic: "/ˈkɒnsərt/", meaning: "音乐会", example: "I went to a concert.", exampleCn: "我去了一场音乐会。", tags: ["名词", "四会词"] },
          { word: "play", phonetic: "/pleɪ/", meaning: "演奏", example: "Can you play the guitar?", exampleCn: "你会弹吉他吗？", tags: ["动词", "四会词"] },
          { word: "listen", phonetic: "/ˈlɪsn/", meaning: "听", example: "Listen to the music.", exampleCn: "听音乐。", tags: ["动词", "四会词"] }
        ], texts: [{ lesson: "Module 6 Unit 1", title: "Music", content: [{ en: "Can you play the piano?", cn: "你会弹钢琴吗？" }, { en: "No, I can't. But I can play the guitar.", cn: "不，我不会。但我会弹吉他。" }, { en: "That's great!", cn: "太棒了！" }, { en: "Let's play together!", cn: "我们一起演奏吧！" }] }] },
        { unitId: "M7", unitName: "Module 7 Daily Life", words: [
          { word: "always", phonetic: "/ˈɔːlweɪz/", meaning: "总是", example: "I always get up early.", exampleCn: "我总是早起。", tags: ["副词", "四会词"] },
          { word: "usually", phonetic: "/ˈjuːʒuəli/", meaning: "通常", example: "I usually walk to school.", exampleCn: "我通常走路去学校。", tags: ["副词", "四会词"] },
          { word: "often", phonetic: "/ˈɒfn/", meaning: "经常", example: "I often read books.", exampleCn: "我经常读书。", tags: ["副词", "四会词"] },
          { word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", meaning: "有时候", example: "I sometimes watch TV.", exampleCn: "我有时候看电视。", tags: ["副词", "四会词"] },
          { word: "never", phonetic: "/ˈnevər/", meaning: "从不", example: "I never arrive late.", exampleCn: "我从不迟到。", tags: ["副词", "四会词"] },
          { word: "habit", phonetic: "/ˈhæbɪt/", meaning: "习惯", example: "Good habits are important.", exampleCn: "好习惯很重要。", tags: ["名词", "四会词"] },
          { word: "healthy", phonetic: "/ˈhelθi/", meaning: "健康的", example: "Eat healthy food.", exampleCn: "吃健康的食物。", tags: ["形容词", "三会词"] },
          { word: "early", phonetic: "/ˈɜːrli/", meaning: "早的", example: "Get up early.", exampleCn: "早起。", tags: ["副词", "四会词"] }
        ], texts: [{ lesson: "Module 7 Unit 1", title: "Daily Life", content: [{ en: "What do you usually do after school?", cn: "你放学后通常做什么？" }, { en: "I usually do my homework.", cn: "我通常做作业。" }, { en: "Do you always read books?", cn: "你总是读书吗？" }, { en: "Yes, I often read before bed.", cn: "是的，我经常睡前读书。" }] }] },
        { unitId: "M8", unitName: "Module 8 Weekend", words: [
          { word: "weekend", phonetic: "/ˌwiːkˈend/", meaning: "周末", example: "What do you do at the weekend?", exampleCn: "你周末做什么？", tags: ["时间", "四会词"] },
          { word: "cinema", phonetic: "/ˈsɪnəmə/", meaning: "电影院", example: "I go to the cinema.", exampleCn: "我去电影院。", tags: ["地点", "四会词"] },
          { word: "museum", phonetic: "/mjuˈziːəm/", meaning: "博物馆", example: "I visit the museum.", exampleCn: "我参观博物馆。", tags: ["地点", "四会词"] },
          { word: "park", phonetic: "/pɑːrk/", meaning: "公园", example: "I play in the park.", exampleCn: "我在公园玩。", tags: ["地点", "四会词"] },
          { word: "swimming pool", phonetic: "/ˈswɪmɪŋ puːl/", meaning: "游泳池", example: "I go to the swimming pool.", exampleCn: "我去游泳池。", tags: ["地点", "三会词"] },
          { word: "supermarket", phonetic: "/ˈsuːpərmɑːrkɪt/", meaning: "超市", example: "I go to the supermarket.", exampleCn: "我去超市。", tags: ["地点", "三会词"] },
          { word: "relax", phonetic: "/rɪˈlæks/", meaning: "放松", example: "I relax at the weekend.", exampleCn: "我周末放松。", tags: ["动词", "四会词"] },
          { word: "fun", phonetic: "/fʌn/", meaning: "乐趣", example: "Have fun!", exampleCn: "玩得开心！", tags: ["名词", "四会词"] }
        ], texts: [{ lesson: "Module 8 Unit 1", title: "Weekend", content: [{ en: "What do you do at the weekend?", cn: "你周末做什么？" }, { en: "I sometimes go to the cinema.", cn: "我有时候去电影院。" }, { en: "I usually go to the park.", cn: "我通常去公园。" }, { en: "That sounds fun!", cn: "听起来很有趣！" }] }] },
        { unitId: "M9", unitName: "Module 9 Letters", words: [
          { word: "letter", phonetic: "/ˈletər/", meaning: "信", example: "I wrote a letter.", exampleCn: "我写了一封信。", tags: ["名词", "四会词"] },
          { word: "postcard", phonetic: "/ˈpəʊstkɑːrd/", meaning: "明信片", example: "I sent a postcard.", exampleCn: "我寄了一张明信片。", tags: ["名词", "四会词"] },
          { word: "stamp", phonetic: "/stæmp/", meaning: "邮票", example: "Put a stamp on it.", exampleCn: "贴上邮票。", tags: ["名词", "三会词"] },
          { word: "envelope", phonetic: "/ˈenvələʊp/", meaning: "信封", example: "Put it in the envelope.", exampleCn: "把它放进信封。", tags: ["名词", "三会词"] },
          { word: "send", phonetic: "/send/", meaning: "发送", example: "I'll send you a letter.", exampleCn: "我会给你寄信。", tags: ["动词", "四会词"] },
          { word: "receive", phonetic: "/rɪˈsiːv/", meaning: "收到", example: "I received a letter.", exampleCn: "我收到了一封信。", tags: ["动词", "四会词"] },
          { word: "dear", phonetic: "/dɪər/", meaning: "亲爱的", example: "Dear friend.", exampleCn: "亲爱的朋友。", tags: ["形容词", "四会词"] },
          { word: "from", phonetic: "/frɒm/", meaning: "来自", example: "A letter from my friend.", exampleCn: "一封来自我朋友的信。", tags: ["介词", "四会词"] }
        ], texts: [{ lesson: "Module 9 Unit 1", title: "Letters", content: [{ en: "Did you get a letter?", cn: "你收到信了吗？" }, { en: "Yes, it's from my pen friend.", cn: "是的，是我的笔友寄来的。" }, { en: "What does it say?", cn: "信上说什么？" }, { en: "She says she'll visit China.", cn: "她说她要来中国。" }] }] },
        { unitId: "M10", unitName: "Module 10 Review", words: [
          { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习。", tags: ["动词", "三会词"] },
          { word: "exam", phonetic: "/ɪɡˈzæm/", meaning: "考试", example: "I have an exam.", exampleCn: "我有一场考试。", tags: ["名词", "四会词"] },
          { word: "test", phonetic: "/test/", meaning: "测试", example: "We have a test today.", exampleCn: "我们今天有测试。", tags: ["名词", "四会词"] },
          { word: "study", phonetic: "/ˈstʌdi/", meaning: "学习", example: "I study hard.", exampleCn: "我努力学习。", tags: ["动词", "四会词"] },
          { word: "well", phonetic: "/wel/", meaning: "好地", example: "I did well.", exampleCn: "我做得很好。", tags: ["副词", "四会词"] },
          { word: "try", phonetic: "/traɪ/", meaning: "尝试", example: "Try your best!", exampleCn: "尽力！", tags: ["动词", "四会词"] },
          { word: "mistake", phonetic: "/mɪˈsteɪk/", meaning: "错误", example: "Don't be afraid of mistakes.", exampleCn: "不要害怕犯错。", tags: ["名词", "三会词"] },
          { word: "again", phonetic: "/əˈɡen/", meaning: "再次", example: "Try again.", exampleCn: "再试一次。", tags: ["副词", "四会词"] }
        ], texts: [{ lesson: "Module 10 Unit 1", title: "Review", content: [{ en: "Let's review what we learned.", cn: "让我们复习学过的内容。" }, { en: "We learned about food and music.", cn: "我们学了食物和音乐。" }, { en: "And about daily life too.", cn: "还有日常生活。" }, { en: "Let's do our best in the test!", cn: "让我们在测试中做到最好！" }] }] }
      ]
    },
    // ==================== 五年级下册 ====================
    "5-2": {
      semester: "下册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Changing",
          words: [
            { word: "still", phonetic: "/stɪl/", meaning: "仍然", example: "She is still young.", exampleCn: "她仍然年轻。", tags: ["副词", "四会词"] },
            { word: "programme", phonetic: "/ˈprəʊɡræm/", meaning: "节目", example: "I watched a TV programme.", exampleCn: "我看了一个电视节目。", tags: ["娱乐", "四会词"] },
            { word: "lady", phonetic: "/ˈleɪdi/", meaning: "女士", example: "She is a nice lady.", exampleCn: "她是一位善良的女士。", tags: ["人物", "四会词"] },
            { word: "life", phonetic: "/laɪf/", meaning: "生活", example: "Life was different.", exampleCn: "生活是不同的。", tags: ["名词", "四会词"] },
            { word: "different", phonetic: "/ˈdɪfrənt/", meaning: "不同的", example: "Life was different.", exampleCn: "生活是不同的。", tags: ["形容词", "四会词"] },
            { word: "ago", phonetic: "/əˈɡəʊ/", meaning: "以前", example: "Five years ago.", exampleCn: "五年前。", tags: ["时间", "四会词"] },
            { word: "interviewer", phonetic: "/ˈɪntərvjuːər/", meaning: "采访者", example: "The interviewer asked.", exampleCn: "采访者问道。", tags: ["人物", "三会词"] },
            { word: "enough", phonetic: "/ɪˈnʌf/", meaning: "足够的", example: "I have enough money.", exampleCn: "我有足够的钱。", tags: ["形容词", "三会词"] }
          ],
          texts: [
            { lesson: "Module 1 Unit 1", title: "Changing", content: [{ en: "Life was very different many years ago.", cn: "许多年前的生活非常不同。" }, { en: "But it's changing now.", cn: "但现在正在改变。" }] }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Grandparents",
          words: [
            { word: "learnt", phonetic: "/lɜːnt/", meaning: "学习（过去式）", example: "I learnt English.", exampleCn: "我学了英语。", tags: ["动词", "四会词"] },
            { word: "taught", phonetic: "/tɔːt/", meaning: "教（过去式）", example: "My mother taught me.", exampleCn: "我妈妈教我。", tags: ["动词", "四会词"] },
            { word: "language", phonetic: "/ˈlæŋɡwɪdʒ/", meaning: "语言", example: "I learnt a language.", exampleCn: "我学了一门语言。", tags: ["学习", "四会词"] },
            { word: "wrote", phonetic: "/rəʊt/", meaning: "写（过去式）", example: "I wrote a letter.", exampleCn: "我写了一封信。", tags: ["动词", "四会词"] },
            { word: "dancer", phonetic: "/ˈdɑːnsər/", meaning: "舞蹈演员", example: "She is a dancer.", exampleCn: "她是一名舞蹈演员。", tags: ["职业", "四会词"] },
            { word: "foreign", phonetic: "/ˈfɒrən/", meaning: "外国的", example: "I learnt a foreign language.", exampleCn: "我学了一门外语。", tags: ["形容词", "四会词"] },
            { word: "hard", phonetic: "/hɑːrd/", meaning: "努力地", example: "I worked hard.", exampleCn: "我努力工作。", tags: ["副词", "三会词"] },
            { word: "study", phonetic: "/ˈstʌdi/", meaning: "学习", example: "I study English.", exampleCn: "我学习英语。", tags: ["动词", "三会词"] }
          ],
          texts: [
            { lesson: "Module 2 Unit 1", title: "Grandparents", content: [{ en: "Did your grandma learn English?", cn: "你奶奶学过英语吗？" }, { en: "Yes, she did.", cn: "是的，她学过。" }] }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 English Food",
          words: [
            { word: "English", phonetic: "/ˈɪŋɡlɪʃ/", meaning: "英国的", example: "English food.", exampleCn: "英国食物。", tags: ["国家", "四会词"] },
            { word: "breakfast", phonetic: "/ˈbrekfəst/", meaning: "早餐", example: "I had eggs for breakfast.", exampleCn: "我早餐吃了鸡蛋。", tags: ["餐食", "四会词"] },
            { word: "lunch", phonetic: "/lʌntʃ/", meaning: "午餐", example: "I had fish for lunch.", exampleCn: "我午餐吃了鱼。", tags: ["餐食", "四会词"] },
            { word: "dinner", phonetic: "/ˈdɪnər/", meaning: "晚餐", example: "I had meat for dinner.", exampleCn: "我晚餐吃了肉。", tags: ["餐食", "四会词"] },
            { word: "had", phonetic: "/hæd/", meaning: "吃（过去式）", example: "I had eggs.", exampleCn: "我吃了鸡蛋。", tags: ["动词", "四会词"] },
            { word: "egg", phonetic: "/eɡ/", meaning: "鸡蛋", example: "I had eggs.", exampleCn: "我吃了鸡蛋。", tags: ["食物", "四会词"] },
            { word: "sandwich", phonetic: "/ˈsænwɪtʃ/", meaning: "三明治", example: "I had a sandwich.", exampleCn: "我吃了一个三明治。", tags: ["食物", "三会词"] },
            { word: "fish and chips", phonetic: "/fɪʃ ənd tʃɪps/", meaning: "炸鱼薯条", example: "I had fish and chips.", exampleCn: "我吃了炸鱼薯条。", tags: ["食物", "三会词"] }
          ],
          texts: [
            { lesson: "Module 3 Unit 1", title: "English Food", content: [{ en: "What did she have for breakfast?", cn: "她早餐吃了什么？" }, { en: "She had eggs.", cn: "她吃了鸡蛋。" }] }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Library",
          words: [
            { word: "sent", phonetic: "/sent/", meaning: "发送（过去式）", example: "I sent you a book.", exampleCn: "我给你寄了一本书。", tags: ["动词", "四会词"] },
            { word: "received", phonetic: "/rɪˈsiːvd/", meaning: "收到", example: "I received a letter.", exampleCn: "我收到了一封信。", tags: ["动词", "四会词"] },
            { word: "e-card", phonetic: "/ˈiː kɑːrd/", meaning: "电子贺卡", example: "I sent an e-card.", exampleCn: "我发了一张电子贺卡。", tags: ["科技", "四会词"] },
            { word: "message", phonetic: "/ˈmesɪdʒ/", meaning: "信息", example: "I sent a message.", exampleCn: "我发了一条信息。", tags: ["通讯", "四会词"] },
            { word: "another", phonetic: "/əˈnʌðər/", meaning: "另一个", example: "Another book.", exampleCn: "另一本书。", tags: ["代词", "四会词"] },
            { word: "idea", phonetic: "/aɪˈdɪə/", meaning: "主意", example: "Good idea!", exampleCn: "好主意！", tags: ["名词", "四会词"] },
            { word: "special", phonetic: "/ˈspeʃl/", meaning: "特别的", example: "A special day.", exampleCn: "特别的一天。", tags: ["形容词", "三会词"] },
            { word: "computer", phonetic: "/kəmˈpjuːtər/", meaning: "电脑", example: "I use the computer.", exampleCn: "我使用电脑。", tags: ["科技", "三会词"] }
          ],
          texts: [
            { lesson: "Module 4 Unit 1", title: "Messages", content: [{ en: "Did you send me a book?", cn: "你给我寄了一本书吗？" }, { en: "Yes, I did.", cn: "是的，我寄了。" }] }
          ]
        },
        { unitId: "M5", unitName: "Module 5 Decisions", words: [
          { word: "decision", phonetic: "/dɪˈsɪʒn/", meaning: "决定", example: "Make a decision.", exampleCn: "做决定。", tags: ["名词", "四会词"] },
          { word: "choose", phonetic: "/tʃuːz/", meaning: "选择", example: "You can choose.", exampleCn: "你可以选择。", tags: ["动词", "四会词"] },
          { word: "easy", phonetic: "/ˈiːzi/", meaning: "容易的", example: "It's easy.", exampleCn: "这很容易。", tags: ["形容词", "四会词"] },
          { word: "difficult", phonetic: "/ˈdɪfɪkəlt/", meaning: "困难的", example: "It's difficult.", exampleCn: "这很困难。", tags: ["形容词", "四会词"] },
          { word: "important", phonetic: "/ɪmˈpɔːrtənt/", meaning: "重要的", example: "It's important.", exampleCn: "这很重要。", tags: ["形容词", "四会词"] },
          { word: "think about", phonetic: "/θɪŋk əˈbaʊt/", meaning: "考虑", example: "Think about it.", exampleCn: "考虑一下。", tags: ["短语", "三会词"] },
          { word: "agree", phonetic: "/əˈɡriː/", meaning: "同意", example: "I agree.", exampleCn: "我同意。", tags: ["动词", "四会词"] },
          { word: "opinion", phonetic: "/əˈpɪnjən/", meaning: "意见", example: "What's your opinion?", exampleCn: "你的意见是什么？", tags: ["名词", "三会词"] }
        ], texts: [{ lesson: "Module 5 Unit 1", title: "Decisions", content: [{ en: "Which one do you choose?", cn: "你选哪一个？" }, { en: "I think the blue one is better.", cn: "我觉得蓝色的更好。" }, { en: "Why?", cn: "为什么？" }, { en: "Because it's easy to carry.", cn: "因为它容易携带。" }] }] },
        { unitId: "M6", unitName: "Module 6 Travel Plan", words: [
          { word: "travel", phonetic: "/ˈtrævl/", meaning: "旅行", example: "I like to travel.", exampleCn: "我喜欢旅行。", tags: ["动词", "四会词"] },
          { word: "ticket", phonetic: "/ˈtɪkɪt/", meaning: "票", example: "I bought a ticket.", exampleCn: "我买了一张票。", tags: ["名词", "四会词"] },
          { word: "passport", phonetic: "/ˈpɑːspɔːrt/", meaning: "护照", example: "Don't forget your passport.", exampleCn: "别忘了你的护照。", tags: ["名词", "三会词"] },
          { word: "suitcase", phonetic: "/ˈsuːtkeɪs/", meaning: "手提箱", example: "Pack your suitcase.", exampleCn: "收拾你的手提箱。", tags: ["名词", "四会词"] },
          { word: "airport", phonetic: "/ˈeərpɔːrt/", meaning: "机场", example: "We went to the airport.", exampleCn: "我们去了机场。", tags: ["地点", "四会词"] },
          { word: "hotel", phonetic: "/həʊˈtel/", meaning: "旅馆", example: "We stayed at a hotel.", exampleCn: "我们住在旅馆里。", tags: ["地点", "三会词"] },
          { word: "arrive", phonetic: "/əˈraɪv/", meaning: "到达", example: "We arrived in Beijing.", exampleCn: "我们到达了北京。", tags: ["动词", "四会词"] },
          { word: "depart", phonetic: "/dɪˈpɑːrt/", meaning: "出发", example: "The train departs at 8.", exampleCn: "火车8点出发。", tags: ["动词", "三会词"] }
        ], texts: [{ lesson: "Module 6 Unit 1", title: "Travel Plan", content: [{ en: "Where will you go?", cn: "你要去哪里？" }, { en: "I'll go to Beijing.", cn: "我要去北京。" }, { en: "How will you go?", cn: "你怎么去？" }, { en: "By plane.", cn: "坐飞机。" }] }] },
        { unitId: "M7", unitName: "Module 7 Rules", words: [
          { word: "rule", phonetic: "/ruːl/", meaning: "规则", example: "Follow the rules.", exampleCn: "遵守规则。", tags: ["名词", "四会词"] },
          { word: "must", phonetic: "/mʌst/", meaning: "必须", example: "You must wait.", exampleCn: "你必须等待。", tags: ["动词", "四会词"] },
          { word: "shouldn't", phonetic: "/ˈʃʊdnt/", meaning: "不应该", example: "You shouldn't run.", exampleCn: "你不应该跑。", tags: ["动词", "四会词"] },
          { word: "quiet", phonetic: "/ˈkwaɪət/", meaning: "安静的", example: "Be quiet.", exampleCn: "请安静。", tags: ["形容词", "四会词"] },
          { word: "polite", phonetic: "/pəˈlaɪt/", meaning: "有礼貌的", example: "Be polite.", exampleCn: "要有礼貌。", tags: ["形容词", "三会词"] },
          { word: "dangerous", phonetic: "/ˈdeɪndʒərəs/", meaning: "危险的", example: "It's dangerous.", exampleCn: "很危险。", tags: ["形容词", "四会词"] },
          { word: "safe", phonetic: "/seɪf/", meaning: "安全的", example: "Keep safe.", exampleCn: "注意安全。", tags: ["形容词", "四会词"] },
          { word: "wait in line", phonetic: "/weɪt ɪn laɪn/", meaning: "排队", example: "Please wait in line.", exampleCn: "请排队。", tags: ["短语", "三会词"] }
        ], texts: [{ lesson: "Module 7 Unit 1", title: "Rules", content: [{ en: "What should we do in the library?", cn: "我们在图书馆应该怎么做？" }, { en: "We should be quiet.", cn: "我们应该安静。" }, { en: "We mustn't eat here.", cn: "我们不能在这里吃东西。" }, { en: "That's the rule.", cn: "那是规则。" }] }] },
        { unitId: "M8", unitName: "Module 8 Environment", words: [
          { word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", meaning: "环境", example: "Protect the environment.", exampleCn: "保护环境。", tags: ["名词", "四会词"] },
          { word: "recycle", phonetic: "/ˌriːˈsaɪkl/", meaning: "回收", example: "We should recycle.", exampleCn: "我们应该回收。", tags: ["动词", "四会词"] },
          { word: "pollution", phonetic: "/pəˈluːʃn/", meaning: "污染", example: "Air pollution is bad.", exampleCn: "空气污染很糟糕。", tags: ["名词", "三会词"] },
          { word: "protect", phonetic: "/prəˈtekt/", meaning: "保护", example: "Protect the earth.", exampleCn: "保护地球。", tags: ["动词", "四会词"] },
          { word: "save", phonetic: "/seɪv/", meaning: "节约", example: "Save water.", exampleCn: "节约用水。", tags: ["动词", "四会词"] },
          { word: "plant", phonetic: "/plɑːnt/", meaning: "种植", example: "Plant trees.", exampleCn: "种树。", tags: ["动词", "四会词"] },
          { word: "waste", phonetic: "/weɪst/", meaning: "浪费", example: "Don't waste food.", exampleCn: "不要浪费食物。", tags: ["动词", "三会词"] },
          { word: "clean", phonetic: "/kliːn/", meaning: "干净的", example: "Keep it clean.", exampleCn: "保持干净。", tags: ["形容词", "四会词"] }
        ], texts: [{ lesson: "Module 8 Unit 1", title: "Environment", content: [{ en: "How can we protect the environment?", cn: "我们怎样保护环境？" }, { en: "We should recycle paper.", cn: "我们应该回收纸张。" }, { en: "We shouldn't waste water.", cn: "我们不应该浪费水。" }, { en: "Let's plant more trees!", cn: "让我们种更多的树！" }] }] },
        { unitId: "M9", unitName: "Module 9 Inventions", words: [
          { word: "invention", phonetic: "/ɪnˈvenʃn/", meaning: "发明", example: "What a great invention!", exampleCn: "多么伟大的发明！", tags: ["名词", "四会词"] },
          { word: "invent", phonetic: "/ɪnˈvent/", meaning: "发明", example: "Who invented it?", exampleCn: "谁发明的？", tags: ["动词", "四会词"] },
          { word: "machine", phonetic: "/məˈʃiːn/", meaning: "机器", example: "This machine is useful.", exampleCn: "这台机器很有用。", tags: ["名词", "四会词"] },
          { word: "wheel", phonetic: "/wiːl/", meaning: "轮子", example: "The wheel was invented long ago.", exampleCn: "轮子是很久以前发明的。", tags: ["名词", "三会词"] },
          { word: "paper", phonetic: "/ˈpeɪpər/", meaning: "纸", example: "Paper was invented in China.", exampleCn: "纸是中国发明的。", tags: ["名词", "四会词"] },
          { word: "printing", phonetic: "/ˈprɪntɪŋ/", meaning: "印刷", example: "Printing is important.", exampleCn: "印刷很重要。", tags: ["名词", "三会词"] },
          { word: "discover", phonetic: "/dɪˈskʌvər/", meaning: "发现", example: "I discovered something new.", exampleCn: "我发现了新东西。", tags: ["动词", "四会词"] },
          { word: "clever", phonetic: "/ˈklevər/", meaning: "聪明的", example: "That's very clever!", exampleCn: "真聪明！", tags: ["形容词", "四会词"] }
        ], texts: [{ lesson: "Module 9 Unit 1", title: "Inventions", content: [{ en: "What was invented in China?", cn: "中国发明了什么？" }, { en: "Paper was invented in China.", cn: "纸是中国发明的。" }, { en: "That's very clever!", cn: "真聪明！" }, { en: "Chinese people are great inventors.", cn: "中国人是伟大的发明家。" }] }] },
        { unitId: "M10", unitName: "Module 10 Review", words: [
          { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习一下。", tags: ["动词", "三会词"] },
          { word: "remember", phonetic: "/rɪˈmembər/", meaning: "记住", example: "I remember that.", exampleCn: "我记得那个。", tags: ["动词", "四会词"] },
          { word: "knowledge", phonetic: "/ˈnɒlɪdʒ/", meaning: "知识", example: "Knowledge is power.", exampleCn: "知识就是力量。", tags: ["名词", "四会词"] },
          { word: "practice", phonetic: "/ˈpræktɪs/", meaning: "练习", example: "Practice makes perfect.", exampleCn: "熟能生巧。", tags: ["动词", "四会词"] },
          { word: "improve", phonetic: "/ɪmˈpruːv/", meaning: "提高", example: "I want to improve.", exampleCn: "我想提高。", tags: ["动词", "三会词"] },
          { word: "progress", phonetic: "/ˈprɒɡres/", meaning: "进步", example: "I made progress.", exampleCn: "我取得了进步。", tags: ["名词", "四会词"] },
          { word: "confident", phonetic: "/ˈkɒnfɪdənt/", meaning: "自信的", example: "Be confident!", exampleCn: "要自信！", tags: ["形容词", "三会词"] },
          { word: "prepare", phonetic: "/prɪˈpeər/", meaning: "准备", example: "Prepare for the test.", exampleCn: "为考试做准备。", tags: ["动词", "四会词"] }
        ], texts: [{ lesson: "Module 10 Unit 1", title: "Review", content: [{ en: "What have we learned this term?", cn: "这学期我们学了什么？" }, { en: "We learned about the environment.", cn: "我们学了关于环境的知识。" }, { en: "We learned about inventions.", cn: "我们学了关于发明的知识。" }, { en: "Let's review and practice more!", cn: "让我们复习并多加练习！" }] }] }
      ]
    },
    // ==================== 六年级下册 ====================
    "6-2": {
      semester: "下册",
      units: [
        {
          unitId: "M1",
          unitName: "Module 1 Hot Dogs",
          words: [
            { word: "hot dog", phonetic: "/hɒt dɒɡ/", meaning: "热狗", example: "I want a hot dog.", exampleCn: "我想要一个热狗。", tags: ["食物", "四会词"] },
            { word: "waitress", phonetic: "/ˈweɪtrəs/", meaning: "女服务员", example: "The waitress is nice.", exampleCn: "女服务员很好。", tags: ["职业", "四会词"] },
            { word: "cola", phonetic: "/ˈkəʊlə/", meaning: "可乐", example: "I want a cola.", exampleCn: "我想要一杯可乐。", tags: ["饮料", "四会词"] },
            { word: "dollar", phonetic: "/ˈdɒlər/", meaning: "美元", example: "One dollar.", exampleCn: "一美元。", tags: ["货币", "四会词"] },
            { word: "cent", phonetic: "/sent/", meaning: "美分", example: "Fifty cents.", exampleCn: "五十美分。", tags: ["货币", "四会词"] },
            { word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", meaning: "享受", example: "Enjoy your meal!", exampleCn: "请享用你的餐点！", tags: ["动词", "四会词"] },
            { word: "meal", phonetic: "/miːl/", meaning: "一餐", example: "Enjoy your meal!", exampleCn: "请享用你的餐点！", tags: ["食物", "三会词"] },
            { word: "cashier", phonetic: "/kæˈʃɪər/", meaning: "收银员", example: "The cashier is friendly.", exampleCn: "收银员很友好。", tags: ["职业", "三会词"] }
          ],
          texts: [
            { lesson: "Module 1 Unit 1", title: "At the Restaurant", content: [{ en: "What do you want to eat?", cn: "你想吃什么？" }, { en: "I want a hot dog.", cn: "我想要一个热狗。" }] }
          ]
        },
        {
          unitId: "M2",
          unitName: "Module 2 Bells",
          words: [
            { word: "bell", phonetic: "/bel/", meaning: "钟", example: "The bell is ringing.", exampleCn: "钟在响。", tags: ["物品", "四会词"] },
            { word: "ring", phonetic: "/rɪŋ/", meaning: "响", example: "The bell is ringing.", exampleCn: "钟在响。", tags: ["动词", "四会词"] },
            { word: "rang", phonetic: "/ræŋ/", meaning: "响（过去式）", example: "The bell rang.", exampleCn: "钟响了。", tags: ["动词", "四会词"] },
            { word: "bark", phonetic: "/bɑːrk/", meaning: "吠叫", example: "The dog barked.", exampleCn: "狗叫了。", tags: ["动词", "四会词"] },
            { word: "arrive", phonetic: "/əˈraɪv/", meaning: "到达", example: "We arrived home.", exampleCn: "我们到家了。", tags: ["动词", "四会词"] },
            { word: "hardly", phonetic: "/ˈhɑːrdli/", meaning: "几乎不", example: "I can hardly hear.", exampleCn: "我几乎听不见。", tags: ["副词", "四会词"] },
            { word: "noisy", phonetic: "/ˈnɔɪzi/", meaning: "吵闹的", example: "It's very noisy.", exampleCn: "很吵。", tags: ["形容词", "三会词"] },
            { word: "telephone", phonetic: "/ˈtelɪfəʊn/", meaning: "电话", example: "Answer the telephone.", exampleCn: "接电话。", tags: ["物品", "三会词"] }
          ],
          texts: [
            { lesson: "Module 2 Unit 1", title: "The Bell", content: [{ en: "The bell is ringing.", cn: "钟在响。" }, { en: "It's time to go home.", cn: "该回家了。" }] }
          ]
        },
        {
          unitId: "M3",
          unitName: "Module 3 Sun",
          words: [
            { word: "sun", phonetic: "/sʌn/", meaning: "太阳", example: "The sun is shining.", exampleCn: "太阳在照耀。", tags: ["自然", "四会词"] },
            { word: "shine", phonetic: "/ʃaɪn/", meaning: "照耀", example: "The sun is shining.", exampleCn: "太阳在照耀。", tags: ["动词", "四会词"] },
            { word: "shining", phonetic: "/ˈʃaɪnɪŋ/", meaning: "照耀（现在分词）", example: "The sun is shining.", exampleCn: "太阳在照耀。", tags: ["动词", "四会词"] },
            { word: "cry", phonetic: "/kraɪ/", meaning: "哭", example: "The baby is crying.", exampleCn: "宝宝在哭。", tags: ["动词", "四会词"] },
            { word: "everyone", phonetic: "/ˈevriwʌn/", meaning: "每个人", example: "Everyone is happy.", exampleCn: "每个人都很开心。", tags: ["代词", "四会词"] },
            { word: "fly away", phonetic: "/flaɪ əˈweɪ/", meaning: "飞走", example: "The bird is flying away.", exampleCn: "鸟正在飞走。", tags: ["短语", "四会词"] },
            { word: "just", phonetic: "/dʒʌst/", meaning: "刚刚", example: "I just arrived.", exampleCn: "我刚到。", tags: ["副词", "三会词"] },
            { word: "dry", phonetic: "/draɪ/", meaning: "干的", example: "The clothes are dry.", exampleCn: "衣服干了。", tags: ["形容词", "三会词"] }
          ],
          texts: [
            { lesson: "Module 3 Unit 1", title: "The Sun", content: [{ en: "The sun is shining.", cn: "太阳在照耀。" }, { en: "The birds are singing.", cn: "鸟儿在唱歌。" }] }
          ]
        },
        {
          unitId: "M4",
          unitName: "Module 4 Goodbye",
          words: [
            { word: "middle", phonetic: "/ˈmɪdl/", meaning: "中间的", example: "middle school", exampleCn: "中学", tags: ["形容词", "四会词"] },
            { word: "middle school", phonetic: "/ˈmɪdl skuːl/", meaning: "中学", example: "I'm going to middle school.", exampleCn: "我将要上中学了。", tags: ["地点", "四会词"] },
            { word: "really", phonetic: "/ˈrɪəli/", meaning: "真正地", example: "I'm really happy.", exampleCn: "我真的很开心。", tags: ["副词", "四会词"] },
            { word: "geography", phonetic: "/dʒiˈɒɡrəfi/", meaning: "地理", example: "I like geography.", exampleCn: "我喜欢地理。", tags: ["学科", "四会词"] },
            { word: "remember", phonetic: "/rɪˈmembər/", meaning: "记住", example: "I will remember you.", exampleCn: "我会记住你的。", tags: ["动词", "四会词"] },
            { word: "forever", phonetic: "/fərˈevər/", meaning: "永远", example: "Friends forever.", exampleCn: "永远的朋友。", tags: ["副词", "四会词"] },
            { word: "wonderful", phonetic: "/ˈwʌndərfl/", meaning: "极好的", example: "A wonderful time.", exampleCn: "一段美好的时光。", tags: ["形容词", "三会词"] },
            { word: "happiness", phonetic: "/ˈhæpinəs/", meaning: "幸福", example: "I wish you happiness.", exampleCn: "我祝你幸福。", tags: ["名词", "三会词"] }
          ],
          texts: [
            { lesson: "Module 4 Unit 1", title: "Goodbye", content: [{ en: "I'm going to middle school.", cn: "我将要上中学了。" }, { en: "Best wishes to you!", cn: "向你致以最美好的祝愿！" }] }
          ]
        },
        { unitId: "M5", unitName: "Module 5 Making Plans", words: [
          { word: "plan", phonetic: "/plæn/", meaning: "计划", example: "I have a plan.", exampleCn: "我有一个计划。", tags: ["名词", "四会词"] },
          { word: "trip", phonetic: "/trɪp/", meaning: "旅行", example: "We'll take a trip.", exampleCn: "我们将去旅行。", tags: ["名词", "四会词"] },
          { word: "picnic", phonetic: "/ˈpɪknɪk/", meaning: "野餐", example: "We'll have a picnic.", exampleCn: "我们将去野餐。", tags: ["名词", "四会词"] },
          { word: "camp", phonetic: "/kæmp/", meaning: "露营", example: "We'll go camping.", exampleCn: "我们将去露营。", tags: ["名词", "三会词"] },
          { word: "beach", phonetic: "/biːtʃ/", meaning: "海滩", example: "Let's go to the beach.", exampleCn: "我们去海滩吧。", tags: ["地点", "四会词"] },
          { word: "during", phonetic: "/ˈdjʊərɪŋ/", meaning: "在...期间", example: "During the holiday.", exampleCn: "在假期期间。", tags: ["介词", "四会词"] },
          { word: "maybe", phonetic: "/ˈmeɪbi/", meaning: "也许", example: "Maybe I will go.", exampleCn: "也许我会去。", tags: ["副词", "三会词"] },
          { word: "should", phonetic: "/ʃʊd/", meaning: "应该", example: "We should prepare.", exampleCn: "我们应该准备。", tags: ["动词", "四会词"] }
        ], texts: [{ lesson: "Module 5 Unit 1", title: "Making Plans", content: [{ en: "What will you do this summer?", cn: "这个夏天你打算做什么？" }, { en: "I'll go on a trip.", cn: "我将去旅行。" }, { en: "That sounds great!", cn: "听起来很棒！" }, { en: "Maybe I'll go camping too.", cn: "也许我也去露营。" }] }] },
        { unitId: "M6", unitName: "Module 6 Space", words: [
          { word: "space", phonetic: "/speɪs/", meaning: "太空", example: "I want to go to space.", exampleCn: "我想去太空。", tags: ["名词", "四会词"] },
          { word: "rocket", phonetic: "/ˈrɒkɪt/", meaning: "火箭", example: "The rocket is fast.", exampleCn: "火箭很快。", tags: ["名词", "四会词"] },
          { word: "moon", phonetic: "/muːn/", meaning: "月亮", example: "The moon is bright.", exampleCn: "月亮很亮。", tags: ["自然", "四会词"] },
          { word: "star", phonetic: "/stɑːr/", meaning: "星星", example: "I see many stars.", exampleCn: "我看见很多星星。", tags: ["自然", "四会词"] },
          { word: "earth", phonetic: "/ɜːrθ/", meaning: "地球", example: "We live on the earth.", exampleCn: "我们住在地球上。", tags: ["名词", "四会词"] },
          { word: "astronaut", phonetic: "/ˈæstrənɔːt/", meaning: "宇航员", example: "He is an astronaut.", exampleCn: "他是一名宇航员。", tags: ["职业", "三会词"] },
          { word: "fly into", phonetic: "/flaɪ ˈɪntə/", meaning: "飞入", example: "Fly into space.", exampleCn: "飞入太空。", tags: ["短语", "三会词"] },
          { word: "model", phonetic: "/ˈmɒdl/", meaning: "模型", example: "I made a model rocket.", exampleCn: "我做了一个火箭模型。", tags: ["名词", "三会词"] }
        ], texts: [{ lesson: "Module 6 Unit 1", title: "Space", content: [{ en: "What do you want to be?", cn: "你想成为什么？" }, { en: "I want to be an astronaut.", cn: "我想成为一名宇航员。" }, { en: "I want to fly into space.", cn: "我想飞入太空。" }, { en: "What a wonderful dream!", cn: "多么美好的梦想！" }] }] },
        { unitId: "M7", unitName: "Module 7 Pen Friends", words: [
          { word: "pen friend", phonetic: "/pen frend/", meaning: "笔友", example: "I have a pen friend.", exampleCn: "我有一个笔友。", tags: ["名词", "四会词"] },
          { word: "letter", phonetic: "/ˈletər/", meaning: "信", example: "I wrote a letter.", exampleCn: "我写了一封信。", tags: ["名词", "四会词"] },
          { word: "address", phonetic: "/əˈdres/", meaning: "地址", example: "What's your address?", exampleCn: "你的地址是什么？", tags: ["名词", "四会词"] },
          { word: "country", phonetic: "/ˈkʌntri/", meaning: "国家", example: "Which country do you live in?", exampleCn: "你住在哪个国家？", tags: ["名词", "四会词"] },
          { word: "Australia", phonetic: "/ɒˈstreɪliə/", meaning: "澳大利亚", example: "She lives in Australia.", exampleCn: "她住在澳大利亚。", tags: ["专有名词", "三会词"] },
          { word: "England", phonetic: "/ˈɪŋɡlənd/", meaning: "英格兰", example: "He's from England.", exampleCn: "他来自英格兰。", tags: ["专有名词", "三会词"] },
          { word: "write to", phonetic: "/raɪt tuː/", meaning: "写信给", example: "Write to me soon.", exampleCn: "快点给我写信。", tags: ["短语", "四会词"] },
          { word: "hobby", phonetic: "/ˈhɒbi/", meaning: "爱好", example: "What's your hobby?", exampleCn: "你的爱好是什么？", tags: ["名词", "三会词"] }
        ], texts: [{ lesson: "Module 7 Unit 1", title: "Pen Friends", content: [{ en: "Do you have a pen friend?", cn: "你有笔友吗？" }, { en: "Yes, she lives in Australia.", cn: "有，她住在澳大利亚。" }, { en: "What does she like?", cn: "她喜欢什么？" }, { en: "She likes reading and swimming.", cn: "她喜欢阅读和游泳。" }] }] },
        { unitId: "M8", unitName: "Module 8 Future Jobs", words: [
          { word: "scientist", phonetic: "/ˈsaɪəntɪst/", meaning: "科学家", example: "I want to be a scientist.", exampleCn: "我想成为一名科学家。", tags: ["职业", "四会词"] },
          { word: "pilot", phonetic: "/ˈpaɪlət/", meaning: "飞行员", example: "He is a pilot.", exampleCn: "他是一名飞行员。", tags: ["职业", "四会词"] },
          { word: "engineer", phonetic: "/ˌendʒɪˈnɪər/", meaning: "工程师", example: "My father is an engineer.", exampleCn: "我爸爸是一名工程师。", tags: ["职业", "三会词"] },
          { word: "writer", phonetic: "/ˈraɪtər/", meaning: "作家", example: "She is a writer.", exampleCn: "她是一名作家。", tags: ["职业", "四会词"] },
          { word: "artist", phonetic: "/ˈɑːrtɪst/", meaning: "艺术家", example: "I want to be an artist.", exampleCn: "我想成为一名艺术家。", tags: ["职业", "三会词"] },
          { word: "grow up", phonetic: "/ɡrəʊ ʌp/", meaning: "长大", example: "When I grow up.", exampleCn: "当我长大的时候。", tags: ["短语", "四会词"] },
          { word: "work hard", phonetic: "/wɜːrk hɑːrd/", meaning: "努力工作", example: "I will work hard.", exampleCn: "我会努力工作。", tags: ["短语", "四会词"] },
          { word: "hope", phonetic: "/həʊp/", meaning: "希望", example: "I hope so.", exampleCn: "我希望如此。", tags: ["动词", "四会词"] }
        ], texts: [{ lesson: "Module 8 Unit 1", title: "Future Jobs", content: [{ en: "What do you want to be?", cn: "你想成为什么？" }, { en: "I want to be a pilot.", cn: "我想成为一名飞行员。" }, { en: "Why?", cn: "为什么？" }, { en: "Because I like flying.", cn: "因为我喜欢飞行。" }] }] },
        { unitId: "M9", unitName: "Module 9 Farewell", words: [
          { word: "farewell", phonetic: "/ˌfeəˈwel/", meaning: "告别", example: "Farewell, my friends.", exampleCn: "再见，我的朋友们。", tags: ["名词", "四会词"] },
          { word: "miss", phonetic: "/mɪs/", meaning: "想念", example: "I will miss you.", exampleCn: "我会想念你的。", tags: ["动词", "四会词"] },
          { word: "primary", phonetic: "/ˈpraɪməri/", meaning: "小学的", example: "Primary school.", exampleCn: "小学。", tags: ["形容词", "四会词"] },
          { word: "graduate", phonetic: "/ˈɡrædʒueɪt/", meaning: "毕业", example: "We will graduate.", exampleCn: "我们将毕业。", tags: ["动词", "三会词"] },
          { word: "memory", phonetic: "/ˈmeməri/", meaning: "记忆", example: "I have good memories.", exampleCn: "我有美好的记忆。", tags: ["名词", "四会词"] },
          { word: "keep in touch", phonetic: "/kiːp ɪn tʌtʃ/", meaning: "保持联系", example: "Let's keep in touch.", exampleCn: "我们保持联系吧。", tags: ["短语", "四会词"] },
          { word: "wonderful", phonetic: "/ˈwʌndərfl/", meaning: "极好的", example: "What a wonderful time!", exampleCn: "多么美好的时光！", tags: ["形容词", "三会词"] },
          { word: "cheer", phonetic: "/tʃɪər/", meaning: "欢呼", example: "Cheers for us!", exampleCn: "为我们欢呼！", tags: ["动词", "三会词"] }
        ], texts: [{ lesson: "Module 9 Unit 1", title: "Farewell", content: [{ en: "We're going to leave primary school.", cn: "我们要离开小学了。" }, { en: "I will miss you all.", cn: "我会想念你们所有人。" }, { en: "Let's keep in touch.", cn: "我们保持联系吧。" }, { en: "Best wishes for the future!", cn: "祝福未来！" }] }] },
        { unitId: "M10", unitName: "Module 10 Review", words: [
          { word: "review", phonetic: "/rɪˈvjuː/", meaning: "复习", example: "Let's review.", exampleCn: "让我们复习一下。", tags: ["动词", "三会词"] },
          { word: "ready", phonetic: "/ˈredi/", meaning: "准备好的", example: "Are you ready?", exampleCn: "你准备好了吗？", tags: ["形容词", "四会词"] },
          { word: "forward", phonetic: "/ˈfɔːrwərd/", meaning: "向前", example: "Look forward.", exampleCn: "向前看。", tags: ["副词", "三会词"] },
          { word: "journey", phonetic: "/ˈdʒɜːrni/", meaning: "旅程", example: "A new journey begins.", exampleCn: "一段新旅程开始了。", tags: ["名词", "四会词"] },
          { word: "promise", phonetic: "/ˈprɒmɪs/", meaning: "承诺", example: "I promise.", exampleCn: "我保证。", tags: ["动词", "三会词"] },
          { word: "together", phonetic: "/təˈɡeðər/", meaning: "一起", example: "We are together.", exampleCn: "我们在一起。", tags: ["副词", "四会词"] },
          { word: "achieve", phonetic: "/əˈtʃiːv/", meaning: "实现", example: "I can achieve my dream.", exampleCn: "我能实现我的梦想。", tags: ["动词", "三会词"] },
          { word: "proud", phonetic: "/praʊd/", meaning: "骄傲的", example: "I'm proud of you.", exampleCn: "我为你骄傲。", tags: ["形容词", "四会词"] }
        ], texts: [{ lesson: "Module 10 Unit 1", title: "Review", content: [{ en: "We've learned so much.", cn: "我们学到了很多。" }, { en: "I'm proud of us.", cn: "我为我们骄傲。" }, { en: "A new journey is waiting.", cn: "新的旅程在等待。" }, { en: "Let's move forward together!", cn: "让我们一起向前！" }] }] }
      ]
    }
  }
};