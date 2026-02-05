# Comprehensive JSX Structure Fix Script

$pagesDir = "src\pages"

# Get all JSX files
$jsxFiles = Get-ChildItem -Path $pagesDir -Filter "*.jsx"

Write-Host "Fixing JSX structure in $($jsxFiles.Count) files..."

foreach ($file in $jsxFiles) {
    Write-Host "Processing: $($file.Name)"
    
    # Read the file content
    $content = Get-Content -Path $file.FullName -Raw
    
    # Fix the return statement - ensure it has a fragment wrapper
    # Pattern 1: return (\n\n\n\t\n\t<header -> return (\n    <>\n\t<header
    $content = $content -replace 'return \(\s*\n\s*\n\s*\n\s*\t\s*\n\s*\t<', 'return (`n    <>`n`t<'
    
    # Pattern 2: return (\n\n\t\n\t<header -> return (\n    <>\n\t<header  
    $content = $content -replace 'return \(\s*\n\s*\n\s*\t\s*\n\s*\t<', 'return (`n    <>`n`t<'
    
    # Pattern 3: return (\n\t<header -> return (\n    <>\n\t<header
    $content = $content -replace 'return \(\s*\n\s*\t<', 'return (`n    <>`n`t<'
    
    # Fix the closing - ensure </> before );
    # Pattern: multiple blank lines before );
    $content = $content -replace '\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*\);', "`n`n    </>`n  );`n"
    $content = $content -replace '\n\s*\n\s*\n\s*\n\s*\n\s*\);', "`n`n    </>`n  );`n"
    
    # Save the fixed content
    $content | Out-File -FilePath $file.FullName -Encoding UTF8 -NoNewline
    
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "`nAll JSX structures fixed!"
