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

    export type countryCodes = import('#src/data/countryCodes').countryCodes
    export type currencyCodes = import('#src/data/currencyCodes').currencyCodes
    export type countryLanguages = import('#src/data/countryLanguages').countryLanguages
    export type languageCodes = import('#src/data/languageCodes').languageCodes
    export type countries = import('#src/data/countries').countries
    export type currencies = import('#src/data/currencies').currencies
    export type languages = import('#src/data/languages').languages
    export type countryCallingCodes = import('#src/data/countryCallingCodes').countryCallingCodes
    export type timezones = import('#src/data/timezones').timezones
}