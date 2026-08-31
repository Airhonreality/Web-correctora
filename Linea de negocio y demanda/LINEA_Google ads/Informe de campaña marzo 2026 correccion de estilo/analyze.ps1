$files = Get-ChildItem "Informe de t*rminos de b*squeda.csv"
$text = Get-Content $files[0].FullName

if ($text.Length -gt 3) {
    # Skip first 2 lines
    $headerLine = $text[2]
    $isTab = $headerLine.Contains("`t")
    $delimiter = if ($isTab) { "`t" } else { "," }
    
    $dataText = $text | Select-Object -Skip 2
    $dataText = $dataText | Where-Object { $_ -notmatch "^Total:" -and $_.Trim() -ne "" }
    
    $data = $dataText | ConvertFrom-Csv -Delimiter $delimiter
    
    Write-Host "--- TOP TERMINOS DE MAYOR GASTO SIN CONVERSIONES ---"
    $noConv = $data | Where-Object { $_.Conversiones -eq "0.00" -or $_.Conversiones -eq "0" }
    $noConv | Sort-Object { [decimal]($_.Costo -replace "[^\d\.,]", "") } -Descending | Select-Object -First 10
    
    Write-Host "--- TOP TERMINOS CON MAS CONVERSIONES ---"
    $data | Sort-Object { [decimal]($_.Conversiones -replace "[^\d\.,]", "") } -Descending | Select-Object -First 10
}
