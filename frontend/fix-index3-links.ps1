# Fix links in Index3.jsx only

$file = "src\pages\Index3.jsx"
Write-Host "Processing Index3.jsx..."

$content = Get-Content -Path $file -Raw

# Replace to=" with href=" temporarily
$content = $content -replace 'to="', 'href="'

# Now fix it properly - convert href with routes back to 'to'
$routes = @(
    '/',
    '/index-2',
    '/index-3',
    '/about-us',
    '/contact-us',
    '/buy-property-grid',
    '/buy-property-list',
    '/buy-property-grid-sidebar',
    '/buy-property-list-sidebar',
    '/buy-grid-map',
    '/buy-list-map',
    '/buy-details',
    '/rent-property-grid',
    '/rent-property-list',
    '/rent-property-grid-sidebar',
    '/rent-property-list-sidebar',
    '/rent-grid-map',
    '/rent-list-map',
    '/rent-details',
    '/agent-grid',
    '/agent-list',
    '/agent-grid-sidebar',
    '/agent-list-sidebar',
    '/agent-details',
    '/agency-grid',
    '/agency-list',
    '/agency-grid-sidebar',
    '/agency-list-sidebar',
    '/agency-details',
    '/blog-grid',
    '/blog-list',
    '/blog-details',
    '/login',
    '/signup',
    '/forgot-password',
    '/add-property-buy',
    '/add-property-rent',
    '/pricing',
    '/faq',
    '/gallery',
    '/our-team',
    '/testimonial',
    '/terms-condition',
    '/privacy-policy'
)

foreach ($route in $routes) {
    $escapedRoute = [regex]::Escape($route)
    # Convert <a href="/route"> to <Link to="/route">
    $content = $content -replace "<a\s+([^>]*)href=`"$escapedRoute`"", "<Link `$1to=`"$route`""
}

# Now replace </a> with </Link> only for lines that have <Link
$lines = $content -split "`r?`n"
$newLines = @()
$inLink = $false

foreach ($line in $lines) {
    if ($line -match '<Link\s') {
        $inLink = $true
    }
    
    if ($inLink -and $line -match '</a>') {
        $line = $line -replace '</a>', '</Link>'
        $inLink = $false
    }
    
    $newLines += $line
}

$content = $newLines -join "`r`n"

# Save
[System.IO.File]::WriteAllText($file, $content, [System.Text.UTF8Encoding]::new($false))

Write-Host "Fixed Index3.jsx!"
