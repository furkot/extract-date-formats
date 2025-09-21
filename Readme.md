[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# extract-date-formats

Extract data formats locale from [moment].

## Install

```sh
$ npm install --save @furkot/extract-date-formats
```

## Usage

### As a module

```js
import { extract } from '@furkot/extract-date-formats';

// get date formats for all locales
const formats = extract();
console.log(formats['en-ca']); // 'YYYY-MM-DD'
console.log(formats.pl);       // 'DD.MM.YYYY'

// get date formats for specific locales
const specificFormats = extract(['en-ca', 'pl']);
```

Returns an object mapping locale codes to their date formats in [moment.js format].

### Command line

```sh
# print formats to stdout
npx @furkot/extract-date-formats

# save formats to file
npx @furkot/extract-date-formats formats.json
```

## License

ISC © [Damian Krzeminski](https://pirxpilot.me)

[moment]: https://npmjs.org/package/moment
[moment.js format]: https://momentjs.com/docs/#/displaying/format/

[npm-image]: https://img.shields.io/npm/v/@furkot/extract-date-formats
[npm-url]: https://npmjs.org/package/@furkot/extract-date-formats

[build-url]: https://github.com/furkot/extract-date-formats/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/furkot/extract-date-formats/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/@furkot/extract-date-formats
[deps-url]: https://libraries.io/npm/@furkot%2Fextract-date-formats
