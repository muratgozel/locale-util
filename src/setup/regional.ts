import {readdir, readFile} from 'node:fs/promises'
import {extname, basename, join} from 'node:path'
import {isArray, isObject, xmlParser} from './utilities'

export async function parseRegionalData (languageCodes: string[]) {
    const mainPath = process.env.npm_package_config_cldr_main_path
    const files = (await readdir(mainPath))
        .filter(resource => extname(resource) === '.xml' && languageCodes.includes(basename(resource, extname(resource))))

    const regionalNamings: Record<string, RegionalNaming> = {}
    for (const filepath of files) {
        const language = filepath.slice(0, filepath.indexOf('.xml'))
        const xmlData = await readFile(join(mainPath, filepath), 'utf8')
        const {localeDisplayNames, characters, numbers} = (xmlParser.parse(xmlData) as XmlParserResult).ldml

        if (!localeDisplayNames?.territories) continue

        if (isObject(localeDisplayNames.languages.language)) localeDisplayNames.languages.language = [(localeDisplayNames.languages.language as LanguageItem)]
        if (isObject(localeDisplayNames.territories.territory)) localeDisplayNames.territories.territory = [(localeDisplayNames.territories.territory as TerritoryItem)]

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

        regionalNamings[language] = {
            languages,
            countries,
            currencies,
            chars: !characters.exemplarCharacters ? [] : characters.exemplarCharacters.length > 0 && typeof characters.exemplarCharacters[0] === 'string' ? characters.exemplarCharacters[0].slice(1, -1).split(' ') : [],
        }
    }

    return regionalNamings
}

interface RegionalNaming {
    languages: Record<string, string>
    countries: Record<string, string>
    currencies: Record<string, string>
    chars: string[]
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
