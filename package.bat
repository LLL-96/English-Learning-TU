@echo off
chcp 65001 >nul
echo ========================================
echo   正在打包项目文件...
echo ========================================
echo.

set ZIP_NAME=小学英语同步学习平台.zip

REM 删除旧压缩包
if exist "%ZIP_NAME%" del "%ZIP_NAME%"

REM 使用 PowerShell 压缩
echo 创建 ZIP 文件：%ZIP_NAME%
powershell -Command "Compress-Archive -Path index.html,app.js,style.css,versions,README.md -DestinationPath '%ZIP_NAME%' -Force"

echo.
echo ========================================
echo   ✅ 打包完成！
echo ========================================
echo.
echo 文件位置：%CD%\%ZIP_NAME%
echo.
echo 你可以：
echo - 通过微信/QQ 发送给朋友
echo - 上传到网盘分享
echo - 保存到 U 盘随身携带
echo.
pause
