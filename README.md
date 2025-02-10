# OlaMaps Web SDK

[![npm version](https://img.shields.io/npm/v/1.1.0)](https://www.npmjs.com/package/olamaps-web-sdk)
[![License](https://img.shields.io/badge/Licence-OlaMaps-red)](LICENSE.txt)

The official OlaMaps Web SDK provides a powerful and easy-to-use interface for integrating maps into your web applications. This repository contains the distribution files and serves as the public interface for issues, feature requests, and discussions.

## Installation

#### CDN Usage

Add the following script tag to your HTML file's `<head>` section:

```html
<script src="https://www.unpkg.com/olamaps-web-sdk@latest/dist/olamaps-web-sdk.umd.js"></script>
```

#### Package Manager

Install via npm:

```bash
npm i olamaps-web-sdk
```

Then use in your project by imports like:

```javascript
import { OlaMaps } from "olamaps-web-sdk";
```

### Usage

#### Initialization

First, initialize `OlaMaps` with your `API key`:

```javascript
const olaMaps = new OlaMaps({
  apiKey: [YOUR_API_KEY],
});
```

#### Rendering map

1. Add a container element to your HTML

```html
<div id="[MAP CONTAINER ID]"></div>
```

2. Initialize the map with your desired configuration

```javascript
const map = olaMaps.init({
  style: [ADD THE LINK OF TILES STYLE JSON HERE],
  container: [MAP CONTAINER ID],
  center: [INITIAL LAT LAN POSITION],
  zoom: [SET ZOOM NUMBER]
})
```

## Documentation & Resources

For complete documentation and integration guides, visit our [Web SDK Documentation](https://maps.olakrutrim.com/docs/sdks/web-sdk/setup).
Check out our [examples directory](/examples) for various implementation scenarios.

### Community Support & Issue Tracking

All bug reports, feature requests, and general issues should be raised through GitHub.

- [Create a bug report](https://github.com/ola-maps/olamaps-web-sdk/blob/main/.github/ISSUE_TEMPLATE/bug_report.md)
- [Request a feature](https://github.com/ola-maps/olamaps-web-sdk/blob/main/.github/ISSUE_TEMPLATE/feature_request.md)
- [Browse existing issues](https://github.com/ola-maps/olamaps-web-sdk/issues)

For general questions and discussions, visit our [discussions](https://github.com/ola-maps/olamaps-web-sdk/discussions) page
For commercial support, contact us at [support@olakrutrim.com](mailto:support@olakrutrim.com)

## Distribution Files

The SDK includes the following distribution files:

- `dist/olamaps-web-sdk.umd.js` - UMD build (minified)
- `dist/index.js` - ES Module
- `dist/index.d.ts` - TypeScript definitions

## Versioning

We use SemVer for versioning. For available versions, see the releases page.

## Contributing

While this repository doesn't contain the source code, we welcome:

- Bug reports
- Feature requests
- Documentation improvements
- Usage examples
