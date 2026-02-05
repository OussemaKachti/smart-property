# Convert index-3.html to full JSX

$htmlFile = "src\html\index-3.html"
$outputFile = "src\pages\Index3.jsx"

Write-Host "Converting index-3.html to Index3.jsx..."

# Read the HTML file
$content = Get-Content -Path $htmlFile -Raw

# Remove HTML document structure
$content = $content -replace '(?s)<!DOCTYPE.*?<body[^>]*>.*?<!-- Begin page -->\s*<div class="main-wrapper">', ''
$content = $content -replace '(?s)</div>\s*<!-- End Page -->.*', ''

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

# Convert index-3.html# to just #
$content = $content -replace 'index-3\.html#', '#'
$content = $content -replace 'index-3\.html', '/'

# Convert other .html links to routes
$content = $content -replace 'index\.html', '/'
$content = $content -replace 'index-2\.html', '/index-2'
$content = $content -replace 'about-us\.html', '/about-us'
$content = $content -replace 'contact-us\.html', '/contact-us'
$content = $content -replace 'buy-property-grid\.html', '/buy-property-grid'
$content = $content -replace 'buy-property-list\.html', '/buy-property-list'
$content = $content -replace 'buy-property-grid-sidebar\.html', '/buy-property-grid-sidebar'
$content = $content -replace 'buy-property-list-sidebar\.html', '/buy-property-list-sidebar'
$content = $content -replace 'buy-grid-map\.html', '/buy-grid-map'
$content = $content -replace 'buy-list-map\.html', '/buy-list-map'
$content = $content -replace 'buy-details\.html', '/buy-details'
$content = $content -replace 'rent-property-grid\.html', '/rent-property-grid'
$content = $content -replace 'rent-property-list\.html', '/rent-property-list'
$content = $content -replace 'rent-property-grid-sidebar\.html', '/rent-property-grid-sidebar'
$content = $content -replace 'rent-property-list-sidebar\.html', '/rent-property-list-sidebar'
$content = $content -replace 'rent-grid-map\.html', '/rent-grid-map'
$content = $content -replace 'rent-list-map\.html', '/rent-list-map'
$content = $content -replace 'rent-details\.html', '/rent-details'
$content = $content -replace 'agent-grid\.html', '/agent-grid'
$content = $content -replace 'agent-list\.html', '/agent-list'
$content = $content -replace 'agent-grid-sidebar\.html', '/agent-grid-sidebar'
$content = $content -replace 'agent-list-sidebar\.html', '/agent-list-sidebar'
$content = $content -replace 'agent-details\.html', '/agent-details'
$content = $content -replace 'agency-grid\.html', '/agency-grid'
$content = $content -replace 'agency-list\.html', '/agency-list'
$content = $content -replace 'agency-grid-sidebar\.html', '/agency-grid-sidebar'
$content = $content -replace 'agency-list-sidebar\.html', '/agency-list-sidebar'
$content = $content -replace 'agency-details\.html', '/agency-details'
$content = $content -replace 'blog-grid\.html', '/blog-grid'
$content = $content -replace 'blog-list\.html', '/blog-list'
$content = $content -replace 'blog-details\.html', '/blog-details'
$content = $content -replace 'signin\.html', '/login'
$content = $content -replace 'signup\.html', '/signup'
$content = $content -replace 'forgot-password\.html', '/forgot-password'
$content = $content -replace 'add-property-buy\.html', '/add-property-buy'
$content = $content -replace 'add-property-rent\.html', '/add-property-rent'

# Convert <a href to <Link to for internal links
$content = $content -replace '<a href="/((?!assets)[^"]*)"', '<Link to="/$1"'
$content = $content -replace '</a>', '</Link>'

# Fix <a href="#"> back to regular a tags
$content = $content -replace '<Link to="#"', '<a href="#"'

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

Write-Host "Successfully created Index3.jsx"
