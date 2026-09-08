[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
# Hexo推送脚本：自动检测改动，有改动就自动提交，然后git push
Write-Host "`n===== 博客自动推送脚本开始 =====" -ForegroundColor Cyan

# 获取git状态
$statusOutput = git status
$ahead = git status | Select-String "Your branch is ahead of"
$hasChanges = git status | Select-String -Pattern "modified:|new file:|deleted:"

if ($hasChanges) {
    Write-Host "📝检测到文件改动，执行自动提交..." -ForegroundColor Yellow
    git add .
    git commit -m "auto update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}
else {
    Write-Host "ℹ️ 没有新的文件改动，跳过add/commit" -ForegroundColor Gray
}

# 重新获取提交后状态
$ahead = git status | Select-String "Your branch is ahead of"
if (-not $ahead) {
    Write-Host "✅ 本地与远端已经完全同步，无需推送。" -ForegroundColor Green
    pause
    exit 0
}

Write-Host "📌 存在待推送提交，执行 git push`n" -ForegroundColor White
git push

Write-Host "`n----- 校验推送结果 -----" -ForegroundColor Cyan
$afterAhead = git status | Select-String "Your branch is ahead of"

if ($afterAhead) {
    Write-Host "❌推送失败！本地仍然领先远端，大概率网络Connection was reset，请切换手机热点重试。" -ForegroundColor Red
}
else {
    Write-Host "🎉✅推送成功！前往Cloudflare Pages查看构建任务。" -ForegroundColor Green
}

Write-Host "`n==========================`n"
pause
