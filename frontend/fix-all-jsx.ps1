# Comprehensive JSX Fix - All Issues

$pagesDir = "src\pages"
$jsxFiles = Get-ChildItem -Path $pagesDir -Filter "*.jsx"

Write-Host "Fixing all JSX issues in $($jsxFiles.Count) files..."

foreach ($file in $jsxFiles) {
    Write-Host "Processing: $($file.Name)"
    
    # Read entire file as single string
    $content = Get-Content -Path $file.FullName -Raw
    
    # 1. Fix all self-closing tags
    $content = $content -replace '<img([^>]*?)>', '<img$1 />'
    $content = $content -replace '<input([^>]*?)>', '<input$1 />'
    $content = $content -replace '<hr([^>]*?)>', '<hr$1 />'
    $content = $content -replace '<br([^>]*?)>', '<br$1 />'
    $content = $content -replace '<meta([^>]*?)>', '<meta$1 />'
    $content = $content -replace '<link([^>]*?)>', '<link$1 />'
    
    # 2. Remove HTML comments
    $content = $content -replace '(?s)<!--.*?-->', ''
    
    # 3. Add React Fragment wrapper
    # Read as lines for structural fixes
    $lines = $content -split "`r?`n"
    $newLines = [System.Collections.ArrayList]@()
    $returnFound = $false
    $addedFragment = $false
    
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        
        # Find return ( line
        if (-not $returnFound -and $line -match '^\s*return \(') {
            [void]$newLines.Add($line)
            # Add <> on next line
            $indent = '    '
            [void]$newLines.Add("$indent<>")
            $returnFound = $true
            $addedFragment = $true
            continue
        }
        
        # Find closing ); and add </> before it
        if ($returnFound -and -not $addedFragment -eq $false -and $line -match '^\s*\);' -and $i -gt 5) {
            $indent = '    '
            [void]$newLines.Add("$indent</>")
            [void]$newLines.Add($line)
            $addedFragment = $false
            continue
        }
        
        [void]$newLines.Add($line)
    }
    
    # Join lines back
    $content = $newLines -join "`r`n"
    
    # Save fixed content
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.UTF8Encoding]::new($false))
    
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "`nAll JSX files fixed successfully!"
