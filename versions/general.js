// 通用大纲版英语教材数据 - 综合各版本核心词汇（完整版）
// 依据最新教材大纲编写，包含 1-6 年级所有单元的单词和课文
// 数据结构已统一：word, phonetic, meaning, example, exampleCn, tags
const generalData = {
  versionId: "general",
  versionName: "通用大纲版",
  description: "综合各版本核心词汇 | 1-6 年级全覆盖 | 适合通用学习",
  startGrade: 1,
  lastUpdated: "2026-01",
  grades: {
    // ==================== 一年级 ====================
    1: {
      semester: "上册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 Greetings",
          words: [
            { word: "hello", phonetic: "/həˈloʊ/", meaning: "你好", example: "Hello, how are you?", exampleCn: "你好，你好吗？", tags: ["问候", "四会词"] },
            { word: "hi", phonetic: "/haɪ/", meaning: "嗨", example: "Hi, I'm Tom.", exampleCn: "嗨，我是汤姆。", tags: ["问候", "四会词"] },
            { word: "goodbye", phonetic: "/ˌɡʊdˈbaɪ/", meaning: "再见", example: "Goodbye, see you tomorrow.", exampleCn: "再见，明天见。", tags: ["问候", "四会词"] },
            { word: "bye", phonetic: "/baɪ/", meaning: "拜拜", example: "Bye, mom!", exampleCn: "拜拜，妈妈！", tags: ["问候", "三会词"] },
            { word: "I", phonetic: "/aɪ/", meaning: "我", example: "I am a student.", exampleCn: "我是一名学生。", tags: ["代词", "四会词"] },
            { word: "am", phonetic: "/æm/", meaning: "是", example: "I am happy.", exampleCn: "我很开心。", tags: ["动词", "四会词"] },
            { word: "is", phonetic: "/ɪz/", meaning: "是", example: "She is my friend.", exampleCn: "她是我的朋友。", tags: ["动词", "四会词"] },
            { word: "are", phonetic: "/ɑːr/", meaning: "是", example: "You are nice.", exampleCn: "你很好。", tags: ["动词", "四会词"] },
            { word: "you", phonetic: "/juː/", meaning: "你", example: "How are you?", exampleCn: "你好吗？", tags: ["代词", "四会词"] },
            { word: "he", phonetic: "/hiː/", meaning: "他", example: "He is my brother.", exampleCn: "他是我的哥哥。", tags: ["代词", "四会词"] },
            { word: "she", phonetic: "/ʃiː/", meaning: "她", example: "She is my sister.", exampleCn: "她是我的姐姐。", tags: ["代词", "四会词"] },
            { word: "it", phonetic: "/ɪt/", meaning: "它", example: "It is a cat.", exampleCn: "它是一只猫。", tags: ["代词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Hello",
              content: [
                { en: "Hello! I'm Tom.", cn: "你好！我是汤姆。" },
                { en: "Hi, I'm Lucy.", cn: "嗨，我是露西。" },
                { en: "Goodbye!", cn: "再见！" },
                { en: "Bye!", cn: "拜拜！" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My Name",
          words: [
            { word: "my", phonetic: "/maɪ/", meaning: "我的", example: "This is my book.", exampleCn: "这是我的书。", tags: ["代词", "四会词"] },
            { word: "your", phonetic: "/jɔːr/", meaning: "你的", example: "What's your name?", exampleCn: "你叫什么名字？", tags: ["代词", "四会词"] },
            { word: "name", phonetic: "/neɪm/", meaning: "名字", example: "My name is Lucy.", exampleCn: "我的名字是露西。", tags: ["基础", "四会词"] },
            { word: "what", phonetic: "/wɒt/", meaning: "什么", example: "What is this?", exampleCn: "这是什么？", tags: ["疑问词", "四会词"] },
            { word: "this", phonetic: "/ðɪs/", meaning: "这个", example: "This is an apple.", exampleCn: "这是一个苹果。", tags: ["代词", "四会词"] },
            { word: "that", phonetic: "/ðæt/", meaning: "那个", example: "That is a dog.", exampleCn: "那是一只狗。", tags: ["代词", "三会词"] },
            { word: "a", phonetic: "/ə/", meaning: "一个", example: "I have a pen.", exampleCn: "我有一支笔。", tags: ["冠词", "四会词"] },
            { word: "an", phonetic: "/ən/", meaning: "一个", example: "This is an egg.", exampleCn: "这是一个鸡蛋。", tags: ["冠词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "What's your name?",
              content: [
                { en: "What's your name?", cn: "你叫什么名字？" },
                { en: "My name is Tom.", cn: "我的名字叫汤姆。" },
                { en: "Nice to meet you.", cn: "很高兴认识你。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Animals",
          words: [
            { word: "cat", phonetic: "/kæt/", meaning: "猫", example: "The cat is cute.", exampleCn: "这只猫很可爱。", tags: ["动物", "四会词"] },
            { word: "dog", phonetic: "/dɒɡ/", meaning: "狗", example: "I have a dog.", exampleCn: "我有一只狗。", tags: ["动物", "四会词"] },
            { word: "bird", phonetic: "/bɜːrd/", meaning: "鸟", example: "The bird can fly.", exampleCn: "鸟会飞。", tags: ["动物", "四会词"] },
            { word: "panda", phonetic: "/ˈpændə/", meaning: "熊猫", example: "The panda is black and white.", exampleCn: "熊猫是黑白相间的。", tags: ["动物", "三会词"] },
            { word: "duck", phonetic: "/dʌk/", meaning: "鸭子", example: "The duck says quack.", exampleCn: "鸭子嘎嘎叫。", tags: ["动物", "三会词"] },
            { word: "pig", phonetic: "/pɪɡ/", meaning: "猪", example: "The pig is fat.", exampleCn: "猪很胖。", tags: ["动物", "三会词"] },
            { word: "rabbit", phonetic: "/ˈræbɪt/", meaning: "兔子", example: "The rabbit has long ears.", exampleCn: "兔子有长耳朵。", tags: ["动物", "三会词"] },
            { word: "frog", phonetic: "/frɒɡ/", meaning: "青蛙", example: "The frog can jump.", exampleCn: "青蛙会跳。", tags: ["动物", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Animals",
              content: [
                { en: "Look! A cat!", cn: "看！一只猫！" },
                { en: "It's cute.", cn: "它很可爱。" },
                { en: "Look! A dog!", cn: "看！一只狗！" },
                { en: "It's big.", cn: "它很大。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 Colors",
          words: [
            { word: "red", phonetic: "/red/", meaning: "红色", example: "I like red.", exampleCn: "我喜欢红色。", tags: ["颜色", "四会词"] },
            { word: "blue", phonetic: "/bluː/", meaning: "蓝色", example: "The sky is blue.", exampleCn: "天空是蓝色的。", tags: ["颜色", "四会词"] },
            { word: "yellow", phonetic: "/ˈjeləʊ/", meaning: "黄色", example: "The banana is yellow.", exampleCn: "香蕉是黄色的。", tags: ["颜色", "四会词"] },
            { word: "green", phonetic: "/ɡriːn/", meaning: "绿色", example: "Grass is green.", exampleCn: "草是绿色的。", tags: ["颜色", "四会词"] },
            { word: "black", phonetic: "/blæk/", meaning: "黑色", example: "The cat is black.", exampleCn: "猫是黑色的。", tags: ["颜色", "四会词"] },
            { word: "white", phonetic: "/waɪt/", meaning: "白色", example: "The snow is white.", exampleCn: "雪是白色的。", tags: ["颜色", "四会词"] },
            { word: "orange", phonetic: "/ˈɒrɪndʒ/", meaning: "橙色", example: "The orange is orange.", exampleCn: "橙子是橙色的。", tags: ["颜色", "三会词"] },
            { word: "pink", phonetic: "/pɪŋk/", meaning: "粉色", example: "The flower is pink.", exampleCn: "花是粉色的。", tags: ["颜色", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Colors",
              content: [
                { en: "What color is it?", cn: "它是什么颜色？" },
                { en: "It's red.", cn: "它是红色的。" },
                { en: "What color is it?", cn: "它是什么颜色？" },
                { en: "It's blue.", cn: "它是蓝色的。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Numbers",
          words: [
            { word: "one", phonetic: "/wʌn/", meaning: "一", example: "I have one apple.", exampleCn: "我有一个苹果。", tags: ["数字", "四会词"] },
            { word: "two", phonetic: "/tuː/", meaning: "二", example: "I have two books.", exampleCn: "我有两本书。", tags: ["数字", "四会词"] },
            { word: "three", phonetic: "/θriː/", meaning: "三", example: "I am three years old.", exampleCn: "我三岁了。", tags: ["数字", "四会词"] },
            { word: "four", phonetic: "/fɔːr/", meaning: "四", example: "I have four pens.", exampleCn: "我有四支钢笔。", tags: ["数字", "四会词"] },
            { word: "five", phonetic: "/faɪv/", meaning: "五", example: "I have five fingers.", exampleCn: "我有五根手指。", tags: ["数字", "四会词"] },
            { word: "six", phonetic: "/sɪks/", meaning: "六", example: "I am six years old.", exampleCn: "我六岁了。", tags: ["数字", "四会词"] },
            { word: "seven", phonetic: "/ˈsevn/", meaning: "七", example: "There are seven days.", exampleCn: "一周有七天。", tags: ["数字", "四会词"] },
            { word: "eight", phonetic: "/eɪt/", meaning: "八", example: "I have eight toys.", exampleCn: "我有八个玩具。", tags: ["数字", "四会词"] },
            { word: "nine", phonetic: "/naɪn/", meaning: "九", example: "Nine cats are sleeping.", exampleCn: "九只猫在睡觉。", tags: ["数字", "四会词"] },
            { word: "ten", phonetic: "/ten/", meaning: "十", example: "I have ten fingers.", exampleCn: "我有十根手指。", tags: ["数字", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Numbers",
              content: [
                { en: "One, two, three.", cn: "一，二，三。" },
                { en: "Four, five, six.", cn: "四，五，六。" },
                { en: "Seven, eight, nine, ten!", cn: "七，八，九，十！" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 School Things",
          words: [
            { word: "apple", phonetic: "/ˈæpl/", meaning: "苹果", example: "I like apples.", exampleCn: "我喜欢苹果。", tags: ["水果", "四会词"] },
            { word: "banana", phonetic: "/bəˈnɑːnə/", meaning: "香蕉", example: "Eat a banana.", exampleCn: "吃一根香蕉。", tags: ["水果", "四会词"] },
            { word: "book", phonetic: "/bʊk/", meaning: "书", example: "Open your book.", exampleCn: "打开你的书。", tags: ["文具", "四会词"] },
            { word: "pen", phonetic: "/pen/", meaning: "钢笔", example: "This is my pen.", exampleCn: "这是我的钢笔。", tags: ["文具", "四会词"] },
            { word: "pencil", phonetic: "/ˈpensl/", meaning: "铅笔", example: "I need a pencil.", exampleCn: "我需要一支铅笔。", tags: ["文具", "四会词"] },
            { word: "bag", phonetic: "/bæɡ/", meaning: "书包", example: "My bag is blue.", exampleCn: "我的书包是蓝色的。", tags: ["文具", "四会词"] },
            { word: "ruler", phonetic: "/ˈruːlər/", meaning: "尺子", example: "I have a ruler.", exampleCn: "我有一把尺子。", tags: ["文具", "三会词"] },
            { word: "eraser", phonetic: "/ɪˈreɪsər/", meaning: "橡皮", example: "Can I use your eraser?", exampleCn: "我能用你的橡皮吗？", tags: ["文具", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "My School Things",
              content: [
                { en: "This is my book.", cn: "这是我的书。" },
                { en: "This is my pen.", cn: "这是我的钢笔。" },
                { en: "This is my bag.", cn: "这是我的书包。" },
                { en: "I like my school things.", cn: "我喜欢我的学习用品。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 二年级 ====================
    2: {
      semester: "上册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 Polite Words",
          words: [
            { word: "how", phonetic: "/haʊ/", meaning: "怎样", example: "How are you?", exampleCn: "你好吗？", tags: ["疑问词", "四会词"] },
            { word: "fine", phonetic: "/faɪn/", meaning: "好的", example: "I'm fine, thank you.", exampleCn: "我很好，谢谢。", tags: ["形容词", "四会词"] },
            { word: "thank", phonetic: "/θæŋk/", meaning: "谢谢", example: "Thank you very much.", exampleCn: "非常感谢你。", tags: ["动词", "四会词"] },
            { word: "please", phonetic: "/pliːz/", meaning: "请", example: "Please sit down.", exampleCn: "请坐下。", tags: ["礼貌", "四会词"] },
            { word: "sorry", phonetic: "/ˈsɒri/", meaning: "对不起", example: "I'm sorry.", exampleCn: "对不起。", tags: ["礼貌", "四会词"] },
            { word: "yes", phonetic: "/jes/", meaning: "是", example: "Yes, I can.", exampleCn: "是的，我能。", tags: ["基础", "四会词"] },
            { word: "no", phonetic: "/nəʊ/", meaning: "不", example: "No, thank you.", exampleCn: "不，谢谢。", tags: ["基础", "四会词"] },
            { word: "the", phonetic: "/ðə/", meaning: "这个/那个", example: "The sun is hot.", exampleCn: "太阳很热。", tags: ["冠词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "How are you?",
              content: [
                { en: "How are you?", cn: "你好吗？" },
                { en: "I'm fine, thank you.", cn: "我很好，谢谢。" },
                { en: "And you?", cn: "你呢？" },
                { en: "I'm fine too.", cn: "我也很好。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 Abilities",
          words: [
            { word: "can", phonetic: "/kæn/", meaning: "能", example: "I can sing.", exampleCn: "我会唱歌。", tags: ["动词", "四会词"] },
            { word: "do", phonetic: "/duː/", meaning: "做", example: "What do you do?", exampleCn: "你做什么？", tags: ["动词", "四会词"] },
            { word: "like", phonetic: "/laɪk/", meaning: "喜欢", example: "I like dogs.", exampleCn: "我喜欢狗。", tags: ["动词", "四会词"] },
            { word: "have", phonetic: "/hæv/", meaning: "有", example: "I have a cat.", exampleCn: "我有一只猫。", tags: ["动词", "四会词"] },
            { word: "has", phonetic: "/hæz/", meaning: "有", example: "She has a book.", exampleCn: "她有一本书。", tags: ["动词", "四会词"] },
            { word: "run", phonetic: "/rʌn/", meaning: "跑", example: "I can run fast.", exampleCn: "我能跑得很快。", tags: ["动词", "四会词"] },
            { word: "jump", phonetic: "/dʒʌmp/", meaning: "跳", example: "The rabbit can jump.", exampleCn: "兔子会跳。", tags: ["动词", "四会词"] },
            { word: "swim", phonetic: "/swɪm/", meaning: "游泳", example: "Fish can swim.", exampleCn: "鱼会游泳。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "I Can...",
              content: [
                { en: "I can run.", cn: "我会跑。" },
                { en: "I can jump.", cn: "我会跳。" },
                { en: "I can swim.", cn: "我会游泳。" },
                { en: "I can sing.", cn: "我会唱歌。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 More Actions",
          words: [
            { word: "fly", phonetic: "/flaɪ/", meaning: "飞", example: "Birds can fly.", exampleCn: "鸟会飞。", tags: ["动词", "四会词"] },
            { word: "walk", phonetic: "/wɔːk/", meaning: "走", example: "I walk to school.", exampleCn: "我走路去上学。", tags: ["动词", "四会词"] },
            { word: "sing", phonetic: "/sɪŋ/", meaning: "唱歌", example: "I like to sing.", exampleCn: "我喜欢唱歌。", tags: ["动词", "四会词"] },
            { word: "dance", phonetic: "/dɑːns/", meaning: "跳舞", example: "She can dance well.", exampleCn: "她跳舞跳得很好。", tags: ["动词", "四会词"] },
            { word: "read", phonetic: "/riːd/", meaning: "读", example: "I like to read books.", exampleCn: "我喜欢读书。", tags: ["动词", "四会词"] },
            { word: "write", phonetic: "/raɪt/", meaning: "写", example: "Write your name.", exampleCn: "写下你的名字。", tags: ["动词", "四会词"] },
            { word: "draw", phonetic: "/drɔː/", meaning: "画", example: "Draw a picture.", exampleCn: "画一幅画。", tags: ["动词", "四会词"] },
            { word: "play", phonetic: "/pleɪ/", meaning: "玩", example: "Let's play football.", exampleCn: "我们踢足球吧。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "What can you do?",
              content: [
                { en: "What can you do?", cn: "你会做什么？" },
                { en: "I can sing and dance.", cn: "我会唱歌和跳舞。" },
                { en: "I can read and write.", cn: "我会读书和写字。" },
                { en: "That's great!", cn: "太棒了！" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 Adjectives",
          words: [
            { word: "big", phonetic: "/bɪɡ/", meaning: "大的", example: "The elephant is big.", exampleCn: "大象很大。", tags: ["形容词", "四会词"] },
            { word: "small", phonetic: "/smɔːl/", meaning: "小的", example: "The mouse is small.", exampleCn: "老鼠很小。", tags: ["形容词", "四会词"] },
            { word: "long", phonetic: "/lɒŋ/", meaning: "长的", example: "The snake is long.", exampleCn: "蛇很长。", tags: ["形容词", "四会词"] },
            { word: "short", phonetic: "/ʃɔːt/", meaning: "短的", example: "My hair is short.", exampleCn: "我的头发很短。", tags: ["形容词", "四会词"] },
            { word: "tall", phonetic: "/tɔːl/", meaning: "高的", example: "He is very tall.", exampleCn: "他很高。", tags: ["形容词", "四会词"] },
            { word: "fat", phonetic: "/fæt/", meaning: "胖的", example: "The pig is fat.", exampleCn: "猪很胖。", tags: ["形容词", "四会词"] },
            { word: "thin", phonetic: "/θɪn/", meaning: "瘦的", example: "The monkey is thin.", exampleCn: "猴子很瘦。", tags: ["形容词", "四会词"] },
            { word: "cute", phonetic: "/kjuːt/", meaning: "可爱的", example: "The cat is cute.", exampleCn: "猫很可爱。", tags: ["形容词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Look at the animals",
              content: [
                { en: "Look at the elephant.", cn: "看那头大象。" },
                { en: "It's big.", cn: "它很大。" },
                { en: "Look at the mouse.", cn: "看那只老鼠。" },
                { en: "It's small.", cn: "它很小。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 More Fruits",
          words: [
            { word: "orange", phonetic: "/ˈɒrɪndʒ/", meaning: "橙子", example: "I like oranges.", exampleCn: "我喜欢橙子。", tags: ["水果", "四会词"] },
            { word: "pear", phonetic: "/peər/", meaning: "梨", example: "This pear is sweet.", exampleCn: "这个梨很甜。", tags: ["水果", "四会词"] },
            { word: "peach", phonetic: "/piːtʃ/", meaning: "桃子", example: "The peach is pink.", exampleCn: "桃子是粉色的。", tags: ["水果", "三会词"] },
            { word: "watermelon", phonetic: "/ˈwɔːtəmelən/", meaning: "西瓜", example: "Watermelon is juicy.", exampleCn: "西瓜很多汁。", tags: ["水果", "三会词"] },
            { word: "strawberry", phonetic: "/ˈstrɔːbəri/", meaning: "草莓", example: "Strawberries are red.", exampleCn: "草莓是红色的。", tags: ["水果", "三会词"] },
            { word: "grape", phonetic: "/ɡreɪp/", meaning: "葡萄", example: "Grapes are purple.", exampleCn: "葡萄是紫色的。", tags: ["水果", "三会词"] },
            { word: "mango", phonetic: "/ˈmæŋɡəʊ/", meaning: "芒果", example: "I like mangoes.", exampleCn: "我喜欢芒果。", tags: ["水果", "三会词"] },
            { word: "lemon", phonetic: "/ˈlemən/", meaning: "柠檬", example: "Lemons are sour.", exampleCn: "柠檬很酸。", tags: ["水果", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "I like fruits",
              content: [
                { en: "I like apples.", cn: "我喜欢苹果。" },
                { en: "I like oranges.", cn: "我喜欢橙子。" },
                { en: "I like pears.", cn: "我喜欢梨。" },
                { en: "I like fruits.", cn: "我喜欢水果。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 More Animals",
          words: [
            { word: "elephant", phonetic: "/ˈelɪfənt/", meaning: "大象", example: "The elephant is big.", exampleCn: "大象很大。", tags: ["动物", "四会词"] },
            { word: "tiger", phonetic: "/ˈtaɪɡər/", meaning: "老虎", example: "The tiger is strong.", exampleCn: "老虎很强壮。", tags: ["动物", "四会词"] },
            { word: "lion", phonetic: "/ˈlaɪən/", meaning: "狮子", example: "The lion is the king.", exampleCn: "狮子是百兽之王。", tags: ["动物", "三会词"] },
            { word: "monkey", phonetic: "/ˈmʌŋki/", meaning: "猴子", example: "The monkey likes bananas.", exampleCn: "猴子喜欢香蕉。", tags: ["动物", "四会词"] },
            { word: "bear", phonetic: "/beər/", meaning: "熊", example: "The bear is big and strong.", exampleCn: "熊又大又强壮。", tags: ["动物", "三会词"] },
            { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼", example: "Fish swim in water.", exampleCn: "鱼在水里游。", tags: ["动物", "四会词"] },
            { word: "chicken", phonetic: "/ˈtʃɪkɪn/", meaning: "鸡", example: "The chicken lays eggs.", exampleCn: "鸡会下蛋。", tags: ["动物", "三会词"] },
            { word: "cow", phonetic: "/kaʊ/", meaning: "奶牛", example: "The cow gives milk.", exampleCn: "奶牛产奶。", tags: ["动物", "三会词"] },
            { word: "sheep", phonetic: "/ʃiːp/", meaning: "绵羊", example: "The sheep has wool.", exampleCn: "绵羊有羊毛。", tags: ["动物", "三会词"] },
            { word: "horse", phonetic: "/hɔːrs/", meaning: "马", example: "The horse runs fast.", exampleCn: "马跑得很快。", tags: ["动物", "三会词"] },
            { word: "zoo", phonetic: "/zuː/", meaning: "动物园", example: "Let's go to the zoo.", exampleCn: "我们去动物园吧。", tags: ["地点", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "At the zoo",
              content: [
                { en: "Let's go to the zoo!", cn: "我们去动物园吧！" },
                { en: "Look at the elephant.", cn: "看那头大象。" },
                { en: "It's big and strong.", cn: "它又大又强壮。" },
                { en: "I like animals!", cn: "我喜欢动物！" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 三年级 ====================
    3: {
      semester: "上册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 My Classroom",
          words: [
            { word: "school", phonetic: "/skuːl/", meaning: "学校", example: "I go to school every day.", exampleCn: "我每天去上学。", tags: ["地点", "四会词"] },
            { word: "classroom", phonetic: "/ˈklɑːsruːm/", meaning: "教室", example: "This is my classroom.", exampleCn: "这是我的教室。", tags: ["学校", "四会词"] },
            { word: "desk", phonetic: "/desk/", meaning: "书桌", example: "My desk is clean.", exampleCn: "我的书桌很干净。", tags: ["学校", "四会词"] },
            { word: "chair", phonetic: "/tʃeər/", meaning: "椅子", example: "Sit on the chair.", exampleCn: "坐在椅子上。", tags: ["学校", "四会词"] },
            { word: "blackboard", phonetic: "/ˈblækbɔːrd/", meaning: "黑板", example: "Look at the blackboard.", exampleCn: "看黑板。", tags: ["学校", "三会词"] },
            { word: "window", phonetic: "/ˈwɪndəʊ/", meaning: "窗户", example: "Open the window.", exampleCn: "打开窗户。", tags: ["学校", "三会词"] },
            { word: "door", phonetic: "/dɔːr/", meaning: "门", example: "Close the door.", exampleCn: "关上门。", tags: ["学校", "三会词"] },
            { word: "floor", phonetic: "/flɔːr/", meaning: "地板", example: "Sweep the floor.", exampleCn: "扫地。", tags: ["学校", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "My Classroom",
              content: [
                { en: "This is my classroom.", cn: "这是我的教室。" },
                { en: "It is big and clean.", cn: "它又大又干净。" },
                { en: "There are many desks.", cn: "有很多书桌。" },
                { en: "I like my classroom.", cn: "我喜欢我的教室。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 Classroom Items",
          words: [
            { word: "light", phonetic: "/laɪt/", meaning: "灯", example: "Turn on the light.", exampleCn: "开灯。", tags: ["学校", "三会词"] },
            { word: "picture", phonetic: "/ˈpɪktʃər/", meaning: "图画", example: "This is a nice picture.", exampleCn: "这是一幅好看的画。", tags: ["学校", "三会词"] },
            { word: "computer", phonetic: "/kəmˈpjuːtər/", meaning: "电脑", example: "I like playing computer games.", exampleCn: "我喜欢玩电脑游戏。", tags: ["学校", "三会词"] },
            { word: "fan", phonetic: "/fæn/", meaning: "风扇", example: "The fan is cool.", exampleCn: "风扇很凉快。", tags: ["学校", "三会词"] },
            { word: "wall", phonetic: "/wɔːl/", meaning: "墙", example: "The wall is white.", exampleCn: "墙是白色的。", tags: ["学校", "三会词"] },
            { word: "crayon", phonetic: "/ˈkreɪən/", meaning: "蜡笔", example: "I have a red crayon.", exampleCn: "我有一支红色蜡笔。", tags: ["文具", "三会词"] },
            { word: "pencil box", phonetic: "/ˈpensl bɒks/", meaning: "铅笔盒", example: "Open your pencil box.", exampleCn: "打开你的铅笔盒。", tags: ["文具", "三会词"] },
            { word: "eraser", phonetic: "/ɪˈreɪsər/", meaning: "橡皮", example: "Can I use your eraser?", exampleCn: "我能用你的橡皮吗？", tags: ["文具", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "In the classroom",
              content: [
                { en: "Where is the light?", cn: "灯在哪里？" },
                { en: "It's on the wall.", cn: "它在墙上。" },
                { en: "Where is the computer?", cn: "电脑在哪里？" },
                { en: "It's on the desk.", cn: "它在书桌上。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Time",
          words: [
            { word: "morning", phonetic: "/ˈmɔːrnɪŋ/", meaning: "早上", example: "Good morning!", exampleCn: "早上好！", tags: ["时间", "四会词"] },
            { word: "afternoon", phonetic: "/ˌæftərˈnuːn/", meaning: "下午", example: "Good afternoon!", exampleCn: "下午好！", tags: ["时间", "四会词"] },
            { word: "evening", phonetic: "/ˈiːvnɪŋ/", meaning: "晚上", example: "Good evening!", exampleCn: "晚上好！", tags: ["时间", "四会词"] },
            { word: "night", phonetic: "/naɪt/", meaning: "夜晚", example: "Good night!", exampleCn: "晚安！", tags: ["时间", "四会词"] },
            { word: "today", phonetic: "/təˈdeɪ/", meaning: "今天", example: "Today is Monday.", exampleCn: "今天是星期一。", tags: ["时间", "四会词"] },
            { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", meaning: "明天", example: "See you tomorrow.", exampleCn: "明天见。", tags: ["时间", "三会词"] },
            { word: "yesterday", phonetic: "/ˈjestərdeɪ/", meaning: "昨天", example: "Yesterday was Sunday.", exampleCn: "昨天是星期天。", tags: ["时间", "三会词"] },
            { word: "time", phonetic: "/taɪm/", meaning: "时间", example: "What time is it?", exampleCn: "几点了？", tags: ["时间", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "My Day",
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
          unitId: "U4",
          unitName: "Unit 4 Days of Week",
          words: [
            { word: "Monday", phonetic: "/ˈmʌndeɪ/", meaning: "星期一", example: "I like Monday.", exampleCn: "我喜欢星期一。", tags: ["星期", "四会词"] },
            { word: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", meaning: "星期二", example: "Tuesday is fun.", exampleCn: "星期二很有趣。", tags: ["星期", "四会词"] },
            { word: "Wednesday", phonetic: "/ˈwenzdeɪ/", meaning: "星期三", example: "It's Wednesday today.", exampleCn: "今天是星期三。", tags: ["星期", "三会词"] },
            { word: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", meaning: "星期四", example: "Thursday is near Friday.", exampleCn: "星期四离星期五很近。", tags: ["星期", "三会词"] },
            { word: "Friday", phonetic: "/ˈfraɪdeɪ/", meaning: "星期五", example: "I love Friday!", exampleCn: "我喜欢星期五！", tags: ["星期", "四会词"] },
            { word: "Saturday", phonetic: "/ˈsætərdeɪ/", meaning: "星期六", example: "Saturday is the weekend.", exampleCn: "星期六是周末。", tags: ["星期", "三会词"] },
            { word: "Sunday", phonetic: "/ˈsʌndeɪ/", meaning: "星期日", example: "Sunday is a rest day.", exampleCn: "星期日是休息日。", tags: ["星期", "三会词"] },
            { word: "week", phonetic: "/wiːk/", meaning: "周", example: "There are 7 days in a week.", exampleCn: "一周有 7 天。", tags: ["时间", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
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
          unitId: "U5",
          unitName: "Unit 5 Meals",
          words: [
            { word: "breakfast", phonetic: "/ˈbrekfəst/", meaning: "早餐", example: "I eat breakfast at 7.", exampleCn: "我 7 点吃早餐。", tags: ["餐食", "四会词"] },
            { word: "lunch", phonetic: "/lʌntʃ/", meaning: "午餐", example: "Lunch is at 12.", exampleCn: "午餐在 12 点。", tags: ["餐食", "四会词"] },
            { word: "dinner", phonetic: "/ˈdɪnər/", meaning: "晚餐", example: "Dinner is ready.", exampleCn: "晚餐准备好了。", tags: ["餐食", "四会词"] },
            { word: "o'clock", phonetic: "/əˈklɒk/", meaning: "点钟", example: "It's 3 o'clock.", exampleCn: "3 点钟了。", tags: ["时间", "四会词"] },
            { word: "minute", phonetic: "/ˈmɪnɪt/", meaning: "分钟", example: "Wait a minute.", exampleCn: "等一分钟。", tags: ["时间", "三会词"] },
            { word: "hour", phonetic: "/ˈaʊər/", meaning: "小时", example: "An hour has 60 minutes.", exampleCn: "一小时有 60 分钟。", tags: ["时间", "三会词"] },
            { word: "day", phonetic: "/deɪ/", meaning: "天", example: "Have a nice day!", exampleCn: "祝你今天愉快！", tags: ["时间", "四会词"] },
            { word: "year", phonetic: "/jɪər/", meaning: "年", example: "A year has 12 months.", exampleCn: "一年有 12 个月。", tags: ["时间", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "My Day",
              content: [
                { en: "I get up at 7 o'clock.", cn: "我 7 点起床。" },
                { en: "I eat breakfast at 7:30.", cn: "我 7 点半吃早餐。" },
                { en: "I go to school at 8.", cn: "我 8 点去上学。" },
                { en: "I have lunch at 12.", cn: "我 12 点吃午餐。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Months",
          words: [
            { word: "month", phonetic: "/mʌnθ/", meaning: "月", example: "January is the first month.", exampleCn: "一月是第一个月。", tags: ["时间", "三会词"] },
            { word: "January", phonetic: "/ˈdʒænjuəri/", meaning: "一月", example: "January is cold.", exampleCn: "一月很冷。", tags: ["月份", "三会词"] },
            { word: "February", phonetic: "/ˈfebruəri/", meaning: "二月", example: "February is short.", exampleCn: "二月很短。", tags: ["月份", "三会词"] },
            { word: "March", phonetic: "/mɑːrtʃ/", meaning: "三月", example: "March is in spring.", exampleCn: "三月在春天。", tags: ["月份", "三会词"] },
            { word: "April", phonetic: "/ˈeɪprəl/", meaning: "四月", example: "April has rain.", exampleCn: "四月有雨。", tags: ["月份", "三会词"] },
            { word: "May", phonetic: "/meɪ/", meaning: "五月", example: "May is warm.", exampleCn: "五月很暖和。", tags: ["月份", "三会词"] },
            { word: "June", phonetic: "/dʒuːn/", meaning: "六月", example: "June is the start of summer.", exampleCn: "六月是夏天的开始。", tags: ["月份", "三会词"] },
            { word: "July", phonetic: "/dʒuˈlaɪ/", meaning: "七月", example: "July is hot.", exampleCn: "七月很热。", tags: ["月份", "三会词"] },
            { word: "August", phonetic: "/ˈɔːɡəst/", meaning: "八月", example: "August is summer holiday.", exampleCn: "八月是暑假。", tags: ["月份", "三会词"] },
            { word: "September", phonetic: "/sepˈtembər/", meaning: "九月", example: "School starts in September.", exampleCn: "九月开学。", tags: ["月份", "三会词"] },
            { word: "October", phonetic: "/ɒkˈtəʊbər/", meaning: "十月", example: "October has golden leaves.", exampleCn: "十月有金色的叶子。", tags: ["月份", "三会词"] },
            { word: "November", phonetic: "/nəʊˈvembər/", meaning: "十一月", example: "November is cool.", exampleCn: "十一月很凉爽。", tags: ["月份", "三会词"] },
            { word: "December", phonetic: "/dɪˈsembər/", meaning: "十二月", example: "December is the last month.", exampleCn: "十二月是最后一个月。", tags: ["月份", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Months",
              content: [
                { en: "January is the first month.", cn: "一月是第一个月。" },
                { en: "June is the sixth month.", cn: "六月是第六个月。" },
                { en: "December is the last month.", cn: "十二月是最后一个月。" },
                { en: "There are 12 months in a year.", cn: "一年有 12 个月。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 四年级 ====================
    4: {
      semester: "上册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 Weather",
          words: [
            { word: "weather", phonetic: "/ˈweðər/", meaning: "天气", example: "How's the weather?", exampleCn: "天气怎么样？", tags: ["天气", "四会词"] },
            { word: "sunny", phonetic: "/ˈsʌni/", meaning: "晴朗的", example: "It's sunny today.", exampleCn: "今天天气晴朗。", tags: ["天气", "四会词"] },
            { word: "cloudy", phonetic: "/ˈklaʊdi/", meaning: "多云的", example: "The sky is cloudy.", exampleCn: "天空多云。", tags: ["天气", "四会词"] },
            { word: "rainy", phonetic: "/ˈreɪni/", meaning: "下雨的", example: "It's rainy outside.", exampleCn: "外面在下雨。", tags: ["天气", "四会词"] },
            { word: "snowy", phonetic: "/ˈsnəʊi/", meaning: "下雪的", example: "It's snowy in winter.", exampleCn: "冬天下雪。", tags: ["天气", "四会词"] },
            { word: "windy", phonetic: "/ˈwɪndi/", meaning: "有风的", example: "It's windy today.", exampleCn: "今天有风。", tags: ["天气", "四会词"] },
            { word: "hot", phonetic: "/hɒt/", meaning: "热的", example: "Summer is hot.", exampleCn: "夏天很热。", tags: ["天气", "四会词"] },
            { word: "cold", phonetic: "/kəʊld/", meaning: "冷的", example: "Winter is cold.", exampleCn: "冬天很冷。", tags: ["天气", "四会词"] },
            { word: "warm", phonetic: "/wɔːrm/", meaning: "温暖的", example: "Spring is warm.", exampleCn: "春天很温暖。", tags: ["天气", "四会词"] },
            { word: "cool", phonetic: "/kuːl/", meaning: "凉爽的", example: "Autumn is cool.", exampleCn: "秋天很凉爽。", tags: ["天气", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
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
          unitId: "U2",
          unitName: "Unit 2 Seasons",
          words: [
            { word: "spring", phonetic: "/sprɪŋ/", meaning: "春天", example: "Flowers bloom in spring.", exampleCn: "春天花开。", tags: ["季节", "四会词"] },
            { word: "summer", phonetic: "/ˈsʌmər/", meaning: "夏天", example: "I like summer vacation.", exampleCn: "我喜欢暑假。", tags: ["季节", "四会词"] },
            { word: "autumn", phonetic: "/ˈɔːtəm/", meaning: "秋天", example: "Leaves fall in autumn.", exampleCn: "秋天落叶。", tags: ["季节", "四会词"] },
            { word: "fall", phonetic: "/fɔːl/", meaning: "秋天", example: "Fall is beautiful.", exampleCn: "秋天很美。", tags: ["季节", "三会词"] },
            { word: "winter", phonetic: "/ˈwɪntər/", meaning: "冬天", example: "It snows in winter.", exampleCn: "冬天下雪。", tags: ["季节", "四会词"] },
            { word: "season", phonetic: "/ˈsiːzn/", meaning: "季节", example: "There are four seasons.", exampleCn: "一年有四个季节。", tags: ["季节", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
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
          unitId: "U3",
          unitName: "Unit 3 Clothes",
          words: [
            { word: "clothes", phonetic: "/kləʊðz/", meaning: "衣服", example: "I need new clothes.", exampleCn: "我需要新衣服。", tags: ["服装", "四会词"] },
            { word: "shirt", phonetic: "/ʃɜːrt/", meaning: "衬衫", example: "This shirt is white.", exampleCn: "这件衬衫是白色的。", tags: ["服装", "四会词"] },
            { word: "T-shirt", phonetic: "/ˈtiː ʃɜːrt/", meaning: "T 恤", example: "I like this T-shirt.", exampleCn: "我喜欢这件 T 恤。", tags: ["服装", "三会词"] },
            { word: "skirt", phonetic: "/skɜːrt/", meaning: "裙子", example: "She wears a skirt.", exampleCn: "她穿着裙子。", tags: ["服装", "四会词"] },
            { word: "dress", phonetic: "/dres/", meaning: "连衣裙", example: "The dress is pretty.", exampleCn: "这条连衣裙很漂亮。", tags: ["服装", "四会词"] },
            { word: "pants", phonetic: "/pænts/", meaning: "裤子", example: "These pants are blue.", exampleCn: "这条裤子是蓝色的。", tags: ["服装", "四会词"] },
            { word: "shorts", phonetic: "/ʃɔːrts/", meaning: "短裤", example: "I wear shorts in summer.", exampleCn: "我夏天穿短裤。", tags: ["服装", "三会词"] },
            { word: "shoes", phonetic: "/ʃuːz/", meaning: "鞋子", example: "My shoes are new.", exampleCn: "我的鞋子是新的。", tags: ["服装", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Clothes",
              content: [
                { en: "Put on your shirt.", cn: "穿上你的衬衫。" },
                { en: "Put on your pants.", cn: "穿上你的裤子。" },
                { en: "Put on your shoes.", cn: "穿上你的鞋子。" },
                { en: "Let's go!", cn: "我们走吧！" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 More Clothes",
          words: [
            { word: "socks", phonetic: "/sɒks/", meaning: "袜子", example: "I need clean socks.", exampleCn: "我需要干净的袜子。", tags: ["服装", "四会词"] },
            { word: "coat", phonetic: "/kəʊt/", meaning: "外套", example: "Wear your coat.", exampleCn: "穿上你的外套。", tags: ["服装", "四会词"] },
            { word: "jacket", phonetic: "/ˈdʒækɪt/", meaning: "夹克", example: "This jacket is warm.", exampleCn: "这件夹克很暖和。", tags: ["服装", "三会词"] },
            { word: "sweater", phonetic: "/ˈswetər/", meaning: "毛衣", example: "I like this sweater.", exampleCn: "我喜欢这件毛衣。", tags: ["服装", "三会词"] },
            { word: "hat", phonetic: "/hæt/", meaning: "帽子", example: "Put on your hat.", exampleCn: "戴上你的帽子。", tags: ["服装", "三会词"] },
            { word: "cap", phonetic: "/kæp/", meaning: "鸭舌帽", example: "He wears a cap.", exampleCn: "他戴着鸭舌帽。", tags: ["服装", "三会词"] },
            { word: "scarf", phonetic: "/skɑːrf/", meaning: "围巾", example: "The scarf is red.", exampleCn: "这条围巾是红色的。", tags: ["服装", "三会词"] },
            { word: "gloves", phonetic: "/ɡlʌvz/", meaning: "手套", example: "Wear your gloves.", exampleCn: "戴上你的手套。", tags: ["服装", "三会词"] },
            { word: "umbrella", phonetic: "/ʌmˈbrelə/", meaning: "雨伞", example: "Take an umbrella.", exampleCn: "带把雨伞。", tags: ["物品", "三会词"] },
            { word: "sunglasses", phonetic: "/ˈsʌnɡlɑːsɪz/", meaning: "太阳镜", example: "I wear sunglasses.", exampleCn: "我戴太阳镜。", tags: ["服装", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "My Clothes",
              content: [
                { en: "This is my coat.", cn: "这是我的外套。" },
                { en: "These are my gloves.", cn: "这是我的手套。" },
                { en: "This is my scarf.", cn: "这是我的围巾。" },
                { en: "I like my clothes.", cn: "我喜欢我的衣服。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Actions",
          words: [
            { word: "put on", phonetic: "/pʊt ɒn/", meaning: "穿上", example: "Put on your jacket.", exampleCn: "穿上你的夹克。", tags: ["动词", "四会词"] },
            { word: "take off", phonetic: "/teɪk ɒf/", meaning: "脱下", example: "Take off your shoes.", exampleCn: "脱下你的鞋子。", tags: ["动词", "四会词"] },
            { word: "wear", phonetic: "/weər/", meaning: "穿着", example: "She wears a red dress.", exampleCn: "她穿着一条红色连衣裙。", tags: ["动词", "四会词"] },
            { word: "open", phonetic: "/ˈəʊpən/", meaning: "打开", example: "Open the door.", exampleCn: "打开门。", tags: ["动词", "四会词"] },
            { word: "close", phonetic: "/kləʊz/", meaning: "关闭", example: "Close the window.", exampleCn: "关窗户。", tags: ["动词", "四会词"] },
            { word: "clean", phonetic: "/kliːn/", meaning: "打扫", example: "Clean the classroom.", exampleCn: "打扫教室。", tags: ["动词", "四会词"] },
            { word: "wash", phonetic: "/wɒʃ/", meaning: "洗", example: "Wash your hands.", exampleCn: "洗手。", tags: ["动词", "四会词"] },
            { word: "help", phonetic: "/help/", meaning: "帮助", example: "Can I help you?", exampleCn: "我能帮你吗？", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Get Ready",
              content: [
                { en: "Put on your coat.", cn: "穿上你的外套。" },
                { en: "Put on your gloves.", cn: "戴上你的手套。" },
                { en: "Let's go outside.", cn: "我们去外面。" },
                { en: "It's cold!", cn: "外面很冷！" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Directions",
          words: [
            { word: "left", phonetic: "/left/", meaning: "左边", example: "Turn left.", exampleCn: "向左转。", tags: ["方位", "四会词"] },
            { word: "right", phonetic: "/raɪt/", meaning: "右边", example: "Turn right.", exampleCn: "向右转。", tags: ["方位", "四会词"] },
            { word: "straight", phonetic: "/streɪt/", meaning: "直的", example: "Go straight.", exampleCn: "直走。", tags: ["方位", "三会词"] },
            { word: "turn", phonetic: "/tɜːrn/", meaning: "转弯", example: "Turn at the corner.", exampleCn: "在拐角处转弯。", tags: ["动词", "四会词"] },
            { word: "stop", phonetic: "/stɒp/", meaning: "停止", example: "Stop at the red light.", exampleCn: "红灯停。", tags: ["动词", "四会词"] },
            { word: "go", phonetic: "/ɡəʊ/", meaning: "走", example: "Go at the green light.", exampleCn: "绿灯行。", tags: ["动词", "四会词"] },
            { word: "wait", phonetic: "/weɪt/", meaning: "等待", example: "Wait at the yellow light.", exampleCn: "黄灯等。", tags: ["动词", "四会词"] },
            { word: "cross", phonetic: "/krɒs/", meaning: "穿过", example: "Cross the street.", exampleCn: "过马路。", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Directions",
              content: [
                { en: "Go straight.", cn: "直走。" },
                { en: "Turn left.", cn: "向左转。" },
                { en: "Turn right.", cn: "向右转。" },
                { en: "You're there!", cn: "你到了！" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 五年级 ====================
    5: {
      semester: "上册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 Occupations",
          words: [
            { word: "teacher", phonetic: "/ˈtiːtʃər/", meaning: "老师", example: "My teacher is kind.", exampleCn: "我的老师很和蔼。", tags: ["人物", "四会词"] },
            { word: "doctor", phonetic: "/ˈdɒktər/", meaning: "医生", example: "He is a doctor.", exampleCn: "他是一名医生。", tags: ["职业", "四会词"] },
            { word: "nurse", phonetic: "/nɜːrs/", meaning: "护士", example: "She is a nurse.", exampleCn: "她是一名护士。", tags: ["职业", "四会词"] },
            { word: "driver", phonetic: "/ˈdraɪvər/", meaning: "司机", example: "He is a driver.", exampleCn: "他是一名司机。", tags: ["职业", "四会词"] },
            { word: "farmer", phonetic: "/ˈfɑːrmər/", meaning: "农民", example: "He is a farmer.", exampleCn: "他是一名农民。", tags: ["职业", "四会词"] },
            { word: "cook", phonetic: "/kʊk/", meaning: "厨师", example: "She is a cook.", exampleCn: "她是一名厨师。", tags: ["职业", "四会词"] },
            { word: "policeman", phonetic: "/pəˈliːsmən/", meaning: "警察", example: "He is a policeman.", exampleCn: "他是一名警察。", tags: ["职业", "四会词"] },
            { word: "fireman", phonetic: "/ˈfaɪərmən/", meaning: "消防员", example: "He is a fireman.", exampleCn: "他是一名消防员。", tags: ["职业", "四会词"] },
            { word: "student", phonetic: "/ˈstjuːdnt/", meaning: "学生", example: "I am a student.", exampleCn: "我是一名学生。", tags: ["人物", "四会词"] },
            { word: "worker", phonetic: "/ˈwɜːrkər/", meaning: "工人", example: "He is a worker.", exampleCn: "他是一名工人。", tags: ["职业", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Jobs",
              content: [
                { en: "What's your father?", cn: "你父亲是做什么的？" },
                { en: "He's a doctor.", cn: "他是一名医生。" },
                { en: "What's your mother?", cn: "你母亲是做什么的？" },
                { en: "She's a teacher.", cn: "她是一名老师。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 Family",
          words: [
            { word: "family", phonetic: "/ˈfæməli/", meaning: "家庭", example: "I love my family.", exampleCn: "我爱我的家人。", tags: ["人物", "四会词"] },
            { word: "father", phonetic: "/ˈfɑːðər/", meaning: "父亲", example: "My father is tall.", exampleCn: "我的父亲很高。", tags: ["家人", "四会词"] },
            { word: "mother", phonetic: "/ˈmʌðər/", meaning: "母亲", example: "My mother is kind.", exampleCn: "我的母亲很和蔼。", tags: ["家人", "四会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "哥哥/弟弟", example: "He is my brother.", exampleCn: "他是我的哥哥。", tags: ["家人", "四会词"] },
            { word: "sister", phonetic: "/ˈsɪstər/", meaning: "姐姐/妹妹", example: "She is my sister.", exampleCn: "她是我的姐姐。", tags: ["家人", "四会词"] },
            { word: "grandpa", phonetic: "/ˈɡrænpɑː/", meaning: "爷爷/外公", example: "My grandpa is old.", exampleCn: "我的爷爷老了。", tags: ["家人", "四会词"] },
            { word: "grandma", phonetic: "/ˈɡrænmɑː/", meaning: "奶奶/外婆", example: "My grandma is kind.", exampleCn: "我的奶奶很和蔼。", tags: ["家人", "四会词"] },
            { word: "uncle", phonetic: "/ˈʌŋkl/", meaning: "叔叔/舅舅", example: "My uncle is tall.", exampleCn: "我的叔叔很高。", tags: ["家人", "三会词"] },
            { word: "aunt", phonetic: "/ɑːnt/", meaning: "阿姨/姑姑", example: "My aunt is pretty.", exampleCn: "我的阿姨很漂亮。", tags: ["家人", "三会词"] },
            { word: "cousin", phonetic: "/ˈkʌzn/", meaning: "堂/表兄弟姐妹", example: "My cousin is my age.", exampleCn: "我的堂兄和我同岁。", tags: ["家人", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "My Family",
              content: [
                { en: "This is my family.", cn: "这是我的家庭。" },
                { en: "There are 4 people.", cn: "有四口人。" },
                { en: "My father, my mother, my sister and me.", cn: "我的父亲、母亲、姐姐和我。" },
                { en: "I love my family.", cn: "我爱我的家人。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Positions",
          words: [
            { word: "in", phonetic: "/ɪn/", meaning: "在...里面", example: "In the box.", exampleCn: "在盒子里面。", tags: ["方位", "四会词"] },
            { word: "on", phonetic: "/ɒn/", meaning: "在...上面", example: "On the table.", exampleCn: "在桌子上面。", tags: ["方位", "四会词"] },
            { word: "under", phonetic: "/ˈʌndər/", meaning: "在...下面", example: "Under the bed.", exampleCn: "在床下面。", tags: ["方位", "四会词"] },
            { word: "behind", phonetic: "/bɪˈhaɪnd/", meaning: "后面", example: "Behind the door.", exampleCn: "在门后面。", tags: ["方位", "三会词"] },
            { word: "beside", phonetic: "/bɪˈsaɪd/", meaning: "旁边", example: "Beside the window.", exampleCn: "在窗户旁边。", tags: ["方位", "三会词"] },
            { word: "between", phonetic: "/bɪˈtwiːn/", meaning: "中间", example: "Between the two books.", exampleCn: "在两本书中间。", tags: ["方位", "三会词"] },
            { word: "above", phonetic: "/əˈbʌv/", meaning: "上面", example: "Above the desk.", exampleCn: "在书桌上面。", tags: ["方位", "三会词"] },
            { word: "below", phonetic: "/bɪˈləʊ/", meaning: "下面", example: "Below the chair.", exampleCn: "在椅子下面。", tags: ["方位", "三会词"] },
            { word: "near", phonetic: "/nɪər/", meaning: "靠近", example: "Near the window.", exampleCn: "靠近窗户。", tags: ["方位", "四会词"] },
            { word: "next to", phonetic: "/nekst tuː/", meaning: "紧邻", example: "Next to the school.", exampleCn: "紧邻学校。", tags: ["方位", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Where is it?",
              content: [
                { en: "Where is the cat?", cn: "猫在哪里？" },
                { en: "It's on the bed.", cn: "它在床上。" },
                { en: "Where is the dog?", cn: "狗在哪里？" },
                { en: "It's under the table.", cn: "它在桌子下面。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 Daily Routine",
          words: [
            { word: "get up", phonetic: "/ɡet ʌp/", meaning: "起床", example: "I get up at 7.", exampleCn: "我 7 点起床。", tags: ["日常", "四会词"] },
            { word: "go to school", phonetic: "/ɡəʊ tuː skuːl/", meaning: "去上学", example: "I go to school at 8.", exampleCn: "我 8 点去上学。", tags: ["日常", "四会词"] },
            { word: "go home", phonetic: "/ɡəʊ həʊm/", meaning: "回家", example: "I go home at 4.", exampleCn: "我 4 点回家。", tags: ["日常", "四会词"] },
            { word: "go to bed", phonetic: "/ɡəʊ tuː bed/", meaning: "睡觉", example: "I go to bed at 9.", exampleCn: "我 9 点睡觉。", tags: ["日常", "四会词"] },
            { word: "have breakfast", phonetic: "/hæv ˈbrekfəst/", meaning: "吃早餐", example: "I have breakfast at 7.", exampleCn: "我 7 点吃早餐。", tags: ["日常", "三会词"] },
            { word: "have lunch", phonetic: "/hæv lʌntʃ/", meaning: "吃午餐", example: "I have lunch at 12.", exampleCn: "我 12 点吃午餐。", tags: ["日常", "三会词"] },
            { word: "have dinner", phonetic: "/hæv ˈdɪnər/", meaning: "吃晚餐", example: "I have dinner at 6.", exampleCn: "我 6 点吃晚餐。", tags: ["日常", "三会词"] },
            { word: "do homework", phonetic: "/duː ˈhəʊmwɜːrk/", meaning: "做作业", example: "I do homework at 5.", exampleCn: "我 5 点做作业。", tags: ["日常", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
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
        {
          unitId: "U5",
          unitName: "Unit 5 Hobbies",
          words: [
            { word: "hobby", phonetic: "/ˈhɒbi/", meaning: "爱好", example: "What's your hobby?", exampleCn: "你的爱好是什么？", tags: ["名词", "四会词"] },
            { word: "reading", phonetic: "/ˈriːdɪŋ/", meaning: "阅读", example: "I like reading.", exampleCn: "我喜欢阅读。", tags: ["爱好", "四会词"] },
            { word: "drawing", phonetic: "/ˈdrɔːɪŋ/", meaning: "画画", example: "I like drawing.", exampleCn: "我喜欢画画。", tags: ["爱好", "四会词"] },
            { word: "singing", phonetic: "/ˈsɪŋɪŋ/", meaning: "唱歌", example: "I like singing.", exampleCn: "我喜欢唱歌。", tags: ["爱好", "四会词"] },
            { word: "dancing", phonetic: "/ˈdɑːnsɪŋ/", meaning: "跳舞", example: "I like dancing.", exampleCn: "我喜欢跳舞。", tags: ["爱好", "四会词"] },
            { word: "swimming", phonetic: "/ˈswɪmɪŋ/", meaning: "游泳", example: "I like swimming.", exampleCn: "我喜欢游泳。", tags: ["爱好", "四会词"] },
            { word: "running", phonetic: "/ˈrʌnɪŋ/", meaning: "跑步", example: "I like running.", exampleCn: "我喜欢跑步。", tags: ["爱好", "四会词"] },
            { word: "playing", phonetic: "/ˈpleɪɪŋ/", meaning: "玩", example: "I like playing football.", exampleCn: "我喜欢踢足球。", tags: ["爱好", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "My Hobby",
              content: [
                { en: "What's your hobby?", cn: "你的爱好是什么？" },
                { en: "I like reading.", cn: "我喜欢阅读。" },
                { en: "I like drawing too.", cn: "我也喜欢画画。" },
                { en: "That's great!", cn: "太棒了！" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 More Hobbies",
          words: [
            { word: "collect", phonetic: "/kəˈlekt/", meaning: "收集", example: "I collect stamps.", exampleCn: "我收集邮票。", tags: ["动词", "四会词"] },
            { word: "stamp", phonetic: "/stæmp/", meaning: "邮票", example: "I have many stamps.", exampleCn: "我有很多邮票。", tags: ["名词", "三会词"] },
            { word: "coin", phonetic: "/kɔɪn/", meaning: "硬币", example: "I collect coins.", exampleCn: "我收集硬币。", tags: ["名词", "三会词"] },
            { word: "photo", phonetic: "/ˈfəʊtəʊ/", meaning: "照片", example: "I like taking photos.", exampleCn: "我喜欢拍照。", tags: ["名词", "三会词"] },
            { word: "music", phonetic: "/ˈmjuːzɪk/", meaning: "音乐", example: "I like music.", exampleCn: "我喜欢音乐。", tags: ["爱好", "四会词"] },
            { word: "sport", phonetic: "/spɔːrt/", meaning: "运动", example: "I like sports.", exampleCn: "我喜欢运动。", tags: ["爱好", "四会词"] },
            { word: "football", phonetic: "/ˈfʊtbɔːl/", meaning: "足球", example: "I like playing football.", exampleCn: "我喜欢踢足球。", tags: ["运动", "四会词"] },
            { word: "basketball", phonetic: "/ˈbæskɪtbɔːl/", meaning: "篮球", example: "I like playing basketball.", exampleCn: "我喜欢打篮球。", tags: ["运动", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Hobbies",
              content: [
                { en: "What do you like?", cn: "你喜欢什么？" },
                { en: "I like collecting stamps.", cn: "我喜欢收集邮票。" },
                { en: "I like playing football.", cn: "我喜欢踢足球。" },
                { en: "Hobbies are fun!", cn: "爱好很有趣！" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 六年级 ====================
    6: {
      semester: "上册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 Past Tense",
          words: [
            { word: "yesterday", phonetic: "/ˈjestərdeɪ/", meaning: "昨天", example: "Yesterday was Sunday.", exampleCn: "昨天是星期天。", tags: ["时间", "四会词"] },
            { word: "last", phonetic: "/lɑːst/", meaning: "上一个", example: "Last week I went to the park.", exampleCn: "上周我去了公园。", tags: ["时间", "三会词"] },
            { word: "ago", phonetic: "/əˈɡəʊ/", meaning: "以前", example: "Two days ago.", exampleCn: "两天前。", tags: ["时间", "三会词"] },
            { word: "went", phonetic: "/went/", meaning: "去（过去式）", example: "I went to school.", exampleCn: "我去了学校。", tags: ["动词", "四会词"] },
            { word: "saw", phonetic: "/sɔː/", meaning: "看见（过去式）", example: "I saw a dog.", exampleCn: "我看见了一只狗。", tags: ["动词", "三会词"] },
            { word: "ate", phonetic: "/eɪt/", meaning: "吃（过去式）", example: "I ate an apple.", exampleCn: "我吃了一个苹果。", tags: ["动词", "三会词"] },
            { word: "had", phonetic: "/hæd/", meaning: "有（过去式）", example: "I had a good time.", exampleCn: "我玩得很开心。", tags: ["动词", "四会词"] },
            { word: "was", phonetic: "/wɒz/", meaning: "是（过去式）", example: "It was fun.", exampleCn: "这很有趣。", tags: ["动词", "四会词"] },
            { word: "were", phonetic: "/wɜːr/", meaning: "是（过去式复数）", example: "They were happy.", exampleCn: "他们很开心。", tags: ["动词", "三会词"] },
            { word: "did", phonetic: "/dɪd/", meaning: "做（过去式）", example: "I did my homework.", exampleCn: "我做了作业。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
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
          unitId: "U2",
          unitName: "Unit 2 More Past Tense",
          words: [
            { word: "came", phonetic: "/keɪm/", meaning: "来（过去式）", example: "He came yesterday.", exampleCn: "他昨天来了。", tags: ["动词", "三会词"] },
            { word: "made", phonetic: "/meɪd/", meaning: "制作（过去式）", example: "I made a cake.", exampleCn: "我做了一个蛋糕。", tags: ["动词", "三会词"] },
            { word: "took", phonetic: "/tʊk/", meaning: "拿（过去式）", example: "I took a photo.", exampleCn: "我拍了一张照片。", tags: ["动词", "三会词"] },
            { word: "bought", phonetic: "/bɔːt/", meaning: "买（过去式）", example: "I bought a book.", exampleCn: "我买了一本书。", tags: ["动词", "三会词"] },
            { word: "played", phonetic: "/pleɪd/", meaning: "玩（过去式）", example: "I played football.", exampleCn: "我踢了足球。", tags: ["动词", "四会词"] },
            { word: "watched", phonetic: "/wɒtʃt/", meaning: "看（过去式）", example: "I watched TV.", exampleCn: "我看了电视。", tags: ["动词", "四会词"] },
            { word: "cooked", phonetic: "/kʊkt/", meaning: "做饭（过去式）", example: "I cooked dinner.", exampleCn: "我做了晚餐。", tags: ["动词", "三会词"] },
            { word: "cleaned", phonetic: "/kliːnd/", meaning: "打扫（过去式）", example: "I cleaned my room.", exampleCn: "我打扫了房间。", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
              title: "Last Weekend",
              content: [
                { en: "What did you do last weekend?", cn: "你上周末做了什么？" },
                { en: "I played football.", cn: "我踢了足球。" },
                { en: "I watched TV.", cn: "我看了电视。" },
                { en: "I had a good time!", cn: "我玩得很开心！" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Future Plans",
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
              lesson: "Part A",
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
          unitId: "U4",
          unitName: "Unit 4 Comparisons",
          words: [
            { word: "than", phonetic: "/ðæn/", meaning: "比", example: "I'm taller than you.", exampleCn: "我比你高。", tags: ["介词", "四会词"] },
            { word: "older", phonetic: "/ˈəʊldər/", meaning: "更老的", example: "My grandpa is older.", exampleCn: "我的爷爷更老。", tags: ["形容词", "四会词"] },
            { word: "younger", phonetic: "/ˈjʌŋɡər/", meaning: "更年轻的", example: "My sister is younger.", exampleCn: "我的姐姐更年轻。", tags: ["形容词", "四会词"] },
            { word: "taller", phonetic: "/ˈtɔːlər/", meaning: "更高的", example: "He is taller than me.", exampleCn: "他比我高。", tags: ["形容词", "四会词"] },
            { word: "shorter", phonetic: "/ˈʃɔːrtər/", meaning: "更矮的", example: "She is shorter than me.", exampleCn: "她比我矮。", tags: ["形容词", "四会词"] },
            { word: "longer", phonetic: "/ˈlɒŋɡər/", meaning: "更长的", example: "The snake is longer.", exampleCn: "蛇更长。", tags: ["形容词", "四会词"] },
            { word: "stronger", phonetic: "/ˈstrɒŋɡər/", meaning: "更强壮的", example: "The elephant is stronger.", exampleCn: "大象更强壮。", tags: ["形容词", "三会词"] },
            { word: "better", phonetic: "/ˈbetər/", meaning: "更好的", example: "This one is better.", exampleCn: "这个更好。", tags: ["形容词", "四会词"] },
            { word: "bigger", phonetic: "/ˈbɪɡər/", meaning: "更大的", example: "The elephant is bigger.", exampleCn: "大象更大。", tags: ["形容词", "四会词"] },
            { word: "smaller", phonetic: "/ˈsmɔːlər/", meaning: "更小的", example: "The mouse is smaller.", exampleCn: "老鼠更小。", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A",
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
          unitId: "U5",
          unitName: "Unit 5 Review and Graduation",
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
              lesson: "Part A",
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