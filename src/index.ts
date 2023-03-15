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

export const isCountryCode = (v: unknown): v is CountryCode => {
    return countryCodes.includes(v)
}

export const findCountry = (v: CountryCode): Country | undefined => {
    return countries.some(({code}) => code === v)
        ? countries.filter(({code}) => code === v)[0]
        : undefined
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
    return currencyCodes.includes(v)
}

export const findCurrency = (v: unknown): Currency | undefined => {
    return isCurrencyCode(v) && currencies.some(({code}) => code === v)
        ? currencies.filter(({code}) => code === v)[0]
        : undefined
}

export const isLanguageCode = (v: unknown): v is LanguageCode => {
    return languageCodes.includes(v)
}

export const findLanguage = (v: unknown): Language | undefined => {
    return isLanguageCode(v) && languages.some(({code}) => code === v)
        ? languages.filter(({code}) => code === v)[0]
        : undefined
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