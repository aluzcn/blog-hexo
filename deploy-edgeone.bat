@echo off
chcp 936 >nul
echo ======================================
echo    Hexo构建 + EdgeOne Makers上传
echo ======================================
echo [1/3] 清理旧静态文件
call hexo clean
if %errorlevel% neq 0 goto endfail

echo [2/3] 生成public静态页面
call hexo g
if %errorlevel% neq 0 goto endfail

echo [3/3] 上传public文件夹到EdgeOne
call edgeone deploy public
if %errorlevel% neq 0 goto endfail

echo.
echo ? EdgeOne网站部署完成！
echo.
goto endok

:endfail
echo ? 执行出错，终止脚本

:endok
pause
