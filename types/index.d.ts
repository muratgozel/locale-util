declare module 'locale-util' {
    import type {CountryCode} from './countryCodes'
    import type {LanguageCode} from './languageCodes'
    import type {LanguageCodeExtended} from './languageCodesExtended'
    import type {CurrencyCode} from './currencyCodes'

    export type {CountryCode} from './countryCodes'
    export type {LanguageCode} from './languageCodes'
    export type {LanguageCodeExtended} from './languageCodesExtended'
    export type {CurrencyCode} from './currencyCodes'

    export interface CountryLanguages {
        [index: CountryCode]: LanguageCode[]
    }

    export interface CountryLanguagesExtended {
        [index: CountryCode]: LanguageCodeExtended[]
    }

    export type Language = {
        code: LanguageCode,
        nativeName: string,
        englishName: string
    }

    export type Currency = {
        code: CurrencyCode,
        num: number,
        nativeName: string,
        englishName: string
    }

    export type Country = {
        code: CountryCode,
        nativeName: string,
        englishName: string
    }

    export type Timezone = {
        name: string,
        offset: number,
        country: CountryCode
    }

    export interface CountryCallingCodes {
        [index: CountryCode]: number
    }
}