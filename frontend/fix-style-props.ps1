# PowerShell script to fix style prop formatting in all pages
$pagesDir = "src\pages"
$pages = Get-ChildItem "$pagesDir\*.jsx" -Name

foreach ($page in $pagesToUpdate) {
    $filePath = "$pagesDir\$page"
    Write-Host "Fixing style prop in $page..."
    
    # Read the file content
    $content = Get-Content $filePath -Raw
    
    # Fix the style prop - replace any malformed style string with proper object
    $content = $content -replace 'style=\{[^}]*minHeight[^}]*\}', 'style={{ 
      minHeight: ''100vh'', 
      overflow: ''visible'',
      position: ''relative'',
      width: ''100%''
    }}'
    
    # Also fix any style strings that might have been created incorrectly
    $content = $content -replace 'style="[^"]*minHeight[^"]*"', 'style={{ 
      minHeight: ''100vh'', 
      overflow: ''visible'',
      position: ''relative'',
      width: ''100%''
    }}'
    
    # Write back to file
    Set-Content $filePath $content -Encoding UTF8
    
    Write-Host "Fixed style prop in $page"
}

Write-Host "All style props fixed!"