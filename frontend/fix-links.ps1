# Better Link Conversion Script

$pagesDir = "src\pages"
$jsxFiles = Get-ChildItem -Path $pagesDir -Filter "*.jsx"

Write-Host "Fixing link conversion issues in $($jsxFiles.Count) files..."

# Route mapping
$routeMap = @{
    'index.html' = '/'
    'index-2.html' = '/index-2'
    'index-3.html' = '/index-3'
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
    'reset-password.html' = '/reset-password'
    'pricing.html' = '/pricing'
    'faq.html' = '/faq'
    'gallery.html' = '/gallery'
    'our-team.html' = '/our-team'
    'testimonial.html' = '/testimonial'
    'terms-condition.html' = '/terms-condition'
    'privacy-policy.html' = '/privacy-policy'
    'error-404.html' = '/error-404'
    'error-500.html' = '/error-500'
    'wishlist.html' = '/wishlist'
    'cart.html' = '/cart'
    'checkout.html' = '/checkout'
    'add-property-buy.html' = '/add-property-buy'
    'add-property-rent.html' = '/add-property-rent'
    'invoice-details.html' = '/invoice-details'
    'notifications.html' = '/notifications'
    'maintenance.html' = '/maintenance'
    'coming-soon.html' = '/coming-soon'
    'rental-booking.html' = '/rental-booking'
    'rental-order-confirmation.html' = '/rental-order-confirmation'
    'rental-order-details.html' = '/rental-order-details'
    'rental-payment.html' = '/rental-payment'
}

foreach ($file in $jsxFiles) {
    Write-Host "Processing: $($file.Name)"
    
    $content = Get-Content -Path $file.FullName -Raw
    
    # Replace each HTML link with React Router path
    foreach ($htmlFile in $routeMap.Keys) {
        $route = $routeMap[$htmlFile]
        $escapedHtmlFile = [regex]::Escape($htmlFile)
        
        # Pattern 1: href="filename.html" -> to="route" 
        $content = $content -replace "href=`"$escapedHtmlFile`"", "to=`"$route`""
        
        # Pattern 2: href="filename.html# -> to="route"
        $content = $content -replace "href=`"$escapedHtmlFile#[^`"]*`"", "to=`"$route`""
    }
    
    # Now convert <a> tags with 'to=' attribute to <Link>
    # Only convert opening tags
    $content = $content -replace '<a\s+([^>]*\s+)?to=', '<Link $1to='
    
    # Find and replace corresponding </a> with </Link> for converted tags
    # We'll do this line by line to track Link tags
    $lines = $content -split "`r?`n"
    $newLines = [System.Collections.ArrayList]@()
    $linkDepth = 0
    
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        
        # Count Link openings
        $linkOpenings = ([regex]::Matches($line, '<Link\s')).Count
        $linkDepth += $linkOpenings
        
        # If we're inside Link tags and find </a>, replace with </Link>
        if ($linkDepth -gt 0) {
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
    
    # Save the updated content
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.UTF8Encoding]::new($false))
    
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "`nAll files updated successfully!"
