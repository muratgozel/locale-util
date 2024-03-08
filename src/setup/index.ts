import {writeFile} from 'node:fs/promises'
import {join} from 'node:path'
import {logger, stringify} from './utilities'
import {fetchAndParsePhoneNumMetadata} from './phonenumber'
import {parseSupplementalData} from './supplement'
import {parseRegionalData} from './regional'
import moment from 'moment-timezone'

logger.info('Fetching phone number metadata.')
const countryCallingCodes = await fetchAndParsePhoneNumMetadata()
logger.info(`Found ${Object.keys(countryCallingCodes).length} country code - calling code mapping.`)

logger.info('Parsing supplemental data.')
const {
    currencyCodes,
    countryCodes,
    languageCodes,
    countryLanguages,
    countryCurrencyMap,
    currencies
} = await parseSupplementalData()
logger.info(`Found ${currencyCodes.length} currencies, ${countryCodes.length} countries, ${languageCodes.length} languages.`)

logger.info('Parsing regional data.')
const regionalData = await parseRegionalData(languageCodes)
logger.info(`Generated regional data for ${Object.keys(regionalData).length} languages.`)

logger.info('Combine and save.')
const englishNames = regionalData['en']!
const languages: Language[] = languageCodes.map((code) => {
    return {
        code,
        nativeName: code in regionalData ? regionalData[code]!.languages[code] : undefined,
        englishName: englishNames.languages[code]
    }
})
const _currencies: Currency[] = currencies.map(({ code, num }) => {
    const countryCode = Object.keys(countryCurrencyMap).find((_countryCode) => countryCurrencyMap[_countryCode] === code)!

    let nativeLanguage = ''
    if (countryLanguages[countryCode]) {
        const languages = countryLanguages[countryCode]!
        while (languages.length > 0) {
            if (languages[0]! in regionalData) {
                nativeLanguage = languages[0]!
                break
            }
            languages.shift()
        }
    }

    return {
        code,
        num,
        nativeName: nativeLanguage.length > 0 ? regionalData[nativeLanguage]!.currencies[code] : undefined,
        englishName: englishNames.currencies[code]
    }
})
const countries: Country[] = countryCodes.map((code) => {
    let nativeLanguage = ''
    if (countryLanguages[code]) {
        const languages = countryLanguages[code]!
        while (languages.length > 0) {
            if (languages[0]! in regionalData) {
                nativeLanguage = languages[0]!
                break
            }
            languages.shift()
        }
    }

    return {
        code,
        nativeName: nativeLanguage.length > 0 ? regionalData[nativeLanguage]!.countries[code] : undefined,
        englishName: englishNames.countries[code]
    }
})
const timezones = countryCodes.reduce((memo: Timezone[], code) => {
    return memo.concat(
        (moment.tz.zonesForCountry(code, true) || [])
            .map((obj) => Object.assign({}, obj, {country: code}))
    )
}, [])

const outputPath = process.env.npm_package_config_data_path
const filenameToDataMapping = {
    'languageCodes.json': languageCodes,
    'countryCodes.json': countryCodes,
    'countryLanguages.json': countryLanguages,
    'currencyCodes.json': currencyCodes,
    'languages.json': languages,
    'countryCurrencies.json': countryCurrencyMap,
    'currencies.json': _currencies,
    'countries.json': countries,
    'timezones.json': timezones,
    'countryCallingCodes.json': countryCallingCodes
}

for (const filename of Object.keys(filenameToDataMapping)) {
    const filepath = join(outputPath, filename)
    await writeFile(filepath, stringify(filenameToDataMapping[filename as keyof typeof filenameToDataMapping]))
    logger.info(`Saved: ${filepath}`)
}

logger.info('All data generated successfully.')

export interface Language {
    code: string
    nativeName: string | undefined
    englishName: string | undefined
}

export interface Currency {
    code: string
    num: string
    nativeName: string | undefined
    englishName: string | undefined
}

export interface Country {
    code: string
    nativeName: string | undefined
    englishName: string | undefined
}

export interface Timezone {
    name: string,
    offset: number,
    country: string
}
