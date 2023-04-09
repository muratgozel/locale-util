import type {
    CountryCode, Country, CountryCallingCodes, CountryLanguages,
    LanguageCode, CurrencyCode, Currency, Language, Timezone
} from 'locale-util'

import {countryCodes} from './data/countryCodes.js'
import {countries} from './data/countries.js'
import {countryCallingCodes} from './data/countryCallingCodes.js'
import {countryLanguages} from './data/countryLanguages.js'
import {currencyCodes} from './data/currencyCodes.js'
import {currencies} from './data/currencies.js'
import {languageCodes} from './data/languageCodes.js'
import {languages} from './data/languages.js'
import {timezones} from './data/timezones.js'
import {countryCurrencies} from './data/countryCurrencies.js'

export {countryCodes} from './data/countryCodes.js'
export {countries} from './data/countries.js'
export {countryCallingCodes} from './data/countryCallingCodes.js'
export {countryLanguages} from './data/countryLanguages.js'
export {currencyCodes} from './data/currencyCodes.js'
export {currencies} from './data/currencies.js'
export {languageCodes} from './data/languageCodes.js'
export {languages} from './data/languages.js'
export {timezones} from './data/timezones.js'
export {countryCurrencies} from './data/countryCurrencies.js'

export type {CountryCode} from './data/countryCodes'
export type {Country} from './data/countries'
export type {CountryCallingCodes} from './data/countryCallingCodes'
export type {CountryLanguages} from './data/countryLanguages'
export type {CurrencyCode} from './data/currencyCodes'
export type {Currency} from './data/currencies'
export type {LanguageCode} from './data/languageCodes'
export type {Language} from './data/languages'
export type {Timezone} from './data/timezones'
export type {CountryCurrencies} from './data/countryCurrencies'

export const isCountryCode = (v: unknown): v is CountryCode => {
    return typeof v === 'string' && countryCodes.find((code) => code === v) !== undefined
}

export const findCountry = (v: CountryCode): Country | undefined => {
    return countries.find(({code}) => code === v)
}

export const findCallingCode = (v: CountryCode): number | undefined => {
    return isCountryCode(v) && Object.hasOwn(countryCallingCodes, v)
        ? countryCallingCodes[(v as keyof CountryCallingCodes)]
        : undefined
}

export const findCountryLanguages = (v: CountryCode): LanguageCode[] | undefined => {
    return isCountryCode(v) && Object.hasOwn(countryLanguages, v)
        ? countryLanguages[(v as keyof CountryLanguages)]
        : undefined
}

export const isCurrencyCode = (v: unknown): v is CurrencyCode => {
    return typeof v === 'string' && currencyCodes.find((code) => code === v) !== undefined
}

export const findCurrency = (v: CurrencyCode): Currency | undefined => {
    return currencies.find(({code}) => code === v)
}

export const findCurrencyCode = (v: CountryCode): CurrencyCode | undefined => {
    return countryCurrencies[v] || undefined
}

export const isLanguageCode = (v: unknown): v is LanguageCode => {
    return typeof v === 'string' && languageCodes.find((code) => code === v) !== undefined
}

export const findLanguage = (v: LanguageCode): Language | undefined => {
    return languages.find(({code}) => code === v)
}

export const findCountryTimezones = (v: CountryCode): Timezone[] | undefined => {
    return isCountryCode(v) && timezones.some(({country}) => country === v)
        ? timezones.filter(({country}) => country === v)
        : undefined
}

export const findTimezoneOffset = (v: string): number | undefined => {
    return timezones.some(({name}) => name === v)
        ? (timezones.filter(({name}) => name === v)[0] as Timezone).offset
        : undefined
}