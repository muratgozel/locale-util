declare module 'locale-util' {
    export type CountryCode = import('#src/data/countryCodes').CountryCode
    export type LanguageCode = import('#src/data/languageCodes').LanguageCode
    export type LanguageCodeExtended = import('#src/data/languageCodesExtended').LanguageCodeExtended
    export type CurrencyCode = import('#src/data/currencyCodes').CurrencyCode
    export type CountryLanguages = import('#src/data/countryLanguages').CountryLanguages
    export type CountryLanguagesExtended = import('#src/data/countryLanguagesExtended').CountryLanguagesExtended
    export type Language = import('#src/data/languages').Language
    export type Currency = import('#src/data/currencies').Currency
    export type Country = import('#src/data/countries').Country
    export type Timezone = import('#src/data/timezones').Timezone
    export type CountryCallingCodes = import('#src/data/countryCallingCodes').CountryCallingCodes

    export type isCountryCode = (v: unknown) => v is CountryCode
    export type findCountry = (v: CountryCode) => Country | undefined
    export type findCallingCode = (v: CountryCode) => number | undefined
    export type findCountryLanguages = (v: CountryCode) => LanguageCode[] | undefined
    export type isCurrencyCode = (v: unknown) => v is CurrencyCode
    export type findCurrency = (v: CurrencyCode) => Currency | undefined
    export type isLanguageCode = (v: unknown) => v is LanguageCode
    export type findLanguage = (v: LanguageCode) => Language | undefined
    export type findCountryTimezones = (v: CountryCode) => Timezone[] | undefined
    export type findTimezoneOffset = (v: Timezone) => number | undefined

    export {countryCodes} from '#src/data/countryCodes'
    export {currencyCodes} from '#src/data/currencyCodes'
    export {countryLanguages} from '#src/data/countryLanguages'
    export {languageCodes} from '#src/data/languageCodes'
    export {countries} from '#src/data/countries'
    export {currencies} from '#src/data/currencies'
    export {languages} from '#src/data/languages'
    export {countryCallingCodes} from '#src/data/countryCallingCodes'
    export {timezones} from '#src/data/timezones'
}