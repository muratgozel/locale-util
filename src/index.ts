import type {
    CountryCode, Country, CountryCallingCodes, CountryLanguages,
    LanguageCode, CurrencyCode, Currency, Language, Timezone
} from 'locale-util'

import {countryCodes} from '#src/data/countryCodes'
import {countries} from '#src/data/countries'
import {countryCallingCodes} from '#src/data/countryCallingCodes'
import {countryLanguages} from '#src/data/countryLanguages'
import {currencyCodes} from '#src/data/currencyCodes'
import {currencies} from '#src/data/currencies'
import {languageCodes} from '#src/data/languageCodes'
import {languages} from '#src/data/languages'
import {timezones} from '#src/data/timezones'

export {countryCodes} from '#src/data/countryCodes'
export {countries} from '#src/data/countries'
export {countryCallingCodes} from '#src/data/countryCallingCodes'
export {countryLanguages} from '#src/data/countryLanguages'
export {currencyCodes} from '#src/data/currencyCodes'
export {currencies} from '#src/data/currencies'
export {languageCodes} from '#src/data/languageCodes'
export {languages} from '#src/data/languages'
export {timezones} from '#src/data/timezones'

export type {CountryCode} from '#src/data/countryCodes'
export type {Country} from '#src/data/countries'
export type {CountryCallingCodes} from '#src/data/countryCallingCodes'
export type {CountryLanguages} from '#src/data/countryLanguages'
export type {CurrencyCode} from '#src/data/currencyCodes'
export type {Currency} from '#src/data/currencies'
export type {LanguageCode} from '#src/data/languageCodes'
export type {Language} from '#src/data/languages'
export type {Timezone} from '#src/data/timezones'

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