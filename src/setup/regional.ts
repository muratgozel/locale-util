import {readdir, readFile} from 'node:fs/promises'
import {extname, basename, join} from 'node:path'
import {isArray, isFileExists, isObject, xmlParser} from './utilities'

export async function parseRegionalData (languageCodes: string[]) {
    const subdivisionsPath = process.env.npm_package_config_cldr_subdivisions_path
    const mainPath = process.env.npm_package_config_cldr_main_path
    const files = (await readdir(mainPath))
        .filter(resource => extname(resource) === '.xml' && languageCodes.includes(basename(resource, extname(resource))))

    const divisionsXmlDataEn = await readFile(join(subdivisionsPath, 'en.xml'))
    const { localeDisplayNames } = (xmlParser.parse(divisionsXmlDataEn) as XmlParserResultSubdivision).ldml
    const divisionsEn = localeDisplayNames.subdivisions.subdivision.reduce((memo: Record<string, Record<string, string>>, item) => {
        if (item.type && item.type.length > 2) {
            const countryCode = item.type.slice(0, 2).toUpperCase()
            if (!memo[countryCode]) memo[countryCode] = {}
            memo[countryCode]![item.type.slice(2)] = item['#text']
        }
        return memo
    }, {})

    const regionalNamings: Record<string, RegionalNaming> = {}
    for (const filepath of files) {
        const language = filepath.slice(0, filepath.indexOf('.xml'))
        const xmlData = await readFile(join(mainPath, filepath), 'utf8')
        const {localeDisplayNames, characters, numbers} = (xmlParser.parse(xmlData) as XmlParserResult).ldml

        if (!localeDisplayNames?.territories) continue

        if (isObject(localeDisplayNames.languages.language)) localeDisplayNames.languages.language = [(localeDisplayNames.languages.language as LanguageItem)]
        if (isObject(localeDisplayNames.territories.territory)) localeDisplayNames.territories.territory = [(localeDisplayNames.territories.territory as TerritoryItem)]

        const territories = localeDisplayNames.territories.territory
            .filter((item) => item.type.length === 3 || item.type === 'Q0')
            .map((item) => ({ code: item.type, name: item['#text'] }))
            /*.reduce((memo: Record<string, string>, item) => {
                memo[item.type] = item['#text']
                return memo
            }, {})*/

        const languages = localeDisplayNames.languages.language.reduce((memo: Record<string, string>, item) => {
            if (!memo[item.type]) {
                memo[item.type] = item['#text']
            }
            return memo
        }, {})

        const countries = localeDisplayNames.territories.territory.reduce((memo: Record<string, string>, item) => {
            if (!memo[item.type]) {
                memo[item.type] = item['#text']
            }
            return memo
        }, {})

        const currencies = numbers?.currencies && isArray(numbers.currencies.currency)
            ? numbers.currencies.currency.reduce((memo: Record<string, string>, item) => {
                if (isArray(item.displayName) && typeof item.displayName[0] !== 'string') return memo
                memo[item.type] = isArray(item.displayName) ? item.displayName[0]! : item.displayName
                return memo
            }, {})
            : {}

        const subdivisions: Subdivision[] = []
        const divisionsXmlData = await isFileExists(join(subdivisionsPath, language + '.xml')) ? await readFile(join(subdivisionsPath, language + '.xml')) : null
        if (divisionsXmlData) {
            const { localeDisplayNames } = (xmlParser.parse(divisionsXmlData) as XmlParserResultSubdivision).ldml
            if (localeDisplayNames?.subdivisions) {
                localeDisplayNames.subdivisions.subdivision.map((item) => {
                    if (item.type && item.type.length > 2) {
                        const country = item.type.slice(0, 2).toUpperCase()
                        subdivisions.push({ countryCode: country, code: item.type.slice(2), nativeName: item['#text'], englishName: divisionsEn[country]![item.type.slice(2)]! })
                    }
                })
            }
        }

        regionalNamings[language] = {
            territories,
            languages,
            countries,
            currencies,
            chars: !characters.exemplarCharacters ? [] : characters.exemplarCharacters.length > 0 && typeof characters.exemplarCharacters[0] === 'string' ? characters.exemplarCharacters[0].slice(1, -1).split(' ') : [],
            subdivisions,
        }
    }

    return regionalNamings
}

interface RegionalNaming {
    territories: { code: string, name: string }[]
    languages: Record<string, string>
    countries: Record<string, string>
    currencies: Record<string, string>
    chars: string[]
    subdivisions: Subdivision[]
}

export interface Subdivision {
    countryCode: string
    code: string
    nativeName?: string
    englishName: string
}

interface XmlParserResultSubdivision {
    ldml: {
        localeDisplayNames: {
            subdivisions: {
                subdivision: {
                    type: string
                    "#text": string
                }[]
            }
        }
    }
}

interface XmlParserResult {
    ldml: {
        localeDisplayNames?: LocaleDisplayNames,
        characters: Characters,
        numbers?: Numbers
    }
}

interface Numbers {
    currencies?: {
        currency?: CurrencyItem[]
    }
}

interface Characters {
    exemplarCharacters?: string[]
}

interface LocaleDisplayNames {
    territories?: {
        territory: TerritoryItem | TerritoryItem[]
    },
    languages: {
        language: LanguageItem | LanguageItem[]
    }
}

interface TerritoryItem {
    type: string
    "#text": string
}

interface LanguageItem {
    type: string
    "#text": string
}

interface CurrencyItem {
    type: string
    displayName: string
}
