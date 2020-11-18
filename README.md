# locale-util
Locale data generators written in node.js. Uses reliable sources. Generated data available as JS/JSON objects.

![NPM](https://img.shields.io/npm/l/locale-util)
[![npm version](https://badge.fury.io/js/locale-util.svg)](https://badge.fury.io/js/locale-util)
![npm](https://img.shields.io/npm/dy/locale-util)

## Installation
Install as an npm package:
```
npm install locale-util
```
or clone to your project directory:
```sh
git clone git@github.com:muratgozel/locale-util.git
```

## Using Generated Data
The generated data is available under `data` directory. It's pre-generated and will always be up-to-date. You can import whichever data you want into your project by just requiring:
```js
// list of currencies
const currencies = require('locale-util/data/core/currencies.json')
// list of currency codes by country
const currencyCodesByCountry = require('locale-util/data/extra/currencyCodesByCountry.json')
// list of country names by country code
const countryNamesByCode = require('locale-util/data/extra/countryNamesByCode.json')

// and more inside the data directory
```
Or you can require a collection of data:
```js
const core = require('locale-util/data/core')
// core now has currencies, supplementalData, phoneNumberMetadata etc.

const extra = require('locale-util/data/extra')
// extra now has countryCodes, currencyCodes etc.

const data = require('locale-util')
// data has core, extra and jstz lib.
```

## About Generators
Generators grouped by their function.

### Core Generators
The scripts in `generators/core` folder fetch and parse the data from a chosen reliable source.

### Extra Generators
The scripts in `generators/extra` folder parse the data from `data/core/somefile` file.

### JSTZ Lib Generator
[jstz](https://github.com/pellepim/jstimezonedetect) is a timezone detection library and its DST (daylight saving time) values by timezone needs to be updated by time. `locale-util` generates the library source code by regenerating the daylight saving time values by timezone.

## About Generated Data
The generated data is available under `data` directory. It's pre-generated. There is no need to generate any data when you install this package. However, sources that this package uses to generate data may update theirself overtime. Generally a couple of times in a year. If you want to stay up to date, you need to regenerate the data by running:
```sh
npm run update-all
```
inside the package directory.

## Data Size Report
Be careful with importing the data into your bundles for browsers since the data may increase your bundle size dramatically.

Please refer to the file [dataSizeReport.json](https://github.com/muratgozel/locale-util/blob/master/dataSizeReport.json) that shows the size of each data item in kilobytes.

---

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
