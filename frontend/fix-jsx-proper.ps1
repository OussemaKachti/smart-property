# Proper JSX Structure Fix Script

$pagesDir = "src\pages"
$jsxFiles = Get-ChildItem -Path $pagesDir -Filter "*.jsx"

Write-Host "Fixing JSX structure in $($jsxFiles.Count) files..."

foreach ($file in $jsxFiles) {
    Write-Host "Processing: $($file.Name)"
    
    $lines = Get-Content -Path $file.FullName
    $newLines = @()
    $inReturn = $false
    $returnLineIndex = -1
    
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        
        # Check if this is the return statement line
        if ($line -match '^\s*return \(') {
            $newLines += $line
            # Add fragment opening on next line
            $indent = if ($line -match '^(\s*)') { $matches[1] } else { '' }
            $newLines += "$indent    <>"
            $inReturn = $true
            $returnLineIndex = $i
            continue
        }
        
        # Check if we're at the closing of return
        if ($inReturn -and $line -match '^\s*\);' -and $i -gt $returnLineIndex + 2) {
            # Add fragment closing before );
            $indent = if ($line -match '^(\s*)') { $matches[1] } else { '' }
            $newLines += "$indent    </>"
            $newLines += $line
            $inReturn = $false
            continue
        }
        
        $newLines += $line
    }
    
    # Write the fixed content
    $newLines | Out-File -FilePath $file.FullName -Encoding UTF8
    
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "`nAll JSX structures fixed!"
