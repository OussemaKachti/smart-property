# Simple conversion for index-3.html

$htmlFile = "src\html\index-3.html"
$outputFile = "src\pages\Index3.jsx"

Write-Host "Converting index-3.html to Index3.jsx..."

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
$content = $content -replace 'index-3\.html#', '#'
$content = $content -replace 'index-3\.html', '/'

# Fix self-closing tags
$content = $content -replace '<img([^>]*?)>', '<img$1 />'
$content = $content -replace '<input([^>]*?)>', '<input$1 />'
$content = $content -replace '<hr([^>]*?)>', '<hr$1 />'
$content = $content -replace '<br([^>]*?)>', '<br$1 />'
$content = $content -replace '<meta([^>]*?)>', '<meta$1 />'
$content = $content -replace '<link([^>]*?)>', '<link$1 />'

# Convert specific links
$content = $content -replace 'href="index\.html"', 'to="/"'
$content = $content -replace 'href="index-2\.html"', 'to="/index-2"'
$content = $content -replace 'href="about-us\.html"', 'to="/about-us"'
$content = $content -replace 'href="contact-us\.html"', 'to="/contact-us"'
$content = $content -replace 'href="buy-property-grid\.html"', 'to="/buy-property-grid"'
$content = $content -replace 'href="buy-property-list\.html"', 'to="/buy-property-list"'
$content = $content -replace 'href="buy-property-grid-sidebar\.html"', 'to="/buy-property-grid-sidebar"'
$content = $content -replace 'href="buy-property-list-sidebar\.html"', 'to="/buy-property-list-sidebar"'
$content = $content -replace 'href="buy-grid-map\.html"', 'to="/buy-grid-map"'
$content = $content -replace 'href="buy-list-map\.html"', 'to="/buy-list-map"'
$content = $content -replace 'href="buy-details\.html"', 'to="/buy-details"'
$content = $content -replace 'href="rent-property-grid\.html"', 'to="/rent-property-grid"'
$content = $content -replace 'href="rent-property-list\.html"', 'to="/rent-property-list"'
$content = $content -replace 'href="rent-property-grid-sidebar\.html"', 'to="/rent-property-grid-sidebar"'
$content = $content -replace 'href="rent-property-list-sidebar\.html"', 'to="/rent-property-list-sidebar"'
$content = $content -replace 'href="rent-grid-map\.html"', 'to="/rent-grid-map"'
$content = $content -replace 'href="rent-list-map\.html"', 'to="/rent-list-map"'
$content = $content -replace 'href="rent-details\.html"', 'to="/rent-details"'
$content = $content -replace 'href="agent-grid\.html"', 'to="/agent-grid"'
$content = $content -replace 'href="agent-list\.html"', 'to="/agent-list"'
$content = $content -replace 'href="agent-grid-sidebar\.html"', 'to="/agent-grid-sidebar"'
$content = $content -replace 'href="agent-list-sidebar\.html"', 'to="/agent-list-sidebar"'
$content = $content -replace 'href="agent-details\.html"', 'to="/agent-details"'
$content = $content -replace 'href="agency-grid\.html"', 'to="/agency-grid"'
$content = $content -replace 'href="agency-list\.html"', 'to="/agency-list"'
$content = $content -replace 'href="agency-grid-sidebar\.html"', 'to="/agency-grid-sidebar"'
$content = $content -replace 'href="agency-list-sidebar\.html"', 'to="/agency-list-sidebar"'
$content = $content -replace 'href="agency-details\.html"', 'to="/agency-details"'
$content = $content -replace 'href="blog-grid\.html"', 'to="/blog-grid"'
$content = $content -replace 'href="blog-list\.html"', 'to="/blog-list"'
$content = $content -replace 'href="blog-details\.html"', 'to="/blog-details"'
$content = $content -replace 'href="signin\.html"', 'to="/login"'
$content = $content -replace 'href="signup\.html"', 'to="/signup"'
$content = $content -replace 'href="forgot-password\.html"', 'to="/forgot-password"'
$content = $content -replace 'href="add-property-buy\.html"', 'to="/add-property-buy"'
$content = $content -replace 'href="add-property-rent\.html"', 'to="/add-property-rent"'
$content = $content -replace 'href="pricing\.html"', 'to="/pricing"'
$content = $content -replace 'href="faq\.html"', 'to="/faq"'
$content = $content -replace 'href="gallery\.html"', 'to="/gallery"'
$content = $content -replace 'href="our-team\.html"', 'to="/our-team"'
$content = $content -replace 'href="testimonial\.html"', 'to="/testimonial"'
$content = $content -replace 'href="terms-condition\.html"', 'to="/terms-condition"'
$content = $content -replace 'href="privacy-policy\.html"', 'to="/privacy-policy"'

# Convert <a to="..."> to <Link to="...">
$content = $content -replace '<a\s+([^>]*to="[^"]*"[^>]*)>', '<Link $1>'
$content = $content -replace '<Link ([^>]*to="[^"]*"[^>]*)href="[^"]*"([^>]*)>', '<Link $1$2>'

# Replace </a> with </Link> for converted links (simple approach - replace all adjacent </a>)
$lines = $content -split "`r?`n"
$newLines = @()

foreach ($line in $lines) {
    if ($line -match '<Link ') {
        # This line has a Link, so replace </a> with </Link> on the same line or following lines
        $line = $line -replace '</a>', '</Link>'
    }
    $newLines += $line
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

Write-Host "Successfully created Index3.jsx!"
