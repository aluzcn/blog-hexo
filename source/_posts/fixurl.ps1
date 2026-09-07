Get-ChildItem -Recurse -Filter *.md | ForEach-Object {
    $txt = (Get-Content -LiteralPath $_.FullName -Raw) `
        -replace 'http://aluz.cn','https://cyoy.cn' `
        -replace 'https://aluz.cn','https://cyoy.cn'
    $txt | Set-Content -LiteralPath $_.FullName -Encoding utf8
}
