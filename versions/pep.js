// 人教版 (PEP) 英语教材数据 - 三年级起点（完整版）
// 依据最新教材编写，包含 3-6 年级上下册所有单元的单词和课文
const pepData = {
  versionId: "pep",
  versionName: "人教版 PEP",
  description: "人民教育出版社 | 三年级起点 | 全国使用最广 | 含上下册",
  startGrade: 3,
  lastUpdated: "2026-01",
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
            { word: "book", phonetic: "/bʊk/", meaning: "书", example: "I have a book.", exampleCn: "我有一本书。", tags: ["文具", "四会词"] },
            { word: "no", phonetic: "/nəʊ/", meaning: "不", example: "No, thank you.", exampleCn: "不，谢谢。", tags: ["基础", "四会词"] },
            { word: "your", phonetic: "/jɔːr/", meaning: "你的", example: "What's your name?", exampleCn: "你叫什么名字？", tags: ["代词", "四会词"] }
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
            },
            {
              lesson: "Part C Story time",
              title: "Zoom 和 Zip 的故事",
              content: [
                { en: "Hello, I'm Zoom.", cn: "你好，我是 Zoom。" },
                { en: "Hi, I'm Zip.", cn: "嗨，我是 Zip。" },
                { en: "Let's play!", cn: "我们一起玩吧！" },
                { en: "OK!", cn: "好的！" }
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
            { word: "brown", phonetic: "/braʊn/", meaning: "棕色", example: "The bear is brown.", exampleCn: "熊是棕色的。", tags: ["颜色", "三会词"] },
            { word: "OK", phonetic: "/ˌəʊˈkeɪ/", meaning: "好", example: "OK, let's go.", exampleCn: "好的，我们走吧。", tags: ["基础", "四会词"] },
            { word: "mum", phonetic: "/mʌm/", meaning: "妈妈", example: "This is my mum.", exampleCn: "这是我的妈妈。", tags: ["家人", "三会词"] }
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
                { en: "Good afternoon!", cn: "下午好！" },
                { en: "I see red.", cn: "我看见红色。" },
                { en: "I see green.", cn: "我看见绿色。" }
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
            { word: "nose", phonetic: "/nəʊz/", meaning: "鼻子", example: "Touch your nose.", exampleCn: "摸摸你的鼻子。", tags: ["身体", "四会词"] },
            { word: "mouth", phonetic: "/maʊθ/", meaning: "嘴巴", example: "Open your mouth.", exampleCn: "张开你的嘴巴。", tags: ["身体", "四会词"] },
            { word: "arm", phonetic: "/ɑːm/", meaning: "胳膊", example: "Wave your arm.", exampleCn: "挥挥你的胳膊。", tags: ["身体", "三会词"] },
            { word: "hand", phonetic: "/hænd/", meaning: "手", example: "Clap your hands.", exampleCn: "拍拍你的手。", tags: ["身体", "四会词"] },
            { word: "head", phonetic: "/hed/", meaning: "头", example: "Touch your head.", exampleCn: "摸摸你的头。", tags: ["身体", "四会词"] },
            { word: "body", phonetic: "/ˈbɒdi/", meaning: "身体", example: "Shake your body.", exampleCn: "摇摇你的身体。", tags: ["身体", "三会词"] },
            { word: "leg", phonetic: "/leɡ/", meaning: "腿", example: "Stamp your leg.", exampleCn: "跺跺你的腿。", tags: ["身体", "三会词"] },
            { word: "foot", phonetic: "/fʊt/", meaning: "脚", example: "Stamp your foot.", exampleCn: "跺跺你的脚。", tags: ["身体", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "问候",
              content: [
                { en: "How are you?", cn: "你好吗？" },
                { en: "I'm fine, thank you.", cn: "我很好，谢谢。" },
                { en: "Let's go to school!", cn: "我们一起去上学吧！" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "做动作",
              content: [
                { en: "Look at me!", cn: "看着我！" },
                { en: "This is my nose.", cn: "这是我的鼻子。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 We love animals",
          words: [
            { word: "duck", phonetic: "/dʌk/", meaning: "鸭子", example: "The duck is swimming.", exampleCn: "鸭子在游泳。", tags: ["动物", "四会词"] },
            { word: "pig", phonetic: "/pɪɡ/", meaning: "猪", example: "The pig is fat.", exampleCn: "猪很胖。", tags: ["动物", "四会词"] },
            { word: "cat", phonetic: "/kæt/", meaning: "猫", example: "The cat is cute.", exampleCn: "猫很可爱。", tags: ["动物", "四会词"] },
            { word: "dog", phonetic: "/dɒɡ/", meaning: "狗", example: "I have a dog.", exampleCn: "我有一只狗。", tags: ["动物", "四会词"] },
            { word: "elephant", phonetic: "/ˈelɪfənt/", meaning: "大象", example: "The elephant is big.", exampleCn: "大象很大。", tags: ["动物", "四会词"] },
            { word: "monkey", phonetic: "/ˈmʌŋki/", meaning: "猴子", example: "The monkey is funny.", exampleCn: "猴子很有趣。", tags: ["动物", "四会词"] },
            { word: "bird", phonetic: "/bɜːrd/", meaning: "鸟", example: "The bird can fly.", exampleCn: "鸟会飞。", tags: ["动物", "四会词"] },
            { word: "tiger", phonetic: "/ˈtaɪɡər/", meaning: "老虎", example: "The tiger is strong.", exampleCn: "老虎很强壮。", tags: ["动物", "三会词"] },
            { word: "panda", phonetic: "/ˈpændə/", meaning: "熊猫", example: "The panda is cute.", exampleCn: "熊猫很可爱。", tags: ["动物", "三会词"] },
            { word: "zoo", phonetic: "/zuː/", meaning: "动物园", example: "Let's go to the zoo.", exampleCn: "我们去动物园吧。", tags: ["地点", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "这是什么动物",
              content: [
                { en: "What's this?", cn: "这是什么？" },
                { en: "It's a duck.", cn: "它是一只鸭子。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "在动物园",
              content: [
                { en: "Look! A funny dog!", cn: "看！一只有趣的狗！" },
                { en: "Oh no! It's a pig!", cn: "哦不！它是一头猪！" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Let's eat!",
          words: [
            { word: "bread", phonetic: "/bred/", meaning: "面包", example: "I eat bread for breakfast.", exampleCn: "我早餐吃面包。", tags: ["食物", "四会词"] },
            { word: "juice", phonetic: "/dʒuːs/", meaning: "果汁", example: "I like apple juice.", exampleCn: "我喜欢苹果汁。", tags: ["饮料", "四会词"] },
            { word: "egg", phonetic: "/eɡ/", meaning: "鸡蛋", example: "I eat an egg.", exampleCn: "我吃一个鸡蛋。", tags: ["食物", "四会词"] },
            { word: "milk", phonetic: "/mɪlk/", meaning: "牛奶", example: "I drink milk.", exampleCn: "我喝牛奶。", tags: ["饮料", "四会词"] },
            { word: "water", phonetic: "/ˈwɔːtər/", meaning: "水", example: "I drink water.", exampleCn: "我喝水。", tags: ["饮料", "四会词"] },
            { word: "cake", phonetic: "/keɪk/", meaning: "蛋糕", example: "This is a birthday cake.", exampleCn: "这是一个生日蛋糕。", tags: ["食物", "三会词"] },
            { word: "fish", phonetic: "/fɪʃ/", meaning: "鱼", example: "I like fish.", exampleCn: "我喜欢鱼。", tags: ["食物", "三会词"] },
            { word: "rice", phonetic: "/raɪs/", meaning: "米饭", example: "I eat rice.", exampleCn: "我吃米饭。", tags: ["食物", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "请吃东西",
              content: [
                { en: "Have some bread.", cn: "吃点面包吧。" },
                { en: "Thanks.", cn: "谢谢。" },
                { en: "Can I have some juice, please?", cn: "请给我一些果汁好吗？" },
                { en: "Here you are.", cn: "给你。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "我饿了",
              content: [
                { en: "I'm hungry.", cn: "我饿了。" },
                { en: "Have some fish.", cn: "吃点鱼吧。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Happy birthday!",
          words: [
            { word: "one", phonetic: "/wʌn/", meaning: "一", example: "I have one book.", exampleCn: "我有一本书。", tags: ["数字", "四会词"] },
            { word: "two", phonetic: "/tuː/", meaning: "二", example: "I have two pens.", exampleCn: "我有两支钢笔。", tags: ["数字", "四会词"] },
            { word: "three", phonetic: "/θriː/", meaning: "三", example: "I have three books.", exampleCn: "我有三本书。", tags: ["数字", "四会词"] },
            { word: "four", phonetic: "/fɔːr/", meaning: "四", example: "I have four pencils.", exampleCn: "我有四支铅笔。", tags: ["数字", "四会词"] },
            { word: "five", phonetic: "/faɪv/", meaning: "五", example: "I have five fingers.", exampleCn: "我有五根手指。", tags: ["数字", "四会词"] },
            { word: "six", phonetic: "/sɪks/", meaning: "六", example: "I have six crayons.", exampleCn: "我有六支蜡笔。", tags: ["数字", "四会词"] },
            { word: "seven", phonetic: "/ˈsevn/", meaning: "七", example: "Seven days a week.", exampleCn: "一周七天。", tags: ["数字", "四会词"] },
            { word: "eight", phonetic: "/eɪt/", meaning: "八", example: "I have eight toys.", exampleCn: "我有八个玩具。", tags: ["数字", "四会词"] },
            { word: "nine", phonetic: "/naɪn/", meaning: "九", example: "Nine cats are sleeping.", exampleCn: "九只猫在睡觉。", tags: ["数字", "四会词"] },
            { word: "ten", phonetic: "/ten/", meaning: "十", example: "I have ten fingers.", exampleCn: "我有十根手指。", tags: ["数字", "四会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "哥哥/弟弟", example: "This is my brother.", exampleCn: "这是我的哥哥。", tags: ["家人", "三会词"] },
            { word: "plate", phonetic: "/pleɪt/", meaning: "盘子", example: "This is a plate.", exampleCn: "这是一个盘子。", tags: ["餐具", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "生日快乐",
              content: [
                { en: "Happy birthday!", cn: "生日快乐！" },
                { en: "Thank you.", cn: "谢谢。" },
                { en: "How old are you?", cn: "你几岁了？" },
                { en: "I'm six years old.", cn: "我六岁了。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "这是几",
              content: [
                { en: "How many plates?", cn: "多少个盘子？" },
                { en: "Five.", cn: "五个。" }
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
            { word: "boy", phonetic: "/bɔɪ/", meaning: "男孩", example: "He is a boy.", exampleCn: "他是一个男孩。", tags: ["人物", "四会词"] },
            { word: "girl", phonetic: "/ɡɜːrl/", meaning: "女孩", example: "She is a girl.", exampleCn: "她是一个女孩。", tags: ["人物", "四会词"] },
            { word: "teacher", phonetic: "/ˈtiːtʃər/", meaning: "老师", example: "She is a teacher.", exampleCn: "她是一名老师。", tags: ["职业", "四会词"] },
            { word: "student", phonetic: "/ˈstjuːdnt/", meaning: "学生", example: "I am a student.", exampleCn: "我是一名学生。", tags: ["人物", "四会词"] },
            { word: "friend", phonetic: "/frend/", meaning: "朋友", example: "He is my friend.", exampleCn: "他是我的朋友。", tags: ["人物", "四会词"] },
            { word: "new", phonetic: "/njuː/", meaning: "新的", example: "I have a new friend.", exampleCn: "我有一个新朋友。", tags: ["形容词", "四会词"] },
            { word: "today", phonetic: "/təˈdeɪ/", meaning: "今天", example: "Today is Monday.", exampleCn: "今天是星期一。", tags: ["时间", "三会词"] },
            { word: "welcome", phonetic: "/ˈwelkəm/", meaning: "欢迎", example: "Welcome to our class!", exampleCn: "欢迎来到我们班！", tags: ["基础", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "认识新朋友",
              content: [
                { en: "Welcome back to school!", cn: "欢迎回校！" },
                { en: "This is Amy.", cn: "这是艾米。" },
                { en: "She's a new student.", cn: "她是一名新学生。" },
                { en: "Nice to meet you!", cn: "很高兴认识你！" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My family",
          words: [
            { word: "father", phonetic: "/ˈfɑːðər/", meaning: "父亲", example: "This is my father.", exampleCn: "这是我的父亲。", tags: ["家人", "四会词"] },
            { word: "mother", phonetic: "/ˈmʌðər/", meaning: "母亲", example: "This is my mother.", exampleCn: "这是我的母亲。", tags: ["家人", "四会词"] },
            { word: "dad", phonetic: "/dæd/", meaning: "爸爸", example: "My dad is tall.", exampleCn: "我的爸爸很高。", tags: ["家人", "四会词"] },
            { word: "mum", phonetic: "/mʌm/", meaning: "妈妈", example: "My mum is kind.", exampleCn: "我的妈妈很和蔼。", tags: ["家人", "四会词"] },
            { word: "man", phonetic: "/mæn/", meaning: "男人", example: "Who's that man?", exampleCn: "那个男人是谁？", tags: ["人物", "四会词"] },
            { word: "woman", phonetic: "/ˈwʊmən/", meaning: "女人", example: "Who's that woman?", exampleCn: "那个女人是谁？", tags: ["人物", "四会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "兄弟", example: "He's my brother.", exampleCn: "他是我的兄弟。", tags: ["家人", "三会词"] },
            { word: "sister", phonetic: "/ˈsɪstər/", meaning: "姐妹", example: "She's my sister.", exampleCn: "她是我的姐妹。", tags: ["家人", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "介绍家人",
              content: [
                { en: "Who's that man?", cn: "那个男人是谁？" },
                { en: "He's my father.", cn: "他是我的父亲。" },
                { en: "Who's that woman?", cn: "那个女人是谁？" },
                { en: "She's my mother.", cn: "她是我的母亲。" }
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
            { word: "zoo", phonetic: "/zuː/", meaning: "动物园", example: "Let's go to the zoo!", exampleCn: "我们去动物园吧！", tags: ["地点", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "在动物园",
              content: [
                { en: "Look at the giraffe!", cn: "看长颈鹿！" },
                { en: "It's so tall!", cn: "它好高啊！" },
                { en: "Look at the bear!", cn: "看熊！" },
                { en: "It's short and fat.", cn: "它又矮又胖。" }
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
            { word: "car", phonetic: "/kɑːr/", meaning: "汽车", example: "Where is my car?", exampleCn: "我的汽车在哪里？", tags: ["玩具", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "寻找物品",
              content: [
                { en: "Where is my car?", cn: "我的汽车在哪里？" },
                { en: "It's under the desk.", cn: "它在书桌下。" },
                { en: "Where is my bag?", cn: "我的书包在哪里？" },
                { en: "It's on the chair.", cn: "它在椅子上。" }
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
            { word: "buy", phonetic: "/baɪ/", meaning: "买", example: "Let's buy some fruit.", exampleCn: "我们买些水果吧。", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你喜欢什么水果",
              content: [
                { en: "Do you like pears?", cn: "你喜欢梨吗？" },
                { en: "Yes, I do.", cn: "是的，我喜欢。" },
                { en: "Do you like oranges?", cn: "你喜欢橙子吗？" },
                { en: "No, I don't.", cn: "不，我不喜欢。" }
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
            { word: "twenty", phonetic: "/ˈtwenti/", meaning: "二十", example: "I have twenty friends.", exampleCn: "我有二十个朋友。", tags: ["数字", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "数数",
              content: [
                { en: "How many kites do you have?", cn: "你有多少只风筝？" },
                { en: "I have eleven kites.", cn: "我有十一只风筝。" },
                { en: "How many pencils do you have?", cn: "你有多少支铅笔？" },
                { en: "I have twelve pencils.", cn: "我有十二支铅笔。" }
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
            { word: "first floor", phonetic: "/ˌfɜːst ˈflɔːr/", meaning: "一楼", example: "The library is on the first floor.", exampleCn: "图书馆在一楼。", tags: ["地点", "四会词"] },
            { word: "second floor", phonetic: "/ˌsekənd ˈflɔːr/", meaning: "二楼", example: "The art room is on the second floor.", exampleCn: "美术室在二楼。", tags: ["地点", "四会词"] },
            { word: "teachers' office", phonetic: "/ˈtiːtʃərz ˈɒfɪs/", meaning: "教师办公室", example: "Go to the teachers' office.", exampleCn: "去教师办公室。", tags: ["地点", "三会词"] },
            { word: "library", phonetic: "/ˈlaɪbrəri/", meaning: "图书馆", example: "Read a book in the library.", exampleCn: "在图书馆看书。", tags: ["地点", "四会词"] },
            { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", meaning: "操场", example: "Play on the playground.", exampleCn: "在操场上玩。", tags: ["地点", "四会词"] },
            { word: "computer room", phonetic: "/kəmˈpjuːtər ruːm/", meaning: "计算机房", example: "The computer room is big.", exampleCn: "计算机房很大。", tags: ["地点", "三会词"] },
            { word: "art room", phonetic: "/ɑːrt ruːm/", meaning: "美术室", example: "Draw pictures in the art room.", exampleCn: "在美术室画画。", tags: ["地点", "三会词"] },
            { word: "music room", phonetic: "/ˈmjuːzɪk ruːm/", meaning: "音乐室", example: "Sing in the music room.", exampleCn: "在音乐室唱歌。", tags: ["地点", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "参观学校",
              content: [
                { en: "Welcome to our school!", cn: "欢迎来到我们学校！" },
                { en: "This is the library.", cn: "这是图书馆。" },
                { en: "Where is the art room?", cn: "美术室在哪里？" },
                { en: "It's on the second floor.", cn: "它在二楼。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "学校设施",
              content: [
                { en: "Is this the teachers' office?", cn: "这是教师办公室吗？" },
                { en: "No, it isn't.", cn: "不，不是。" },
                { en: "Is that the computer room?", cn: "那是计算机房吗？" },
                { en: "Yes, it is.", cn: "是的，它是。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 What time is it?",
          words: [
            { word: "breakfast", phonetic: "/ˈbrekfəst/", meaning: "早餐", example: "It's time for breakfast.", exampleCn: "该吃早餐了。", tags: ["餐饮", "四会词"] },
            { word: "lunch", phonetic: "/lʌntʃ/", meaning: "午餐", example: "It's time for lunch.", exampleCn: "该吃午餐了。", tags: ["餐饮", "四会词"] },
            { word: "dinner", phonetic: "/ˈdɪnər/", meaning: "晚餐", example: "It's time for dinner.", exampleCn: "该吃晚餐了。", tags: ["餐饮", "四会词"] },
            { word: "music class", phonetic: "/ˈmjuːzɪk klɑːs/", meaning: "音乐课", example: "It's time for music class.", exampleCn: "该上音乐课了。", tags: ["课程", "三会词"] },
            { word: "PE class", phonetic: "/ˌpiː ˈiː klɑːs/", meaning: "体育课", example: "I like PE class.", exampleCn: "我喜欢体育课。", tags: ["课程", "三会词"] },
            { word: "get up", phonetic: "/ɡet ʌp/", meaning: "起床", example: "It's time to get up.", exampleCn: "该起床了。", tags: ["动词", "四会词"] },
            { word: "go to school", phonetic: "/ɡəʊ tuː skuːl/", meaning: "去上学", example: "It's time to go to school.", exampleCn: "该去上学了。", tags: ["动词", "四会词"] },
            { word: "go home", phonetic: "/ɡəʊ həʊm/", meaning: "回家", example: "It's time to go home.", exampleCn: "该回家了。", tags: ["动词", "四会词"] },
            { word: "o'clock", phonetic: "/əˈklɒk/", meaning: "...点钟", example: "It's 7 o'clock.", exampleCn: "现在七点。", tags: ["时间", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "几点了",
              content: [
                { en: "What time is it?", cn: "几点了？" },
                { en: "It's 7 o'clock.", cn: "七点了。" },
                { en: "It's time to get up.", cn: "该起床了。" },
                { en: "OK.", cn: "好的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "日常作息",
              content: [
                { en: "What time is it now?", cn: "现在几点了？" },
                { en: "It's 12 o'clock.", cn: "十二点了。" },
                { en: "Let's have lunch.", cn: "我们吃午餐吧。" },
                { en: "Good idea!", cn: "好主意！" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Weather",
          words: [
            { word: "cold", phonetic: "/kəʊld/", meaning: "寒冷的", example: "It's cold outside.", exampleCn: "外面很冷。", tags: ["天气", "四会词"] },
            { word: "cool", phonetic: "/kuːl/", meaning: "凉爽的", example: "It's cool today.", exampleCn: "今天很凉爽。", tags: ["天气", "四会词"] },
            { word: "warm", phonetic: "/wɔːm/", meaning: "温暖的", example: "It's warm in spring.", exampleCn: "春天很温暖。", tags: ["天气", "四会词"] },
            { word: "hot", phonetic: "/hɒt/", meaning: "炎热的", example: "It's hot in summer.", exampleCn: "夏天很热。", tags: ["天气", "四会词"] },
            { word: "sunny", phonetic: "/ˈsʌni/", meaning: "晴朗的", example: "It's sunny today.", exampleCn: "今天天气晴朗。", tags: ["天气", "三会词"] },
            { word: "windy", phonetic: "/ˈwɪndi/", meaning: "多风的", example: "It's windy outside.", exampleCn: "外面有风。", tags: ["天气", "三会词"] },
            { word: "cloudy", phonetic: "/ˈklaʊdi/", meaning: "多云的", example: "It's cloudy today.", exampleCn: "今天多云。", tags: ["天气", "三会词"] },
            { word: "snowy", phonetic: "/ˈsnəʊi/", meaning: "下雪的", example: "It's snowy outside.", exampleCn: "外面下雪了。", tags: ["天气", "三会词"] },
            { word: "rainy", phonetic: "/ˈreɪni/", meaning: "下雨的", example: "It's rainy today.", exampleCn: "今天下雨。", tags: ["天气", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "天气怎么样",
              content: [
                { en: "What's the weather like today?", cn: "今天天气怎么样？" },
                { en: "It's warm and sunny.", cn: "温暖又晴朗。" },
                { en: "Can I go outside?", cn: "我可以出去吗？" },
                { en: "Yes, you can.", cn: "可以。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "不同地方的天气",
              content: [
                { en: "Is it cold in Beijing?", cn: "北京冷吗？" },
                { en: "No, it isn't. It's warm.", cn: "不冷。很温暖。" },
                { en: "How about Harbin?", cn: "哈尔滨呢？" },
                { en: "It's cold and snowy.", cn: "又冷又下雪。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 At the farm",
          words: [
            { word: "tomato", phonetic: "/təˈmɑːtəʊ/", meaning: "西红柿", example: "The tomato is red.", exampleCn: "西红柿是红色的。", tags: ["蔬菜", "四会词"] },
            { word: "potato", phonetic: "/pəˈteɪtəʊ/", meaning: "土豆", example: "I like potatoes.", exampleCn: "我喜欢土豆。", tags: ["蔬菜", "三会词"] },
            { word: "green bean", phonetic: "/ˌɡriːn ˈbiːn/", meaning: "四季豆", example: "These are green beans.", exampleCn: "这些是四季豆。", tags: ["蔬菜", "三会词"] },
            { word: "carrot", phonetic: "/ˈkærət/", meaning: "胡萝卜", example: "Rabbits like carrots.", exampleCn: "兔子喜欢胡萝卜。", tags: ["蔬菜", "三会词"] },
            { word: "horse", phonetic: "/hɔːrs/", meaning: "马", example: "The horse is fast.", exampleCn: "马跑得很快。", tags: ["动物", "四会词"] },
            { word: "cow", phonetic: "/kaʊ/", meaning: "奶牛", example: "The cow gives milk.", exampleCn: "奶牛产奶。", tags: ["动物", "四会词"] },
            { word: "sheep", phonetic: "/ʃiːp/", meaning: "绵羊", example: "The sheep is white.", exampleCn: "绵羊是白色的。", tags: ["动物", "四会词"] },
            { word: "hen", phonetic: "/hen/", meaning: "母鸡", example: "The hen lays eggs.", exampleCn: "母鸡下蛋。", tags: ["动物", "三会词"] },
            { word: "these", phonetic: "/ðiːz/", meaning: "这些", example: "What are these?", exampleCn: "这些是什么？", tags: ["代词", "四会词"] },
            { word: "those", phonetic: "/ðəʊz/", meaning: "那些", example: "What are those?", exampleCn: "那些是什么？", tags: ["代词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "在农场",
              content: [
                { en: "Are these carrots?", cn: "这些是胡萝卜吗？" },
                { en: "Yes, they are.", cn: "是的。" },
                { en: "What are those?", cn: "那些是什么？" },
                { en: "They are potatoes.", cn: "它们是土豆。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "农场动物",
              content: [
                { en: "Are these goats?", cn: "这些是山羊吗？" },
                { en: "No, they are sheep.", cn: "不，它们是绵羊。" },
                { en: "How many sheep are there?", cn: "有多少只绵羊？" },
                { en: "Twelve.", cn: "十二只。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 My clothes",
          words: [
            { word: "clothes", phonetic: "/kləʊðz/", meaning: "衣服", example: "Take off your clothes.", exampleCn: "脱下你的衣服。", tags: ["服装", "四会词"] },
            { word: "pants", phonetic: "/pænts/", meaning: "裤子", example: "These are my pants.", exampleCn: "这些是我的裤子。", tags: ["服装", "四会词"] },
            { word: "hat", phonetic: "/hæt/", meaning: "帽子", example: "This is my hat.", exampleCn: "这是我的帽子。", tags: ["服装", "四会词"] },
            { word: "dress", phonetic: "/dres/", meaning: "连衣裙", example: "She likes this dress.", exampleCn: "她喜欢这条连衣裙。", tags: ["服装", "四会词"] },
            { word: "skirt", phonetic: "/skɜːrt/", meaning: "裙子", example: "The skirt is pretty.", exampleCn: "裙子很漂亮。", tags: ["服装", "四会词"] },
            { word: "coat", phonetic: "/kəʊt/", meaning: "外套", example: "Put on your coat.", exampleCn: "穿上你的外套。", tags: ["服装", "三会词"] },
            { word: "sweater", phonetic: "/ˈswetər/", meaning: "毛衣", example: "This is my sweater.", exampleCn: "这是我的毛衣。", tags: ["服装", "三会词"] },
            { word: "sock", phonetic: "/sɒk/", meaning: "袜子", example: "Where is my sock?", exampleCn: "我的袜子在哪里？", tags: ["服装", "三会词"] },
            { word: "shorts", phonetic: "/ʃɔːts/", meaning: "短裤", example: "These are my shorts.", exampleCn: "这些是我的短裤。", tags: ["服装", "三会词"] },
            { word: "jacket", phonetic: "/ˈdʒækɪt/", meaning: "夹克", example: "I like this jacket.", exampleCn: "我喜欢这件夹克。", tags: ["服装", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "这是谁的",
              content: [
                { en: "Whose coat is this?", cn: "这是谁的外套？" },
                { en: "It's mine.", cn: "是我的。" },
                { en: "Whose pants are those?", cn: "那些是谁的裤子？" },
                { en: "They are your father's.", cn: "是你爸爸的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "试穿衣服",
              content: [
                { en: "Can I try this dress on?", cn: "我可以试穿这条连衣裙吗？" },
                { en: "Yes, of course.", cn: "当然可以。" },
                { en: "It's too big.", cn: "它太大了。" },
                { en: "Try this one.", cn: "试试这件。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Shopping",
          words: [
            { word: "glove", phonetic: "/ɡlʌv/", meaning: "手套", example: "I need a pair of gloves.", exampleCn: "我需要一副手套。", tags: ["服装", "三会词"] },
            { word: "scarf", phonetic: "/skɑːrf/", meaning: "围巾", example: "This scarf is nice.", exampleCn: "这条围巾很好看。", tags: ["服装", "三会词"] },
            { word: "umbrella", phonetic: "/ʌmˈbrelə/", meaning: "雨伞", example: "Take an umbrella.", exampleCn: "带把雨伞。", tags: ["物品", "三会词"] },
            { word: "sunglasses", phonetic: "/ˈsʌnɡlɑːsɪz/", meaning: "太阳镜", example: "I like these sunglasses.", exampleCn: "我喜欢这副太阳镜。", tags: ["服装", "三会词"] },
            { word: "pretty", phonetic: "/ˈprɪti/", meaning: "漂亮的", example: "The dress is pretty.", exampleCn: "这条连衣裙很漂亮。", tags: ["形容词", "四会词"] },
            { word: "expensive", phonetic: "/ɪkˈspensɪv/", meaning: "昂贵的", example: "This bag is expensive.", exampleCn: "这个包很贵。", tags: ["形容词", "三会词"] },
            { word: "cheap", phonetic: "/tʃiːp/", meaning: "便宜的", example: "This pen is cheap.", exampleCn: "这支钢笔很便宜。", tags: ["形容词", "三会词"] },
            { word: "nice", phonetic: "/naɪs/", meaning: "好的", example: "This shirt is nice.", exampleCn: "这件衬衫很好看。", tags: ["形容词", "四会词"] },
            { word: "try on", phonetic: "/traɪ ɒn/", meaning: "试穿", example: "Can I try it on?", exampleCn: "我可以试穿吗？", tags: ["动词", "四会词"] },
            { word: "size", phonetic: "/saɪz/", meaning: "尺码", example: "What size do you want?", exampleCn: "你想要什么尺码？", tags: ["名词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "买东西",
              content: [
                { en: "Can I help you?", cn: "我能帮您吗？" },
                { en: "Yes, these shoes are nice.", cn: "是的，这双鞋很好看。" },
                { en: "Can I try them on?", cn: "我可以试试吗？" },
                { en: "Size 6, please.", cn: "请给我6码的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "多少钱",
              content: [
                { en: "How much is this skirt?", cn: "这条裙子多少钱？" },
                { en: "It's 80 yuan.", cn: "80元。" },
                { en: "How much are these socks?", cn: "这些袜子多少钱？" },
                { en: "They are 10 yuan.", cn: "10元。" }
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
          unitName: "Unit 1 Welcome back to school!",
          words: [
            { word: "UK", phonetic: "/ˌjuː ˈkeɪ/", meaning: "英国", example: "I'm from the UK.", exampleCn: "我来自英国。", tags: ["国家", "四会词"] },
            { word: "Canada", phonetic: "/ˈkænədə/", meaning: "加拿大", example: "I'm from Canada.", exampleCn: "我来自加拿大。", tags: ["国家", "四会词"] },
            { word: "USA", phonetic: "/ˌjuː es ˈeɪ/", meaning: "美国", example: "I'm from the USA.", exampleCn: "我来自美国。", tags: ["国家", "四会词"] },
            { word: "China", phonetic: "/ˈtʃaɪnə/", meaning: "中国", example: "I'm from China.", exampleCn: "我来自中国。", tags: ["国家", "四会词"] },
            { word: "she", phonetic: "/ʃiː/", meaning: "她", example: "She is my teacher.", exampleCn: "她是我的老师。", tags: ["代词", "四会词"] },
            { word: "student", phonetic: "/ˈstjuːdnt/", meaning: "学生", example: "I am a student.", exampleCn: "我是一名学生。", tags: ["人物", "四会词"] },
            { word: "pupil", phonetic: "/ˈpjuːpl/", meaning: "小学生", example: "I am a pupil.", exampleCn: "我是一名小学生。", tags: ["人物", "三会词"] },
            { word: "teacher", phonetic: "/ˈtiːtʃər/", meaning: "老师", example: "She is a teacher.", exampleCn: "她是一名老师。", tags: ["职业", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "欢迎回校",
              content: [
                { en: "Welcome back to school!", cn: "欢迎回校！" },
                { en: "Nice to see you again.", cn: "很高兴再次见到你。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "你来自哪里",
              content: [
                { en: "Where are you from?", cn: "你来自哪里？" },
                { en: "I'm from the UK.", cn: "我来自英国。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My family",
          words: [
            { word: "father", phonetic: "/ˈfɑːðər/", meaning: "父亲", example: "My father is a teacher.", exampleCn: "我的父亲是一名老师。", tags: ["家人", "四会词"] },
            { word: "dad", phonetic: "/dæd/", meaning: "爸爸", example: "This is my dad.", exampleCn: "这是我的爸爸。", tags: ["家人", "四会词"] },
            { word: "mother", phonetic: "/ˈmʌðər/", meaning: "母亲", example: "My mother is a doctor.", exampleCn: "我的母亲是一名医生。", tags: ["家人", "四会词"] },
            { word: "mom", phonetic: "/mɒm/", meaning: "妈妈", example: "This is my mom.", exampleCn: "这是我的妈妈。", tags: ["家人", "四会词"] },
            { word: "man", phonetic: "/mæn/", meaning: "男人", example: "He is a man.", exampleCn: "他是一个男人。", tags: ["人物", "四会词"] },
            { word: "woman", phonetic: "/ˈwʊmən/", meaning: "女人", example: "She is a woman.", exampleCn: "她是一个女人。", tags: ["人物", "四会词"] },
            { word: "grandma", phonetic: "/ˈɡrænmɑː/", meaning: "奶奶/外婆", example: "This is my grandma.", exampleCn: "这是我的奶奶。", tags: ["家人", "四会词"] },
            { word: "grandpa", phonetic: "/ˈɡrænpɑː/", meaning: "爷爷/外公", example: "This is my grandpa.", exampleCn: "这是我的爷爷。", tags: ["家人", "四会词"] },
            { word: "sister", phonetic: "/ˈsɪstər/", meaning: "姐姐/妹妹", example: "She is my sister.", exampleCn: "她是我的姐姐。", tags: ["家人", "四会词"] },
            { word: "brother", phonetic: "/ˈbrʌðər/", meaning: "哥哥/弟弟", example: "He is my brother.", exampleCn: "他是我的哥哥。", tags: ["家人", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "这是谁",
              content: [
                { en: "Who's that man?", cn: "那位男士是谁？" },
                { en: "He's my father.", cn: "他是我的父亲。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "她是你的姐姐吗",
              content: [
                { en: "Who's that woman?", cn: "那位女士是谁？" },
                { en: "She's my mother.", cn: "她是我的母亲。" }
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
            { word: "short", phonetic: "/ʃɔːt/", meaning: "矮的", example: "I am short.", exampleCn: "我很矮。", tags: ["形容词", "四会词"] },
            { word: "long", phonetic: "/lɒŋ/", meaning: "长的", example: "The snake is long.", exampleCn: "蛇很长。", tags: ["形容词", "四会词"] },
            { word: "small", phonetic: "/smɔːl/", meaning: "小的", example: "The mouse is small.", exampleCn: "老鼠很小。", tags: ["形容词", "四会词"] },
            { word: "big", phonetic: "/bɪɡ/", meaning: "大的", example: "The elephant is big.", exampleCn: "大象很大。", tags: ["形容词", "四会词"] },
            { word: "giraffe", phonetic: "/dʒəˈrɑːf/", meaning: "长颈鹿", example: "The giraffe has a long neck.", exampleCn: "长颈鹿有长长的脖子。", tags: ["动物", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "看那只长颈鹿",
              content: [
                { en: "Look at that giraffe!", cn: "看那只长颈鹿！" },
                { en: "Wow! It's so tall!", cn: "哇！它好高啊！" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "描述动物",
              content: [
                { en: "Come here, children!", cn: "过来，孩子们！" },
                { en: "Look at the elephant.", cn: "看那头大象。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 Where is my car?",
          words: [
            { word: "on", phonetic: "/ɒn/", meaning: "在...上面", example: "The book is on the desk.", exampleCn: "书在书桌上。", tags: ["方位", "四会词"] },
            { word: "in", phonetic: "/ɪn/", meaning: "在...里面", example: "The pen is in the bag.", exampleCn: "钢笔在书包里。", tags: ["方位", "四会词"] },
            { word: "under", phonetic: "/ˈʌndər/", meaning: "在...下面", example: "The ball is under the chair.", exampleCn: "球在椅子下面。", tags: ["方位", "四会词"] },
            { word: "chair", phonetic: "/tʃeər/", meaning: "椅子", example: "Sit on the chair.", exampleCn: "坐在椅子上。", tags: ["家具", "四会词"] },
            { word: "desk", phonetic: "/desk/", meaning: "书桌", example: "My desk is clean.", exampleCn: "我的书桌很干净。", tags: ["家具", "四会词"] },
            { word: "cap", phonetic: "/kæp/", meaning: "鸭舌帽", example: "He wears a cap.", exampleCn: "他戴着鸭舌帽。", tags: ["服装", "三会词"] },
            { word: "ball", phonetic: "/bɔːl/", meaning: "球", example: "I have a ball.", exampleCn: "我有一个球。", tags: ["玩具", "三会词"] },
            { word: "car", phonetic: "/kɑːr/", meaning: "小汽车", example: "This is my toy car.", exampleCn: "这是我的玩具汽车。", tags: ["玩具", "三会词"] },
            { word: "boat", phonetic: "/bəʊt/", meaning: "小船", example: "I have a toy boat.", exampleCn: "我有一只玩具船。", tags: ["玩具", "三会词"] },
            { word: "map", phonetic: "/mæp/", meaning: "地图", example: "This is a map of China.", exampleCn: "这是一张中国地图。", tags: ["物品", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "我的铅笔在哪里",
              content: [
                { en: "Where is my pencil?", cn: "我的铅笔在哪里？" },
                { en: "It's under your book.", cn: "它在你的书下面。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "找玩具",
              content: [
                { en: "Is it in your bag?", cn: "它在你的包里吗？" },
                { en: "No, it isn't.", cn: "不，它不在。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Do you like pears?",
          words: [
            { word: "pear", phonetic: "/peər/", meaning: "梨", example: "This pear is sweet.", exampleCn: "这个梨很甜。", tags: ["水果", "四会词"] },
            { word: "apple", phonetic: "/ˈæpl/", meaning: "苹果", example: "I like apples.", exampleCn: "我喜欢苹果。", tags: ["水果", "四会词"] },
            { word: "orange", phonetic: "/ˈɒrɪndʒ/", meaning: "橙子", example: "I like oranges.", exampleCn: "我喜欢橙子。", tags: ["水果", "四会词"] },
            { word: "banana", phonetic: "/bəˈnɑːnə/", meaning: "香蕉", example: "Monkeys like bananas.", exampleCn: "猴子喜欢香蕉。", tags: ["水果", "四会词"] },
            { word: "watermelon", phonetic: "/ˈwɔːtəmelən/", meaning: "西瓜", example: "The watermelon is big.", exampleCn: "这个西瓜很大。", tags: ["水果", "三会词"] },
            { word: "strawberry", phonetic: "/ˈstrɔːbəri/", meaning: "草莓", example: "Strawberries are red.", exampleCn: "草莓是红色的。", tags: ["水果", "三会词"] },
            { word: "grape", phonetic: "/ɡreɪp/", meaning: "葡萄", example: "Grapes are purple.", exampleCn: "葡萄是紫色的。", tags: ["水果", "三会词"] },
            { word: "fruit", phonetic: "/fruːt/", meaning: "水果", example: "I like fruit.", exampleCn: "我喜欢水果。", tags: ["食物", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你喜欢草莓吗",
              content: [
                { en: "Do you like strawberries?", cn: "你喜欢草莓吗？" },
                { en: "Yes, I do.", cn: "是的，我喜欢。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "我不喜欢香蕉",
              content: [
                { en: "Do you like bananas?", cn: "你喜欢香蕉吗？" },
                { en: "No, I don't.", cn: "不，我不喜欢。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 How many?",
          words: [
            { word: "eleven", phonetic: "/ɪˈlevn/", meaning: "十一", example: "I have eleven crayons.", exampleCn: "我有十一支蜡笔。", tags: ["数字", "四会词"] },
            { word: "twelve", phonetic: "/twelv/", meaning: "十二", example: "There are twelve months in a year.", exampleCn: "一年有十二个月。", tags: ["数字", "四会词"] },
            { word: "thirteen", phonetic: "/ˌθɜːˈtiːn/", meaning: "十三", example: "I am thirteen years old.", exampleCn: "我十三岁了。", tags: ["数字", "四会词"] },
            { word: "fourteen", phonetic: "/ˌfɔːˈtiːn/", meaning: "十四", example: "I have fourteen books.", exampleCn: "我有十四本书。", tags: ["数字", "四会词"] },
            { word: "fifteen", phonetic: "/ˌfɪfˈtiːn/", meaning: "十五", example: "I can see fifteen birds.", exampleCn: "我能看见十五只鸟。", tags: ["数字", "四会词"] },
            { word: "sixteen", phonetic: "/ˌsɪksˈtiːn/", meaning: "十六", example: "There are sixteen students.", exampleCn: "有十六个学生。", tags: ["数字", "四会词"] },
            { word: "seventeen", phonetic: "/ˌsevnˈtiːn/", meaning: "十七", example: "I have seventeen toys.", exampleCn: "我有十七个玩具。", tags: ["数字", "四会词"] },
            { word: "eighteen", phonetic: "/ˌeɪˈtiːn/", meaning: "十八", example: "There are eighteen chairs.", exampleCn: "有十八把椅子。", tags: ["数字", "四会词"] },
            { word: "nineteen", phonetic: "/ˌnaɪnˈtiːn/", meaning: "十九", example: "I see nineteen kites.", exampleCn: "我看见十九只风筝。", tags: ["数字", "四会词"] },
            { word: "twenty", phonetic: "/ˈtwenti/", meaning: "二十", example: "There are twenty students in my class.", exampleCn: "我们班有二十个学生。", tags: ["数字", "四会词"] },
            { word: "kite", phonetic: "/kaɪt/", meaning: "风筝", example: "I have a kite.", exampleCn: "我有一只风筝。", tags: ["玩具", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你看见多少只风筝",
              content: [
                { en: "How many kites do you see?", cn: "你看见多少只风筝？" },
                { en: "I see 12!", cn: "我看见 12 只！" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "你有多少支蜡笔",
              content: [
                { en: "How many crayons do you have?", cn: "你有多少支蜡笔？" },
                { en: "I have 16.", cn: "我有 16 支。" }
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
            { word: "eat breakfast", phonetic: "/iːt ˈbrekfəst/", meaning: "吃早饭", example: "I eat breakfast at 7 o'clock.", exampleCn: "我七点吃早饭。", tags: ["日常活动", "四会词"] },
            { word: "do morning exercises", phonetic: "/duː ˈmɔːrnɪŋ ˈeksəsaɪzɪz/", meaning: "做早操", example: "We do morning exercises every day.", exampleCn: "我们每天做早操。", tags: ["日常活动", "三会词"] },
            { word: "have ... class", phonetic: "/hæv klɑːs/", meaning: "上...课", example: "I have English class at 9.", exampleCn: "我九点上英语课。", tags: ["日常活动", "四会词"] },
            { word: "eat lunch", phonetic: "/iːt lʌntʃ/", meaning: "吃午饭", example: "I eat lunch at 12.", exampleCn: "我十二点吃午饭。", tags: ["日常活动", "四会词"] },
            { word: "eat dinner", phonetic: "/iːt ˈdɪnər/", meaning: "吃晚饭", example: "I eat dinner at 6.", exampleCn: "我六点吃晚饭。", tags: ["日常活动", "四会词"] },
            { word: "clean my room", phonetic: "/kliːn maɪ ruːm/", meaning: "打扫房间", example: "I clean my room on weekends.", exampleCn: "我周末打扫房间。", tags: ["日常活动", "三会词"] },
            { word: "go for a walk", phonetic: "/ɡəʊ fɔːr ə wɔːk/", meaning: "散步", example: "I go for a walk after dinner.", exampleCn: "我晚饭后散步。", tags: ["日常活动", "三会词"] },
            { word: "go shopping", phonetic: "/ɡəʊ ˈʃɒpɪŋ/", meaning: "购物", example: "I go shopping on Sundays.", exampleCn: "我星期天去购物。", tags: ["日常活动", "三会词"] },
            { word: "take", phonetic: "/teɪk/", meaning: "上（课）", example: "I take a dancing class.", exampleCn: "我上舞蹈课。", tags: ["动词", "四会词"] },
            { word: "dancing class", phonetic: "/ˈdænsɪŋ klɑːs/", meaning: "舞蹈课", example: "I like dancing class.", exampleCn: "我喜欢舞蹈课。", tags: ["课程", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "我的一天",
              content: [
                { en: "When do you get up?", cn: "你什么时候起床？" },
                { en: "I usually get up at 6 o'clock.", cn: "我通常六点起床。" },
                { en: "When do you go to school?", cn: "你什么时候去上学？" },
                { en: "I go to school at 7:30.", cn: "我七点半去上学。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "周末活动",
              content: [
                { en: "What do you do on the weekend?", cn: "你周末做什么？" },
                { en: "I often clean my room.", cn: "我经常打扫房间。" },
                { en: "Do you go shopping?", cn: "你去购物吗？" },
                { en: "Sometimes, but not often.", cn: "有时候，但不经常。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My favourite season",
          words: [
            { word: "spring", phonetic: "/sprɪŋ/", meaning: "春天", example: "Spring is warm and sunny.", exampleCn: "春天温暖又晴朗。", tags: ["季节", "四会词"] },
            { word: "summer", phonetic: "/ˈsʌmər/", meaning: "夏天", example: "Summer is hot.", exampleCn: "夏天很热。", tags: ["季节", "四会词"] },
            { word: "autumn", phonetic: "/ˈɔːtəm/", meaning: "秋天", example: "Autumn is cool.", exampleCn: "秋天很凉爽。", tags: ["季节", "四会词"] },
            { word: "winter", phonetic: "/ˈwɪntər/", meaning: "冬天", example: "Winter is cold.", exampleCn: "冬天很冷。", tags: ["季节", "四会词"] },
            { word: "season", phonetic: "/ˈsiːzn/", meaning: "季节", example: "What's your favourite season?", exampleCn: "你最喜欢哪个季节？", tags: ["名词", "四会词"] },
            { word: "picnic", phonetic: "/ˈpɪknɪk/", meaning: "野餐", example: "Let's have a picnic!", exampleCn: "我们去野餐吧！", tags: ["活动", "三会词"] },
            { word: "pick", phonetic: "/pɪk/", meaning: "摘", example: "I pick apples in autumn.", exampleCn: "我秋天摘苹果。", tags: ["动词", "三会词"] },
            { word: "snowman", phonetic: "/ˈsnəʊmæn/", meaning: "雪人", example: "Make a snowman in winter.", exampleCn: "冬天堆雪人。", tags: ["活动", "三会词"] },
            { word: "vacation", phonetic: "/vəˈkeɪʃn/", meaning: "假期", example: "Summer vacation is fun.", exampleCn: "暑假很有趣。", tags: ["时间", "三会词"] },
            { word: "favourite", phonetic: "/ˈfeɪvərɪt/", meaning: "最喜欢的", example: "My favourite season is spring.", exampleCn: "我最喜欢的季节是春天。", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "最喜欢的季节",
              content: [
                { en: "Which season do you like best?", cn: "你最喜欢哪个季节？" },
                { en: "I like spring best.", cn: "我最喜欢春天。" },
                { en: "Why?", cn: "为什么？" },
                { en: "Because the weather is warm.", cn: "因为天气很温暖。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "季节活动",
              content: [
                { en: "Why do you like winter?", cn: "你为什么喜欢冬天？" },
                { en: "Because I can make a snowman!", cn: "因为我可以堆雪人！" },
                { en: "But it's too cold!", cn: "但是太冷了！" },
                { en: "I like winter too.", cn: "我也喜欢冬天。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 My school calendar",
          words: [
            { word: "January", phonetic: "/ˈdʒænjuəri/", meaning: "一月", example: "January is the first month.", exampleCn: "一月是第一个月。", tags: ["月份", "四会词"] },
            { word: "February", phonetic: "/ˈfebruəri/", meaning: "二月", example: "February is short.", exampleCn: "二月很短。", tags: ["月份", "四会词"] },
            { word: "March", phonetic: "/mɑːtʃ/", meaning: "三月", example: "March is in spring.", exampleCn: "三月在春天。", tags: ["月份", "四会词"] },
            { word: "April", phonetic: "/ˈeɪprəl/", meaning: "四月", example: "April is warm.", exampleCn: "四月很温暖。", tags: ["月份", "四会词"] },
            { word: "May", phonetic: "/meɪ/", meaning: "五月", example: "May is beautiful.", exampleCn: "五月很美。", tags: ["月份", "四会词"] },
            { word: "June", phonetic: "/dʒuːn/", meaning: "六月", example: "June is hot.", exampleCn: "六月很热。", tags: ["月份", "四会词"] },
            { word: "July", phonetic: "/dʒuˈlaɪ/", meaning: "七月", example: "July is in summer.", exampleCn: "七月在夏天。", tags: ["月份", "三会词"] },
            { word: "August", phonetic: "/ˈɔːɡəst/", meaning: "八月", example: "August is hot too.", exampleCn: "八月也很热。", tags: ["月份", "三会词"] },
            { word: "September", phonetic: "/sepˈtembər/", meaning: "九月", example: "School starts in September.", exampleCn: "学校九月开学。", tags: ["月份", "三会词"] },
            { word: "October", phonetic: "/ɒkˈtəʊbər/", meaning: "十月", example: "October is cool.", exampleCn: "十月很凉爽。", tags: ["月份", "三会词"] },
            { word: "November", phonetic: "/nəʊˈvembər/", meaning: "十一月", example: "November is in autumn.", exampleCn: "十一月在秋天。", tags: ["月份", "三会词"] },
            { word: "December", phonetic: "/dɪˈsembər/", meaning: "十二月", example: "December is cold.", exampleCn: "十二月很冷。", tags: ["月份", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "学校活动",
              content: [
                { en: "When is the sports meet?", cn: "运动会是什么时候？" },
                { en: "It's in April.", cn: "在四月。" },
                { en: "When is the school trip?", cn: "学校旅行是什么时候？" },
                { en: "It's in May.", cn: "在五月。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "月份活动",
              content: [
                { en: "What will you do in June?", cn: "你六月要做什么？" },
                { en: "I will have a party.", cn: "我要举办一个聚会。" },
                { en: "What about July?", cn: "七月呢？" },
                { en: "Summer vacation!", cn: "暑假！" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 When is the art show?",
          words: [
            { word: "first", phonetic: "/fɜːst/", meaning: "第一", example: "April 1st is April Fool's Day.", exampleCn: "四月一日是愚人节。", tags: ["序数词", "四会词"] },
            { word: "second", phonetic: "/ˈsekənd/", meaning: "第二", example: "The second day is Monday.", exampleCn: "第二天是星期一。", tags: ["序数词", "四会词"] },
            { word: "third", phonetic: "/θɜːrd/", meaning: "第三", example: "The third month is March.", exampleCn: "第三个月是三月。", tags: ["序数词", "四会词"] },
            { word: "fourth", phonetic: "/fɔːrθ/", meaning: "第四", example: "May 4th is Youth Day.", exampleCn: "五月四是青年节。", tags: ["序数词", "四会词"] },
            { word: "fifth", phonetic: "/fɪfθ/", meaning: "第五", example: "The fifth lesson is math.", exampleCn: "第五节课是数学。", tags: ["序数词", "四会词"] },
            { word: "twelfth", phonetic: "/twelfθ/", meaning: "第十二", example: "December 12th is a special day.", exampleCn: "十二月十二日是个特殊的日子。", tags: ["序数词", "三会词"] },
            { word: "twentieth", phonetic: "/ˈtwentiəθ/", meaning: "第二十", example: "The twentieth day of the month.", exampleCn: "这个月的第二十天。", tags: ["序数词", "三会词"] },
            { word: "special", phonetic: "/ˈspeʃl/", meaning: "特殊的", example: "Today is a special day.", exampleCn: "今天是个特殊的日子。", tags: ["形容词", "三会词"] },
            { word: "thing", phonetic: "/θɪŋ/", meaning: "事情", example: "There are many fun things.", exampleCn: "有很多有趣的事情。", tags: ["名词", "三会词"] },
            { word: "meet", phonetic: "/miːt/", meaning: "集会", example: "The sports meet is fun.", exampleCn: "运动会很有趣。", tags: ["活动", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "活动日期",
              content: [
                { en: "When is the art show?", cn: "艺术展是什么时候？" },
                { en: "It's on May 1st.", cn: "在五月一日。" },
                { en: "When is the reading festival?", cn: "阅读节是什么时候？" },
                { en: "It's on September 20th.", cn: "在九月二十日。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "生日",
              content: [
                { en: "When is your birthday?", cn: "你的生日是什么时候？" },
                { en: "My birthday is on October 15th.", cn: "我的生日在十月十五日。" },
                { en: "When is your mother's birthday?", cn: "你妈妈的生日是什么时候？" },
                { en: "Her birthday is on November 3rd.", cn: "她的生日在十一月三日。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 Whose dog is it?",
          words: [
            { word: "mine", phonetic: "/maɪn/", meaning: "我的", example: "This book is mine.", exampleCn: "这本书是我的。", tags: ["代词", "四会词"] },
            { word: "yours", phonetic: "/jɔːrz/", meaning: "你的", example: "Is this pen yours?", exampleCn: "这支钢笔是你的吗？", tags: ["代词", "四会词"] },
            { word: "his", phonetic: "/hɪz/", meaning: "他的", example: "This bag is his.", exampleCn: "这个包是他的。", tags: ["代词", "四会词"] },
            { word: "hers", phonetic: "/hɜːrz/", meaning: "她的", example: "The dress is hers.", exampleCn: "这条连衣裙是她的。", tags: ["代词", "四会词"] },
            { word: "theirs", phonetic: "/ðeərz/", meaning: "他们的", example: "The classroom is theirs.", exampleCn: "教室是他们的。", tags: ["代词", "三会词"] },
            { word: "ours", phonetic: "/aʊərz/", meaning: "我们的", example: "This school is ours.", exampleCn: "这个学校是我们的。", tags: ["代词", "三会词"] },
            { word: "climbing", phonetic: "/ˈklaɪmɪŋ/", meaning: "攀登", example: "The cat is climbing.", exampleCn: "猫在爬。", tags: ["动词-ing", "三会词"] },
            { word: "eating", phonetic: "/ˈiːtɪŋ/", meaning: "吃", example: "The dog is eating.", exampleCn: "狗在吃东西。", tags: ["动词-ing", "三会词"] },
            { word: "playing", phonetic: "/ˈpleɪɪŋ/", meaning: "玩", example: "The kids are playing.", exampleCn: "孩子们在玩。", tags: ["动词-ing", "三会词"] },
            { word: "sleeping", phonetic: "/ˈsliːpɪŋ/", meaning: "睡觉", example: "The baby is sleeping.", exampleCn: "宝宝在睡觉。", tags: ["动词-ing", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "这是谁的",
              content: [
                { en: "Whose dog is this?", cn: "这是谁的狗？" },
                { en: "It's mine.", cn: "它是我的。" },
                { en: "Whose rabbit is that?", cn: "那是谁的兔子？" },
                { en: "It's hers.", cn: "它是她的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "正在做什么",
              content: [
                { en: "What is the dog doing?", cn: "狗在做什么？" },
                { en: "It's eating.", cn: "它在吃东西。" },
                { en: "What are the cats doing?", cn: "猫在做什么？" },
                { en: "They're playing with each other.", cn: "它们在互相玩耍。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 Work quietly!",
          words: [
            { word: "doing morning exercises", phonetic: "/ˈduːɪŋ ˈmɔːrnɪŋ ˈeksəsaɪzɪz/", meaning: "做早操", example: "We are doing morning exercises.", exampleCn: "我们在做早操。", tags: ["活动", "四会词"] },
            { word: "having ... class", phonetic: "/ˈhævɪŋ klɑːs/", meaning: "上...课", example: "I'm having English class.", exampleCn: "我在上英语课。", tags: ["活动", "四会词"] },
            { word: "eating lunch", phonetic: "/ˈiːtɪŋ lʌntʃ/", meaning: "吃午饭", example: "He's eating lunch.", exampleCn: "他在吃午饭。", tags: ["活动", "三会词"] },
            { word: "reading a book", phonetic: "/ˈriːdɪŋ ə bʊk/", meaning: "看书", example: "She's reading a book.", exampleCn: "她在看书。", tags: ["活动", "四会词"] },
            { word: "listening to music", phonetic: "/ˈlɪsnɪŋ tuː ˈmjuːzɪk/", meaning: "听音乐", example: "I'm listening to music.", exampleCn: "我在听音乐。", tags: ["活动", "三会词"] },
            { word: "keep", phonetic: "/kiːp/", meaning: "保持", example: "Keep your desk clean.", exampleCn: "保持书桌整洁。", tags: ["动词", "四会词"] },
            { word: "quiet", phonetic: "/ˈkwaɪət/", meaning: "安静的", example: "Work quietly, please.", exampleCn: "请安静地工作。", tags: ["形容词", "四会词"] },
            { word: "turn", phonetic: "/tɜːn/", meaning: "轮流", example: "Take turns!", exampleCn: "轮流！", tags: ["名词", "三会词"] },
            { word: "right", phonetic: "/raɪt/", meaning: "正确的", example: "Keep to the right.", exampleCn: "靠右行。", tags: ["形容词", "三会词"] },
            { word: "talk", phonetic: "/tɔːk/", meaning: "说话", example: "Don't talk in class.", exampleCn: "课堂上不要说话。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "在做什么",
              content: [
                { en: "What are you doing?", cn: "你在做什么？" },
                { en: "I'm reading a book.", cn: "我在看书。" },
                { en: "What is he doing?", cn: "他在做什么？" },
                { en: "He's listening to music.", cn: "他在听音乐。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "规则",
              content: [
                { en: "Talk quietly, please.", cn: "请小声说话。" },
                { en: "OK, I will.", cn: "好的，我会的。" },
                { en: "Keep your desk clean.", cn: "保持书桌整洁。" },
                { en: "Yes, sir.", cn: "好的，老师。" }
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
            { word: "old", phonetic: "/əʊld/", meaning: "老的", example: "He is old.", exampleCn: "他老了。", tags: ["形容词", "四会词"] },
            { word: "young", phonetic: "/jʌŋ/", meaning: "年轻的", example: "She is young.", exampleCn: "她很年轻。", tags: ["形容词", "四会词"] },
            { word: "funny", phonetic: "/ˈfʌni/", meaning: "滑稽的", example: "He is funny.", exampleCn: "他很滑稽。", tags: ["形容词", "四会词"] },
            { word: "kind", phonetic: "/kaɪnd/", meaning: "和蔼的", example: "She is kind.", exampleCn: "她很和蔼。", tags: ["形容词", "四会词"] },
            { word: "strict", phonetic: "/strɪkt/", meaning: "严格的", example: "The teacher is strict.", exampleCn: "老师很严格。", tags: ["形容词", "四会词"] },
            { word: "polite", phonetic: "/pəˈlaɪt/", meaning: "有礼貌的", example: "He is polite.", exampleCn: "他很有礼貌。", tags: ["形容词", "三会词"] },
            { word: "hard-working", phonetic: "/ˌhɑːd ˈwɜːkɪŋ/", meaning: "勤奋的", example: "She is hard-working.", exampleCn: "她很勤奋。", tags: ["形容词", "三会词"] },
            { word: "helpful", phonetic: "/ˈhelpfl/", meaning: "有用的", example: "He is helpful.", exampleCn: "他很有用。", tags: ["形容词", "三会词"] },
            { word: "clever", phonetic: "/ˈklevər/", meaning: "聪明的", example: "She is clever.", exampleCn: "她很聪明。", tags: ["形容词", "三会词"] },
            { word: "shy", phonetic: "/ʃaɪ/", meaning: "害羞的", example: "He is shy.", exampleCn: "他很害羞。", tags: ["形容词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "新老师",
              content: [
                { en: "Who's your art teacher?", cn: "你的美术老师是谁？" },
                { en: "Mr Jones.", cn: "琼斯老师。" },
                { en: "Is he strict?", cn: "他严格吗？" },
                { en: "Yes, but he is kind.", cn: "是的，但他很和蔼。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "描述人物",
              content: [
                { en: "I have a new robot.", cn: "我有一个新机器人。" },
                { en: "Really? What's he like?", cn: "真的吗？他是什么样的？" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 My week",
          words: [
            { word: "Monday", phonetic: "/ˈmʌndeɪ/", meaning: "星期一", example: "Today is Monday.", exampleCn: "今天是星期一。", tags: ["星期", "四会词"] },
            { word: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", meaning: "星期二", example: "Tomorrow is Tuesday.", exampleCn: "明天是星期二。", tags: ["星期", "四会词"] },
            { word: "Wednesday", phonetic: "/ˈwenzdeɪ/", meaning: "星期三", example: "It's Wednesday today.", exampleCn: "今天是星期三。", tags: ["星期", "四会词"] },
            { word: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", meaning: "星期四", example: "Thursday is near Friday.", exampleCn: "星期四离星期五很近。", tags: ["星期", "四会词"] },
            { word: "Friday", phonetic: "/ˈfraɪdeɪ/", meaning: "星期五", example: "I love Friday!", exampleCn: "我喜欢星期五！", tags: ["星期", "四会词"] },
            { word: "Saturday", phonetic: "/ˈsætərdeɪ/", meaning: "星期六", example: "Saturday is the weekend.", exampleCn: "星期六是周末。", tags: ["星期", "四会词"] },
            { word: "Sunday", phonetic: "/ˈsʌndeɪ/", meaning: "星期日", example: "Sunday is a rest day.", exampleCn: "星期日是休息日。", tags: ["星期", "四会词"] },
            { word: "weekend", phonetic: "/ˌwiːkˈend/", meaning: "周末", example: "I play on the weekend.", exampleCn: "我周末玩。", tags: ["时间", "三会词"] },
            { word: "wash", phonetic: "/wɒʃ/", meaning: "洗", example: "I wash my clothes.", exampleCn: "我洗我的衣服。", tags: ["动词", "三会词"] },
            { word: "watch", phonetic: "/wɒtʃ/", meaning: "看", example: "I watch TV.", exampleCn: "我看电视。", tags: ["动词", "四会词"] },
            { word: "read", phonetic: "/riːd/", meaning: "读", example: "I read books.", exampleCn: "我读书。", tags: ["动词", "四会词"] },
            { word: "play", phonetic: "/pleɪ/", meaning: "玩", example: "I play football.", exampleCn: "我踢足球。", tags: ["动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "今天星期几",
              content: [
                { en: "What day is it today?", cn: "今天星期几？" },
                { en: "It's Wednesday.", cn: "今天星期三。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "周末活动",
              content: [
                { en: "What do you do on the weekend?", cn: "你周末做什么？" },
                { en: "I often watch TV.", cn: "我经常看电视。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 What would you like?",
          words: [
            { word: "sandwich", phonetic: "/ˈsænwɪtʃ/", meaning: "三明治", example: "I like sandwiches.", exampleCn: "我喜欢三明治。", tags: ["食物", "四会词"] },
            { word: "salad", phonetic: "/ˈsæləd/", meaning: "沙拉", example: "Salad is healthy.", exampleCn: "沙拉很健康。", tags: ["食物", "四会词"] },
            { word: "hamburger", phonetic: "/ˈhæmbɜːrɡər/", meaning: "汉堡包", example: "I want a hamburger.", exampleCn: "我想要一个汉堡包。", tags: ["食物", "四会词"] },
            { word: "ice cream", phonetic: "/ˌaɪs ˈkriːm/", meaning: "冰淇淋", example: "Ice cream is sweet.", exampleCn: "冰淇淋很甜。", tags: ["食物", "四会词"] },
            { word: "tea", phonetic: "/tiː/", meaning: "茶", example: "I like tea.", exampleCn: "我喜欢茶。", tags: ["饮料", "四会词"] },
            { word: "fresh", phonetic: "/freʃ/", meaning: "新鲜的", example: "The fruit is fresh.", exampleCn: "水果很新鲜。", tags: ["形容词", "三会词"] },
            { word: "healthy", phonetic: "/ˈhelθi/", meaning: "健康的", example: "Vegetables are healthy.", exampleCn: "蔬菜很健康。", tags: ["形容词", "三会词"] },
            { word: "delicious", phonetic: "/dɪˈlɪʃəs/", meaning: "美味的", example: "The food is delicious.", exampleCn: "食物很美味。", tags: ["形容词", "三会词"] },
            { word: "sweet", phonetic: "/swiːt/", meaning: "甜的", example: "The cake is sweet.", exampleCn: "蛋糕很甜。", tags: ["形容词", "三会词"] },
            { word: "hot", phonetic: "/hɒt/", meaning: "辣的", example: "The food is hot.", exampleCn: "食物很辣。", tags: ["形容词", "三会词"] },
            { word: "favourite", phonetic: "/ˈfeɪvərɪt/", meaning: "最喜欢的", example: "What's your favourite food?", exampleCn: "你最喜欢的食物是什么？", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你想吃什么",
              content: [
                { en: "What would you like to eat?", cn: "你想吃什么？" },
                { en: "A sandwich, please.", cn: "一个三明治，谢谢。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "最喜欢的食物",
              content: [
                { en: "What's your favourite food?", cn: "你最喜欢的食物是什么？" },
                { en: "Noodles. They're delicious.", cn: "面条。它们很美味。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 What can you do?",
          words: [
            { word: "sing", phonetic: "/sɪŋ/", meaning: "唱歌", example: "I can sing.", exampleCn: "我会唱歌。", tags: ["动词", "四会词"] },
            { word: "dance", phonetic: "/dɑːns/", meaning: "跳舞", example: "She can dance.", exampleCn: "她会跳舞。", tags: ["动词", "四会词"] },
            { word: "swim", phonetic: "/swɪm/", meaning: "游泳", example: "I can swim.", exampleCn: "我会游泳。", tags: ["动词", "四会词"] },
            { word: "cook", phonetic: "/kʊk/", meaning: "烹饪", example: "He can cook.", exampleCn: "他会做饭。", tags: ["动词", "四会词"] },
            { word: "play", phonetic: "/pleɪ/", meaning: "演奏", example: "I can play the piano.", exampleCn: "我会弹钢琴。", tags: ["动词", "四会词"] },
            { word: "draw", phonetic: "/drɔː/", meaning: "画", example: "I can draw pictures.", exampleCn: "我会画画。", tags: ["动词", "四会词"] },
            { word: "write", phonetic: "/raɪt/", meaning: "写", example: "I can write stories.", exampleCn: "我会写故事。", tags: ["动词", "四会词"] },
            { word: "speak", phonetic: "/spiːk/", meaning: "说", example: "I can speak English.", exampleCn: "我会说英语。", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "你会做什么",
              content: [
                { en: "What can you do?", cn: "你会做什么？" },
                { en: "I can sing English songs.", cn: "我会唱英文歌。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "才艺表演",
              content: [
                { en: "Can you do any kung fu?", cn: "你会武术吗？" },
                { en: "Yes, I can.", cn: "是的，我会。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 There is a big bed",
          words: [
            { word: "clock", phonetic: "/klɒk/", meaning: "时钟", example: "There is a clock.", exampleCn: "有一个时钟。", tags: ["物品", "四会词"] },
            { word: "plant", phonetic: "/plɑːnt/", meaning: "植物", example: "There is a plant.", exampleCn: "有一株植物。", tags: ["物品", "四会词"] },
            { word: "bottle", phonetic: "/ˈbɒtl/", meaning: "瓶子", example: "There is a water bottle.", exampleCn: "有一个水瓶。", tags: ["物品", "四会词"] },
            { word: "water bottle", phonetic: "/ˈwɔːtər ˈbɒtl/", meaning: "水瓶", example: "This is my water bottle.", exampleCn: "这是我的水瓶。", tags: ["物品", "四会词"] },
            { word: "bike", phonetic: "/baɪk/", meaning: "自行车", example: "There is a bike.", exampleCn: "有一辆自行车。", tags: ["交通", "三会词"] },
            { word: "photo", phonetic: "/ˈfəʊtəʊ/", meaning: "照片", example: "There is a photo.", exampleCn: "有一张照片。", tags: ["物品", "四会词"] },
            { word: "front", phonetic: "/frʌnt/", meaning: "正面", example: "in front of 在...前面", exampleCn: "在...前面", tags: ["方位", "三会词"] },
            { word: "between", phonetic: "/bɪˈtwiːn/", meaning: "中间", example: "between...and... 在...和...之间", exampleCn: "在...和...之间", tags: ["方位", "三会词"] },
            { word: "above", phonetic: "/əˈbʌv/", meaning: "上面", example: "The picture is above the bed.", exampleCn: "画在床上面。", tags: ["方位", "三会词"] },
            { word: "beside", phonetic: "/bɪˈsaɪd/", meaning: "旁边", example: "The chair is beside the desk.", exampleCn: "椅子在书桌旁边。", tags: ["方位", "三会词"] },
            { word: "behind", phonetic: "/bɪˈhaɪnd/", meaning: "后面", example: "The ball is behind the door.", exampleCn: "球在门后面。", tags: ["方位", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "我的房间",
              content: [
                { en: "There is a big bed.", cn: "有一张大床。" },
                { en: "There is a nice photo.", cn: "有一张漂亮的照片。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "房间里有什么",
              content: [
                { en: "What's in the room?", cn: "房间里有什么？" },
                { en: "There is a clock and a plant.", cn: "有一个时钟和一株植物。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 In a nature park",
          words: [
            { word: "forest", phonetic: "/ˈfɒrɪst/", meaning: "森林", example: "There is a forest.", exampleCn: "有一片森林。", tags: ["自然", "四会词"] },
            { word: "river", phonetic: "/ˈrɪvər/", meaning: "河流", example: "There is a river.", exampleCn: "有一条河。", tags: ["自然", "四会词"] },
            { word: "lake", phonetic: "/leɪk/", meaning: "湖泊", example: "There is a lake.", exampleCn: "有一个湖。", tags: ["自然", "四会词"] },
            { word: "mountain", phonetic: "/ˈmaʊntən/", meaning: "山", example: "There is a mountain.", exampleCn: "有一座山。", tags: ["自然", "三会词"] },
            { word: "hill", phonetic: "/hɪl/", meaning: "小山", example: "There is a hill.", exampleCn: "有一座小山。", tags: ["自然", "三会词"] },
            { word: "tree", phonetic: "/triː/", meaning: "树", example: "There are many trees.", exampleCn: "有很多树。", tags: ["自然", "四会词"] },
            { word: "bridge", phonetic: "/brɪdʒ/", meaning: "桥", example: "There is a bridge.", exampleCn: "有一座桥。", tags: ["建筑", "三会词"] },
            { word: "building", phonetic: "/ˈbɪldɪŋ/", meaning: "建筑物", example: "There is a tall building.", exampleCn: "有一座高楼。", tags: ["建筑", "三会词"] },
            { word: "village", phonetic: "/ˈvɪlɪdʒ/", meaning: "村庄", example: "There is a village.", exampleCn: "有一个村庄。", tags: ["地点", "三会词"] },
            { word: "house", phonetic: "/haʊs/", meaning: "房子", example: "There is a small house.", exampleCn: "有一座小房子。", tags: ["建筑", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "公园里有河吗",
              content: [
                { en: "Is there a river in the forest?", cn: "森林里有河吗？" },
                { en: "Yes, there is.", cn: "是的，有。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "自然公园",
              content: [
                { en: "Are there any tall buildings?", cn: "有高楼吗？" },
                { en: "No, there aren't.", cn: "不，没有。" }
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
            { word: "young", phonetic: "/jʌŋ/", meaning: "年轻的", example: "She looks young.", exampleCn: "她看起来很年轻。", tags: ["形容词", "四会词"] },
            { word: "old", phonetic: "/əʊld/", meaning: "年老的", example: "He is older than me.", exampleCn: "他比我大。", tags: ["形容词", "四会词"] },
            { word: "tall", phonetic: "/tɔːl/", meaning: "高的", example: "I'm taller than you.", exampleCn: "我比你高。", tags: ["形容词", "四会词"] },
            { word: "short", phonetic: "/ʃɔːt/", meaning: "矮的", example: "She is shorter than me.", exampleCn: "她比我矮。", tags: ["形容词", "四会词"] },
            { word: "long", phonetic: "/lɒŋ/", meaning: "长的", example: "Your hair is longer than mine.", exampleCn: "你的头发比我的长。", tags: ["形容词", "四会词"] },
            { word: "thin", phonetic: "/θɪn/", meaning: "瘦的", example: "You are thinner than before.", exampleCn: "你比以前瘦了。", tags: ["形容词", "四会词"] },
            { word: "heavy", phonetic: "/ˈhevi/", meaning: "重的", example: "I'm heavier than you.", exampleCn: "我比你重。", tags: ["形容词", "四会词"] },
            { word: "big", phonetic: "/bɪɡ/", meaning: "大的", example: "Your feet are bigger than mine.", exampleCn: "你的脚比我的大。", tags: ["形容词", "四会词"] },
            { word: "small", phonetic: "/smɔːl/", meaning: "小的", example: "Her hands are smaller than mine.", exampleCn: "她的手比我的小。", tags: ["形容词", "四会词"] },
            { word: "strong", phonetic: "/strɒŋ/", meaning: "强壮的", example: "He is stronger than me.", exampleCn: "他比我强壮。", tags: ["形容词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "比较身高",
              content: [
                { en: "How tall are you?", cn: "你有多高？" },
                { en: "I'm 1.65 metres.", cn: "我1.65米。" },
                { en: "You're taller than me!", cn: "你比我高！" },
                { en: "Yes, I'm 5 centimetres taller.", cn: "是的，我高5厘米。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "比较体重",
              content: [
                { en: "How heavy are you?", cn: "你有多重？" },
                { en: "I'm 48 kilograms.", cn: "我48公斤。" },
                { en: "I'm heavier than you.", cn: "我比你重。" },
                { en: "Yes, you look stronger.", cn: "是的，你看起来更强壮。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 Last weekend",
          words: [
            { word: "cleaned", phonetic: "/kliːnd/", meaning: "打扫（过去式）", example: "I cleaned my room last weekend.", exampleCn: "我上周末打扫了房间。", tags: ["动词过去式", "四会词"] },
            { word: "stayed", phonetic: "/steɪd/", meaning: "停留（过去式）", example: "I stayed at home.", exampleCn: "我待在家里。", tags: ["动词过去式", "四会词"] },
            { word: "washed", phonetic: "/wɒʃt/", meaning: "洗（过去式）", example: "I washed my clothes.", exampleCn: "我洗了衣服。", tags: ["动词过去式", "四会词"] },
            { word: "watched", phonetic: "/wɒtʃt/", meaning: "看（过去式）", example: "I watched TV last night.", exampleCn: "我昨晚看电视了。", tags: ["动词过去式", "四会词"] },
            { word: "had", phonetic: "/hæd/", meaning: "有/吃（过去式）", example: "I had a cold.", exampleCn: "我感冒了。", tags: ["动词过去式", "四会词"] },
            { word: "slept", phonetic: "/slept/", meaning: "睡觉（过去式）", example: "I slept early last night.", exampleCn: "我昨晚睡得很早。", tags: ["动词过去式", "四会词"] },
            { word: "read", phonetic: "/red/", meaning: "读（过去式）", example: "I read a book yesterday.", exampleCn: "我昨天看书了。", tags: ["动词过去式", "四会词"] },
            { word: "saw", phonetic: "/sɔː/", meaning: "看见（过去式）", example: "I saw a film.", exampleCn: "我看了一部电影。", tags: ["动词过去式", "三会词"] },
            { word: "yesterday", phonetic: "/ˈjestədeɪ/", meaning: "昨天", example: "What did you do yesterday?", exampleCn: "你昨天做了什么？", tags: ["时间", "四会词"] },
            { word: "last", phonetic: "/lɑːst/", meaning: "上一个", example: "Last weekend was fun.", exampleCn: "上周末很有趣。", tags: ["时间", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "上周末做了什么",
              content: [
                { en: "What did you do last weekend?", cn: "你上周末做了什么？" },
                { en: "I stayed at home and slept.", cn: "我待在家里睡觉。" },
                { en: "Did you do anything else?", cn: "你还做了别的吗？" },
                { en: "Yes, I read a book.", cn: "是的，我看了书。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "昨天怎么样",
              content: [
                { en: "How was your weekend?", cn: "你周末过得怎么样？" },
                { en: "It was fine, thanks.", cn: "很好，谢谢。" },
                { en: "What did you do?", cn: "你做了什么？" },
                { en: "I watched TV and washed my clothes.", cn: "我看了电视，洗了衣服。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 Where did you go?",
          words: [
            { word: "went", phonetic: "/went/", meaning: "去（过去式）", example: "I went to the park.", exampleCn: "我去了公园。", tags: ["动词过去式", "四会词"] },
            { word: "camping", phonetic: "/ˈkæmpɪŋ/", meaning: "露营", example: "We went camping last week.", exampleCn: "我们上周去露营了。", tags: ["活动", "三会词"] },
            { word: "rode", phonetic: "/rəʊd/", meaning: "骑（过去式）", example: "I rode a horse.", exampleCn: "我骑了马。", tags: ["动词过去式", "四会词"] },
            { word: "hurt", phonetic: "/hɜːt/", meaning: "受伤（过去式）", example: "I hurt my foot.", exampleCn: "我的脚受伤了。", tags: ["动词过去式", "四会词"] },
            { word: "ate", phonetic: "/eɪt/", meaning: "吃（过去式）", example: "I ate fresh food.", exampleCn: "我吃了新鲜食物。", tags: ["动词过去式", "四会词"] },
            { word: "took", phonetic: "/tʊk/", meaning: "拍照/拿（过去式）", example: "I took lots of pictures.", exampleCn: "我拍了很多照片。", tags: ["动词过去式", "四会词"] },
            { word: "bought", phonetic: "/bɔːt/", meaning: "买（过去式）", example: "I bought some gifts.", exampleCn: "我买了一些礼物。", tags: ["动词过去式", "三会词"] },
            { word: "gift", phonetic: "/ɡɪft/", meaning: "礼物", example: "This gift is for you.", exampleCn: "这是给你的礼物。", tags: ["名词", "四会词"] },
            { word: "beach", phonetic: "/biːtʃ/", meaning: "海滩", example: "We went to the beach.", exampleCn: "我们去了海滩。", tags: ["地点", "三会词"] },
            { word: "Turpan", phonetic: "/ˈtɜːrpæn/", meaning: "吐鲁番", example: "Turpan is beautiful.", exampleCn: "吐鲁番很美。", tags: ["地点", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "去了哪里",
              content: [
                { en: "Where did you go last holiday?", cn: "你上个假期去了哪里？" },
                { en: "I went to Turpan.", cn: "我去了吐鲁番。" },
                { en: "How did you go there?", cn: "你怎么去的？" },
                { en: "We went by plane.", cn: "我们坐飞机去的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "假日活动",
              content: [
                { en: "What did you do there?", cn: "你在那里做了什么？" },
                { en: "I rode a horse and went camping.", cn: "我骑了马，还露营了。" },
                { en: "Did you eat good food?", cn: "你吃了好吃的吗？" },
                { en: "Yes, I ate fresh grapes.", cn: "是的，我吃了新鲜葡萄。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 Then and now",
          words: [
            { word: "dining hall", phonetic: "/ˈdaɪnɪŋ hɔːl/", meaning: "食堂", example: "There was no dining hall before.", exampleCn: "以前没有食堂。", tags: ["地点", "三会词"] },
            { word: "grass", phonetic: "/ɡrɑːs/", meaning: "草地", example: "There was no grass then.", exampleCn: "那时没有草地。", tags: ["名词", "三会词"] },
            { word: "gym", phonetic: "/dʒɪm/", meaning: "体育馆", example: "There is a new gym now.", exampleCn: "现在有一个新体育馆。", tags: ["地点", "三会词"] },
            { word: "ago", phonetic: "/əˈɡəʊ/", meaning: "以前", example: "Five years ago, I was small.", exampleCn: "五年前，我很矮小。", tags: ["时间", "四会词"] },
            { word: "before", phonetic: "/bɪˈfɔːr/", meaning: "以前", example: "I didn't like maths before.", exampleCn: "我以前不喜欢数学。", tags: ["时间", "四会词"] },
            { word: "now", phonetic: "/naʊ/", meaning: "现在", example: "Now I love maths.", exampleCn: "现在我喜欢数学了。", tags: ["时间", "四会词"] },
            { word: "different", phonetic: "/ˈdɪfrənt/", meaning: "不同的", example: "I'm different now.", exampleCn: "现在我不一样了。", tags: ["形容词", "三会词"] },
            { word: "active", phonetic: "/ˈæktɪv/", meaning: "活跃的", example: "She was quiet, but now she's active.", exampleCn: "她以前很安静，但现在很活跃。", tags: ["形容词", "三会词"] },
            { word: "quiet", phonetic: "/ˈkwaɪət/", meaning: "安静的", example: "I was quiet before.", exampleCn: "我以前很安静。", tags: ["形容词", "四会词"] },
            { word: "could", phonetic: "/kʊd/", meaning: "能够（过去式）", example: "I couldn't swim before.", exampleCn: "我以前不会游泳。", tags: ["情态动词", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "过去和现在",
              content: [
                { en: "There was no gym in my old school.", cn: "我以前的学校没有体育馆。" },
                { en: "What was it like?", cn: "它是什么样子的？" },
                { en: "There were no computers.", cn: "那时没有电脑。" },
                { en: "Now there is a new one.", cn: "现在有一个新的。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "我变了",
              content: [
                { en: "Before, I was quiet.", cn: "以前，我很安静。" },
                { en: "Now, I'm very active.", cn: "现在，我很活跃。" },
                { en: "Could you swim before?", cn: "你以前会游泳吗？" },
                { en: "No, but now I can swim well.", cn: "不会，但现在我游得很好。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 What does he do?",
          words: [
            { word: "factory worker", phonetic: "/ˈfæktəri ˈwɜːkər/", meaning: "工厂工人", example: "My uncle is a factory worker.", exampleCn: "我叔叔是工厂工人。", tags: ["职业", "三会词"] },
            { word: "postman", phonetic: "/ˈpəʊstmən/", meaning: "邮递员", example: "The postman brings letters.", exampleCn: "邮递员送信。", tags: ["职业", "三会词"] },
            { word: "businessman", phonetic: "/ˈbɪznəsmæn/", meaning: "商人", example: "He is a businessman.", exampleCn: "他是一个商人。", tags: ["职业", "三会词"] },
            { word: "police officer", phonetic: "/pəˈliːs ˈɒfɪsər/", meaning: "警察", example: "She wants to be a police officer.", exampleCn: "她想当警察。", tags: ["职业", "三会词"] },
            { word: "fisherman", phonetic: "/ˈfɪʃəmən/", meaning: "渔民", example: "The fisherman catches fish.", exampleCn: "渔民捕鱼。", tags: ["职业", "三会词"] },
            { word: "scientist", phonetic: "/ˈsaɪəntɪst/", meaning: "科学家", example: "She wants to be a scientist.", exampleCn: "她想当科学家。", tags: ["职业", "四会词"] },
            { word: "pilot", phonetic: "/ˈpaɪlət/", meaning: "飞行员", example: "He is a pilot.", exampleCn: "他是一名飞行员。", tags: ["职业", "四会词"] },
            { word: "coach", phonetic: "/kəʊtʃ/", meaning: "教练", example: "My father is a coach.", exampleCn: "我爸爸是教练。", tags: ["职业", "四会词"] },
            { word: "country", phonetic: "/ˈkʌntri/", meaning: "国家", example: "What country is he from?", exampleCn: "他来自哪个国家？", tags: ["名词", "三会词"] },
            { word: "head teacher", phonetic: "/hed ˈtiːtʃər/", meaning: "校长", example: "The head teacher is kind.", exampleCn: "校长很和蔼。", tags: ["职业", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "做什么工作",
              content: [
                { en: "What does your father do?", cn: "你爸爸是做什么的？" },
                { en: "He is a pilot.", cn: "他是一名飞行员。" },
                { en: "Where does he work?", cn: "他在哪里工作？" },
                { en: "He works at an airport.", cn: "他在机场工作。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "在哪里工作",
              content: [
                { en: "What does your mother do?", cn: "你妈妈是做什么的？" },
                { en: "She is a scientist.", cn: "她是一名科学家。" },
                { en: "Where does she work?", cn: "她在哪里工作？" },
                { en: "She works at a university.", cn: "她在一所大学工作。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 How do you feel?",
          words: [
            { word: "afraid", phonetic: "/əˈfreɪd/", meaning: "害怕的", example: "Don't be afraid.", exampleCn: "不要害怕。", tags: ["情感", "四会词"] },
            { word: "sad", phonetic: "/sæd/", meaning: "难过的", example: "The cat is sad.", exampleCn: "猫很难过。", tags: ["情感", "四会词"] },
            { word: "worried", phonetic: "/ˈwʌrid/", meaning: "担心的", example: "She looks worried.", exampleCn: "她看起来很担心。", tags: ["情感", "四会词"] },
            { word: "angry", phonetic: "/ˈæŋɡri/", meaning: "生气的", example: "Don't be angry.", exampleCn: "不要生气。", tags: ["情感", "四会词"] },
            { word: "happy", phonetic: "/ˈhæpi/", meaning: "高兴的", example: "I'm so happy!", exampleCn: "我太高兴了！", tags: ["情感", "四会词"] },
            { word: "ill", phonetic: "/ɪl/", meaning: "生病的", example: "He is ill today.", exampleCn: "他今天生病了。", tags: ["形容词", "四会词"] },
            { word: "see a doctor", phonetic: "/siː ə ˈdɒktər/", meaning: "看医生", example: "You should see a doctor.", exampleCn: "你应该去看医生。", tags: ["短语", "四会词"] },
            { word: "wear", phonetic: "/weər/", meaning: "穿", example: "Wear warm clothes.", exampleCn: "穿暖和的衣服。", tags: ["动词", "四会词"] },
            { word: "deep", phonetic: "/diːp/", meaning: "深的", example: "Take a deep breath.", exampleCn: "深呼吸。", tags: ["形容词", "三会词"] },
            { word: "breath", phonetic: "/breθ/", meaning: "呼吸", example: "Take a deep breath.", exampleCn: "深呼吸。", tags: ["名词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "感觉如何",
              content: [
                { en: "How do you feel?", cn: "你感觉怎么样？" },
                { en: "I'm happy.", cn: "我很高兴。" },
                { en: "Why are you sad?", cn: "你为什么难过？" },
                { en: "The cat is ill.", cn: "猫生病了。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "该怎么办",
              content: [
                { en: "What should I do?", cn: "我该怎么办？" },
                { en: "You should see a doctor.", cn: "你应该去看医生。" },
                { en: "Don't be worried.", cn: "不要担心。" },
                { en: "You'll be fine.", cn: "你会好起来的。" }
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
            { word: "science museum", phonetic: "/ˈsaɪəns mjuˈziːəm/", meaning: "科学博物馆", example: "Let's go to the science museum.", exampleCn: "我们去科学博物馆吧。", tags: ["地点", "四会词"] },
            { word: "post office", phonetic: "/pəʊst ˈɒfɪs/", meaning: "邮局", example: "Where is the post office?", exampleCn: "邮局在哪里？", tags: ["地点", "四会词"] },
            { word: "bookstore", phonetic: "/ˈbʊkstɔːr/", meaning: "书店", example: "I buy books at the bookstore.", exampleCn: "我在书店买书。", tags: ["地点", "四会词"] },
            { word: "cinema", phonetic: "/ˈsɪnəmə/", meaning: "电影院", example: "Let's go to the cinema.", exampleCn: "我们去看电影吧。", tags: ["地点", "四会词"] },
            { word: "hospital", phonetic: "/ˈhɒspɪtl/", meaning: "医院", example: "He is in the hospital.", exampleCn: "他在医院。", tags: ["地点", "四会词"] },
            { word: "crossing", phonetic: "/ˈkrɒsɪŋ/", meaning: "十字路口", example: "Turn left at the crossing.", exampleCn: "在十字路口左转。", tags: ["地点", "三会词"] },
            { word: "turn", phonetic: "/tɜːn/", meaning: "转弯", example: "Turn left here.", exampleCn: "在这里左转。", tags: ["方向", "四会词"] },
            { word: "left", phonetic: "/left/", meaning: "左", example: "Turn left.", exampleCn: "左转。", tags: ["方向", "四会词"] },
            { word: "right", phonetic: "/raɪt/", meaning: "右", example: "Turn right.", exampleCn: "右转。", tags: ["方向", "四会词"] },
            { word: "straight", phonetic: "/ˈstreɪt/", meaning: "直的", example: "Go straight on.", exampleCn: "直走。", tags: ["方向", "四会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "问路",
              content: [
                { en: "Where is the museum shop?", cn: "博物馆商店在哪里？" },
                { en: "It's near the door.", cn: "它在门附近。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "怎么去那里",
              content: [
                { en: "How can we get there?", cn: "我们怎么到那里？" },
                { en: "Turn left at the bookstore.", cn: "在书店左转。" }
              ]
            }
          ]
        },
        {
          unitId: "U2",
          unitName: "Unit 2 Ways to go to school",
          words: [
            { word: "on foot", phonetic: "/ɒn fʊt/", meaning: "步行", example: "I go to school on foot.", exampleCn: "我步行去上学。", tags: ["交通", "四会词"] },
            { word: "by bus", phonetic: "/baɪ bʌs/", meaning: "乘公交车", example: "I go by bus.", exampleCn: "我乘公交车去。", tags: ["交通", "四会词"] },
            { word: "by plane", phonetic: "/baɪ pleɪn/", meaning: "乘飞机", example: "I travel by plane.", exampleCn: "我乘飞机旅行。", tags: ["交通", "四会词"] },
            { word: "by taxi", phonetic: "/baɪ ˈtæksi/", meaning: "乘出租车", example: "Let's go by taxi.", exampleCn: "我们乘出租车去吧。", tags: ["交通", "四会词"] },
            { word: "by ship", phonetic: "/baɪ ʃɪp/", meaning: "乘船", example: "We go by ship.", exampleCn: "我们乘船去。", tags: ["交通", "三会词"] },
            { word: "by subway", phonetic: "/baɪ ˈsʌbweɪ/", meaning: "乘地铁", example: "I go by subway.", exampleCn: "我乘地铁去。", tags: ["交通", "四会词"] },
            { word: "by train", phonetic: "/baɪ treɪn/", meaning: "乘火车", example: "We travel by train.", exampleCn: "我们乘火车旅行。", tags: ["交通", "四会词"] },
            { word: "slow", phonetic: "/sləʊ/", meaning: "慢的", example: "Slow down!", exampleCn: "慢下来！", tags: ["形容词", "三会词"] },
            { word: "down", phonetic: "/daʊn/", meaning: "向下", example: "Slow down!", exampleCn: "慢下来！", tags: ["副词", "三会词"] },
            { word: "stop", phonetic: "/stɒp/", meaning: "停止", example: "Stop at the red light!", cn: "红灯停！", tags: ["交通", "四会词"] },
            { word: "wait", phonetic: "/weɪt/", meaning: "等待", example: "Wait at the yellow light!", cn: "黄灯等！", tags: ["交通", "四会词"] },
            { word: "traffic", phonetic: "/ˈtræfɪk/", meaning: "交通", example: "The traffic light.", exampleCn: "交通信号灯。", tags: ["交通", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "怎么来学校",
              content: [
                { en: "How do you come to school?", cn: "你怎么来学校？" },
                { en: "Usually, I come on foot.", cn: "通常我步行来。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "交通规则",
              content: [
                { en: "Don't go at the red light!", cn: "红灯时不要走！" },
                { en: "OK. I see.", cn: "好的，我明白了。" }
              ]
            }
          ]
        },
        {
          unitId: "U3",
          unitName: "Unit 3 My weekend plan",
          words: [
            { word: "visit", phonetic: "/ˈvɪzɪt/", meaning: "拜访", example: "I visit my grandparents.", exampleCn: "我拜访我的祖父母。", tags: ["动词", "四会词"] },
            { word: "film", phonetic: "/fɪlm/", meaning: "电影", example: "Let's see a film.", exampleCn: "我们去看电影吧。", tags: ["娱乐", "四会词"] },
            { word: "see a film", phonetic: "/siː ə fɪlm/", meaning: "看电影", example: "I see a film.", exampleCn: "我看电影。", tags: ["娱乐", "四会词"] },
            { word: "trip", phonetic: "/trɪp/", meaning: "旅行", example: "We had a nice trip.", exampleCn: "我们有一次愉快的旅行。", tags: ["旅行", "四会词"] },
            { word: "take a trip", phonetic: "/teɪk ə trɪp/", meaning: "去旅行", example: "Let's take a trip.", exampleCn: "我们去旅行吧。", tags: ["旅行", "四会词"] },
            { word: "supermarket", phonetic: "/ˈsuːpəmɑːrkɪt/", meaning: "超市", example: "I shop at the supermarket.", exampleCn: "我在超市购物。", tags: ["地点", "三会词"] },
            { word: "evening", phonetic: "/ˈiːvnɪŋ/", meaning: "晚上", example: "Good evening!", exampleCn: "晚上好！", tags: ["时间", "四会词"] },
            { word: "tonight", phonetic: "/təˈnaɪt/", meaning: "今晚", example: "See you tonight.", exampleCn: "今晚见。", tags: ["时间", "三会词"] },
            { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", meaning: "明天", example: "See you tomorrow.", exampleCn: "明天见。", tags: ["时间", "四会词"] },
            { word: "next week", phonetic: "/nekst wiːk/", meaning: "下周", example: "I will go next week.", exampleCn: "我下周去。", tags: ["时间", "三会词"] },
            { word: "dictionary", phonetic: "/ˈdɪkʃənri/", meaning: "词典", example: "I use a dictionary.", exampleCn: "我用词典。", tags: ["文具", "三会词"] },
            { word: "comic book", phonetic: "/ˈkɒmɪk bʊk/", meaning: "连环画", example: "I like comic books.", exampleCn: "我喜欢连环画。", tags: ["书籍", "三会词"] },
            { word: "word book", phonetic: "/wɜːd bʊk/", meaning: "单词书", example: "This is my word book.", exampleCn: "这是我的单词书。", tags: ["书籍", "三会词"] },
            { word: "postcard", phonetic: "/ˈpəʊstkɑːrd/", meaning: "明信片", example: "I send a postcard.", exampleCn: "我寄了一张明信片。", tags: ["物品", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "周末计划",
              content: [
                { en: "What are you going to do tomorrow?", cn: "你明天打算做什么？" },
                { en: "I'm going to see a film.", cn: "我打算去看电影。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "去哪里",
              content: [
                { en: "Where are you going?", cn: "你要去哪里？" },
                { en: "We're going to the cinema.", cn: "我们要去电影院。" }
              ]
            }
          ]
        },
        {
          unitId: "U4",
          unitName: "Unit 4 I have a pen pal",
          words: [
            { word: "pen pal", phonetic: "/pen pæl/", meaning: "笔友", example: "I have a pen pal.", exampleCn: "我有一个笔友。", tags: ["人物", "四会词"] },
            { word: "hobby", phonetic: "/ˈhɒbi/", meaning: "爱好", example: "Reading is my hobby.", exampleCn: "阅读是我的爱好。", tags: ["爱好", "四会词"] },
            { word: "jasmine", phonetic: "/ˈdʒæzmɪn/", meaning: "茉莉", example: "I like jasmine.", exampleCn: "我喜欢茉莉。", tags: ["植物", "三会词"] },
            { word: "idea", phonetic: "/aɪˈdɪə/", meaning: "主意", example: "That's a good idea!", exampleCn: "那是个好主意！", tags: ["基础", "三会词"] },
            { word: "can", phonetic: "/kæn/", meaning: "能", example: "I can speak English.", exampleCn: "我会说英语。", tags: ["动词", "四会词"] },
            { word: "only", phonetic: "/ˈəʊnli/", meaning: "只有", example: "Only four years old.", exampleCn: "只有四岁。", tags: ["副词", "三会词"] },
            { word: "also", phonetic: "/ˈɔːlsəʊ/", meaning: "也", example: "I also like swimming.", exampleCn: "我也喜欢游泳。", tags: ["副词", "四会词"] },
            { word: "yes", phonetic: "/jes/", meaning: "是", example: "Yes, I do.", exampleCn: "是的。", tags: ["基础", "四会词"] },
            { word: "no", phonetic: "/nəʊ/", meaning: "不", example: "No, I don't.", exampleCn: "不，我不。", tags: ["基础", "四会词"] },
            { word: "come", phonetic: "/kʌm/", meaning: "来", example: "Come and play!", exampleCn: "来玩吧！", tags: ["动词", "三会词"] },
            { word: "together", phonetic: "/təˈɡeðər/", meaning: "一起", example: "Let's go together.", exampleCn: "我们一起去吧。", tags: ["副词", "三会词"] },
            { word: "get", phonetic: "/ɡet/", meaning: "到达", example: "How do I get there?", exampleCn: "我怎么到那里？", tags: ["动词", "三会词"] },
            { word: "club", phonetic: "/klʌb/", meaning: "俱乐部", example: "I join a club.", exampleCn: "我加入了一个俱乐部。", tags: ["组织", "三会词"] },
            { word: "share", phonetic: "/ʃeər/", meaning: "分享", example: "Let's share!", exampleCn: "我们分享吧！", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "笔友",
              content: [
                { en: "I have a new pen pal.", cn: "我有一个新笔友。" },
                { en: "Really? What's his name?", cn: "真的吗？他叫什么名字？" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "爱好",
              content: [
                { en: "What are Peter's hobbies?", cn: "彼得有什么爱好？" },
                { en: "He likes reading stories.", cn: "他喜欢读故事。" }
              ]
            }
          ]
        },
        {
          unitId: "U5",
          unitName: "Unit 5 What does he do?",
          words: [
            { word: "factory", phonetic: "/ˈfæktri/", meaning: "工厂", example: "He works in a factory.", exampleCn: "他在工厂工作。", tags: ["地点", "四会词"] },
            { word: "worker", phonetic: "/ˈwɜːkər/", meaning: "工人", example: "He is a worker.", exampleCn: "他是一名工人。", tags: ["职业", "四会词"] },
            { word: "postman", phonetic: "/ˈpəʊstmən/", meaning: "邮递员", example: "He is a postman.", exampleCn: "他是一名邮递员。", tags: ["职业", "四会词"] },
            { word: "businessman", phonetic: "/ˈbɪznəsmæn/", meaning: "商人", example: "He is a businessman.", exampleCn: "他是一名商人。", tags: ["职业", "三会词"] },
            { word: "police officer", phonetic: "/pəˈliːs ˈɒfɪsər/", meaning: "警察", example: "He is a police officer.", exampleCn: "他是一名警察。", tags: ["职业", "三会词"] },
            { word: "fisherman", phonetic: "/ˈfɪʃəmən/", meaning: "渔民", example: "He is a fisherman.", exampleCn: "他是一名渔民。", tags: ["职业", "三会词"] },
            { word: "scientist", phonetic: "/ˈsaɪəntɪst/", meaning: "科学家", example: "He is a scientist.", exampleCn: "他是一名科学家。", tags: ["职业", "三会词"] },
            { word: "pilot", phonetic: "/ˈpaɪlət/", meaning: "飞行员", example: "He is a pilot.", exampleCn: "他是一名飞行员。", tags: ["职业", "三会词"] },
            { word: "coach", phonetic: "/kəʊtʃ/", meaning: "教练", example: "He is a coach.", exampleCn: "他是一名教练。", tags: ["职业", "三会词"] },
            { word: "country", phonetic: "/ˈkʌntri/", meaning: "国家", example: "China is a big country.", exampleCn: "中国是一个大国。", tags: ["地理", "三会词"] },
            { word: "head teacher", phonetic: "/hed ˈtiːtʃər/", meaning: "校长", example: "He is a head teacher.", exampleCn: "他是一名校长。", tags: ["职业", "三会词"] },
            { word: "sea", phonetic: "/siː/", meaning: "大海", example: "He works at sea.", exampleCn: "他在海上工作。", tags: ["自然", "三会词"] },
            { word: "stay", phonetic: "/steɪ/", meaning: "保持", example: "Stay healthy!", exampleCn: "保持健康！", tags: ["动词", "三会词"] },
            { word: "university", phonetic: "/ˌjuːnɪˈvɜːsəti/", meaning: "大学", example: "He studies at a university.", exampleCn: "他在大学学习。", tags: ["地点", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "职业",
              content: [
                { en: "What does he do?", cn: "他是做什么的？" },
                { en: "He's a businessman.", cn: "他是一名商人。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "在哪里工作",
              content: [
                { en: "Where does he work?", cn: "他在哪里工作？" },
                { en: "He works at sea.", cn: "他在海上工作。" }
              ]
            }
          ]
        },
        {
          unitId: "U6",
          unitName: "Unit 6 How do you feel?",
          words: [
            { word: "angry", phonetic: "/ˈæŋɡri/", meaning: "生气的", example: "He is angry.", exampleCn: "他很生气。", tags: ["情感", "四会词"] },
            { word: "afraid", phonetic: "/əˈfreɪd/", meaning: "害怕的", example: "He is afraid.", exampleCn: "他很害怕。", tags: ["情感", "四会词"] },
            { word: "sad", phonetic: "/sæd/", meaning: "难过的", example: "He is sad.", exampleCn: "他很难过。", tags: ["情感", "四会词"] },
            { word: "worried", phonetic: "/ˈwʌrid/", meaning: "担心的", example: "He is worried.", exampleCn: "他很担心。", tags: ["情感", "四会词"] },
            { word: "happy", phonetic: "/ˈhæpi/", meaning: "高兴的", example: "He is happy.", exampleCn: "他很高兴。", tags: ["情感", "四会词"] },
            { word: "see", phonetic: "/siː/", meaning: "看见", example: "I see a cat.", exampleCn: "我看见一只猫。", tags: ["动词", "四会词"] },
            { word: "doctor", phonetic: "/ˈdɒktər/", meaning: "医生", example: "See a doctor.", exampleCn: "看医生。", tags: ["职业", "四会词"] },
            { word: "more", phonetic: "/mɔːr/", meaning: "更多", example: "More exercise.", exampleCn: "更多运动。", tags: ["形容词", "三会词"] },
            { word: "deep", phonetic: "/diːp/", meaning: "深的", example: "Take a deep breath.", exampleCn: "深呼吸。", tags: ["形容词", "三会词"] },
            { word: "breath", phonetic: "/breθ/", meaning: "呼吸", example: "Take a deep breath.", exampleCn: "深呼吸。", tags: ["名词", "三会词"] },
            { word: "count", phonetic: "/kaʊnt/", meaning: "数数", example: "Count to ten.", exampleCn: "数到十。", tags: ["动词", "三会词"] },
            { word: "chase", phonetic: "/tʃeɪs/", meaning: "追赶", example: "The cat is chasing a mouse.", exampleCn: "猫正在追老鼠。", tags: ["动词", "三会词"] },
            { word: "mice", phonetic: "/maɪs/", meaning: "老鼠", example: "The mice are running.", exampleCn: "老鼠们在跑。", tags: ["动物", "三会词"] },
            { word: "bad", phonetic: "/bæd/", meaning: "坏的", example: "The bad mouse.", exampleCn: "坏老鼠。", tags: ["形容词", "三会词"] },
            { word: "hurt", phonetic: "/hɜːt/", meaning: "受伤", example: "He is hurt.", exampleCn: "他受伤了。", tags: ["动词", "三会词"] }
          ],
          texts: [
            {
              lesson: "Part A Let's talk",
              title: "感觉如何",
              content: [
                { en: "How do you feel?", cn: "你感觉怎么样？" },
                { en: "I'm happy.", cn: "我很高兴。" }
              ]
            },
            {
              lesson: "Part B Let's talk",
              title: "他怎么了",
              content: [
                { en: "What's wrong?", cn: "怎么了？" },
                { en: "Your father is ill.", cn: "你父亲病了。" }
              ]
            }
          ]
        }
      ]
    }
  }
};
