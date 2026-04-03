@echo off
chcp 65001 >nul
echo ========================================
echo   小学英语同步学习平台 - Git 初始化
echo ========================================
echo.

REM 检查是否已初始化
if exist ".git" (
    echo [提示] Git 仓库已存在，跳过初始化
    echo.
) else (
    echo [1/4] 初始化 Git 仓库...
    git init
    echo.
)

echo [2/4] 添加所有文件...
git add .
echo.

echo [3/4] 提交更改...
git commit -m "初始版本：小学英语同步学习平台"
echo.

echo [4/4] 创建主分支...
git branch -M main
echo.

echo ========================================
echo   ✅ Git 初始化完成！
echo ========================================
echo.
echo 下一步操作：
echo.
echo 1. 在 GitHub 创建仓库：https://github.com/new
echo 2. 运行以下命令（替换为你的仓库地址）：
echo.
echo    git remote add origin https://github.com/你的用户名/仓库名.git
echo    git push -u origin main
echo.
echo 3. 在仓库 Settings ^> Pages 中启用 GitHub Pages
echo.
echo 详细步骤请查看：DEPLOY.md
echo.
pause
