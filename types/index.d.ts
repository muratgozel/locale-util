declare module 'locale-util' {
    import { type CountryCode } from '../src/data/countryCodes'
    import { type LanguageCode } from '../src/data/languageCodes'
    import { type LanguageCodeExtended } from '../src/data/languageCodesExtended'
    import { type CurrencyCode } from '../src/data/currencyCodes'
    import { type CountryLanguages } from '../src/data/countryLanguages'
    import { type CountryLanguagesExtended } from '../src/data/countryLanguagesExtended'
    import { type Language } from '../src/data/languages'
    import { type Currency } from '../src/data/currencies'
    import { type Country } from '../src/data/countries'
    import { type Timezone } from '../src/data/timezones'
    import { type CountryCallingCodes } from '../src/data/countryCallingCodes'
    import { type CountryCurrencies } from '../src/data/countryCurrencies'

    export { type CountryCode } from '../src/data/countryCodes'
    export { type LanguageCode } from '../src/data/languageCodes'
    export { type LanguageCodeExtended } from '../src/data/languageCodesExtended'
    export { type CurrencyCode } from '../src/data/currencyCodes'
    export { type CountryLanguages } from '../src/data/countryLanguages'
    export { type CountryLanguagesExtended } from '../src/data/countryLanguagesExtended'
    export { type Language } from '../src/data/languages'
    export { type Currency } from '../src/data/currencies'
    export { type Country } from '../src/data/countries'
    export { type Timezone } from '../src/data/timezones'
    export { type CountryCallingCodes } from '../src/data/countryCallingCodes'
    export { type CountryCurrencies } from '../src/data/countryCurrencies'

    export function isCountryCode(v: unknown): v is CountryCode
    export function findCountry(v: CountryCode): Country | undefined
    export function findCallingCode(v: CountryCode): number | undefined
    export function findCountryLanguages(v: CountryCode): LanguageCode[] | undefined
    export function isCurrencyCode(v: unknown): v is CurrencyCode
    export function findCurrency(v: CurrencyCode): Currency | undefined
    export function findCurrencyCode(v: CountryCode): CurrencyCode | undefined
    export function isLanguageCode(v: unknown): v is LanguageCode
    export function findLanguage(v: LanguageCode): Language | undefined
    export function findCountryTimezones(v: CountryCode): Timezone[] | undefined
    export function findTimezoneOffset(v: Timezone): number | undefined

    export const countryCodes: CountryCode[]
    export const currencyCodes: CurrencyCode[]
    export const countryLanguages: CountryLanguages
    export const languageCodes: LanguageCode[]
    export const countries: Country[]
    export const currencies: Currency[]
    export const languages: Language[]
    export const countryCallingCodes: CountryCallingCodes
    export const timezones: Timezone[]
    export const countryCurrencies: CountryCurrencies
}