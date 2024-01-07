import {expect, test} from '@jest/globals'
import {
    isCountryCode, findCountry, findCallingCode, findCountryLanguages,
    isCurrencyCode, findCurrency, isLanguageCode, findLanguage, findCountryTimezones, findTimezoneOffset,
    findCurrencyCode
} from '../build/index.js'

test('validates country codes', () => {
    expect(isCountryCode('TR')).toBe(true)
    expect(isCountryCode('XX')).toBe(false)
    expect(isCountryCode(null)).toBe(false)
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
    expect(findCallingCode('TR')).toBe(90)
    expect(findCallingCode('US')).toBe(1)
    expect(findCallingCode(null)).toBe(undefined)
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
        'num': 949,
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

test('finds timezone offset', () => {
    expect(findTimezoneOffset('America/Puerto_Rico')).toBe(240)
    expect(findTimezoneOffset('Europe/Istanbul')).toBe(-180)
    expect(findTimezoneOffset('asdasd')).toBe(undefined)
})

test('finds currency code from country code', () => {
    expect(findCurrencyCode('TR')).toBe('TRY')
    expect(findCurrencyCode('US')).toBe('USD')
})