import {expect, test} from '@jest/globals'
import {
    isCountryCode, findCountry, findCountryCallingCode, findCountryLanguages,
    isCurrencyCode, findCurrency, isLanguageCode, findLanguage, findCountryTimezones, findTimezoneOffset,
    findCountryCurrencyCode, findCountryFromTimezoneName, findTerritories, findCountryTerritory
} from '../dist/index.js'

test('validates country codes', () => {
    expect(isCountryCode('TR')).toBe(true)
    expect(isCountryCode('XX')).toBe(false)
    expect(isCountryCode(null)).toBe(false)
    expect(isCountryCode(undefined)).toBe(false)
})

test('finds a country by its code', () => {
    expect(findCountry('TR')).toEqual({
        'code': 'TR',
        'englishName': 'Türkiye',
        'nativeName': 'Türkiye'
    })
    expect(findCountry('ABC')).toEqual(undefined)
})

test('finds countries calling codes', () => {
    expect(findCountryCallingCode('TR')).toBe(90)
    expect(findCountryCallingCode('US')).toBe(1)
    expect(findCountryCallingCode(null)).toBe(undefined)
})

test('finds countries languages', () => {
    expect(findCountryLanguages('TR')).toContainEqual('tr')
    expect(findCountryLanguages('US')).toContainEqual('en')
    expect(findCountryLanguages('US')).toContainEqual('es')
    expect(findCountryLanguages('US')).toContainEqual('haw')
})

test('validates currency codes', () => {
    expect(isCurrencyCode('TRY')).toBe(true)
    expect(isCurrencyCode('XXX')).toBe(false)
})

test('finds currencies', () => {
    expect(findCurrency('TRY')).toStrictEqual({
        'code': 'TRY',
        'num': '949',
        'englishName': 'Turkish Lira',
        'nativeName': 'Türk lirası'
    })
    expect(findCurrency('XXX')).toBe(undefined)
})

test('validates language code', () => {
    expect(isLanguageCode('xxx')).toBe(false)
    expect(isLanguageCode('tr')).toBe(true)
})

test('find languages', () => {
    expect(findLanguage('tr')).toStrictEqual({
        'code': 'tr',
        'nativeName': 'Türkçe',
        'englishName': 'Turkish'
    })
})

test('finds country timezones', () => {
    expect(findCountryTimezones('TR')).toContainEqual({
        'name': 'Europe/Istanbul',
        'offset': -180,
        'country': 'TR'
    })
    expect(findCountryTimezones('TT')).toContainEqual({
        'name': 'America/Port_of_Spain',
        'offset': 240,
        'country': 'TT'
    })
    expect(findCountryTimezones('TT')).toContainEqual({
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'TT'
    })
})

test('find country from timezone name', () => {
    expect(findCountryFromTimezoneName('Europe/Istanbul')).toBe('TR')
    expect(findCountryFromTimezoneName('Invalid/Name')).toBe(undefined)
})

test('finds timezone offset', () => {
    expect(findTimezoneOffset('America/Puerto_Rico')).toBe(240)
    expect(findTimezoneOffset('Europe/Istanbul')).toBe(-180)
    expect(findTimezoneOffset('asdasd')).toBe(undefined)
})

test('finds currency code from country code', () => {
    expect(findCountryCurrencyCode('TR')).toBe('TRY')
    expect(findCountryCurrencyCode('US')).toBe('USD')
})

test('finds territories', () => {
    const list = findTerritories()
    expect(list.length > 0).toBe(true)
    expect(list.every((item) => Object.hasOwn(item, 'code') && Object.hasOwn(item, 'name'))).toBe(true)
})

test('finds territory of a country', () => {
    expect(findCountryTerritory('TR')).toStrictEqual({
        code: '145',
        name: 'Western Asia'
    })
    expect(findCountryTerritory('US')).toStrictEqual({
        code: '021',
        name: 'Northern America'
    })
})
