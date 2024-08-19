import type {Country, Currency, Language, Timezone} from './setup'
import type {Subdivision} from './setup/regional'

import {default as _countryCodes} from './data/countryCodes.json'
import {default as _countries} from './data/countries.json'
import {default as _countryCallingCodes} from './data/countryCallingCodes.json'
import {default as _countryLanguages} from './data/countryLanguages.json'
import {default as _currencyCodes} from './data/currencyCodes.json'
import {default as _currencies} from './data/currencies.json'
import {default as _languageCodes} from './data/languageCodes.json'
import {default as _languages} from './data/languages.json'
import {default as _timezones} from './data/timezones.json'
import {default as _countryCurrencies} from './data/countryCurrencies.json'
import {default as _territories} from './data/territories.json'
import {default as _countriesByTerritory} from './data/countriesByTerritory.json'
import {default as _subdivisions} from './data/subdivisions.json'

export const countryCodes: string[] = _countryCodes
export const countries: LocaleUtilCountry[] = _countries
export const countryCallingCodes = _countryCallingCodes
export const countryLanguages = _countryLanguages
export const currencyCodes = _currencyCodes
export const currencies: LocaleUtilCurrency[] = _currencies
export const languageCodes = _languageCodes
export const languages: LocaleUtilLanguage[] = _languages
export const timezones: LocaleUtilTimezone[] = _timezones
export const countryCurrencies = _countryCurrencies
export const territories: { code: string, name: string }[] = _territories
export const countriesByTerritory = _countriesByTerritory
export const subdivisions: LocaleUtilSubdivision[] = _subdivisions

export const findTerritories = () => {
    return territories
}

export const findCountryTerritory = (v: string): { code: string, name: string } | undefined => {
    const code = Object.keys(countriesByTerritory).filter((territory) => countriesByTerritory[territory as keyof typeof countriesByTerritory].includes(v))[0] ?? ''

    if (!code) return undefined

    return territories.find((item) => item.code === code)
}

export const isCountryCode = (v: unknown): boolean => {
    return typeof v === 'string' && countryCodes.includes(v)
}

export const findCountry = (v: string): LocaleUtilCountry | undefined => {
    return countries.find(({code}) => code === v)
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

export const findCurrency = (v: string): LocaleUtilCurrency | undefined => {
    return currencies.find(({code}) => code === v)
}

export const findCountryCurrencyCode = (v: string): string | undefined => {
    return isCountryCode(v) ? countryCurrencies[v as keyof typeof countryCurrencies] : undefined
}

export const isLanguageCode = (v: unknown): boolean => {
    return typeof v === 'string' && languageCodes.includes(v)
}

export const findLanguage = (v: string): LocaleUtilLanguage | undefined => {
    return languages.find(({code}) => code === v)
}

export const findCountryTimezones = (v: string): LocaleUtilTimezone[] | undefined => {
    return isCountryCode(v) && timezones.some(({country}) => country === v)
        ? timezones.filter(({country}) => country === v)
        : undefined
}

export const findCountryFromTimezoneName = (n: string): string | undefined => {
    return timezones.find(({ name }) => name === n)?.country
}

export const findTimezoneOffset = (v: string): number | undefined => {
    return timezones.some(({name}) => name === v)
        ? (timezones.filter(({name}) => name === v)[0]!).offset
        : undefined
}

export const findCountrySubdivisions = (v: string): LocaleUtilSubdivision[] => {
    return subdivisions.filter((d) => d.countryCode === v)
}

export type LocaleUtilCountry = Country
export type LocaleUtilCurrency = Currency
export type LocaleUtilLanguage = Language
export type LocaleUtilTimezone = Timezone
export type LocaleUtilSubdivision = Subdivision
