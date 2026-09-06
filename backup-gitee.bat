@echo off
chcp 65001 >nul
chcp 936 >nul
echo ======================================
echo      Hexo源码备份推送至Gitee
echo ======================================
git add .
git status
set "commit_msg="
set /p commit_msg=请输入提交备注(直接回车=更新博客源码):
if "%commit_msg%"=="" set commit_msg=更新博客源码
git commit -m "%commit_msg%"
git push origin master
echo.
echo ? Gitee源码备份完成
echo.
pause
