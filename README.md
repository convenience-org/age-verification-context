# Age Verification Token context _(age-verification-context)_

> Age Verification Token context for JSON-LD.


## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

*

## Install

Requires Node.js 14+

To install via NPM:

```
npm install age-verification-context
```

## Usage

```js
const {
  contexts, constants, CONTEXT_URL_V1
} = require('age-verification-context');

// use URL in a JSON-LD context
const obj = {
  "@context": [
    constants.CONTEXT_URL,
    // ...
  ],
  // ...
};

// Codec term map value for CBOR-LD
constants.CBORLD_CODEC_VALUE
// 0x16

// get context data for a specific context
const data = contexts.get('https://w3id.org/age/v1');
// ...
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports two properties:
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL_V1` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- See the [LICENSE](./LICENSE) file for details.
