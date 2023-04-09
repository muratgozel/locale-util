import * as path from 'node:path'
import {readFile, readdir, writeFile} from 'node:fs/promises'
import https from 'node:https'
import {XMLParser} from 'fast-xml-parser'
import moment from 'moment-timezone'

export class Supplement {
    endpointPhoneNumberMetadata = 'https://raw.githubusercontent.com/googlei18n/libphonenumber/master/resources/PhoneNumberMetadata.xml'
    pathSourceSupplement = path.join('cldr-data-common', 'supplemental', 'supplementalData.xml')
    pathSourceMain = path.join('cldr-data-common', 'main')
    pathOutput = path.join('src', 'data')
    pathTypes = path.join('types')
    xmlParser = new XMLParser({ignoreAttributes: false, allowBooleanAttributes: true, attributeNamePrefix: ''})
    reLocaleString = /^[a-z]{2,3}_[A-Z]{2}$/
    reLanguageString = /^[a-z]{2,3}$/


    async write(supplement, supplementLocal, phoneNumberMetadata) {
        const languageCodesStr = JSON.stringify(supplement.languageCodes, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'languageCodes.ts'), 'export const languageCodes = ' + languageCodesStr + ' as const\n\nexport type LanguageCode = typeof languageCodes[number]')

        const languageCodesExtendedStr = JSON.stringify(supplement.languageCodesExtended, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'languageCodesExtended.ts'), 'export const languageCodesExtended = ' + languageCodesExtendedStr + ' as const\n\nexport type LanguageCodeExtended = typeof languageCodesExtended[number]')

        const countryCodesStr = JSON.stringify(supplement.countryCodes, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'countryCodes.ts'), 'export const countryCodes = ' + countryCodesStr + ' as const\n\nexport type CountryCode = typeof countryCodes[number]')

        const countryLanguagesStr = JSON.stringify(supplement.countryLanguages, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'countryLanguages.ts'), 'import type {CountryCode} from \'./countryCodes\'\nimport type {LanguageCode} from \'./languageCodes\'\n\nexport type CountryLanguages = {\n    [key in CountryCode]: LanguageCode[]\n}\n\nexport const countryLanguages: CountryLanguages = ' + countryLanguagesStr)

        const countryLanguagesExtendedStr = JSON.stringify(supplement.countryLanguagesExtended, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'countryLanguagesExtended.ts'), 'import type {CountryCode} from \'./countryCodes\'\nimport type {LanguageCodeExtended} from \'./languageCodesExtended\'\n\nexport type CountryLanguagesExtended = {\n    [key in CountryCode]: LanguageCodeExtended[]\n}\n\nexport const countryLanguagesExtended: CountryLanguagesExtended = ' + countryLanguagesExtendedStr)

        const currencyCodesStr = JSON.stringify(supplement.currencyCodes, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'currencyCodes.ts'), 'export const currencyCodes = ' + currencyCodesStr + ' as const\n\nexport type CurrencyCode = typeof currencyCodes[number]')

        const englishNames = supplementLocal.filter((obj) => obj.language === 'en')[0]

        const languages = supplement.languageCodes.map((languageCode) => {
            const nativeNames = supplementLocal.some(({language}) => language === languageCode)
                ? supplementLocal.filter(({language}) => language === languageCode)[0]
                : undefined

            return {
                code: languageCode,
                nativeName: nativeNames && nativeNames.languageCodeNativeNames.some(({code}) => code === languageCode)
                    ? nativeNames.languageCodeNativeNames.filter(({code}) => code === languageCode)[0].localName
                    : '',
                englishName: englishNames.languageCodeNativeNames.some((obj2) => obj2.code === languageCode)
                    ? englishNames.languageCodeNativeNames.filter((obj2) => obj2.code === languageCode)[0].localName
                    : ''
            }
        })
        const languagesStr = JSON.stringify(languages, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'languages.ts'), 'import type {LanguageCode} from \'./languageCodes\'\n\nexport type Language = {\n    code: LanguageCode,\n    nativeName: string,\n    englishName: string\n}\n\nexport const languages: Language[] = ' + languagesStr)

        const countryCurrenciesStr = JSON.stringify(supplement.countryCurrencyMap, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'countryCurrencies.ts'), 'import type {CountryCode} from \'./countryCodes\'\nimport type {CurrencyCode} from \'./currencyCodes\'\n\nexport type CountryCurrencies = {\n    [key in CountryCode]: CurrencyCode\n}\n\nexport const countryCurrencies: CountryCurrencies = ' + countryCurrenciesStr)

        const currencies = supplement.currencies.map(({code, num}) => {
            const countryCode = Object.keys(supplement.countryCurrencyMap).filter((countryCode) => supplement.countryCurrencyMap[countryCode] === code)[0]
            const languageCode = Object.hasOwn(supplement.countryLanguages, countryCode) ? (supplement.countryLanguages[countryCode][0] || 'en') : 'en'
            const nativeName = supplementLocal.some(({language}) => language === languageCode)
                ? supplementLocal.filter(({language}) => language === languageCode)[0].languageCodeNativeNames.filter(({code}) => code === languageCode)[0].localName
                : ''

            return {
                code,
                num,
                englishName: englishNames.languageCodeNativeNames.filter(({code}) => code === languageCode)[0].localName,
                nativeName: nativeName
            }
        })
        const currenciesStr = JSON.stringify(currencies, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'currencies.ts'), 'import type {CurrencyCode} from \'./currencyCodes\'\n\nexport type Currency = {\n    code: CurrencyCode,\n    num: number,\n    nativeName: string,\n    englishName: string\n}\n\nexport const currencies: Currency[] = ' + currenciesStr)

        const countries = supplement.countryCodes.map((countryCode) => {
            const languageCode = Object.hasOwn(supplement.countryLanguages, countryCode) ? (supplement.countryLanguages[countryCode][0] || 'en') : 'en'
            const nativeNames = supplementLocal.some(({language}) => language === languageCode)
                ? supplementLocal.filter(({language}) => language === languageCode)[0]
                : undefined
            const nativeName = nativeNames && nativeNames.countryCodeNativeNames.some(({code}) => code === countryCode)
                ? nativeNames.countryCodeNativeNames.filter(({code}) => code === countryCode)[0].localName
                : ''
            return {
                code: countryCode,
                englishName: englishNames.countryCodeNativeNames.filter(({code}) => code === countryCode)[0].localName,
                nativeName: nativeName
            }
        })
        const countriesStr = JSON.stringify(countries, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'countries.ts'), 'import type {CountryCode} from \'./countryCodes\'\n\nexport interface Country {\n    code: CountryCode,\n    nativeName: string,\n    englishName: string\n}\n\nexport const countries: Country[] = ' + countriesStr)

        const timezones = supplement.countryCodes.reduce((memo, code) => {
            return memo.concat(
                (moment.tz.zonesForCountry(code, true) || [])
                    .map((obj) => Object.assign({}, obj, {country: code}))
            )
        }, [])
        const timezonesStr = JSON.stringify(timezones, null, 4).replace(/"/g, '\'')
        await writeFile(path.join(this.pathOutput, 'timezones.ts'), 'import type {CountryCode} from \'./countryCodes\'\n\nexport interface Timezone {\n    name: string,\n    offset: number,\n    country: CountryCode\n}\n\nexport const timezones: Timezone[] = ' + timezonesStr)

        const {territory} = this.xmlParser.parse(phoneNumberMetadata).phoneNumberMetadata.territories
        const countryCallingCodes = territory.reduce((memo, obj) => {
            if (supplement.countryCodes.includes(obj.id)) {
                memo[obj.id] = parseFloat(obj.countryCode)
            }
            return memo
        }, {})
        supplement.countryCodes.forEach((code) => {
            if (!Object.hasOwn(countryCallingCodes, code)) {
                countryCallingCodes[code] = null
            }
        })
        const countryCallingCodesStr = JSON.stringify(countryCallingCodes, null, 4).replace(/"/g, '\'').replace(/(null)/g, 'undefined')
        await writeFile(path.join(this.pathOutput, 'countryCallingCodes.ts'), 'import type {CountryCode} from \'./countryCodes\'\n\nexport type CountryCallingCodes = {\n    [key in CountryCode]: number | undefined\n}\n\nexport const countryCallingCodes: CountryCallingCodes = ' + countryCallingCodesStr)
    }

    async readMain() {
        const {currencyData, territoryInfo, codeMappings} = this.xmlParser.parse( await readFile(this.pathSourceSupplement, {encoding: 'utf8'}) ).supplementalData

        const languageCodes = []
        const languageCodesExtended = []
        const countryCodes = []
        const countryLanguages = {}
        const countryLanguagesExtended = {}
        territoryInfo.territory.map(({languagePopulation, type}) => {
            if (type === 'ZZ' || type === 'AQ' || type === 'CP' || /[^A-Z]/.test(type)) return

            countryCodes.push(type)

            if (this.isObject(languagePopulation)) languagePopulation = [languagePopulation]
            if (!languagePopulation) languagePopulation = []
            let languages = languagePopulation.filter((obj) => obj.officialStatus && obj.officialStatus === 'official')
            if (languages.length < 1) {
                languages = languagePopulation.filter((obj) => Object.hasOwn(obj, 'officialStatus'))
            }
            if (languages.length < 1) {
                languages = [languagePopulation[0]]
            }
            languages = languages.filter((obj) => this.reLanguageString.test(obj.type) && obj.type !== 'und')
            countryLanguages[type] = languages.map((obj) => {
                if (!languageCodes.includes(obj.type)) languageCodes.push(obj.type)
                return obj.type
            })

            countryLanguagesExtended[type] = languagePopulation.map((obj) => {
                if (!languageCodesExtended.includes(obj.type)) languageCodesExtended.push(obj.type)
                return obj.type
            })
        })

        const currencies = []
        const currencyCodes = []
        const countryCurrencyMap = {}
        currencyData.region.map(({iso3166, currency}) => {
            const countryCode = iso3166
            if (!countryCodes.includes(countryCode)) return
            if (Array.isArray(currency)) currency = currency[0]
            if (currency.iso4217 === 'XXX') return
            if (!currencyCodes.includes(currency.iso4217)) currencyCodes.push(currency.iso4217)
            countryCurrencyMap[countryCode] = currency.iso4217
        })

        codeMappings.currencyCodes.map(({type, numeric}) => {
            if (!currencyCodes.includes(type)) return
            if (type === 'XXX') return
            currencies.push({code: type, num: parseFloat(numeric)})
        })

        return {
            languageCodes,
            languageCodesExtended,
            countryCodes,
            countryLanguages,
            countryLanguagesExtended,
            currencies,
            currencyCodes,
            countryCurrencyMap
        }
    }

    async readLocalData({languageCodes}) {
        const jobs = (await readdir(this.pathSourceMain))
            .filter(resource => path.extname(resource) === '.xml' && languageCodes.includes(path.basename(resource, path.extname(resource))))
            .map(async (resource) => {
                const locale = path.basename(resource, path.extname(resource))
                const xmldata = await readFile(path.join(this.pathSourceMain, resource), {encoding: 'utf8'})
                const {ldml} = this.xmlParser.parse(xmldata)
                const {localeDisplayNames, characters, numbers} = ldml
                if (!localeDisplayNames) {
                    return {
                        language: locale,
                        languageCodeNativeNames: [],
                        countryCodeNativeNames: [],
                        letters: [],
                        currencies: []
                    }
                }
                if (this.isObject(localeDisplayNames.languages.language)) localeDisplayNames.languages.language = [localeDisplayNames.languages.language]

                const languageCodeNativeNames = localeDisplayNames.languages.language.map((obj) => ({code: obj.type, localName: obj['#text']}))
                const countryCodeNativeNames = localeDisplayNames.territories.territory.map((obj) => ({code: obj.type, localName: obj['#text']}))
                const letters = characters.exemplarCharacters[0].slice(1, -1).split(' ')
                const currencies = numbers.currencies && Array.isArray(numbers.currencies.currency) ? numbers.currencies.currency.map((obj) => ({code: obj.type, localName: Array.isArray(obj.displayName) ? obj.displayName[0] : obj.displayName})) : []

                return {
                    language: locale,
                    languageCodeNativeNames,
                    countryCodeNativeNames,
                    letters,
                    currencies
                }
            })
        return await Promise.all(jobs)
    }

    async readPhoneNumberMetadata() {
        return new Promise((resolve, _reject) => {
            https.get(this.endpointPhoneNumberMetadata, {}, async (res) => {
                let xmlData = ''
                res.setEncoding('utf8')
                res.on('data', (chunk) => xmlData += chunk)
                res.on('end', () => resolve(xmlData))
            })
        })
    }

    isObject(v) {
        return (!!v) && (v.constructor === Object)
    }
}