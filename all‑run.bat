@echo off
chcp 65001 >nul
echo ======================================
echo    一键：部署EdgeOne + Gitee源码备份
echo ======================================
echo 1.清理 & 生成静态网页
hexo clean
hexo g
echo.
echo 2.上传静态文件到EdgeOne Makers
edgeone makers deploy public
echo.
echo 3.Gitee源码备份
git add .
git status
set "commit_msg="
set /p commit_msg=请输入提交备注(回车默认更新博客):
if "%commit_msg%"=="" set commit_msg=更新博客
git commit -m "%commit_msg%"
git push origin master

echo.
echo ==============全部任务完成==============
echo ✔ 网站已上传EdgeOne Makers
echo ✔ 源码已推送Gitee master分支
echo.
pause
