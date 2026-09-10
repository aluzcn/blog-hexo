# cgs-git.ps1
$now = Get-Date -Format "yyyy-MM-dd HH:mm"
$msg = "Update $now"

Write-Host "==== git add ===="
git add .

Write-Host "`n==== git commit ===="
git commit -m "$msg"

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nNo file changes, skip push"
    pause
    exit
}

Write-Host "`n==== git push origin main ===="
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nPush SUCCESS"
}else{
    Write-Host "`nPush FAILED"
}
pause
