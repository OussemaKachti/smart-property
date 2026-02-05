# Fix JSX Syntax Errors Script

$pagesDir = "src\pages"

# Get all JSX files
$jsxFiles = Get-ChildItem -Path $pagesDir -Filter "*.jsx"

Write-Host "Fixing JSX syntax errors in $($jsxFiles.Count) files..."

foreach ($file in $jsxFiles) {
    Write-Host "Processing: $($file.Name)"
    
    # Read the file content
    $content = Get-Content -Path $file.FullName -Raw
    
    # Fix self-closing tags - img
    $content = $content -replace '<img([^>]*?)>', '<img$1 />'
    
    # Fix self-closing tags - input
    $content = $content -replace '<input([^>]*?)>', '<input$1 />'
    
    # Fix self-closing tags - hr
    $content = $content -replace '<hr([^>]*?)>', '<hr$1 />'
    
    # Fix self-closing tags - br
    $content = $content -replace '<br([^>]*?)>', '<br$1 />'
    
    # Fix self-closing tags - meta
    $content = $content -replace '<meta([^>]*?)>', '<meta$1 />'
    
    # Fix self-closing tags - link
    $content = $content -replace '<link([^>]*?)>', '<link$1 />'
    
    # Remove any remaining HTML comments that might have been missed
    $content = $content -replace '(?s)<!--.*?-->', ''
    
    # Save the fixed content
    $content | Out-File -FilePath $file.FullName -Encoding UTF8 -NoNewline
    
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "`nAll JSX syntax errors fixed!"
