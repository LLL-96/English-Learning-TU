// 人教版 (PEP) 英语教材数据 - 三年级起点（完整版）
// 依据最新教材编写，包含 3-6 年级上下册所有单元的单词和课文
const pepData = {
  versionId: "pep",
  versionName: "人教版 PEP",
  description: "人民教育出版社 | 三年级起点 | 全国使用最广 | 完整单元版",
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
