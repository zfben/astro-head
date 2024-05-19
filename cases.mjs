import { execSync } from 'node:child_process'
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import { ok } from 'node:assert'

execSync('npm exec astro build', { stdio: 'inherit' })

test('check props', () => {
  const content = readFileSync('./dist/index.html', 'utf-8').toString()

  // title
  ok(content.includes('<title>Home</title>'))
  ok(content.includes('<meta property="title" content="Home">'))
  ok(content.includes('<meta property="og:title" content="Home">'))
  ok(content.includes('<meta name="twitter:title" content="Home">'))

  // path
  ok(content.includes('<link rel="canonical" href="https://zfben.com/">'))
  ok(content.includes('<meta property="url" content="https://zfben.com/">'))
  ok(content.includes('<meta property="og:url" content="https://zfben.com/">'))
  ok(content.includes('<meta name="twitter:url" content="https://zfben.com/">'))

  // type
  ok(content.includes('<meta property="og:type" content="website">'))

  // charset
  ok(content.includes('<meta charset="utf-8">'))

  // lang
  ok(content.includes('<meta property="og:locale" content="en">'))

  // description
  ok(content.includes('<meta name="description" content="description">'))
  ok(content.includes('<meta property="og:description" content="description">'))
  ok(content.includes('<meta name="twitter:description" content="description">'))

  // image
  ok(content.includes('<meta property="image" content="http://test.com/test.jpg">'))
  ok(content.includes('<meta property="og:image" content="http://test.com/test.jpg">'))
  ok(content.includes('<meta name="twitter:image" content="http://test.com/test.jpg">'))

  // siteName
  ok(content.includes('<meta property="og:site_name" content="Test">'))

  // author
  ok(content.includes('<meta name="author" content="Ben">'))
  ok(content.includes('<meta property="article:author" content="Ben">'))

  // twitter
  ok(content.includes('<meta name="twitter:card" content="summary">'))
  ok(content.includes('<meta name="twitter:site" content="@zfben">'))
  ok(content.includes('<meta name="twitter:creator" content="@zfben">'))

  // alternates
  ok(content.includes('<link rel="alternate" hreflang="en" href="https://zfben.com/en">'))
  ok(content.includes('<link rel="alternate" hreflang="fr" href="https://zfben.com/fr">'))
  ok(content.includes('<meta property="og:locale:alternate" content="en">'))
  ok(content.includes('<meta property="og:locale:alternate" content="fr">'))

  // ga
  ok(content.includes('<script async src="https://www.googletagmanager.com/gtag/js?id=G-test"></script>\n<script>(function(){const ga = "G-test";\nwindow.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config",ga);})();</script>'))
})
