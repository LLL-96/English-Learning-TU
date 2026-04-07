// 人教版 (PEP) 英语教材数据 - 三年级起点（完整版）
// 依据最新教材编写，包含 3-6 年级上下册所有单元的单词和课文
const pepData = {
  versionId: "pep",
  versionName: "人教版 PEP",
  description: "人民教育出版社 | 三年级起点 | 全国使用最广 | 含上下册",
  startGrade: 3,
  lastUpdated: "2026-04",
  grades: {
    // ==================== 三年级上册 ====================
    3: {
      semester: "上册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 Hello!",
          words: [
            { word: "ruler", phonetic: "/ˈruːlər/", meaning: "尺子", example: "I have a ruler.", exampleCn: "我有一把尺子。", tags: ["文具", "四会词"] },
            { word: "pencil", phonetic: "/ˈpensl/", meaning: "铅笔", example: "This is my pencil.", exampleCn: "这是我的铅笔。", tags: ["文具", "四会词"] },
            { word: "eraser", phonetic: "/ɪˈreɪsər/", meaning: "橡皮", example: "Can I use your eraser?", exampleCn: "我能用你的橡皮吗？", tags: ["文具", "四会词"] },
            { word: "crayon", phonetic: "/ˈkreɪən/", meaning: "蜡笔", example: "I have a red crayon.", exampleCn: "我有一支红色蜡笔。", tags: ["文具", "四会词"] },
            { word: "bag", phonetic: "/bæɡ/", meaning: "书包", example: "My bag is blue.", exampleCn: "我的书包是蓝色的。", tags: ["文具", "四会词"] },
            { word: "pen", phonetic: "/pen/", meaning: "钢笔", example: "This is my pen.", exampleCn: "这是我的钢笔。", tags: ["文具", "四会词"] },
            { word: "pencil box", phonetic: "/ˈpensl bɒks/", meaning: "铅笔盒", example: "Open your pencil box.", exampleCn: "打开你的铅笔盒。", tags: ["文具", "三会词"] },
            { word: "book", phonetic: "/bʊk/", meaning: "书", example: "I have a book.", exampleCn: "我有一本书。", tags: ["文具", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "见面打招呼",
              content: [
                { en: "Hello, I'm Wu Yifan.", cn: "你好，我是吴一凡。" },
                { en: "Hi, I'm Sarah.", cn: "嗨，我是萨拉。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "询问名字",
              content: [
                { en: "What's your name?", cn: "你叫什么名字？" },
                { en: "My name's John.", cn: "我的名字叫约翰。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 Colours",
          words: [
            { word: "red", phonetic: "/red/", meaning: "红色", example: "I like red.", exampleCn: "我喜欢红色。", tags: ["颜色", "四会词"] },
            { word: "yellow", phonetic: "/ˈjeləʊ/", meaning: "黄色", example: "The sun is yellow.", exampleCn: "太阳是黄色的。", tags: ["颜色", "四会词"] },
            { word: "green", phonetic: "/ɡriːn/", meaning: "绿色", example: "The grass is green.", exampleCn: "草是绿色的。", tags: ["颜色", "四会词"] },
            { word: "blue", phonetic: "/bluː/", meaning: "蓝色", example: "The sky is blue.", exampleCn: "天空是蓝色的。", tags: ["颜色", "四会词"] },
            { word: "black", phonetic: "/blæk/", meaning: "黑色", example: "The cat is black.", exampleCn: "猫是黑色的。", tags: ["颜色", "四会词"] },
            { word: "white", phonetic: "/waɪt/", meaning: "白色", example: "The snow is white.", exampleCn: "雪是白色的。", tags: ["颜色", "四会词"] },
            { word: "orange", phonetic: "/ˈɒrɪndʒ/", meaning: "橙色", example: "The orange is orange.", exampleCn: "橙子是橙色的。", tags: ["颜色", "三会词"] },
            { word: "brown", phonetic: "/braʊn/", meaning: "棕色", example: "The bear is brown.", exampleCn: "熊是棕色的。", tags: ["颜色", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "介绍朋友",
              content: [
                { en: "Mr Jones, this is Miss Green.", cn: "琼斯老师，这位是格林小姐。" },
                { en: "Good morning, Miss Green.", cn: "早上好，格林小姐。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "画画",
              content: [
                { en: "Good afternoon, Mike.", cn: "下午好，迈克。" },
                { en: "Good afternoon!", cn: "下午好！" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Look at me!",
          words: [
            { word: "face", phonetic: "/feɪs/", meaning: "脸", example: "This is my face.", exampleCn: "这是我的脸。", tags: ["身体", "四会词"] },
            { word: "ear", phonetic: "/ɪər/", meaning: "耳朵", example: "I have two ears.", exampleCn: "我有两只耳朵。", tags: ["身体", "四会词"] },
            { word: "eye", phonetic: "/aɪ/", meaning: "眼睛", example: "I have two eyes.", exampleCn: "我有两只眼睛。", tags: ["身体", "四会词"] },
            { word: "nose", phonetic: "/nəʊz/", meaning: "鼻子", example: "This is my nose.", exampleCn: "这是我的鼻子。", tags: ["身体", "四会词"] },
            { word: "mouth", phonetic: "/maʊθ/", meaning: "嘴巴", example: "Open your mouth.", exampleCn: "张开你的嘴巴。", tags: ["身体", "四会词"] },
            { word: "body", phonetic: "/ˈbɒdi/", meaning: "身体", example: "This is my body.", exampleCn: "这是我的身体。", tags: ["身体", "三会词"] },
            { word: "arm", phonetic: "/ɑːrm/", meaning: "胳膊", example: "I have two arms.", exampleCn: "我有两只胳膊。", tags: ["身体", "三会词"] },
            { word: "hand", phonetic: "/hænd/", meaning: "手", example: "Wave your hands.", exampleCn: "挥挥你的手。", tags: ["身体", "三会词"] },
            { word: "head", phonetic: "/hed/", meaning: "头", example: "Touch your head.", exampleCn: "摸摸你的头。", tags: ["身体", "四会词"] },
            { word: "leg", phonetic: "/leɡ/", meaning: "腿", example: "I have two legs.", exampleCn: "我有两条腿。", tags: ["身体", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "早上打招呼",
              content: [
                { en: "Good morning!", cn: "早上好！" },
                { en: "Good morning!", cn: "早上好！" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "看我的身体",
              content: [
                { en: "Look at me!", cn: "看我！" },
                { en: "This is my face.", cn: "这是我的脸。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 We love animals",
          words: [
            { word: "duck", phonetic: "/dʌk/", meaning: "鸭子", example: "The duck says quack.", exampleCn: "鸭子嘎嘎叫。", tags: ["动物", "四会词"] },
            { word: "pig", phonetic: "/pɪɡ/", meaning: "猪", example: "The pig is fat.", exampleCn: "猪很胖。", tags: ["动物", "四会词"] },
            { word: "cat", phonetic: "/kæt/", meaning: "猫", example: "The cat is cute.", exampleCn: "猫很可爱。", tags: ["动物", "四会词"] },
            { word: "bear", phonetic: "/beər/", meaning: "熊", example: "The bear is big.", exampleCn: "熊很大。", tags: ["动物", "四会词"] },
            { word: "dog", phonetic: "/dɒɡ/", meaning: "狗", example: "I have a dog.", exampleCn: "我有一只狗。", tags: ["动物", "四会词"] },
            { word: "elephant", phonetic: "/ˈelɪfənt/", meaning: "大象", example: "The elephant is big.", exampleCn: "大象很大。", tags: ["动物", "四会词"] },
            { word: "monkey", phonetic: "/ˈmʌŋki/", meaning: "猴子", example: "The monkey is funny.", exampleCn: "猴子很有趣。", tags: ["动物", "四会词"] },
            { word: "bird", phonetic: "/bɜːrd/", meaning: "鸟", example: "The bird can fly.", exampleCn: "鸟会飞。", tags: ["动物", "四会词"] },
            { word: "tiger", phonetic: "/ˈtaɪɡər/", meaning: "老虎", example: "The tiger is strong.", exampleCn: "老虎很强壮。", tags: ["动物", "三会词"] },
            { word: "panda", phonetic: "/ˈpændə/", meaning: "熊猫", example: "The panda is black and white.", exampleCn: "熊猫是黑白相间的。", tags: ["动物", "四会词"] },
            { word: "zoo", phonetic: "/zuː/", meaning: "动物园", example: "Let's go to the zoo!", exampleCn: "我们去动物园吧！", tags: ["地点", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "这是什么",
              content: [
                { en: "What's this?", cn: "这是什么？" },
                { en: "It's a duck.", cn: "它是只鸭子。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "有趣的动物",
              content: [
                { en: "Look at the cat!", cn: "看那只猫！" },
                { en: "It's fat!", cn: "它很胖！" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Let's eat!",
          words: [
            { word: "cake", phonetic: "/keɪk/", meaning: "蛋糕", example: "I like cake.", exampleCn: "我喜欢蛋糕。", tags: ["食物", "四会词"] },
            { word: "bread", phonetic: "/bred/", meaning: "面包", example: "Have some bread.", exampleCn: "吃点面包。", tags: ["食物", "四会词"] },
            { word: "juice", phonetic: "/dʒuːs/", meaning: "果汁", example: "I'd like some juice.", exampleCn: "我想喝果汁。", tags: ["饮料", "四会词"] },
            { word: "egg", phonetic: "/eɡ/", meaning: "鸡蛋", example: "Have an egg.", exampleCn: "吃个鸡蛋。", tags: ["食物", "四会词"] },
            { word: "milk", phonetic: "/mɪlk/", meaning: "牛奶", example: "Drink some milk.", exampleCn: "喝点牛奶。", tags: ["饮料", "四会词"] },
            { word: "water", phonetic: "/ˈwɔːtər/", meaning: "水", example: "I'd like some water.", exampleCn: "我想喝水。", tags: ["饮料", "四会词"] },
            { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼", example: "Have some fish.", exampleCn: "吃点鱼。", tags: ["食物", "四会词"] },
            { word: "rice", phonetic: "/raɪs/", meaning: "米饭", example: "I'd like some rice.", exampleCn: "我想吃米饭。", tags: ["食物", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "我饿了",
              content: [
                { en: "I'd like some bread, please.", cn: "请给我一些面包。" },
                { en: "Here you are.", cn: "给你。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "喝点什么",
              content: [
                { en: "Can I have some water?", cn: "我能喝点水吗？" },
                { en: "Sure. Here you are.", cn: "当然，给你。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Happy birthday!",
          words: [
            { word: "one", phonetic: "/wʌn/", meaning: "一", example: "I have one book.", exampleCn: "我有一本书。", tags: ["数字", "四会词"] },
            { word: "two", phonetic: "/tuː/", meaning: "二", example: "I have two pens.", exampleCn: "我有两支笔。", tags: ["数字", "四会词"] },
            { word: "three", phonetic: "/θriː/", meaning: "三", example: "I have three rulers.", exampleCn: "我有三把尺子。", tags: ["数字", "四会词"] },
            { word: "four", phonetic: "/fɔːr/", meaning: "四", example: "I see four birds.", exampleCn: "我看见四只鸟。", tags: ["数字", "四会词"] },
            { word: "five", phonetic: "/faɪv/", meaning: "五", example: "I have five fingers.", exampleCn: "我有五根手指。", tags: ["数字", "四会词"] },
            { word: "six", phonetic: "/sɪks/", meaning: "六", example: "I'm six years old.", exampleCn: "我六岁了。", tags: ["数字", "四会词"] },
            { word: "seven", phonetic: "/ˈsevn/", meaning: "七", example: "I see seven eggs.", exampleCn: "我看见七个鸡蛋。", tags: ["数字", "四会词"] },
            { word: "eight", phonetic: "/eɪt/", meaning: "八", example: "I'm eight years old.", exampleCn: "我八岁了。", tags: ["数字", "四会词"] },
            { word: "nine", phonetic: "/naɪn/", meaning: "九", example: "I have nine crayons.", exampleCn: "我有九支蜡笔。", tags: ["数字", "四会词"] },
            { word: "ten", phonetic: "/ten/", meaning: "十", example: "I have ten fingers.", exampleCn: "我有十根手指。", tags: ["数字", "四会词"] },
            { word: "birthday", phonetic: "/ˈbɜːrθdeɪ/", meaning: "生日", example: "Happy birthday!", exampleCn: "生日快乐！", tags: ["庆祝", "四会词"] },
            { word: "plate", phonetic: "/pleɪt/", meaning: "盘子", example: "This is a plate.", exampleCn: "这是一个盘子。", tags: ["餐具", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "生日快乐",
              content: [
                { en: "Happy birthday!", cn: "生日快乐！" },
                { en: "Thank you.", cn: "谢谢。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "你几岁了",
              content: [
                { en: "How old are you?", cn: "你几岁了？" },
                { en: "I'm six years old.", cn: "我六岁了。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 三年级下册 ====================
    '3-2': {
      semester: "下册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 Welcome back to school!",
          words: [
            { word: "UK", phonetic: "/ˌjuː ˈkeɪ/", meaning: "英国", example: "I'm from the UK.", exampleCn: "我来自英国。", tags: ["国家", "四会词"] },
            { word: "Canada", phonetic: "/ˈkænədə/", meaning: "加拿大", example: "I'm from Canada.", exampleCn: "我来自加拿大。", tags: ["国家", "四会词"] },
            { word: "USA", phonetic: "/ˌjuː es ˈeɪ/", meaning: "美国", example: "I'm from the USA.", exampleCn: "我来自美国。", tags: ["国家", "四会词"] },
            { word: "China", phonetic: "/ˈtʃaɪnə/", meaning: "中国", example: "I'm from China.", exampleCn: "我来自中国。", tags: ["国家", "四会词"] },
            { word: "she", phonetic: "/ʃiː/", meaning: "她", example: "She is a teacher.", exampleCn: "她是一名老师。", tags: ["代词", "四会词"] },
            { word: "student", phonetic: "/ˈstjuːdnt/", meaning: "学生", example: "I am a student.", exampleCn: "我是一名学生。", tags: ["人物", "四会词"] },
            { word: "pupil", phonetic: "/ˈpjuːpl/", meaning: "小学生", example: "I am a pupil.", exampleCn: "我是一名小学生。", tags: ["人物", "三会词"] },
            { word: "he", phonetic: "/hiː/", meaning: "他", example: "He is my friend.", exampleCn: "他是我的朋友。", tags: ["代词", "四会词"] },
            { word: "teacher", phonetic: "/ˈtiːtʃər/", meaning: "老师", example: "She is a teacher.", exampleCn: "她是一名老师。", tags: ["职业", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "认识新朋友",
              content: [
                { en: "Hi, I'm Amy.", cn: "嗨，我是艾米。" },
                { en: "I'm from the UK.", cn: "我来自英国。" },
                { en: "Welcome!", cn: "欢迎！" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My family",
          words: [
            { word: "father", phonetic: "/ˈfɑːðər/", meaning: "父亲", example: "This is my father.", exampleCn: "这是我的父亲。", tags: ["家人", "四会词"] },
            { word: "dad", phonetic: "/dæd/", meaning: "爸爸", example: "My dad is tall.", exampleCn: "我的爸爸很高。", tags: ["家人", "四会词"] },
            { word: "mother", phonetic: "/ˈmʌðər/", meaning: "母亲", example: "This is my mother.", exampleCn: "这是我的母亲。", tags: ["家人", "四会词"] },
            { word: "mum", phonetic: "/mʌm/", meaning: "妈妈", example: "My mum is kind.", exampleCn: "我的妈妈很和蔼。", tags: ["家人", "四会词"] },
            { word: "man", phonetic: "/mæn/", meaning: "男人", example: "Who's that man?", exampleCn: "那个男人是谁？", tags: ["人物", "四会词"] },
            { word: "woman", phonetic: "/ˈwʊmən/", meaning: "女人", example: "Who's that woman?", exampleCn: "那个女人是谁？", tags: ["人物", "四会词"] },
            { word: "sister", phonetic: "/ˈsɪstər/", meaning: "姐妹", example: "She's my sister.", exampleCn: "她是我的姐妹。", tags: ["家人", "三会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "兄弟", example: "He's my brother.", exampleCn: "他是我的兄弟。", tags: ["家人", "三会词"] },
            { word: "grandmother", phonetic: "/ˈɡrænmʌðər/", meaning: "奶奶/外婆", example: "She's my grandmother.", exampleCn: "她是我的奶奶。", tags: ["家人", "三会词"] },
            { word: "grandpa", phonetic: "/ˈɡrænpɑː/", meaning: "爷爷/外公", example: "He's my grandpa.", exampleCn: "他是我的爷爷。", tags: ["家人", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "介绍家人",
              content: [
                { en: "Who's that man?", cn: "那个男人是谁？" },
                { en: "He's my father.", cn: "他是我的父亲。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 At the zoo",
          words: [
            { word: "thin", phonetic: "/θɪn/", meaning: "瘦的", example: "The monkey is thin.", exampleCn: "猴子很瘦。", tags: ["形容词", "四会词"] },
            { word: "fat", phonetic: "/fæt/", meaning: "胖的", example: "The pig is fat.", exampleCn: "猪很胖。", tags: ["形容词", "四会词"] },
            { word: "tall", phonetic: "/tɔːl/", meaning: "高的", example: "The giraffe is tall.", exampleCn: "长颈鹿很高。", tags: ["形容词", "四会词"] },
            { word: "short", phonetic: "/ʃɔːt/", meaning: "矮的", example: "The mouse is short.", exampleCn: "老鼠很矮。", tags: ["形容词", "四会词"] },
            { word: "long", phonetic: "/lɒŋ/", meaning: "长的", example: "The snake is long.", exampleCn: "蛇很长。", tags: ["形容词", "四会词"] },
            { word: "small", phonetic: "/smɔːl/", meaning: "小的", example: "The cat has small eyes.", exampleCn: "猫有小眼睛。", tags: ["形容词", "四会词"] },
            { word: "big", phonetic: "/bɪɡ/", meaning: "大的", example: "The elephant is big.", exampleCn: "大象很大。", tags: ["形容词", "四会词"] },
            { word: "giraffe", phonetic: "/dʒɪˈrɑːf/", meaning: "长颈鹿", example: "Look at the giraffe!", exampleCn: "看长颈鹿！", tags: ["动物", "四会词"] },
            { word: "children", phonetic: "/ˈtʃɪldrən/", meaning: "孩子们", example: "The children are happy.", exampleCn: "孩子们很开心。", tags: ["人物", "三会词"] },
            { word: "tail", phonetic: "/teɪl/", meaning: "尾巴", example: "The monkey has a long tail.", exampleCn: "猴子有长尾巴。", tags: ["身体", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "在动物园",
              content: [
                { en: "Look at the giraffe!", cn: "看长颈鹿！" },
                { en: "It's so tall!", cn: "它好高啊！" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 Where is my car?",
          words: [
            { word: "on", phonetic: "/ɒn/", meaning: "在...上", example: "It's on the desk.", exampleCn: "它在书桌上。", tags: ["方位", "四会词"] },
            { word: "in", phonetic: "/ɪn/", meaning: "在...里", example: "It's in the bag.", exampleCn: "它在书包里。", tags: ["方位", "四会词"] },
            { word: "under", phonetic: "/ˈʌndər/", meaning: "在...下", example: "It's under the chair.", exampleCn: "它在椅子下。", tags: ["方位", "四会词"] },
            { word: "chair", phonetic: "/tʃeər/", meaning: "椅子", example: "Sit on the chair.", exampleCn: "坐在椅子上。", tags: ["家具", "四会词"] },
            { word: "desk", phonetic: "/desk/", meaning: "书桌", example: "The book is on the desk.", exampleCn: "书在书桌上。", tags: ["家具", "四会词"] },
            { word: "cap", phonetic: "/kæp/", meaning: "帽子", example: "Where is my cap?", exampleCn: "我的帽子在哪里？", tags: ["服装", "三会词"] },
            { word: "ball", phonetic: "/bɔːl/", meaning: "球", example: "The ball is under the bed.", exampleCn: "球在床下。", tags: ["玩具", "三会词"] },
            { word: "car", phonetic: "/kɑːr/", meaning: "汽车", example: "Where is my car?", exampleCn: "我的玩具汽车在哪里？", tags: ["玩具", "三会词"] },
            { word: "boat", phonetic: "/bəʊt/", meaning: "小船", example: "I have a toy boat.", exampleCn: "我有一艘玩具船。", tags: ["玩具", "三会词"] },
            { word: "map", phonetic: "/mæp/", meaning: "地图", example: "Look at the map.", exampleCn: "看地图。", tags: ["物品", "三会词"] },
            { word: "toy", phonetic: "/tɔɪ/", meaning: "玩具", example: "I have many toys.", exampleCn: "我有很多玩具。", tags: ["物品", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "寻找物品",
              content: [
                { en: "Where is my car?", cn: "我的玩具汽车在哪里？" },
                { en: "It's under the desk.", cn: "它在书桌下。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Do you like pears?",
          words: [
            { word: "apple", phonetic: "/ˈæpl/", meaning: "苹果", example: "I like apples.", exampleCn: "我喜欢苹果。", tags: ["水果", "四会词"] },
            { word: "pear", phonetic: "/peər/", meaning: "梨", example: "Do you like pears?", exampleCn: "你喜欢梨吗？", tags: ["水果", "四会词"] },
            { word: "orange", phonetic: "/ˈɒrɪndʒ/", meaning: "橙子", example: "I like oranges.", exampleCn: "我喜欢橙子。", tags: ["水果", "四会词"] },
            { word: "banana", phonetic: "/bəˈnɑːnə/", meaning: "香蕉", example: "I like bananas.", exampleCn: "我喜欢香蕉。", tags: ["水果", "四会词"] },
            { word: "watermelon", phonetic: "/ˈwɔːtəmelən/", meaning: "西瓜", example: "The watermelon is big.", exampleCn: "西瓜很大。", tags: ["水果", "三会词"] },
            { word: "strawberry", phonetic: "/ˈstrɔːbəri/", meaning: "草莓", example: "I like strawberries.", exampleCn: "我喜欢草莓。", tags: ["水果", "三会词"] },
            { word: "grape", phonetic: "/ɡreɪp/", meaning: "葡萄", example: "I like grapes.", exampleCn: "我喜欢葡萄。", tags: ["水果", "三会词"] },
            { word: "buy", phonetic: "/baɪ/", meaning: "买", example: "Let's buy some fruit.", exampleCn: "我们买些水果吧。", tags: ["动词", "三会词"] },
            { word: "fruit", phonetic: "/fruːt/", meaning: "水果", example: "I like fruit.", exampleCn: "我喜欢水果。", tags: ["食物", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你喜欢什么水果",
              content: [
                { en: "Do you like pears?", cn: "你喜欢梨吗？" },
                { en: "Yes, I do.", cn: "是的，我喜欢。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 How many?",
          words: [
            { word: "eleven", phonetic: "/ɪˈlevn/", meaning: "十一", example: "I have eleven books.", exampleCn: "我有十一本书。", tags: ["数字", "四会词"] },
            { word: "twelve", phonetic: "/twelv/", meaning: "十二", example: "I have twelve pens.", exampleCn: "我有十二支笔。", tags: ["数字", "四会词"] },
            { word: "thirteen", phonetic: "/ˌθɜːrˈtiːn/", meaning: "十三", example: "I'm thirteen years old.", exampleCn: "我十三岁了。", tags: ["数字", "四会词"] },
            { word: "fourteen", phonetic: "/ˌfɔːrˈtiːn/", meaning: "十四", example: "I have fourteen crayons.", exampleCn: "我有十四支蜡笔。", tags: ["数字", "四会词"] },
            { word: "fifteen", phonetic: "/ˌfɪfˈtiːn/", meaning: "十五", example: "I have fifteen toys.", exampleCn: "我有十五个玩具。", tags: ["数字", "四会词"] },
            { word: "sixteen", phonetic: "/ˌsɪksˈtiːn/", meaning: "十六", example: "I have sixteen cards.", exampleCn: "我有十六张卡片。", tags: ["数字", "四会词"] },
            { word: "seventeen", phonetic: "/ˌsevnˈtiːn/", meaning: "十七", example: "I have seventeen photos.", exampleCn: "我有十七张照片。", tags: ["数字", "三会词"] },
            { word: "eighteen", phonetic: "/ˌeɪˈtiːn/", meaning: "十八", example: "I have eighteen stamps.", exampleCn: "我有十八张邮票。", tags: ["数字", "三会词"] },
            { word: "nineteen", phonetic: "/ˌnaɪnˈtiːn/", meaning: "十九", example: "I have nineteen balls.", exampleCn: "我有十九个球。", tags: ["数字", "三会词"] },
            { word: "twenty", phonetic: "/ˈtwenti/", meaning: "二十", example: "I have twenty friends.", exampleCn: "我有二十个朋友。", tags: ["数字", "四会词"] },
            { word: "kite", phonetic: "/kaɪt/", meaning: "风筝", example: "I have eleven kites.", exampleCn: "我有十一只风筝。", tags: ["玩具", "四会词"] },
            { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", meaning: "美丽的", example: "The kite is beautiful.", exampleCn: "风筝很漂亮。", tags: ["形容词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "数数",
              content: [
                { en: "How many kites do you have?", cn: "你有多少只风筝？" },
                { en: "I have eleven kites.", cn: "我有十一只风筝。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 四年级上册 ====================
    4: {
      semester: "上册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 My classroom",
          words: [
            { word: "classroom", phonetic: "/ˈklɑːsruːm/", meaning: "教室", example: "This is my classroom.", exampleCn: "这是我的教室。", tags: ["教室设施", "四会词"] },
            { word: "window", phonetic: "/ˈwɪndəʊ/", meaning: "窗户", example: "Open the window.", exampleCn: "打开窗户。", tags: ["教室设施", "四会词"] },
            { word: "blackboard", phonetic: "/ˈblækbɔːrd/", meaning: "黑板", example: "Look at the blackboard.", exampleCn: "看黑板。", tags: ["教室设施", "四会词"] },
            { word: "light", phonetic: "/laɪt/", meaning: "灯", example: "Turn on the light.", exampleCn: "开灯。", tags: ["教室设施", "四会词"] },
            { word: "picture", phonetic: "/ˈpɪktʃər/", meaning: "图画", example: "There is a picture on the wall.", exampleCn: "墙上有一幅画。", tags: ["教室设施", "四会词"] },
            { word: "door", phonetic: "/dɔːr/", meaning: "门", example: "Close the door.", exampleCn: "关门。", tags: ["教室设施", "四会词"] },
            { word: "teacher's desk", phonetic: "/ˈtiːtʃərz desk/", meaning: "讲台", example: "The book is on the teacher's desk.", exampleCn: "书在讲台上。", tags: ["教室设施", "三会词"] },
            { word: "computer", phonetic: "/kəmˈpjuːtər/", meaning: "电脑", example: "We have a computer in the classroom.", exampleCn: "我们教室里有一台电脑。", tags: ["教室设施", "三会词"] },
            { word: "wall", phonetic: "/wɔːl/", meaning: "墙壁", example: "The picture is on the wall.", exampleCn: "画在墙上。", tags: ["教室设施", "三会词"] },
            { word: "floor", phonetic: "/flɔːr/", meaning: "地板", example: "Clean the floor.", exampleCn: "擦地板。", tags: ["教室设施", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "我们的教室",
              content: [
                { en: "We have a new classroom.", cn: "我们有一间新教室。" },
                { en: "Really? What's in the classroom?", cn: "真的吗？教室里有什么？" },
                { en: "Let's go and see!", cn: "我们去看看吧！" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "打扫教室",
              content: [
                { en: "Let's clean the classroom!", cn: "我们打扫教室吧！" },
                { en: "Good idea!", cn: "好主意！" },
                { en: "Let me clean the windows.", cn: "我来擦窗户。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My schoolbag",
          words: [
            { word: "schoolbag", phonetic: "/ˈskuːlbæɡ/", meaning: "书包", example: "My schoolbag is heavy.", exampleCn: "我的书包很重。", tags: ["书包物品", "四会词"] },
            { word: "maths book", phonetic: "/mæθs bʊk/", meaning: "数学书", example: "I have a maths book.", exampleCn: "我有一本数学书。", tags: ["书包物品", "四会词"] },
            { word: "English book", phonetic: "/ˈɪŋɡlɪʃ bʊk/", meaning: "英语书", example: "This is my English book.", exampleCn: "这是我的英语书。", tags: ["书包物品", "四会词"] },
            { word: "Chinese book", phonetic: "/ˌtʃaɪˈniːz bʊk/", meaning: "语文书", example: "I have a Chinese book.", exampleCn: "我有一本语文书。", tags: ["书包物品", "四会词"] },
            { word: "storybook", phonetic: "/ˈstɔːribʊk/", meaning: "故事书", example: "I like storybooks.", exampleCn: "我喜欢故事书。", tags: ["书包物品", "三会词"] },
            { word: "notebook", phonetic: "/ˈnəʊtbʊk/", meaning: "笔记本", example: "I have a notebook.", exampleCn: "我有一个笔记本。", tags: ["书包物品", "四会词"] },
            { word: "candy", phonetic: "/ˈkændi/", meaning: "糖果", example: "I have a candy in my bag.", exampleCn: "我书包里有一颗糖。", tags: ["书包物品", "三会词"] },
            { word: "toy", phonetic: "/tɔɪ/", meaning: "玩具", example: "I lost my toy.", exampleCn: "我的玩具丢了。", tags: ["书包物品", "三会词"] },
            { word: "key", phonetic: "/kiː/", meaning: "钥匙", example: "I have a key.", exampleCn: "我有一把钥匙。", tags: ["书包物品", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "书包里有什么",
              content: [
                { en: "Excuse me. I lost my schoolbag.", cn: "打扰一下。我丢了书包。" },
                { en: "What's in it?", cn: "里面有什么？" },
                { en: "An English book, a maths book and three storybooks.", cn: "一本英语书，一本数学书和三本故事书。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "我的书包很重",
              content: [
                { en: "My schoolbag is heavy!", cn: "我的书包真重！" },
                { en: "What's in it?", cn: "里面有什么？" },
                { en: "Ten books and two notebooks.", cn: "十本书和两个笔记本。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 My friends",
          words: [
            { word: "tall", phonetic: "/tɔːl/", meaning: "高的", example: "My friend is tall.", exampleCn: "我的朋友很高。", tags: ["特征", "四会词"] },
            { word: "strong", phonetic: "/strɒŋ/", meaning: "强壮的", example: "He is strong.", exampleCn: "他很强壮。", tags: ["特征", "四会词"] },
            { word: "short", phonetic: "/ʃɔːt/", meaning: "矮的", example: "She is short.", exampleCn: "她很矮。", tags: ["特征", "四会词"] },
            { word: "thin", phonetic: "/θɪn/", meaning: "瘦的", example: "He is thin.", exampleCn: "他很瘦。", tags: ["特征", "四会词"] },
            { word: "friendly", phonetic: "/ˈfrendli/", meaning: "友好的", example: "She is very friendly.", exampleCn: "她很友好。", tags: ["特征", "三会词"] },
            { word: "quiet", phonetic: "/ˈkwaɪət/", meaning: "安静的", example: "He is a quiet boy.", exampleCn: "他是个安静的男孩。", tags: ["特征", "三会词"] },
            { word: "hair", phonetic: "/heər/", meaning: "头发", example: "She has long hair.", exampleCn: "她有长头发。", tags: ["身体", "四会词"] },
            { word: "shoe", phonetic: "/ʃuː/", meaning: "鞋", example: "I like my new shoes.", exampleCn: "我喜欢我的新鞋。", tags: ["服装", "三会词"] },
            { word: "glasses", phonetic: "/ˈɡlɑːsɪz/", meaning: "眼镜", example: "He has blue glasses.", exampleCn: "他戴着蓝色眼镜。", tags: ["物品", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "描述朋友",
              content: [
                { en: "I have a good friend.", cn: "我有一个好朋友。" },
                { en: "Really? A Chinese friend or an English friend?", cn: "真的吗？中国朋友还是英国朋友？" },
                { en: "He's tall and thin. He has glasses.", cn: "他又高又瘦。他戴着眼镜。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "猜猜他是谁",
              content: [
                { en: "Who is he?", cn: "他是谁？" },
                { en: "He has short hair. He is friendly.", cn: "他留着短发。他很友好。" },
                { en: "Is he Wu Yifan?", cn: "他是吴一凡吗？" },
                { en: "Yes, you're right!", cn: "对，你猜对了！" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 My home",
          words: [
            { word: "bedroom", phonetic: "/ˈbedruːm/", meaning: "卧室", example: "My bedroom is small.", exampleCn: "我的卧室很小。", tags: ["房间", "四会词"] },
            { word: "living room", phonetic: "/ˈlɪvɪŋ ruːm/", meaning: "客厅", example: "We watch TV in the living room.", exampleCn: "我们在客厅看电视。", tags: ["房间", "四会词"] },
            { word: "kitchen", phonetic: "/ˈkɪtʃɪn/", meaning: "厨房", example: "Mum is in the kitchen.", exampleCn: "妈妈在厨房。", tags: ["房间", "四会词"] },
            { word: "bathroom", phonetic: "/ˈbɑːθruːm/", meaning: "浴室", example: "The bathroom is clean.", exampleCn: "浴室很干净。", tags: ["房间", "四会词"] },
            { word: "study", phonetic: "/ˈstʌdi/", meaning: "书房", example: "I read books in the study.", exampleCn: "我在书房看书。", tags: ["房间", "三会词"] },
            { word: "phone", phonetic: "/fəʊn/", meaning: "电话", example: "The phone is on the table.", exampleCn: "电话在桌子上。", tags: ["物品", "三会词"] },
            { word: "table", phonetic: "/ˈteɪbl/", meaning: "桌子", example: "The book is on the table.", exampleCn: "书在桌子上。", tags: ["家具", "四会词"] },
            { word: "bed", phonetic: "/bed/", meaning: "床", example: "My bed is soft.", exampleCn: "我的床很软。", tags: ["家具", "四会词"] },
            { word: "sofa", phonetic: "/ˈsəʊfə/", meaning: "沙发", example: "Sit on the sofa.", exampleCn: "坐在沙发上。", tags: ["家具", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "欢迎来我家",
              content: [
                { en: "Welcome to my home!", cn: "欢迎来到我家！" },
                { en: "Is this your bedroom?", cn: "这是你的卧室吗？" },
                { en: "No, it's the living room.", cn: "不，这是客厅。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "找东西",
              content: [
                { en: "Where are the keys?", cn: "钥匙在哪里？" },
                { en: "Are they on the table?", cn: "它们在桌子上吗？" },
                { en: "No, they're in the door!", cn: "不，它们在门上！" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Dinner's ready",
          words: [
            { word: "beef", phonetic: "/biːf/", meaning: "牛肉", example: "I'd like some beef.", exampleCn: "我想吃点牛肉。", tags: ["食物", "四会词"] },
            { word: "chicken", phonetic: "/ˈtʃɪkɪn/", meaning: "鸡肉", example: "We have chicken for dinner.", exampleCn: "我们晚饭吃鸡肉。", tags: ["食物", "四会词"] },
            { word: "noodles", phonetic: "/ˈnuːdlz/", meaning: "面条", example: "I like noodles.", exampleCn: "我喜欢面条。", tags: ["食物", "四会词"] },
            { word: "soup", phonetic: "/suːp/", meaning: "汤", example: "Have some soup.", exampleCn: "喝点汤吧。", tags: ["食物", "四会词"] },
            { word: "vegetable", phonetic: "/ˈvedʒtəbl/", meaning: "蔬菜", example: "I like vegetables.", exampleCn: "我喜欢蔬菜。", tags: ["食物", "四会词"] },
            { word: "chopsticks", phonetic: "/ˈtʃɒpstɪks/", meaning: "筷子", example: "I can use chopsticks.", exampleCn: "我会用筷子。", tags: ["餐具", "三会词"] },
            { word: "bowl", phonetic: "/bəʊl/", meaning: "碗", example: "I have a bowl of rice.", exampleCn: "我有一碗米饭。", tags: ["餐具", "三会词"] },
            { word: "fork", phonetic: "/fɔːk/", meaning: "叉子", example: "Pass me the fork, please.", exampleCn: "请把叉子递给我。", tags: ["餐具", "三会词"] },
            { word: "knife", phonetic: "/naɪf/", meaning: "刀", example: "I need a knife.", exampleCn: "我需要一把刀。", tags: ["餐具", "三会词"] },
            { word: "spoon", phonetic: "/spuːn/", meaning: "勺子", example: "Use the spoon.", exampleCn: "用勺子。", tags: ["餐具", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "晚餐准备好了",
              content: [
                { en: "Dinner's ready!", cn: "晚餐准备好了！" },
                { en: "Thanks. What's for dinner?", cn: "谢谢。晚餐吃什么？" },
                { en: "We have beef, noodles and soup.", cn: "我们有牛肉、面条和汤。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "你想吃什么",
              content: [
                { en: "What would you like for dinner?", cn: "你晚餐想吃什么？" },
                { en: "I'd like some chicken and vegetables, please.", cn: "请给我一些鸡肉和蔬菜。" },
                { en: "Help yourself.", cn: "随便吃。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Meet my family",
          words: [
            { word: "parents", phonetic: "/ˈpeərənts/", meaning: "父母", example: "My parents are teachers.", exampleCn: "我父母是老师。", tags: ["家人", "四会词"] },
            { word: "uncle", phonetic: "/ˈʌŋkl/", meaning: "叔叔/伯伯", example: "My uncle is a doctor.", exampleCn: "我叔叔是医生。", tags: ["家人", "四会词"] },
            { word: "aunt", phonetic: "/ɑːnt/", meaning: "阿姨/姑姑", example: "My aunt is kind.", exampleCn: "我姑姑很和蔼。", tags: ["家人", "四会词"] },
            { word: "cousin", phonetic: "/ˈkʌzn/", meaning: "表兄弟/表姐妹", example: "My cousin is a student.", exampleCn: "我表妹是学生。", tags: ["家人", "三会词"] },
            { word: "baby", phonetic: "/ˈbeɪbi/", meaning: "婴儿", example: "The baby is cute.", exampleCn: "婴儿很可爱。", tags: ["家人", "三会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "兄弟", example: "My brother is tall.", exampleCn: "我哥哥很高。", tags: ["家人", "四会词"] },
            { word: "doctor", phonetic: "/ˈdɒktər/", meaning: "医生", example: "My uncle is a doctor.", exampleCn: "我叔叔是医生。", tags: ["职业", "四会词"] },
            { word: "farmer", phonetic: "/ˈfɑːrmər/", meaning: "农民", example: "My grandpa is a farmer.", exampleCn: "我爷爷是农民。", tags: ["职业", "四会词"] },
            { word: "nurse", phonetic: "/nɜːrs/", meaning: "护士", example: "She is a nurse.", exampleCn: "她是一名护士。", tags: ["职业", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "介绍我的家人",
              content: [
                { en: "This is my family.", cn: "这是我的家人。" },
                { en: "How many people are there in your family?", cn: "你家有几口人？" },
                { en: "Six. My parents, my uncle, my aunt, my cousin and me.", cn: "六口人。我的父母、叔叔、姑姑、表妹和我。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "我姑姑的工作",
              content: [
                { en: "Is this your aunt?", cn: "这是你的姑姑吗？" },
                { en: "Yes, it is.", cn: "是的。" },
                { en: "What's her job?", cn: "她做什么工作？" },
                { en: "She's a nurse.", cn: "她是一名护士。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 四年级下册 ====================
    '4-2': {
      semester: "下册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 My school",
          words: [
            { word: "first floor", phonetic: "/fɜːrst flɔːr/", meaning: "一楼", example: "The library is on the first floor.", exampleCn: "图书馆在一楼。", tags: ["学校场所", "四会词"] },
            { word: "second floor", phonetic: "/ˈsekənd flɔːr/", meaning: "二楼", example: "The art room is on the second floor.", exampleCn: "美术室在二楼。", tags: ["学校场所", "四会词"] },
            { word: "teacher's office", phonetic: "/ˈtiːtʃərz ˈɒfɪs/", meaning: "教师办公室", example: "The teacher's office is big.", exampleCn: "教师办公室很大。", tags: ["学校场所", "三会词"] },
            { word: "library", phonetic: "/ˈlaɪbrəri/", meaning: "图书馆", example: "I read books in the library.", exampleCn: "我在图书馆看书。", tags: ["学校场所", "四会词"] },
            { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", meaning: "操场", example: "We play on the playground.", exampleCn: "我们在操场上玩。", tags: ["学校场所", "四会词"] },
            { word: "computer room", phonetic: "/kəmˈpjuːtər ruːm/", meaning: "计算机室", example: "We have a computer room.", exampleCn: "我们有一间计算机室。", tags: ["学校场所", "三会词"] },
            { word: "art room", phonetic: "/ɑːrt ruːm/", meaning: "美术室", example: "I draw in the art room.", exampleCn: "我在美术室画画。", tags: ["学校场所", "三会词"] },
            { word: "music room", phonetic: "/ˈmjuːzɪk ruːm/", meaning: "音乐室", example: "We sing in the music room.", exampleCn: "我们在音乐室唱歌。", tags: ["学校场所", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "参观学校",
              content: [
                { en: "Welcome to our school!", cn: "欢迎来到我们学校！" },
                { en: "This is the library.", cn: "这是图书馆。" },
                { en: "Is this the teacher's office?", cn: "这是教师办公室吗？" },
                { en: "No, it isn't. The teacher's office is on the second floor.", cn: "不，不是。教师办公室在二楼。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "计算机室在哪",
              content: [
                { en: "Where's the computer room?", cn: "计算机室在哪里？" },
                { en: "It's on the first floor.", cn: "它在一楼。" },
                { en: "Is that the art room?", cn: "那是美术室吗？" },
                { en: "Yes, it is.", cn: "是的。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 What time is it?",
          words: [
            { word: "breakfast", phonetic: "/ˈbrekfəst/", meaning: "早餐", example: "It's time for breakfast.", exampleCn: "该吃早餐了。", tags: ["作息", "四会词"] },
            { word: "English class", phonetic: "/ˈɪŋɡlɪʃ klɑːs/", meaning: "英语课", example: "It's time for English class.", exampleCn: "该上英语课了。", tags: ["课程", "四会词"] },
            { word: "lunch", phonetic: "/lʌntʃ/", meaning: "午餐", example: "It's time for lunch.", exampleCn: "该吃午餐了。", tags: ["作息", "四会词"] },
            { word: "music class", phonetic: "/ˈmjuːzɪk klɑːs/", meaning: "音乐课", example: "It's time for music class.", exampleCn: "该上音乐课了。", tags: ["课程", "三会词"] },
            { word: "PE class", phonetic: "/ˌpiː ˈiː klɑːs/", meaning: "体育课", example: "It's time for PE class.", exampleCn: "该上体育课了。", tags: ["课程", "三会词"] },
            { word: "dinner", phonetic: "/ˈdɪnər/", meaning: "晚餐", example: "It's time for dinner.", exampleCn: "该吃晚餐了。", tags: ["作息", "四会词"] },
            { word: "get up", phonetic: "/ɡet ʌp/", meaning: "起床", example: "It's time to get up.", exampleCn: "该起床了。", tags: ["作息", "四会词"] },
            { word: "go to school", phonetic: "/ɡəʊ tuː skuːl/", meaning: "去上学", example: "It's time to go to school.", exampleCn: "该去上学了。", tags: ["作息", "四会词"] },
            { word: "go home", phonetic: "/ɡəʊ həʊm/", meaning: "回家", example: "Let's go home.", exampleCn: "我们回家吧。", tags: ["作息", "四会词"] },
            { word: "go to bed", phonetic: "/ɡəʊ tuː bed/", meaning: "上床睡觉", example: "It's time to go to bed.", exampleCn: "该睡觉了。", tags: ["作息", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "几点了",
              content: [
                { en: "What time is it?", cn: "几点了？" },
                { en: "It's six o'clock.", cn: "六点了。" },
                { en: "It's time for dinner.", cn: "该吃晚饭了。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "该上学了",
              content: [
                { en: "What time is it now?", cn: "现在几点了？" },
                { en: "It's seven thirty.", cn: "七点半了。" },
                { en: "It's time to go to school.", cn: "该去上学了。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Weather",
          words: [
            { word: "cold", phonetic: "/kəʊld/", meaning: "冷的", example: "It's cold today.", exampleCn: "今天很冷。", tags: ["天气", "四会词"] },
            { word: "cool", phonetic: "/kuːl/", meaning: "凉爽的", example: "It's cool in autumn.", exampleCn: "秋天很凉爽。", tags: ["天气", "四会词"] },
            { word: "warm", phonetic: "/wɔːrm/", meaning: "温暖的", example: "It's warm in spring.", exampleCn: "春天很温暖。", tags: ["天气", "四会词"] },
            { word: "hot", phonetic: "/hɒt/", meaning: "热的", example: "It's hot in summer.", exampleCn: "夏天很热。", tags: ["天气", "四会词"] },
            { word: "sunny", phonetic: "/ˈsʌni/", meaning: "晴朗的", example: "It's sunny today.", exampleCn: "今天天气晴朗。", tags: ["天气", "四会词"] },
            { word: "windy", phonetic: "/ˈwɪndi/", meaning: "有风的", example: "It's windy outside.", exampleCn: "外面有风。", tags: ["天气", "四会词"] },
            { word: "cloudy", phonetic: "/ˈklaʊdi/", meaning: "多云的", example: "It's cloudy today.", exampleCn: "今天多云。", tags: ["天气", "四会词"] },
            { word: "snowy", phonetic: "/ˈsnəʊi/", meaning: "下雪的", example: "It's snowy in winter.", exampleCn: "冬天下雪了。", tags: ["天气", "三会词"] },
            { word: "rainy", phonetic: "/ˈreɪni/", meaning: "下雨的", example: "It's rainy today.", exampleCn: "今天下雨了。", tags: ["天气", "三会词"] },
            { word: "outside", phonetic: "/ˌaʊtˈsaɪd/", meaning: "在外面", example: "Let's go outside!", exampleCn: "我们去外面吧！", tags: ["方位", "三会词"] },
            { word: "degree", phonetic: "/dɪˈɡriː/", meaning: "度", example: "It's 26 degrees.", exampleCn: "26度。", tags: ["单位", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "天气怎么样",
              content: [
                { en: "What's the weather like in Beijing?", cn: "北京天气怎么样？" },
                { en: "It's cold and snowy.", cn: "又冷又下雪。" },
                { en: "What about New York?", cn: "纽约呢？" },
                { en: "It's warm and sunny.", cn: "温暖又晴朗。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "我可以出去吗",
              content: [
                { en: "Can I go outside now?", cn: "我现在可以出去吗？" },
                { en: "No, you can't. It's cold outside.", cn: "不行，外面很冷。" },
                { en: "What's the weather like?", cn: "天气怎么样？" },
                { en: "It's rainy.", cn: "下雨了。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 At the farm",
          words: [
            { word: "tomato", phonetic: "/təˈmɑːtəʊ/", meaning: "西红柿", example: "The tomatoes are red.", exampleCn: "西红柿红了。", tags: ["蔬菜", "四会词"] },
            { word: "potato", phonetic: "/pəˈteɪtəʊ/", meaning: "土豆", example: "I like potatoes.", exampleCn: "我喜欢土豆。", tags: ["蔬菜", "四会词"] },
            { word: "green bean", phonetic: "/ɡriːn biːn/", meaning: "四季豆", example: "The green beans are long.", exampleCn: "四季豆很长。", tags: ["蔬菜", "三会词"] },
            { word: "carrot", phonetic: "/ˈkærət/", meaning: "胡萝卜", example: "I like carrots.", exampleCn: "我喜欢胡萝卜。", tags: ["蔬菜", "四会词"] },
            { word: "horse", phonetic: "/hɔːrs/", meaning: "马", example: "The horse is fast.", exampleCn: "马跑得很快。", tags: ["动物", "四会词"] },
            { word: "cow", phonetic: "/kaʊ/", meaning: "奶牛", example: "The cow is big.", exampleCn: "奶牛很大。", tags: ["动物", "四会词"] },
            { word: "sheep", phonetic: "/ʃiːp/", meaning: "绵羊", example: "The sheep are white.", exampleCn: "绵羊是白色的。", tags: ["动物", "四会词"] },
            { word: "hen", phonetic: "/hen/", meaning: "母鸡", example: "The hen is small.", exampleCn: "母鸡很小。", tags: ["动物", "三会词"] },
            { word: "these", phonetic: "/ðiːz/", meaning: "这些", example: "What are these?", exampleCn: "这些是什么？", tags: ["代词", "三会词"] },
            { word: "animal", phonetic: "/ˈænɪml/", meaning: "动物", example: "I love animals.", exampleCn: "我喜欢动物。", tags: ["总称", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "在农场",
              content: [
                { en: "Welcome to the farm!", cn: "欢迎来到农场！" },
                { en: "Wow! What are these?", cn: "哇！这些是什么？" },
                { en: "They're tomatoes.", cn: "它们是西红柿。" },
                { en: "Are those carrots?", cn: "那些是胡萝卜吗？" },
                { en: "Yes, they are.", cn: "是的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "农场里的动物",
              content: [
                { en: "Are these sheep?", cn: "这些是绵羊吗？" },
                { en: "No, they're horses.", cn: "不，它们是马。" },
                { en: "How many horses do you have?", cn: "你有多少匹马？" },
                { en: "Twenty.", cn: "二十匹。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 My clothes",
          words: [
            { word: "clothes", phonetic: "/kləʊðz/", meaning: "衣服", example: "These are my clothes.", exampleCn: "这些是我的衣服。", tags: ["服装", "四会词"] },
            { word: "pants", phonetic: "/pænts/", meaning: "裤子", example: "These are my pants.", exampleCn: "这些是我的裤子。", tags: ["服装", "四会词"] },
            { word: "hat", phonetic: "/hæt/", meaning: "帽子", example: "This is my hat.", exampleCn: "这是我的帽子。", tags: ["服装", "四会词"] },
            { word: "dress", phonetic: "/dres/", meaning: "连衣裙", example: "She has a new dress.", exampleCn: "她有一条新连衣裙。", tags: ["服装", "四会词"] },
            { word: "skirt", phonetic: "/skɜːrt/", meaning: "短裙", example: "I like this skirt.", exampleCn: "我喜欢这条短裙。", tags: ["服装", "四会词"] },
            { word: "coat", phonetic: "/kəʊt/", meaning: "外套", example: "Put on your coat.", exampleCn: "穿上你的外套。", tags: ["服装", "三会词"] },
            { word: "sweater", phonetic: "/ˈswetər/", meaning: "毛衣", example: "This sweater is warm.", exampleCn: "这件毛衣很暖和。", tags: ["服装", "三会词"] },
            { word: "sock", phonetic: "/sɒk/", meaning: "短袜", example: "Where is my sock?", exampleCn: "我的袜子在哪里？", tags: ["服装", "三会词"] },
            { word: "shorts", phonetic: "/ʃɔːrts/", meaning: "短裤", example: "I wear shorts in summer.", exampleCn: "我夏天穿短裤。", tags: ["服装", "三会词"] },
            { word: "jacket", phonetic: "/ˈdʒækɪt/", meaning: "夹克", example: "This is my jacket.", exampleCn: "这是我的夹克。", tags: ["服装", "三会词"] },
            { word: "shirt", phonetic: "/ʃɜːrt/", meaning: "衬衫", example: "He has a blue shirt.", exampleCn: "他有一件蓝色衬衫。", tags: ["服装", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "这是谁的",
              content: [
                { en: "Are these yours?", cn: "这些是你的吗？" },
                { en: "No, they aren't. They're Mike's.", cn: "不，不是。它们是迈克的。" },
                { en: "Whose coat is this?", cn: "这是谁的外套？" },
                { en: "It's mine.", cn: "是我的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "收拾衣服",
              content: [
                { en: "Whose pants are those?", cn: "那些是谁的裤子？" },
                { en: "They're your father's.", cn: "它们是你爸爸的。" },
                { en: "Put away your clothes!", cn: "把你的衣服收好！" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Shopping",
          words: [
            { word: "glove", phonetic: "/ɡlʌv/", meaning: "手套", example: "I need a pair of gloves.", exampleCn: "我需要一双手套。", tags: ["服装", "三会词"] },
            { word: "scarf", phonetic: "/skɑːrf/", meaning: "围巾", example: "The scarf is nice.", exampleCn: "这条围巾很好看。", tags: ["服装", "三会词"] },
            { word: "umbrella", phonetic: "/ʌmˈbrelə/", meaning: "雨伞", example: "Take your umbrella.", exampleCn: "带上你的雨伞。", tags: ["物品", "三会词"] },
            { word: "sunglasses", phonetic: "/ˈsʌnɡlɑːsɪz/", meaning: "太阳镜", example: "I have sunglasses.", exampleCn: "我有太阳镜。", tags: ["服装", "三会词"] },
            { word: "expensive", phonetic: "/ɪkˈspensɪv/", meaning: "昂贵的", example: "It's too expensive!", exampleCn: "太贵了！", tags: ["形容词", "四会词"] },
            { word: "cheap", phonetic: "/tʃiːp/", meaning: "便宜的", example: "This one is cheap.", exampleCn: "这个很便宜。", tags: ["形容词", "四会词"] },
            { word: "nice", phonetic: "/naɪs/", meaning: "好的", example: "The dress is nice.", exampleCn: "这条裙子很好看。", tags: ["形容词", "四会词"] },
            { word: "pretty", phonetic: "/ˈprɪti/", meaning: "漂亮的", example: "It's very pretty!", exampleCn: "它很漂亮！", tags: ["形容词", "四会词"] },
            { word: "size", phonetic: "/saɪz/", meaning: "尺码", example: "What size do you want?", exampleCn: "你想要什么尺码？", tags: ["购物", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "买东西",
              content: [
                { en: "Can I help you?", cn: "我能帮你吗？" },
                { en: "Yes. These shoes are nice. Can I try them on?", cn: "是的。这些鞋子很好看。我能试穿吗？" },
                { en: "Of course. What size?", cn: "当然。什么尺码？" },
                { en: "Size 6.", cn: "6码。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "这把伞多少钱",
              content: [
                { en: "This umbrella is nice.", cn: "这把雨伞很好看。" },
                { en: "How much is it?", cn: "多少钱？" },
                { en: "It's fifty yuan.", cn: "五十元。" },
                { en: "OK. I'll take it.", cn: "好的。我买了。" }
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
          unitId: "U1",
          unitName: "Unit 1 What's he like?",
          words: [
            { word: "old", phonetic: "/əʊld/", meaning: "年老的", example: "He is old but kind.", exampleCn: "他年纪大了但很和蔼。", tags: ["外貌", "四会词"] },
            { word: "young", phonetic: "/jʌŋ/", meaning: "年轻的", example: "She is young and pretty.", exampleCn: "她年轻又漂亮。", tags: ["外貌", "四会词"] },
            { word: "funny", phonetic: "/ˈfʌni/", meaning: "滑稽的", example: "He is very funny.", exampleCn: "他很滑稽。", tags: ["性格", "四会词"] },
            { word: "kind", phonetic: "/kaɪnd/", meaning: "和蔼的", example: "She is very kind.", exampleCn: "她很和蔼。", tags: ["性格", "四会词"] },
            { word: "strict", phonetic: "/strɪkt/", meaning: "严格的", example: "Our teacher is strict.", exampleCn: "我们的老师很严格。", tags: ["性格", "四会词"] },
            { word: "polite", phonetic: "/pəˈlaɪt/", meaning: "有礼貌的", example: "She is a polite girl.", exampleCn: "她是个有礼貌的女孩。", tags: ["性格", "三会词"] },
            { word: "hard-working", phonetic: "/ˌhɑːrd ˈwɜːrkɪŋ/", meaning: "努力工作的", example: "He is hard-working.", exampleCn: "他很努力工作。", tags: ["性格", "三会词"] },
            { word: "helpful", phonetic: "/ˈhelpfl/", meaning: "乐于助人的", example: "She is very helpful.", exampleCn: "她很乐于助人。", tags: ["性格", "三会词"] },
            { word: "clever", phonetic: "/ˈklevər/", meaning: "聪明的", example: "He is a clever boy.", exampleCn: "他是个聪明的男孩。", tags: ["性格", "四会词"] },
            { word: "shy", phonetic: "/ʃaɪ/", meaning: "害羞的", example: "She is a shy girl.", exampleCn: "她是个害羞的女孩。", tags: ["性格", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "新老师",
              content: [
                { en: "Who's your art teacher?", cn: "谁是你的美术老师？" },
                { en: "Mr Jones.", cn: "琼斯老师。" },
                { en: "Is he young?", cn: "他年轻吗？" },
                { en: "Yes, he is. He's very funny.", cn: "是的。他很滑稽。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "描述老师",
              content: [
                { en: "What's she like?", cn: "她是什么样的？" },
                { en: "She's kind and helpful.", cn: "她很和蔼，乐于助人。" },
                { en: "Do you know her?", cn: "你认识她吗？" },
                { en: "Yes, she's my mother!", cn: "认识，她是我妈妈！" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My week",
          words: [
            { word: "Monday", phonetic: "/ˈmʌndeɪ/", meaning: "星期一", example: "I have maths on Monday.", exampleCn: "我星期一有数学课。", tags: ["星期", "四会词"] },
            { word: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", meaning: "星期二", example: "We have PE on Tuesday.", exampleCn: "我们星期二有体育课。", tags: ["星期", "四会词"] },
            { word: "Wednesday", phonetic: "/ˈwenzdeɪ/", meaning: "星期三", example: "I like Wednesday.", exampleCn: "我喜欢星期三。", tags: ["星期", "四会词"] },
            { word: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", meaning: "星期四", example: "We have English on Thursday.", exampleCn: "我们星期四有英语课。", tags: ["星期", "四会词"] },
            { word: "Friday", phonetic: "/ˈfraɪdeɪ/", meaning: "星期五", example: "I'm happy on Friday.", exampleCn: "星期五我很开心。", tags: ["星期", "四会词"] },
            { word: "Saturday", phonetic: "/ˈsætərdeɪ/", meaning: "星期六", example: "I play on Saturday.", exampleCn: "我星期六玩。", tags: ["星期", "四会词"] },
            { word: "Sunday", phonetic: "/ˈsʌndeɪ/", meaning: "星期日", example: "I read books on Sunday.", exampleCn: "我星期日看书。", tags: ["星期", "四会词"] },
            { word: "weekend", phonetic: "/ˌwiːkˈend/", meaning: "周末", example: "What do you do on the weekend?", exampleCn: "你周末做什么？", tags: ["时间", "四会词"] },
            { word: "wash", phonetic: "/wɒʃ/", meaning: "洗", example: "I wash my clothes on Saturday.", exampleCn: "我星期六洗衣服。", tags: ["动词", "三会词"] },
            { word: "watch", phonetic: "/wɒtʃ/", meaning: "看", example: "I watch TV on Sunday.", exampleCn: "我星期日看电视。", tags: ["动词", "三会词"] },
            { word: "read", phonetic: "/riːd/", meaning: "阅读", example: "I read books every day.", exampleCn: "我每天看书。", tags: ["动词", "四会词"] },
            { word: "play", phonetic: "/pleɪ/", meaning: "玩", example: "I play football on the weekend.", exampleCn: "我周末踢足球。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "一周的课程",
              content: [
                { en: "What do you have on Thursdays?", cn: "你们星期四有什么课？" },
                { en: "I have maths, English and Chinese.", cn: "我有数学、英语和语文。" },
                { en: "What do you do on Thursdays?", cn: "你星期四做什么？" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "周末活动",
              content: [
                { en: "What do you do on the weekend?", cn: "你周末做什么？" },
                { en: "I often wash my clothes and read books.", cn: "我经常洗衣服和看书。" },
                { en: "Do you play sports?", cn: "你做运动吗？" },
                { en: "Yes, I play football.", cn: "是的，我踢足球。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 What would you like?",
          words: [
            { word: "sandwich", phonetic: "/ˈsænwɪtʃ/", meaning: "三明治", example: "I'd like a sandwich.", exampleCn: "我想要一个三明治。", tags: ["食物", "四会词"] },
            { word: "salad", phonetic: "/ˈsæləd/", meaning: "沙拉", example: "I like salad.", exampleCn: "我喜欢沙拉。", tags: ["食物", "三会词"] },
            { word: "hamburger", phonetic: "/ˈhæmbɜːrɡər/", meaning: "汉堡包", example: "I'd like a hamburger.", exampleCn: "我想要一个汉堡包。", tags: ["食物", "四会词"] },
            { word: "ice cream", phonetic: "/ˌaɪs ˈkriːm/", meaning: "冰淇淋", example: "I love ice cream.", exampleCn: "我爱冰淇淋。", tags: ["食物", "四会词"] },
            { word: "tea", phonetic: "/tiː/", meaning: "茶", example: "I'd like some tea.", exampleCn: "我想喝点茶。", tags: ["饮料", "四会词"] },
            { word: "fresh", phonetic: "/freʃ/", meaning: "新鲜的", example: "The food is fresh.", exampleCn: "食物很新鲜。", tags: ["形容词", "三会词"] },
            { word: "healthy", phonetic: "/ˈhelθi/", meaning: "健康的", example: "Vegetables are healthy.", exampleCn: "蔬菜很健康。", tags: ["形容词", "四会词"] },
            { word: "delicious", phonetic: "/dɪˈlɪʃəs/", meaning: "美味的", example: "The cake is delicious.", exampleCn: "蛋糕很美味。", tags: ["形容词", "四会词"] },
            { word: "hot", phonetic: "/hɒt/", meaning: "辣的", example: "The food is hot.", exampleCn: "食物很辣。", tags: ["形容词", "三会词"] },
            { word: "sweet", phonetic: "/swiːt/", meaning: "甜的", example: "I like sweet food.", exampleCn: "我喜欢甜食。", tags: ["形容词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你想吃什么",
              content: [
                { en: "What would you like to eat?", cn: "你想吃什么？" },
                { en: "A sandwich, please.", cn: "请给我一个三明治。" },
                { en: "What would you like to drink?", cn: "你想喝什么？" },
                { en: "I'd like some tea.", cn: "我想喝点茶。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "最喜欢的食物",
              content: [
                { en: "What's your favourite food?", cn: "你最喜欢的食物是什么？" },
                { en: "I love noodles. They're delicious.", cn: "我爱面条。它们很美味。" },
                { en: "What would you like for dinner today?", cn: "你今天晚餐想吃什么？" },
                { en: "I'd like some beef and vegetables.", cn: "我想吃牛肉和蔬菜。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 What can you do?",
          words: [
            { word: "sing", phonetic: "/sɪŋ/", meaning: "唱", example: "I can sing English songs.", exampleCn: "我会唱英文歌。", tags: ["能力", "四会词"] },
            { word: "dance", phonetic: "/dɑːns/", meaning: "跳舞", example: "She can dance.", exampleCn: "她会跳舞。", tags: ["能力", "四会词"] },
            { word: "draw", phonetic: "/drɔː/", meaning: "画", example: "I can draw cartoons.", exampleCn: "我会画漫画。", tags: ["能力", "四会词"] },
            { word: "cartoon", phonetic: "/kɑːrˈtuːn/", meaning: "漫画", example: "I can draw cartoons.", exampleCn: "我会画漫画。", tags: ["物品", "三会词"] },
            { word: "cook", phonetic: "/kʊk/", meaning: "烹饪", example: "I can cook.", exampleCn: "我会做饭。", tags: ["能力", "四会词"] },
            { word: "swim", phonetic: "/swɪm/", meaning: "游泳", example: "He can swim.", exampleCn: "他会游泳。", tags: ["能力", "四会词"] },
            { word: "speak", phonetic: "/spiːk/", meaning: "说", example: "I can speak English.", exampleCn: "我会说英语。", tags: ["能力", "三会词"] },
            { word: "English", phonetic: "/ˈɪŋɡlɪʃ/", meaning: "英语", example: "I can speak English.", exampleCn: "我会说英语。", tags: ["学科", "四会词"] },
            { word: "kung fu", phonetic: "/ˌkʌŋ ˈfuː/", meaning: "功夫", example: "I can do kung fu.", exampleCn: "我会功夫。", tags: ["能力", "三会词"] },
            { word: "play pipa", phonetic: "/pleɪ ˈpiːpɑː/", meaning: "弹琵琶", example: "She can play the pipa.", exampleCn: "她会弹琵琶。", tags: ["能力", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你会做什么",
              content: [
                { en: "What can you do for the party, children?", cn: "孩子们，你们能为聚会做什么？" },
                { en: "I can sing.", cn: "我会唱歌。" },
                { en: "I can dance.", cn: "我会跳舞。" },
                { en: "Can you do any kung fu?", cn: "你会功夫吗？" },
                { en: "Yes, I can.", cn: "是的，我会。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "你能做什么",
              content: [
                { en: "Can you cook?", cn: "你会做饭吗？" },
                { en: "Yes, I can. I can cook noodles.", cn: "是的，我会。我会煮面条。" },
                { en: "Can you play the pipa?", cn: "你会弹琵琶吗？" },
                { en: "No, I can't. But I can play the piano.", cn: "不，我不会。但我会弹钢琴。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 There is a big bed",
          words: [
            { word: "clock", phonetic: "/klɒk/", meaning: "时钟", example: "There is a clock on the wall.", exampleCn: "墙上有一个时钟。", tags: ["物品", "四会词"] },
            { word: "plant", phonetic: "/plɑːnt/", meaning: "植物", example: "There is a plant on the desk.", exampleCn: "书桌上有一盆植物。", tags: ["物品", "三会词"] },
            { word: "bottle", phonetic: "/ˈbɒtl/", meaning: "瓶子", example: "There is a water bottle.", exampleCn: "有一个水瓶。", tags: ["物品", "四会词"] },
            { word: "water", phonetic: "/ˈwɔːtər/", meaning: "水", example: "I drink water every day.", exampleCn: "我每天喝水。", tags: ["饮料", "四会词"] },
            { word: "bike", phonetic: "/baɪk/", meaning: "自行车", example: "There is a bike behind the house.", exampleCn: "房子后面有一辆自行车。", tags: ["交通工具", "四会词"] },
            { word: "photo", phonetic: "/ˈfəʊtəʊ/", meaning: "照片", example: "There is a photo on the wall.", exampleCn: "墙上有一张照片。", tags: ["物品", "三会词"] },
            { word: "front", phonetic: "/frʌnt/", meaning: "前面", example: "There is a desk in front of the window.", exampleCn: "窗户前面有一张书桌。", tags: ["方位", "三会词"] },
            { word: "between", phonetic: "/bɪˈtwiːn/", meaning: "在...之间", example: "The ball is between the two boxes.", exampleCn: "球在两个盒子之间。", tags: ["方位", "四会词"] },
            { word: "above", phonetic: "/əˈbʌv/", meaning: "在...上方", example: "There is a clock above the bed.", exampleCn: "床上方有一个时钟。", tags: ["方位", "三会词"] },
            { word: "behind", phonetic: "/bɪˈhaɪnd/", meaning: "在...后面", example: "The cat is behind the door.", exampleCn: "猫在门后面。", tags: ["方位", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "我的房间",
              content: [
                { en: "This is my room.", cn: "这是我的房间。" },
                { en: "There is a big bed.", cn: "有一张大床。" },
                { en: "There is a clock on the wall.", cn: "墙上有一个时钟。" },
                { en: "Your room is really nice!", cn: "你的房间真漂亮！" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "房间里有什么",
              content: [
                { en: "What's in your room?", cn: "你的房间里有什么？" },
                { en: "There is a desk, a chair and a bed.", cn: "有一张书桌、一把椅子和一张床。" },
                { en: "Where is the clock?", cn: "时钟在哪里？" },
                { en: "It's above the bed.", cn: "它在床的上方。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 In a nature park",
          words: [
            { word: "forest", phonetic: "/ˈfɒrɪst/", meaning: "森林", example: "There is a big forest.", exampleCn: "有一片大森林。", tags: ["自然", "四会词"] },
            { word: "river", phonetic: "/ˈrɪvər/", meaning: "河流", example: "There is a river in the park.", exampleCn: "公园里有一条河。", tags: ["自然", "四会词"] },
            { word: "lake", phonetic: "/leɪk/", meaning: "湖泊", example: "There is a lake near the village.", exampleCn: "村子附近有一个湖。", tags: ["自然", "四会词"] },
            { word: "mountain", phonetic: "/ˈmaʊntən/", meaning: "高山", example: "There is a high mountain.", exampleCn: "有一座高山。", tags: ["自然", "四会词"] },
            { word: "hill", phonetic: "/hɪl/", meaning: "小山", example: "There is a small hill.", exampleCn: "有一座小山。", tags: ["自然", "三会词"] },
            { word: "tree", phonetic: "/triː/", meaning: "树", example: "There are many trees.", exampleCn: "有很多树。", tags: ["自然", "四会词"] },
            { word: "bridge", phonetic: "/brɪdʒ/", meaning: "桥", example: "There is a bridge over the river.", exampleCn: "河上有一座桥。", tags: ["建筑", "三会词"] },
            { word: "building", phonetic: "/ˈbɪldɪŋ/", meaning: "建筑物", example: "There are many buildings.", exampleCn: "有很多建筑物。", tags: ["建筑", "三会词"] },
            { word: "village", phonetic: "/ˈvɪlɪdʒ/", meaning: "村庄", example: "There is a small village.", exampleCn: "有一个小村庄。", tags: ["地点", "四会词"] },
            { word: "house", phonetic: "/haʊs/", meaning: "房子", example: "There is a house near the lake.", exampleCn: "湖边有一栋房子。", tags: ["建筑", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "自然公园",
              content: [
                { en: "Is there a river in the nature park?", cn: "自然公园里有一条河吗？" },
                { en: "Yes, there is.", cn: "是的，有。" },
                { en: "Are there any bridges?", cn: "有桥吗？" },
                { en: "No, there aren't.", cn: "不，没有。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "公园里有什么",
              content: [
                { en: "What's in the nature park?", cn: "自然公园里有什么？" },
                { en: "There is a forest and a lake.", cn: "有一片森林和一个湖。" },
                { en: "Are there any mountains?", cn: "有山吗？" },
                { en: "Yes, there are. They are very high.", cn: "是的，有。它们很高。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 五年级下册 ====================
    '5-2': {
      semester: "下册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 My day",
          words: [
            { word: "exercise", phonetic: "/ˈeksərsaɪz/", meaning: "锻炼", example: "I do morning exercise every day.", exampleCn: "我每天做早操。", tags: ["日常", "四会词"] },
            { word: "morning", phonetic: "/ˈmɔːrnɪŋ/", meaning: "早上", example: "I get up in the morning.", exampleCn: "我早上起床。", tags: ["时间", "四会词"] },
            { word: "eat breakfast", phonetic: "/iːt ˈbrekfəst/", meaning: "吃早餐", example: "I eat breakfast at seven.", exampleCn: "我七点吃早餐。", tags: ["日常", "四会词"] },
            { word: "have class", phonetic: "/hæv klɑːs/", meaning: "上课", example: "I have class at eight.", exampleCn: "我八点上课。", tags: ["日常", "四会词"] },
            { word: "eat lunch", phonetic: "/iːt lʌntʃ/", meaning: "吃午餐", example: "I eat lunch at twelve.", exampleCn: "我十二点吃午餐。", tags: ["日常", "四会词"] },
            { word: "eat dinner", phonetic: "/iːt ˈdɪnər/", meaning: "吃晚餐", example: "I eat dinner at six.", exampleCn: "我六点吃晚餐。", tags: ["日常", "四会词"] },
            { word: "clean", phonetic: "/kliːn/", meaning: "打扫", example: "I clean my room on Saturday.", exampleCn: "我星期六打扫房间。", tags: ["日常", "三会词"] },
            { word: "go for a walk", phonetic: "/ɡəʊ fər ə wɔːk/", meaning: "散步", example: "I go for a walk after dinner.", exampleCn: "我晚饭后散步。", tags: ["日常", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "我的一天",
              content: [
                { en: "When do you get up?", cn: "你什么时候起床？" },
                { en: "I get up at six thirty.", cn: "我六点半起床。" },
                { en: "When do you eat breakfast?", cn: "你什么时候吃早餐？" },
                { en: "At seven o'clock.", cn: "七点。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "周末活动",
              content: [
                { en: "What do you do on the weekend?", cn: "你周末做什么？" },
                { en: "I often clean my room and go for a walk.", cn: "我经常打扫房间和散步。" },
                { en: "That sounds like fun!", cn: "听起来很有趣！" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My favourite season",
          words: [
            { word: "spring", phonetic: "/sprɪŋ/", meaning: "春天", example: "Spring is warm and beautiful.", exampleCn: "春天温暖又美丽。", tags: ["季节", "四会词"] },
            { word: "summer", phonetic: "/ˈsʌmər/", meaning: "夏天", example: "Summer is hot.", exampleCn: "夏天很热。", tags: ["季节", "四会词"] },
            { word: "autumn", phonetic: "/ˈɔːtəm/", meaning: "秋天", example: "Autumn is cool and nice.", exampleCn: "秋天凉爽又宜人。", tags: ["季节", "四会词"] },
            { word: "winter", phonetic: "/ˈwɪntər/", meaning: "冬天", example: "Winter is cold and snowy.", exampleCn: "冬天寒冷又下雪。", tags: ["季节", "四会词"] },
            { word: "season", phonetic: "/ˈsiːzn/", meaning: "季节", example: "What's your favourite season?", exampleCn: "你最喜欢的季节是什么？", tags: ["总称", "四会词"] },
            { word: "picnic", phonetic: "/ˈpɪknɪk/", meaning: "野餐", example: "I often go on a picnic in spring.", exampleCn: "我经常在春天去野餐。", tags: ["活动", "三会词"] },
            { word: "swim", phonetic: "/swɪm/", meaning: "游泳", example: "I can swim in summer.", exampleCn: "我夏天可以游泳。", tags: ["活动", "四会词"] },
            { word: "pick", phonetic: "/pɪk/", meaning: "摘", example: "I pick apples in autumn.", exampleCn: "我秋天摘苹果。", tags: ["动词", "三会词"] },
            { word: "snowman", phonetic: "/ˈsnəʊmæn/", meaning: "雪人", example: "I make a snowman in winter.", exampleCn: "我冬天堆雪人。", tags: ["活动", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "最喜欢的季节",
              content: [
                { en: "Which season do you like best?", cn: "你最喜欢哪个季节？" },
                { en: "I like spring best.", cn: "我最喜欢春天。" },
                { en: "Why?", cn: "为什么？" },
                { en: "Because the weather is warm. I can go on a picnic.", cn: "因为天气很暖和。我可以去野餐。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "夏天最好",
              content: [
                { en: "Do you like summer?", cn: "你喜欢夏天吗？" },
                { en: "Yes, I do. I can swim.", cn: "是的，我喜欢。我可以游泳。" },
                { en: "I like winter. I can make a snowman.", cn: "我喜欢冬天。我可以堆雪人。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 My school calendar",
          words: [
            { word: "January", phonetic: "/ˈdʒænjuəri/", meaning: "一月", example: "New Year's Day is in January.", exampleCn: "元旦在一月。", tags: ["月份", "四会词"] },
            { word: "February", phonetic: "/ˈfebruəri/", meaning: "二月", example: "February is short.", exampleCn: "二月很短。", tags: ["月份", "四会词"] },
            { word: "March", phonetic: "/mɑːrtʃ/", meaning: "三月", example: "Tree Planting Day is in March.", exampleCn: "植树节在三月。", tags: ["月份", "四会词"] },
            { word: "April", phonetic: "/ˈeɪprəl/", meaning: "四月", example: "It's warm in April.", exampleCn: "四月很温暖。", tags: ["月份", "四会词"] },
            { word: "May", phonetic: "/meɪ/", meaning: "五月", example: "Mother's Day is in May.", exampleCn: "母亲节在五月。", tags: ["月份", "四会词"] },
            { word: "June", phonetic: "/dʒuːn/", meaning: "六月", example: "Children's Day is in June.", exampleCn: "儿童节在六月。", tags: ["月份", "四会词"] },
            { word: "July", phonetic: "/dʒuˈlaɪ/", meaning: "七月", example: "Summer vacation starts in July.", exampleCn: "暑假从七月开始。", tags: ["月份", "三会词"] },
            { word: "August", phonetic: "/ˈɔːɡəst/", meaning: "八月", example: "It's hot in August.", exampleCn: "八月很热。", tags: ["月份", "三会词"] },
            { word: "September", phonetic: "/sepˈtembər/", meaning: "九月", example: "School starts in September.", exampleCn: "学校九月开学。", tags: ["月份", "四会词"] },
            { word: "October", phonetic: "/ɒkˈtəʊbər/", meaning: "十月", example: "National Day is in October.", exampleCn: "国庆节在十月。", tags: ["月份", "四会词"] },
            { word: "November", phonetic: "/nəʊˈvembər/", meaning: "十一月", example: "It's cool in November.", exampleCn: "十一月很凉爽。", tags: ["月份", "三会词"] },
            { word: "December", phonetic: "/dɪˈsembər/", meaning: "十二月", example: "Christmas is in December.", exampleCn: "圣诞节在十二月。", tags: ["月份", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "学校活动日历",
              content: [
                { en: "When is the sports meet?", cn: "运动会是什么时候？" },
                { en: "It's in April.", cn: "在四月。" },
                { en: "We have an Easter party in April too.", cn: "我们四月也有一个复活节聚会。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "特别的日子",
              content: [
                { en: "When is the school trip?", cn: "学校旅行是什么时候？" },
                { en: "It's in May.", cn: "在五月。" },
                { en: "Cool! I love May.", cn: "太棒了！我喜欢五月。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 When is the art show?",
          words: [
            { word: "first", phonetic: "/fɜːrst/", meaning: "第一", example: "May the first is the date.", exampleCn: "五月一日是日期。", tags: ["序数词", "四会词"] },
            { word: "second", phonetic: "/ˈsekənd/", meaning: "第二", example: "The second day of the week.", exampleCn: "一周的第二天。", tags: ["序数词", "四会词"] },
            { word: "third", phonetic: "/θɜːrd/", meaning: "第三", example: "March the third.", exampleCn: "三月三日。", tags: ["序数词", "四会词"] },
            { word: "fourth", phonetic: "/fɔːrθ/", meaning: "第四", example: "May the fourth.", exampleCn: "五月四日。", tags: ["序数词", "四会词"] },
            { word: "fifth", phonetic: "/fɪfθ/", meaning: "第五", example: "June the fifth.", exampleCn: "六月五日。", tags: ["序数词", "四会词"] },
            { word: "special", phonetic: "/ˈspeʃl/", meaning: "特别的", example: "Today is a special day.", exampleCn: "今天是个特别的日子。", tags: ["形容词", "三会词"] },
            { word: "kitten", phonetic: "/ˈkɪtn/", meaning: "小猫", example: "The kitten is small.", exampleCn: "小猫很小。", tags: ["动物", "三会词"] },
            { word: "diary", phonetic: "/ˈdaɪəri/", meaning: "日记", example: "I write a diary every day.", exampleCn: "我每天写日记。", tags: ["物品", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "活动日期",
              content: [
                { en: "When is the art show?", cn: "美术展是什么时候？" },
                { en: "It's on May first.", cn: "在五月一日。" },
                { en: "When is the singing contest?", cn: "歌唱比赛是什么时候？" },
                { en: "It's on May fifth.", cn: "在五月五日。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "特别的日子",
              content: [
                { en: "When is your birthday?", cn: "你的生日是什么时候？" },
                { en: "My birthday is on April 4th.", cn: "我的生日在四月四日。" },
                { en: "That's special!", cn: "那很特别！" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Whose dog is it?",
          words: [
            { word: "mine", phonetic: "/maɪn/", meaning: "我的", example: "The book is mine.", exampleCn: "这本书是我的。", tags: ["物主代词", "四会词"] },
            { word: "yours", phonetic: "/jʊrz/", meaning: "你的", example: "Is this pen yours?", exampleCn: "这支笔是你的吗？", tags: ["物主代词", "四会词"] },
            { word: "his", phonetic: "/hɪz/", meaning: "他的", example: "The ball is his.", exampleCn: "这个球是他的。", tags: ["物主代词", "四会词"] },
            { word: "hers", phonetic: "/hɜːrz/", meaning: "她的", example: "The dress is hers.", exampleCn: "这条裙子是她的。", tags: ["物主代词", "四会词"] },
            { word: "theirs", phonetic: "/ðeərz/", meaning: "他们的", example: "The room is theirs.", exampleCn: "这个房间是他们的。", tags: ["物主代词", "三会词"] },
            { word: "ours", phonetic: "/aʊərz/", meaning: "我们的", example: "The classroom is ours.", exampleCn: "这间教室是我们的。", tags: ["物主代词", "三会词"] },
            { word: "climbing", phonetic: "/ˈklaɪmɪŋ/", meaning: "正在爬", example: "The cat is climbing.", exampleCn: "猫正在爬。", tags: ["动词", "四会词"] },
            { word: "eating", phonetic: "/ˈiːtɪŋ/", meaning: "正在吃", example: "The dog is eating.", exampleCn: "狗正在吃。", tags: ["动词", "四会词"] },
            { word: "playing", phonetic: "/ˈpleɪɪŋ/", meaning: "正在玩", example: "The children are playing.", exampleCn: "孩子们正在玩。", tags: ["动词", "四会词"] },
            { word: "jumping", phonetic: "/ˈdʒʌmpɪŋ/", meaning: "正在跳", example: "The rabbit is jumping.", exampleCn: "兔子正在跳。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "这是谁的",
              content: [
                { en: "Whose dog is this?", cn: "这是谁的狗？" },
                { en: "It's mine.", cn: "它是我的。" },
                { en: "What is the dog doing?", cn: "狗在做什么？" },
                { en: "It's eating.", cn: "它正在吃。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "动物在做什么",
              content: [
                { en: "What are the elephants doing?", cn: "大象在做什么？" },
                { en: "They're eating.", cn: "它们正在吃。" },
                { en: "What about the monkey?", cn: "猴子呢？" },
                { en: "It's climbing the tree.", cn: "它正在爬树。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Work quietly!",
          words: [
            { word: "doing morning exercises", phonetic: "/ˈduːɪŋ ˈmɔːrnɪŋ ˈeksərsaɪzɪz/", meaning: "做早操", example: "They are doing morning exercises.", exampleCn: "他们正在做早操。", tags: ["活动", "四会词"] },
            { word: "having class", phonetic: "/ˈhævɪŋ klɑːs/", meaning: "上课", example: "We are having class.", exampleCn: "我们正在上课。", tags: ["活动", "四会词"] },
            { word: "eating lunch", phonetic: "/ˈiːtɪŋ lʌntʃ/", meaning: "吃午饭", example: "They are eating lunch.", exampleCn: "他们正在吃午饭。", tags: ["活动", "四会词"] },
            { word: "reading a book", phonetic: "/ˈriːdɪŋ ə bʊk/", meaning: "看书", example: "He is reading a book.", exampleCn: "他正在看书。", tags: ["活动", "三会词"] },
            { word: "listening to music", phonetic: "/ˈlɪsnɪŋ tuː ˈmjuːzɪk/", meaning: "听音乐", example: "She is listening to music.", exampleCn: "她正在听音乐。", tags: ["活动", "三会词"] },
            { word: "keep", phonetic: "/kiːp/", meaning: "保持", example: "Keep your desk clean.", exampleCn: "保持书桌干净。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "正在做什么",
              content: [
                { en: "What are they doing?", cn: "他们在做什么？" },
                { en: "They are doing morning exercises.", cn: "他们正在做早操。" },
                { en: "What about Chen Jie?", cn: "陈洁呢？" },
                { en: "She's reading a book.", cn: "她正在看书。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "保持安静",
              content: [
                { en: "Shh! Talk quietly.", cn: "嘘！小声说话。" },
                { en: "Keep your desk clean.", cn: "保持你的书桌干净。" },
                { en: "Work quietly!", cn: "安静地学习！" }
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
          unitId: "U1",
          unitName: "Unit 1 How can I get there?",
          words: [
            { word: "science museum", phonetic: "/ˈsaɪəns mjuːˈziːəm/", meaning: "科学博物馆", example: "I want to go to the science museum.", exampleCn: "我想去科学博物馆。", tags: ["地点", "四会词"] },
            { word: "post office", phonetic: "/pəʊst ˈɒfɪs/", meaning: "邮局", example: "The post office is near here.", exampleCn: "邮局就在这附近。", tags: ["地点", "四会词"] },
            { word: "bookstore", phonetic: "/ˈbʊkstɔːr/", meaning: "书店", example: "I buy books at the bookstore.", exampleCn: "我在书店买书。", tags: ["地点", "四会词"] },
            { word: "cinema", phonetic: "/ˈsɪnəmə/", meaning: "电影院", example: "Let's go to the cinema.", exampleCn: "我们去电影院吧。", tags: ["地点", "四会词"] },
            { word: "hospital", phonetic: "/ˈhɒspɪtl/", meaning: "医院", example: "The hospital is on Main Street.", exampleCn: "医院在主街上。", tags: ["地点", "四会词"] },
            { word: "crossing", phonetic: "/ˈkrɒsɪŋ/", meaning: "十字路口", example: "Turn left at the crossing.", exampleCn: "在十字路口左转。", tags: ["方位", "四会词"] },
            { word: "turn", phonetic: "/tɜːrn/", meaning: "转弯", example: "Turn right at the park.", exampleCn: "在公园右转。", tags: ["动词", "四会词"] },
            { word: "straight", phonetic: "/streɪt/", meaning: "笔直地", example: "Go straight.", exampleCn: "直走。", tags: ["方位", "四会词"] },
            { word: "near", phonetic: "/nɪər/", meaning: "在...附近", example: "The school is near my home.", exampleCn: "学校在我家附近。", tags: ["方位", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "博物馆在哪",
              content: [
                { en: "How can I get to the museum?", cn: "我怎么去博物馆？" },
                { en: "Go straight and turn left.", cn: "直走然后左转。" },
                { en: "Is it far?", cn: "它远吗？" },
                { en: "No, it's near.", cn: "不远，它就在附近。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "问路",
              content: [
                { en: "Excuse me. Where is the post office?", cn: "打扰一下。邮局在哪里？" },
                { en: "It's next to the cinema.", cn: "它在电影院旁边。" },
                { en: "How can I get there?", cn: "我怎么去那里？" },
                { en: "Turn right at the crossing.", cn: "在十字路口右转。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 Ways to go to school",
          words: [
            { word: "on foot", phonetic: "/ɒn fʊt/", meaning: "步行", example: "I go to school on foot.", exampleCn: "我步行去上学。", tags: ["交通", "四会词"] },
            { word: "by bus", phonetic: "/baɪ bʌs/", meaning: "乘公共汽车", example: "I go to school by bus.", exampleCn: "我乘公共汽车去上学。", tags: ["交通", "四会词"] },
            { word: "by taxi", phonetic: "/baɪ ˈtæksi/", meaning: "乘出租车", example: "I go home by taxi.", exampleCn: "我乘出租车回家。", tags: ["交通", "三会词"] },
            { word: "by plane", phonetic: "/baɪ pleɪn/", meaning: "乘飞机", example: "I go to Beijing by plane.", exampleCn: "我乘飞机去北京。", tags: ["交通", "三会词"] },
            { word: "by ship", phonetic: "/baɪ ʃɪp/", meaning: "乘船", example: "I go to the island by ship.", exampleCn: "我乘船去那个岛。", tags: ["交通", "三会词"] },
            { word: "by subway", phonetic: "/baɪ ˈsʌbweɪ/", meaning: "乘地铁", example: "I go to school by subway.", exampleCn: "我乘地铁去上学。", tags: ["交通", "四会词"] },
            { word: "by train", phonetic: "/baɪ treɪn/", meaning: "乘火车", example: "I go to Shanghai by train.", exampleCn: "我乘火车去上海。", tags: ["交通", "四会词"] },
            { word: "by bike", phonetic: "/baɪ baɪk/", meaning: "骑自行车", example: "I go to the park by bike.", exampleCn: "我骑自行车去公园。", tags: ["交通", "四会词"] },
            { word: "slow down", phonetic: "/sləʊ daʊn/", meaning: "减速", example: "Slow down and stop.", exampleCn: "减速并停下。", tags: ["动词", "四会词"] },
            { word: "stop", phonetic: "/stɒp/", meaning: "停止", example: "Stop at a red light.", exampleCn: "红灯停。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你怎么去学校",
              content: [
                { en: "How do you come to school?", cn: "你怎么来学校？" },
                { en: "I come by bus.", cn: "我乘公共汽车来。" },
                { en: "What about you?", cn: "你呢？" },
                { en: "I come on foot.", cn: "我步行来。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "交通规则",
              content: [
                { en: "Don't go at the red light!", cn: "红灯别走！" },
                { en: "I must stop and wait.", cn: "我必须停下来等。" },
                { en: "Slow down at the yellow light.", cn: "黄灯减速。" },
                { en: "Go at the green light.", cn: "绿灯行。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 My weekend plan",
          words: [
            { word: "visit", phonetic: "/ˈvɪzɪt/", meaning: "拜访", example: "I will visit my grandparents.", exampleCn: "我将去拜访我的祖父母。", tags: ["动词", "四会词"] },
            { word: "film", phonetic: "/fɪlm/", meaning: "电影", example: "I will see a film.", exampleCn: "我将去看电影。", tags: ["娱乐", "四会词"] },
            { word: "see a film", phonetic: "/siː ə fɪlm/", meaning: "看电影", example: "Let's see a film.", exampleCn: "我们去看电影吧。", tags: ["娱乐", "四会词"] },
            { word: "trip", phonetic: "/trɪp/", meaning: "旅行", example: "I will take a trip.", exampleCn: "我将去旅行。", tags: ["活动", "四会词"] },
            { word: "take a trip", phonetic: "/teɪk ə trɪp/", meaning: "去旅行", example: "I will take a trip next week.", exampleCn: "我下周去旅行。", tags: ["活动", "四会词"] },
            { word: "supermarket", phonetic: "/ˈsuːpərmɑːrkɪt/", meaning: "超市", example: "I go to the supermarket.", exampleCn: "我去超市。", tags: ["地点", "四会词"] },
            { word: "tonight", phonetic: "/təˈnaɪt/", meaning: "今晚", example: "I will study tonight.", exampleCn: "我今晚学习。", tags: ["时间", "四会词"] },
            { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", meaning: "明天", example: "I will go tomorrow.", exampleCn: "我明天去。", tags: ["时间", "四会词"] },
            { word: "dictionary", phonetic: "/ˈdɪkʃənəri/", meaning: "词典", example: "I will buy a dictionary.", exampleCn: "我将买一本词典。", tags: ["物品", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "周末计划",
              content: [
                { en: "What are you going to do tomorrow?", cn: "你明天打算做什么？" },
                { en: "I'm going to take a trip.", cn: "我打算去旅行。" },
                { en: "When are you going?", cn: "你什么时候去？" },
                { en: "Next week.", cn: "下周。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "今晚做什么",
              content: [
                { en: "What are you going to do tonight?", cn: "你今晚打算做什么？" },
                { en: "I'm going to see a film.", cn: "我打算去看电影。" },
                { en: "Can I go with you?", cn: "我能和你一起去吗？" },
                { en: "Sure!", cn: "当然！" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 I have a pen pal",
          words: [
            { word: "hobby", phonetic: "/ˈhɒbi/", meaning: "爱好", example: "What's your hobby?", exampleCn: "你的爱好是什么？", tags: ["活动", "四会词"] },
            { word: "jasmine", phonetic: "/ˈdʒæzmɪn/", meaning: "茉莉", example: "I like jasmine.", exampleCn: "我喜欢茉莉。", tags: ["植物", "三会词"] },
            { word: "idea", phonetic: "/aɪˈdɪə/", meaning: "主意", example: "That's a good idea!", exampleCn: "那是个好主意！", tags: ["名词", "三会词"] },
            { word: "pen pal", phonetic: "/pen pæl/", meaning: "笔友", example: "I have a pen pal from Australia.", exampleCn: "我有一个来自澳大利亚的笔友。", tags: ["人物", "四会词"] },
            { word: "dancing", phonetic: "/ˈdænsɪŋ/", meaning: "跳舞", example: "I like dancing.", exampleCn: "我喜欢跳舞。", tags: ["爱好", "四会词"] },
            { word: "reading", phonetic: "/ˈriːdɪŋ/", meaning: "阅读", example: "I like reading stories.", exampleCn: "我喜欢看故事。", tags: ["爱好", "四会词"] },
            { word: "singing", phonetic: "/ˈsɪŋɪŋ/", meaning: "唱歌", example: "She likes singing.", exampleCn: "她喜欢唱歌。", tags: ["爱好", "三会词"] },
            { word: "kung fu", phonetic: "/ˌkʌŋ ˈfuː/", meaning: "功夫", example: "He likes doing kung fu.", exampleCn: "他喜欢练功夫。", tags: ["爱好", "三会词"] },
            { word: "playing football", phonetic: "/ˈpleɪɪŋ ˈfʊtbɔːl/", meaning: "踢足球", example: "He likes playing football.", exampleCn: "他喜欢踢足球。", tags: ["爱好", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "我的笔友",
              content: [
                { en: "I have a new pen pal.", cn: "我有一个新笔友。" },
                { en: "Really? What's his name?", cn: "真的吗？他叫什么名字？" },
                { en: "His name is Peter.", cn: "他的名字叫彼得。" },
                { en: "What are his hobbies?", cn: "他的爱好是什么？" },
                { en: "He likes reading and doing kung fu.", cn: "他喜欢阅读和练功夫。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "笔友的爱好",
              content: [
                { en: "Does he like singing?", cn: "他喜欢唱歌吗？" },
                { en: "No, he doesn't. He likes playing football.", cn: "不，他不喜欢。他喜欢踢足球。" },
                { en: "What about you?", cn: "你呢？" },
                { en: "I like dancing.", cn: "我喜欢跳舞。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 What does he do?",
          words: [
            { word: "factory", phonetic: "/ˈfæktəri/", meaning: "工厂", example: "He works in a factory.", exampleCn: "他在工厂工作。", tags: ["地点", "四会词"] },
            { word: "worker", phonetic: "/ˈwɜːrkər/", meaning: "工人", example: "My father is a worker.", exampleCn: "我爸爸是一名工人。", tags: ["职业", "四会词"] },
            { word: "postman", phonetic: "/ˈpəʊstmən/", meaning: "邮递员", example: "He is a postman.", exampleCn: "他是一名邮递员。", tags: ["职业", "三会词"] },
            { word: "businessman", phonetic: "/ˈbɪznɪsmæn/", meaning: "商人", example: "My uncle is a businessman.", exampleCn: "我叔叔是一名商人。", tags: ["职业", "三会词"] },
            { word: "police officer", phonetic: "/pəˈliːs ˈɒfɪsər/", meaning: "警察", example: "She is a police officer.", exampleCn: "她是一名警察。", tags: ["职业", "三会词"] },
            { word: "fisherman", phonetic: "/ˈfɪʃərmən/", meaning: "渔民", example: "My grandpa is a fisherman.", exampleCn: "我爷爷是一名渔民。", tags: ["职业", "三会词"] },
            { word: "scientist", phonetic: "/ˈsaɪəntɪst/", meaning: "科学家", example: "She wants to be a scientist.", exampleCn: "她想成为一名科学家。", tags: ["职业", "三会词"] },
            { word: "pilot", phonetic: "/ˈpaɪlət/", meaning: "飞行员", example: "He is a pilot.", exampleCn: "他是一名飞行员。", tags: ["职业", "三会词"] },
            { word: "coach", phonetic: "/kəʊtʃ/", meaning: "教练", example: "He is a football coach.", exampleCn: "他是一名足球教练。", tags: ["职业", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你爸爸做什么工作",
              content: [
                { en: "What does your father do?", cn: "你爸爸是做什么工作的？" },
                { en: "He's a teacher.", cn: "他是一名老师。" },
                { en: "Where does he work?", cn: "他在哪里工作？" },
                { en: "He works at a school.", cn: "他在一所学校工作。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "她的工作",
              content: [
                { en: "What does your aunt do?", cn: "你姑姑做什么工作？" },
                { en: "She's a nurse.", cn: "她是一名护士。" },
                { en: "Where does she work?", cn: "她在哪里工作？" },
                { en: "She works in a hospital.", cn: "她在一家医院工作。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 How do you feel?",
          words: [
            { word: "angry", phonetic: "/ˈæŋɡri/", meaning: "生气的", example: "He is angry.", exampleCn: "他很生气。", tags: ["情感", "四会词"] },
            { word: "afraid", phonetic: "/əˈfreɪd/", meaning: "害怕的", example: "She is afraid of the dog.", exampleCn: "她害怕这只狗。", tags: ["情感", "四会词"] },
            { word: "sad", phonetic: "/sæd/", meaning: "伤心的", example: "He is sad.", exampleCn: "他很伤心。", tags: ["情感", "四会词"] },
            { word: "worried", phonetic: "/ˈwʌrid/", meaning: "担心的", example: "She looks worried.", exampleCn: "她看起来很担心。", tags: ["情感", "三会词"] },
            { word: "happy", phonetic: "/ˈhæpi/", meaning: "高兴的", example: "I am happy today.", exampleCn: "我今天很高兴。", tags: ["情感", "四会词"] },
            { word: "ill", phonetic: "/ɪl/", meaning: "生病的", example: "He is ill.", exampleCn: "他生病了。", tags: ["健康", "四会词"] },
            { word: "see a doctor", phonetic: "/siː ə ˈdɒktər/", meaning: "看医生", example: "You should see a doctor.", exampleCn: "你应该去看医生。", tags: ["健康", "四会词"] },
            { word: "wear", phonetic: "/weər/", meaning: "穿", example: "Wear warm clothes.", exampleCn: "穿暖和的衣服。", tags: ["动词", "三会词"] },
            { word: "more", phonetic: "/mɔːr/", meaning: "更多的", example: "Do more exercise.", exampleCn: "多做运动。", tags: ["形容词", "三会词"] },
            { word: "deep", phonetic: "/diːp/", meaning: "深的", example: "Take a deep breath.", exampleCn: "深呼吸。", tags: ["形容词", "三会词"] },
            { word: "chase", phonetic: "/tʃeɪs/", meaning: "追赶", example: "The cat is chasing the mouse.", exampleCn: "猫正在追老鼠。", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你感觉怎么样",
              content: [
                { en: "How do you feel?", cn: "你感觉怎么样？" },
                { en: "I'm happy.", cn: "我很高兴。" },
                { en: "Why?", cn: "为什么？" },
                { en: "Because I'm going to see a film.", cn: "因为我打算去看电影。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "他怎么了",
              content: [
                { en: "Sam is ill.", cn: "萨姆生病了。" },
                { en: "How does he feel?", cn: "他感觉怎么样？" },
                { en: "He's sad.", cn: "他很伤心。" },
                { en: "He should see a doctor.", cn: "他应该去看医生。" }
              ]
            }
          ]
        }
      ]
    },
    // ==================== 六年级下册 ====================
    '6-2': {
      semester: "下册",
      units: [
        {
          unitId: "U1",
          unitName: "Unit 1 How tall are you?",
          words: [
            { word: "younger", phonetic: "/ˈjʌŋɡər/", meaning: "更年轻的", example: "She is younger than me.", exampleCn: "她比我年轻。", tags: ["比较级", "四会词"] },
            { word: "older", phonetic: "/ˈəʊldər/", meaning: "更年长的", example: "He is older than me.", exampleCn: "他比我年长。", tags: ["比较级", "四会词"] },
            { word: "taller", phonetic: "/ˈtɔːlər/", meaning: "更高的", example: "You are taller than me.", exampleCn: "你比我高。", tags: ["比较级", "四会词"] },
            { word: "shorter", phonetic: "/ˈʃɔːrtər/", meaning: "更矮的", example: "She is shorter than him.", exampleCn: "她比他矮。", tags: ["比较级", "四会词"] },
            { word: "longer", phonetic: "/ˈlɒŋɡər/", meaning: "更长的", example: "Your hair is longer than mine.", exampleCn: "你的头发比我的长。", tags: ["比较级", "四会词"] },
            { word: "thinner", phonetic: "/ˈθɪnər/", meaning: "更瘦的", example: "She is thinner than me.", exampleCn: "她比我瘦。", tags: ["比较级", "四会词"] },
            { word: "heavier", phonetic: "/ˈheviər/", meaning: "更重的", example: "I am heavier than her.", exampleCn: "我比她重。", tags: ["比较级", "四会词"] },
            { word: "bigger", phonetic: "/ˈbɪɡər/", meaning: "更大的", example: "Your bag is bigger than mine.", exampleCn: "你的书包比我的大。", tags: ["比较级", "四会词"] },
            { word: "smaller", phonetic: "/ˈsmɔːlər/", meaning: "更小的", example: "My feet are smaller than yours.", exampleCn: "我的脚比你的小。", tags: ["比较级", "四会词"] },
            { word: "stronger", phonetic: "/ˈstrɒŋɡər/", meaning: "更强壮的", example: "He is stronger than me.", exampleCn: "他比我强壮。", tags: ["比较级", "四会词"] },
            { word: "dinosaur", phonetic: "/ˈdaɪnəsɔːr/", meaning: "恐龙", example: "The dinosaur is very tall.", exampleCn: "恐龙很高。", tags: ["动物", "三会词"] },
            { word: "hall", phonetic: "/hɔːl/", meaning: "大厅", example: "The hall is very big.", exampleCn: "大厅很大。", tags: ["地点", "三会词"] },
            { word: "metre", phonetic: "/ˈmiːtər/", meaning: "米", example: "The dinosaur is 4 metres tall.", exampleCn: "恐龙有4米高。", tags: ["单位", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你有多高",
              content: [
                { en: "How tall are you?", cn: "你有多高？" },
                { en: "I'm 1.6 metres.", cn: "我1.6米。" },
                { en: "I'm taller!", cn: "我更高！" },
                { en: "You're taller than me.", cn: "你比我高。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "比较",
              content: [
                { en: "How heavy are you?", cn: "你有多重？" },
                { en: "I'm 48 kilograms.", cn: "我48公斤。" },
                { en: "I'm heavier than you.", cn: "我比你重。" },
                { en: "Your feet are bigger than mine.", cn: "你的脚比我的大。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 Last weekend",
          words: [
            { word: "cleaned", phonetic: "/kliːnd/", meaning: "打扫了", example: "I cleaned my room last weekend.", exampleCn: "我上周末打扫了房间。", tags: ["过去式", "四会词"] },
            { word: "stayed", phonetic: "/steɪd/", meaning: "待了", example: "I stayed at home.", exampleCn: "我待在家里。", tags: ["过去式", "四会词"] },
            { word: "washed", phonetic: "/wɒʃt/", meaning: "洗了", example: "I washed my clothes.", exampleCn: "我洗了衣服。", tags: ["过去式", "四会词"] },
            { word: "watched", phonetic: "/wɒtʃt/", meaning: "看了", example: "I watched TV last night.", exampleCn: "我昨晚看了电视。", tags: ["过去式", "四会词"] },
            { word: "had", phonetic: "/hæd/", meaning: "有了/吃了", example: "I had a cold.", exampleCn: "我感冒了。", tags: ["过去式", "四会词"] },
            { word: "read", phonetic: "/red/", meaning: "读了", example: "I read a book yesterday.", exampleCn: "我昨天看了一本书。", tags: ["过去式", "四会词"] },
            { word: "saw", phonetic: "/sɔː/", meaning: "看见了", example: "I saw a film last night.", exampleCn: "我昨晚看了一部电影。", tags: ["过去式", "三会词"] },
            { word: "slept", phonetic: "/slept/", meaning: "睡了", example: "I slept early yesterday.", exampleCn: "我昨天睡得很早。", tags: ["过去式", "三会词"] },
            { word: "last weekend", phonetic: "/lɑːst ˌwiːkˈend/", meaning: "上周末", example: "What did you do last weekend?", exampleCn: "你上周末做了什么？", tags: ["时间", "四会词"] },
            { word: "yesterday", phonetic: "/ˈjestərdeɪ/", meaning: "昨天", example: "I was busy yesterday.", exampleCn: "我昨天很忙。", tags: ["时间", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "上周末做了什么",
              content: [
                { en: "How was your weekend?", cn: "你周末过得怎么样？" },
                { en: "It was good, thanks.", cn: "很好，谢谢。" },
                { en: "What did you do?", cn: "你做了什么？" },
                { en: "I stayed at home and watched TV.", cn: "我待在家里看了电视。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "昨天做了什么",
              content: [
                { en: "What did you do yesterday?", cn: "你昨天做了什么？" },
                { en: "I cleaned my room and washed my clothes.", cn: "我打扫了房间，洗了衣服。" },
                { en: "Did you see a film?", cn: "你看电影了吗？" },
                { en: "No, I slept early.", cn: "没有，我早睡了。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Where did you go?",
          words: [
            { word: "went", phonetic: "/went/", meaning: "去了", example: "I went to Turpan.", exampleCn: "我去了吐鲁番。", tags: ["过去式", "四会词"] },
            { word: "rode", phonetic: "/rəʊd/", meaning: "骑了", example: "I rode a horse.", exampleCn: "我骑了马。", tags: ["过去式", "四会词"] },
            { word: "hurt", phonetic: "/hɜːrt/", meaning: "受伤了", example: "I hurt my foot.", exampleCn: "我的脚受伤了。", tags: ["过去式", "三会词"] },
            { word: "ate", phonetic: "/eɪt/", meaning: "吃了", example: "I ate fresh grapes.", exampleCn: "我吃了新鲜的葡萄。", tags: ["过去式", "四会词"] },
            { word: "took", phonetic: "/tʊk/", meaning: "拍了/拿了", example: "I took many pictures.", exampleCn: "我拍了很多照片。", tags: ["过去式", "四会词"] },
            { word: "picture", phonetic: "/ˈpɪktʃər/", meaning: "照片", example: "I took pictures of the beach.", exampleCn: "我拍了海滩的照片。", tags: ["物品", "四会词"] },
            { word: "bought", phonetic: "/bɔːt/", meaning: "买了", example: "I bought a gift.", exampleCn: "我买了一份礼物。", tags: ["过去式", "四会词"] },
            { word: "gift", phonetic: "/ɡɪft/", meaning: "礼物", example: "I bought a gift for my friend.", exampleCn: "我给朋友买了一份礼物。", tags: ["物品", "三会词"] },
            { word: "Turpan", phonetic: "/ˈtʊrpæn/", meaning: "吐鲁番", example: "I went to Turpan last holiday.", exampleCn: "我上个假期去了吐鲁番。", tags: ["地点", "三会词"] },
            { word: "mule", phonetic: "/mjuːl/", meaning: "骡子", example: "I rode a mule.", exampleCn: "我骑了骡子。", tags: ["动物", "三会词"] },
            { word: "camel", phonetic: "/ˈkæml/", meaning: "骆驼", example: "I saw a camel.", exampleCn: "我看见了一只骆驼。", tags: ["动物", "三会词"] },
            { word: "beach", phonetic: "/biːtʃ/", meaning: "海滩", example: "We went to the beach.", exampleCn: "我们去了海滩。", tags: ["地点", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "假期去哪了",
              content: [
                { en: "Where did you go over the holiday?", cn: "你假期去了哪里？" },
                { en: "I went to Turpan.", cn: "我去了吐鲁番。" },
                { en: "How did you go there?", cn: "你怎么去的？" },
                { en: "I went by plane.", cn: "我坐飞机去的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "假期活动",
              content: [
                { en: "What did you do there?", cn: "你在那里做了什么？" },
                { en: "I rode a horse and took pictures.", cn: "我骑了马，拍了照片。" },
                { en: "Did you eat fresh grapes?", cn: "你吃了新鲜葡萄吗？" },
                { en: "Yes, I did. They were delicious!", cn: "是的，它们很美味！" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 Then and now",
          words: [
            { word: "ago", phonetic: "/əˈɡəʊ/", meaning: "以前", example: "Many years ago.", exampleCn: "很多年以前。", tags: ["时间", "四会词"] },
            { word: "cycling", phonetic: "/ˈsaɪklɪŋ/", meaning: "骑自行车", example: "I like cycling now.", exampleCn: "我现在喜欢骑自行车。", tags: ["活动", "三会词"] },
            { word: "ice-skate", phonetic: "/aɪs skeɪt/", meaning: "滑冰", example: "I couldn't ice-skate before.", exampleCn: "我以前不会滑冰。", tags: ["活动", "三会词"] },
            { word: "badminton", phonetic: "/ˈbædmɪntən/", meaning: "羽毛球", example: "I play badminton every week.", exampleCn: "我每周打羽毛球。", tags: ["运动", "三会词"] },
            { word: "star", phonetic: "/stɑːr/", meaning: "星星", example: "There were no stars in the sky.", exampleCn: "天空中没有星星。", tags: ["自然", "三会词"] },
            { word: "easy", phonetic: "/ˈiːzi/", meaning: "容易的", example: "It was not easy before.", exampleCn: "以前这并不容易。", tags: ["形容词", "三会词"] },
            { word: "look up", phonetic: "/lʊk ʌp/", meaning: "查阅", example: "I look up words in the dictionary.", exampleCn: "我在词典里查单词。", tags: ["动词", "三会词"] },
            { word: "Internet", phonetic: "/ˈɪntərnet/", meaning: "互联网", example: "There was no Internet many years ago.", exampleCn: "很多年前没有互联网。", tags: ["科技", "三会词"] },
            { word: "different", phonetic: "/ˈdɪfrənt/", meaning: "不同的", example: "Now I am different.", exampleCn: "现在我变了。", tags: ["形容词", "三会词"] },
            { word: "active", phonetic: "/ˈæktɪv/", meaning: "活跃的", example: "She was quiet before, but now she is active.", exampleCn: "她以前很安静，但现在很活跃。", tags: ["形容词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "过去和现在",
              content: [
                { en: "There was no Internet many years ago.", cn: "很多年前没有互联网。" },
                { en: "Now we have the Internet.", cn: "现在我们有了互联网。" },
                { en: "How do you look up new words now?", cn: "你现在怎么查生词？" },
                { en: "I use the Internet.", cn: "我用互联网。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "我变了",
              content: [
                { en: "Before, I was quiet. Now, I'm active.", cn: "以前我很安静，现在我很活跃。" },
                { en: "I didn't like sports before.", cn: "我以前不喜欢运动。" },
                { en: "But now I go cycling every day!", cn: "但现在我每天骑自行车！" },
                { en: "I couldn't play badminton before, but now I can!", cn: "我以前不会打羽毛球，但现在我会了！" }
              ]
            }
          ]
        }
      ]
    }
  }
};
