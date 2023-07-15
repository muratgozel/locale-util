# locale-util
Unicode CLDR data parser and module, regularly updated based on https://github.com/unicode-org/cldr releases. Refer to https://muratgozel.github.io/locale-util/ for full api docs.

## ⭐ Breaking Changes in v3
In v3, I extended the scope of the package, made it a module that has the necessary methods to interact with the data.

## Installation
```sh
npm install locale-util
```

## Usage
The package contains large amount of data which is not suitable for browser environment. Benefit from tree-shaking might work if you are interested in small chunks of it.

Here are the methods that you can use to interact with the data:
```js
import {isCountryCode, findCountry, findCallingCode, findCountryLanguages, 
    isCurrencyCode, findCurrency, isLanguageCode, findLanguage, 
    findCountryTimezones, findTimezoneOffset} from 'locale-util'

isCountryCode('TR') // true
isCountryCode('XX') // false

findCountry('TR') /*
{
    'code': 'TR',
    'englishName': 'Turkey',
    'nativeName': 'Türkiye'
}
*/
findCountry('ABC') // undefined

findCallingCode('US') // 1
findCallingCode('TR') // 90
findCallingCode(null) // undefined

findCountryLanguages('TR') // ['tr']
findCountryLanguages('US') // ['en', 'es', 'haw']

isCurrencyCode('TRY') // true

findCurrency('TRY') /*
{
    'code': 'TRY',
    'num': 949,
    'englishName': 'Turkish',
    'nativeName': 'Türkçe'
}
*/

findCurrencyCode('TR') // TRY
findCurrencyCode('US') // USD

isLanguageCode('xxx') // false
isLanguageCode('tr') // true

findLanguage('tr') /*
{
    'code': 'tr',
    'nativeName': 'Türkçe',
    'englishName': 'Turkish'
}
*/

findCountryTimezones('TR') /*
[{
    'name': 'Europe/Istanbul',
    'offset': -180,
    'country': 'TR'
}]
*/

findCountryTimezones('TT') /*
[{
    'name': 'America/Port_of_Spain',
    'offset': 240,
    'country': 'TT'
}, {
    'name': 'America/Puerto_Rico',
    'offset': 240,
    'country': 'TT'
}]
*/

findTimezoneOffset('America/Puerto_Rico') // 240
findTimezoneOffset('Europe/Istanbul') // -180
```

Have a look at the tests, types and source for more info.

## Keeping Data Up To Date
Data updates published regularly as minor releases so you only need to update the package as new version comes in. If you have a kind of manual setup, download the release you wish from https://github.com/unicode-org/cldr/releases and copy the `common` directory under `cldr-data-common`. Then run `npm run setup`, `compile`, `build` and `test` to parse the new data.

## Contributing
If you're interested in contributing, read the [CONTRIBUTING.md](https://github.com/muratgozel/muratgozel/blob/main/CONTRIBUTING.md) first, please.

---

Version management of this repository done by [releaser](https://github.com/muratgozel/node-releaser) 🚀

---

Thanks for watching 🐬

[![Support me on Patreon](https://cdn.muratgozel.com.tr/support-me-on-patreon.v1.png)](https://patreon.com/muratgozel?utm_medium=organic&utm_source=github_repo&utm_campaign=github&utm_content=join_link)
