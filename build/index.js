import { countryCodes } from './data/countryCodes';
import { countries } from './data/countries';
import { countryCallingCodes } from './data/countryCallingCodes';
import { countryLanguages } from './data/countryLanguages';
import { currencyCodes } from './data/currencyCodes';
import { currencies } from './data/currencies';
import { languageCodes } from './data/languageCodes';
import { languages } from './data/languages';
import { timezones } from './data/timezones';
export { countryCodes } from './data/countryCodes';
export { countries } from './data/countries';
export { countryCallingCodes } from './data/countryCallingCodes';
export { countryLanguages } from './data/countryLanguages';
export { currencyCodes } from './data/currencyCodes';
export { currencies } from './data/currencies';
export { languageCodes } from './data/languageCodes';
export { languages } from './data/languages';
export { timezones } from './data/timezones';
export const isCountryCode = (v) => {
    return typeof v === 'string' && countryCodes.find((code) => code === v) !== undefined;
};
export const findCountry = (v) => {
    return countries.find(({ code }) => code === v);
};
export const findCallingCode = (v) => {
    return isCountryCode(v) && Object.hasOwn(countryCallingCodes, v)
        ? countryCallingCodes[v]
        : undefined;
};
export const findCountryLanguages = (v) => {
    return isCountryCode(v) && Object.hasOwn(countryLanguages, v)
        ? countryLanguages[v]
        : undefined;
};
export const isCurrencyCode = (v) => {
    return typeof v === 'string' && currencyCodes.find((code) => code === v) !== undefined;
};
export const findCurrency = (v) => {
    return currencies.find(({ code }) => code === v);
};
export const isLanguageCode = (v) => {
    return typeof v === 'string' && languageCodes.find((code) => code === v) !== undefined;
};
export const findLanguage = (v) => {
    return languages.find(({ code }) => code === v);
};
export const findCountryTimezones = (v) => {
    return isCountryCode(v) && timezones.some(({ country }) => country === v)
        ? timezones.filter(({ country }) => country === v)
        : undefined;
};
export const findTimezoneOffset = (v) => {
    return timezones.some(({ name }) => name === v)
        ? timezones.filter(({ name }) => name === v)[0].offset
        : undefined;
};
