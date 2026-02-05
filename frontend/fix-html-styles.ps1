# PowerShell script to fix all HTML style attributes to React style objects
$pagesDir = "src\pages"
$pages = Get-ChildItem "$pagesDir\*.jsx" -Name

foreach ($page in $pages) {
    $filePath = "$pagesDir\$page"
    Write-Host "Fixing HTML style attributes in $page..."
    
    # Read the file content
    $content = Get-Content $filePath -Raw
    
    # Fix style="min-height: 300px;" to style={{ minHeight: '300px' }}
    $content = $content -replace 'style="min-height:\s*300px;"', 'style={{ minHeight: ''300px'' }}'
    
    # Fix any other common HTML style patterns
    $content = $content -replace 'style="([^"]*)"', {
        param($match)
        $styleString = $match.Groups[1].Value
        
        # Convert CSS properties to camelCase and wrap in object syntax
        $styleString = $styleString -replace 'min-height:\s*([^;]+);?', 'minHeight: ''$1'''
        $styleString = $styleString -replace 'max-height:\s*([^;]+);?', 'maxHeight: ''$1'''
        $styleString = $styleString -replace 'background-color:\s*([^;]+);?', 'backgroundColor: ''$1'''
        $styleString = $styleString -replace 'font-size:\s*([^;]+);?', 'fontSize: ''$1'''
        $styleString = $styleString -replace 'margin-top:\s*([^;]+);?', 'marginTop: ''$1'''
        $styleString = $styleString -replace 'margin-bottom:\s*([^;]+);?', 'marginBottom: ''$1'''
        $styleString = $styleString -replace 'margin-left:\s*([^;]+);?', 'marginLeft: ''$1'''
        $styleString = $styleString -replace 'margin-right:\s*([^;]+);?', 'marginRight: ''$1'''
        $styleString = $styleString -replace 'padding-top:\s*([^;]+);?', 'paddingTop: ''$1'''
        $styleString = $styleString -replace 'padding-bottom:\s*([^;]+);?', 'paddingBottom: ''$1'''
        $styleString = $styleString -replace 'padding-left:\s*([^;]+);?', 'paddingLeft: ''$1'''
        $styleString = $styleString -replace 'padding-right:\s*([^;]+);?', 'paddingRight: ''$1'''
        
        return "style={{ $styleString }}"
    }
    
    # Write back to file
    Set-Content $filePath $content -Encoding UTF8
    
    Write-Host "Fixed HTML style attributes in $page"
}

Write-Host "All HTML style attributes converted to React style objects!"