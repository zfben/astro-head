# Effortless SEO for Astro with @zfben/astro-head

[![License: MIT](https://img.shields.io/npm/l/@zfben/astro-head.svg)](https://github.com/zfben/astro-head/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zfben/astro-head.svg)](https://www.npmjs.com/package/@zfben/astro-head)

Managing SEO for your Astro website just got easier with @zfben/astro-head. This package simplifies the process of adding essential meta tags and open graph/twitter meta data to your Astro components, boosting your website's search engine visibility.

## Key Features

- **Simplified Integration**: Seamlessly integrate SEO elements directly within your Astro components. No complex configurations needed!
- **Automated Meta Generation**: Automatically generate open graph and twitter meta tags, saving you time and ensuring consistent data across your site.
- **Leverages Astro Configuration**: Utilizes your existing site settings in astro.config.js to automatically generate accurate URLs within meta tags.

## Getting Started

1. **Installation**: Install the package using npm: `npm install @zfben/astro-head`
2. **Configuration**: Ensure you have a site property defined within your astro.config.js file. This provides the base URL for your website.
3. **Import and Usage**: Import the Head component from the package and use it within your Astro components:

```astro
---
import { Head } from "@zfben/astro-head";
---

<html>
  <head>
    <Head
      title="Hello world"
      path="/"
    />
  </head>
</html>
```

## Links

- [Changelog](./CHANGELOG.md)
