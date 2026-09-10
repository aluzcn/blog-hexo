# cgs.ps1
Write-Host "===== Run hexo clean =====" -ForegroundColor Cyan
hexo clean
if ($LASTEXITCODE -ne 0) {
    Write-Host "hexo clean FAILED, exit" -ForegroundColor Red
    pause
    exit
}

Write-Host "`n===== Run hexo g =====" -ForegroundColor Cyan
hexo g
if ($LASTEXITCODE -ne 0) {
    Write-Host "hexo g FAILED, will NOT start server" -ForegroundColor Red
    pause
    exit
}

Write-Host "`nclean + g SUCCESS, starting hexo s" -ForegroundColor Green
hexo s
