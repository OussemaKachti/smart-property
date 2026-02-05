# Better conversion for index-3.html

$htmlFile = "src\html\index-3.html"
$outputFile = "src\pages\Index3.jsx"

Write-Host "Converting index-3.html to Index3.jsx (improved)..."

# Read the HTML file
$content = Get-Content -Path $htmlFile -Raw

# Remove HTML document structure
$content = $content -replace '(?s)<!DOCTYPE.*?<body[^>]*>.*?<!-- Begin page -->\s*<div class="main-wrapper">', '<div className="main-wrapper">'
$content = $content -replace '(?s)</div>\s*<!-- End Page -->.*', '</div>'

# Convert HTML to JSX
$content = $content -replace 'javascript:void\(0\);?', '#'
$content = $content -replace ' class=', ' className='
$content = $content -replace ' for=', ' htmlFor='
$content = $content -replace 'assets/', '/assets/'
$content = $content -replace '(?s)<!--.*?-->', ''

# Fix self-closing tags
$content = $content -replace '<img([^>]*?)>', '<img$1 />'
$content = $content -replace '<input([^>]*?)>', '<input$1 />'
$content = $content -replace '<hr([^>]*?)>', '<hr$1 />'
$content = $content -replace '<br([^>]*?)>', '<br$1 />'
$content = $content -replace '<meta([^>]*?)>', '<meta$1 />'
$content = $content -replace '<link([^>]*?)>', '<link$1 />'

# Convert specific .html links to routes
$htmlToRoute = @{
    'index-3.html#' = '#'
    'index-3.html' = '/'
    'index.html' = '/'
    'index-2.html' = '/index-2'
    'about-us.html' = '/about-us'
    'contact-us.html' = '/contact-us'
    'buy-property-grid.html' = '/buy-property-grid'
    'buy-property-list.html' = '/buy-property-list'
    'buy-property-grid-sidebar.html' = '/buy-property-grid-sidebar'
    'buy-property-list-sidebar.html' = '/buy-property-list-sidebar'
    'buy-grid-map.html' = '/buy-grid-map'
    'buy-list-map.html' = '/buy-list-map'
    'buy-details.html' = '/buy-details'
    'rent-property-grid.html' = '/rent-property-grid'
    'rent-property-list.html' = '/rent-property-list'
    'rent-property-grid-sidebar.html' = '/rent-property-grid-sidebar'
    'rent-property-list-sidebar.html' = '/rent-property-list-sidebar'
    'rent-grid-map.html' = '/rent-grid-map'
    'rent-list-map.html' = '/rent-list-map'
    'rent-details.html' = '/rent-details'
    'agent-grid.html' = '/agent-grid'
    'agent-list.html' = '/agent-list'
    'agent-grid-sidebar.html' = '/agent-grid-sidebar'
    'agent-list-sidebar.html' = '/agent-list-sidebar'
    'agent-details.html' = '/agent-details'
    'agency-grid.html' = '/agency-grid'
    'agency-list.html' = '/agency-list'
    'agency-grid-sidebar.html' = '/agency-grid-sidebar'
    'agency-list-sidebar.html' = '/agency-list-sidebar'
    'agency-details.html' = '/agency-details'
    'blog-grid.html' = '/blog-grid'
    'blog-list.html' = '/blog-list'
    'blog-details.html' = '/blog-details'
    'signin.html' = '/login'
    'signup.html' = '/signup'
    'forgot-password.html' = '/forgot-password'
    'add-property-buy.html' = '/add-property-buy'
    'add-property-rent.html' = '/add-property-rent'
    'pricing.html' = '/pricing'
    'faq.html' = '/faq'
    'gallery.html' = '/gallery'
    'our-team.html' = '/our-team'
    'testimonial.html' = '/testimonial'
    'terms-condition.html' = '/terms-condition'
    'privacy-policy.html' = '/privacy-policy'
}

foreach ($html in $htmlToRoute.Keys) {
    $route = $htmlToRoute[$html]
    $escapedHtml = [regex]::Escape($html)
    $content = $content -replace "href=`"$escapedHtml`"", "to=`"$route`""
}

# Convert <a> tags with 'to=' to <Link> (but not href="#")
$lines = $content -split "`r?`n"
$newLines = [System.Collections.ArrayList]@()
$linkDepth = 0

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    
    # Replace <a with to= to <Link
    if ($line -match '<a\s+([^>]*\s+)?to=') {
        $line = $line -replace '<a\s+([^>]*\s+)?to=', '<Link $1to='
        $linkDepth += ([regex]::Matches($line, '<Link\s')).Count
    }
    
    # Count other Link openings
    $linkDepth += ([regex]::Matches($line, '<Link\s')).Count - ($line -match '<a\s+([^>]*\s+)?to=' ? 1 : 0)
    
    # If we're inside Link tags and find </a>, replace with </Link>
    if ($linkDepth -gt 0 -and $line -match '</a>') {
        $aClosings = ([regex]::Matches($line, '</a>')).Count
        if ($aClosings -gt 0) {
            $line = $line -replace '</a>', '</Link>'
            $linkDepth -= $aClosings
            if ($linkDepth -lt 0) { $linkDepth = 0 }
        }
    }
    
    [void]$newLines.Add($line)
}

$content = $newLines -join "`r`n"

# Create the JSX component
$jsxContent = @"
import React from 'react';
import { Link } from 'react-router-dom';

const Index3 = () => {
  return (
    <>
$content
    </>
  );
};

export default Index3;
"@

# Write to file
$jsxContent | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "Successfully created Index3.jsx with all content!"
