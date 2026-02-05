# HTML to JSX Conversion Script for React

$htmlDir = "src\html"
$pagesDir = "src\pages"

# Get all HTML files
$htmlFiles = Get-ChildItem -Path $htmlDir -Filter "*.html"

foreach ($file in $htmlFiles) {
    Write-Host "Processing: $($file.Name)"
    
    # Read the HTML content
    $content = Get-Content -Path $file.FullName -Raw
    
    # Extract just the body content (skip head and DOCTYPE)
    if ($content -match '(?s)<body[^>]*>(.*)</body>') {
        $bodyContent = $matches[1]
    } else {
        Write-Host "Skipping $($file.Name) - no body found"
        continue
    }
    
    # Remove script tags and their content
    $bodyContent = $bodyContent -replace '(?s)<script[^>]*>.*?</script>', ''
    
    # Remove cloudflare links
    $bodyContent = $bodyContent -replace '<a href="https://dreamsestate\.dreamstechnologies\.com[^>]*>.*?</a>', ''
    
    # Remove HTML comments
    $bodyContent = $bodyContent -replace '<!--.*?-->', ''
    
    # Convert HTML attributes to JSX
    $bodyContent = $bodyContent -replace '\sclass="', ' className="'
    $bodyContent = $bodyContent -replace '\sfor="', ' htmlFor="'
    $bodyContent = $bodyContent -replace 'javascript:void\(0\);', '#'
    $bodyContent = $bodyContent -replace 'assets/', '/assets/'
    
    # Convert hyphentated attributes to camelCase
    $bodyContent = $bodyContent -replace 'data-aos-duration', 'data-aos-duration'
    $bodyContent = $bodyContent -replace 'data-aos-delay', 'data-aos-delay'
    $bodyContent = $bodyContent -replace 'data-bs-toggle', 'data-bs-toggle'
    $bodyContent = $bodyContent -replace 'data-bs-target', 'data-bs-target'
    $bodyContent = $bodyContent -replace 'aria-hidden', 'aria-hidden'
    $bodyContent = $bodyContent -replace 'aria-label', 'aria-label'
    
    # Create component name from file name
    $baseName = $file.BaseName -replace '-', ' '
    $componentName = (Get-Culture).TextInfo.ToTitleCase($baseName) -replace ' ', ''
    
    # Create the JSX component
    $jsxContent = @"
import React from 'react';
import { Link } from 'react-router-dom';

const $componentName = () => {
  return (
$bodyContent
  );
};

export default $componentName;
"@
    
    # Save the JSX file
    $jsxFileName = "$componentName.jsx"
    $jsxFilePath = Join-Path $pagesDir $jsxFileName
    
    $jsxContent | Out-File -FilePath $jsxFilePath -Encoding UTF8
    
    Write-Host "Created: $jsxFileName"
}

Write-Host "`nConversion complete! All HTML files converted to JSX components in src\pages\"
