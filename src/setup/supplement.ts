import {isArray, xmlParser} from './utilities'
import {readFile} from 'node:fs/promises'

export async function parseSupplementalData () {
    const data = await readFile(process.env.npm_package_config_cldr_supplement_filepath, 'utf8')
    const {currencyData, territoryInfo, codeMappings} = (xmlParser
        .parse(data) as XmlParseResult)
        .supplementalData

    const countryCurrencyMap = currencyData.region.reduce((memo: Record<string, string>, item) => {
        const code = isArray(item.currency) ? item.currency[0]!.iso4217 : item.currency.iso4217

        // filter XXX
        if (code === 'XXX') return memo

        memo[item.iso3166] = code
        return memo
    }, {})

    const currencyCodes = Object.values(countryCurrencyMap)
        // filter duplicates
        .filter((code, i, self) => self.indexOf(code) === i)
        // filter missing numerics
        .filter((code) => hasCurrencyNum(code))
    const currencies = currencyCodes
        .map((code) => {
            return { code, num: findCurrencyNum(code) }
        })

    const countryLanguages: Record<string, string[]> = {}
    const countryCodes: string[] = []
    const languageCodesTemp: string[] = []
    for (const item of territoryInfo.territory) {
        // filter missing official languages
        if (!hasOfficialLanguage(item)) continue

        // filter missing currency
        if (!countryCurrencyMap[item.type]) continue

        const languages = findOfficialLanguages(item)
            .filter((_code) => !_code.includes('_') && (_code.length === 2 || _code.length === 3))
        countryLanguages[item.type] = languages

        countryCodes.push(item.type)

        languageCodesTemp.push(...languages)
    }

    const languageCodes = languageCodesTemp.filter((code, i, self) => self.indexOf(code) === i)

    return {
        currencyCodes,
        countryCurrencyMap,
        currencies,
        languageCodes,
        countryCodes,
        countryLanguages
    }

    function findOfficialLanguages (item: TerritoryItem) {
        return isArray(item.languagePopulation)
            ? item.languagePopulation
                .filter((lp) => typeof lp.officialStatus === 'string' && lp.officialStatus.includes('official'))
                .map((lp) => lp.type)
            : [item.languagePopulation.type]
    }

    function hasOfficialLanguage (item: TerritoryItem) {
        if (!item.languagePopulation) return false

        return isArray(item.languagePopulation)
            ? item.languagePopulation.some((lp) => typeof lp.officialStatus === 'string' && lp.officialStatus.includes('official'))
            : typeof item.languagePopulation.officialStatus === 'string' && item.languagePopulation.officialStatus.includes('official')
    }

    function findCurrencyNum (code: string): string {
        return codeMappings.currencyCodes
            .find(({ type}) => type === code)!
            .numeric as string
    }

    function hasCurrencyNum (code: string) {
        return codeMappings.currencyCodes.some(({ type, numeric }) => type === code && typeof numeric === 'string')
    }
}

interface CurrencyData {
    region: RegionCurrenciesItem[]
}

interface RegionCurrenciesItem {
    iso3166: string
    currency: RegionCurrencyItem | RegionCurrencyItem[]
}

interface RegionCurrencyItem {
    iso4217: string
    from: string
    to?: string
}

interface TerritoryInfo {
    territory: TerritoryItem[]
}

interface TerritoryItem {
    type: string
    languagePopulation: LanguagePopulationItem | LanguagePopulationItem[]
}

interface LanguagePopulationItem {
    type: string
    officialStatus?: 'official' | 'official_regional' | 'de_facto_official'
}

interface CodeMappings {
    currencyCodes: CurrencyItem[]
}

interface CurrencyItem {
    type: string
    numeric: unknown
}

interface XmlParseResult {
    supplementalData: {
        currencyData: CurrencyData
        territoryInfo: TerritoryInfo
        codeMappings: CodeMappings
    }
}
