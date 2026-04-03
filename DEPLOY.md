# 🚀 部署指南：小学英语同步学习平台

## 方式一：GitHub Pages（推荐）

### 前置准备
1. 注册/登录 [GitHub](https://github.com) 账号
2. 确保已安装 [Git](https://git-scm.com/downloads)（可选，但推荐）

### 部署步骤

#### 方法 A：通过 GitHub 网页上传（最简单）

1. **创建仓库**
   - 访问 https://github.com/new
   - 仓库名称：`english-learning`（或你喜欢的名称）
   - 设为 **Public**（公开）
   - 点击 "Create repository"

2. **上传文件**
   - 点击 "uploading an existing file"
   - 上传以下文件：
     - `index.html`
     - `app.js`
     - `style.css`
     - `versions/pep.js`
     - `versions/waiyan.js`
     - `versions/general.js`
   - 点击 "Commit changes"

3. **启用 GitHub Pages**
   - 进入仓库 Settings
   - 左侧菜单找到 "Pages"
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 或 "master"，文件夹选 "/ (root)"
   - 点击 "Save"

4. **访问网站**
   - 等待 1-2 分钟
   - 你的网站地址：`https://你的用户名.github.io/english-learning/`

---

#### 方法 B：通过 Git 命令行（推荐）

```bash
# 1. 进入项目目录
cd C:\Users\WIN10\EnglishCS

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "初始版本：小学英语同步学习平台"

# 5. 关联远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/english-learning.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main
```

然后在仓库设置中启用 GitHub Pages（同方法 A 的步骤 3）。

---

## 方式二：Netlify（备选）

### 部署步骤

1. 访问 https://www.netlify.com/
2. 使用 GitHub 账号登录
3. 点击 "Add new site" → "Deploy manually"
4. 将整个 `EnglishCS` 文件夹拖拽到上传区域
5. 等待部署完成，获得类似 `https://xxx-xxx.netlify.app` 的链接

---

## 方式三：Vercel（备选）

### 部署步骤

1. 访问 https://vercel.com/
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 导入你的 `english-learning` 仓库
5. 点击 "Deploy"
6. 获得类似 `https://english-learning.vercel.app` 的链接

---

## 自定义域名（可选）

如果你想使用自己的域名（如 `english.example.com`）：

### GitHub Pages 自定义域名
1. 在仓库根目录创建 `CNAME` 文件
2. 内容填写你的域名，如：`english.example.com`
3. 在你的域名 DNS 设置中添加 CNAME 记录，指向 `你的用户名.github.io`

---

## 分享你的网站

部署完成后，你可以：
- ✅ 通过微信/QQ 分享链接
- ✅ 发送邮件给朋友
- ✅ 在社交媒体发布链接
- ✅ 生成二维码方便手机扫描

---

## 更新内容

当你修改了代码后，只需：

### GitHub Pages
```bash
git add .
git commit -m "更新说明"
git push
```
网站会自动更新（1-2 分钟生效）。

### Netlify/Vercel
重新上传文件或推送代码即可。

---

## 注意事项

1. **文件大小**：当前项目约 200-300KB，完全免费
2. **访问速度**：GitHub Pages 在国内可能需要 2-5 秒加载
3. **HTTPS**：所有平台默认提供 HTTPS，安全访问
4. **流量限制**：个人使用完全够用

---

## 需要帮助？

如果部署过程中遇到任何问题，可以：
- 查看 GitHub Pages 文档：https://pages.github.com/
- 或在仓库提 Issue，我会帮你解决！

---

**祝你使用愉快！** 🎉
