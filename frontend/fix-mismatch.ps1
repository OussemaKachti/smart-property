# Fix mismatched tags in Index3.jsx

$content = Get-Content 'src\pages\Index3.jsx' -Raw
$lines = $content -split "`r?`n"
$newLines = @()
$needsLinkClose = 0

foreach ($line in $lines) {
    # Count <Link openings
    $linkOpens = ([regex]::Matches($line, '<Link\s')).Count
    $needsLinkClose += $linkOpens
    
    # Count </Link> closings
    $linkCloses = ([regex]::Matches($line, '</Link>')).Count
    
    # If we have </Link> but no corresponding <Link>, change to </a>
    if ($line -match '</Link>') {
        if ($needsLinkClose -le 0) {
            $line = $line -replace '</Link>', '</a>'
        } else {
            $needsLinkClose -= $linkCloses
        }
    }
    
    $newLines += $line
}

($newLines -join "`r`n") | Set-Content 'src\pages\Index3.jsx' -Encoding UTF8

Write-Host "Fixed mismatched tags!"
