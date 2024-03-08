import type {Country, Currency, Language, Timezone} from './setup'

import countryCodes from './data/countryCodes.json'
import countries from './data/countries.json'
import countryCallingCodes from './data/countryCallingCodes.json'
import countryLanguages from './data/countryLanguages.json'
import currencyCodes from './data/currencyCodes.json'
import currencies from './data/currencies.json'
import languageCodes from './data/languageCodes.json'
import languages from './data/languages.json'
import timezones from './data/timezones.json'
import countryCurrencies from './data/countryCurrencies.json'

export {
    countryCodes,
    countries,
    countryCallingCodes,
    countryLanguages,
    currencyCodes,
    currencies,
    languageCodes,
    languages,
    timezones,
    countryCurrencies
}

export const isCountryCode = (v: unknown): boolean => {
    return typeof v === 'string' && countryCodes.includes(v)
}

export const findCountry = (v: string): Country | undefined => {
    return (countries as Country[]).find(({code}) => code === v)
}

export const findCountryCallingCode = (v: string): number | undefined => {
    return isCountryCode(v) && v in countryCallingCodes ? countryCallingCodes[v as keyof typeof countryCallingCodes] : undefined
}

export const findCountryLanguages = (v: string): string[] | undefined => {
    return isCountryCode(v) && v in countryLanguages ? countryLanguages[v as keyof typeof countryLanguages] : undefined
}

export const isCurrencyCode = (v: unknown): boolean => {
    return typeof v === 'string' && currencyCodes.includes(v)
}

export const findCurrency = (v: string): Currency | undefined => {
    return (currencies as Currency[]).find(({code}) => code === v)
}

export const findCountryCurrencyCode = (v: string): string | undefined => {
    return isCountryCode(v) ? countryCurrencies[v as keyof typeof countryCurrencies] : undefined
}

export const isLanguageCode = (v: unknown): boolean => {
    return typeof v === 'string' && languageCodes.includes(v)
}

export const findLanguage = (v: string): Language | undefined => {
    return (languages as Language[]).find(({code}) => code === v)
}

export const findCountryTimezones = (v: string): Timezone[] | undefined => {
    return isCountryCode(v) && timezones.some(({country}) => country === v)
        ? timezones.filter(({country}) => country === v)
        : undefined
}

export const findTimezoneOffset = (v: string): number | undefined => {
    return timezones.some(({name}) => name === v)
        ? (timezones.filter(({name}) => name === v)[0] as Timezone).offset
        : undefined
}
