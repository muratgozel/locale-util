import { countryCodes } from './data/countryCodes.js';
import { countries } from './data/countries.js';
import { countryCallingCodes } from './data/countryCallingCodes.js';
import { countryLanguages } from './data/countryLanguages.js';
import { currencyCodes } from './data/currencyCodes.js';
import { currencies } from './data/currencies.js';
import { languageCodes } from './data/languageCodes.js';
import { languages } from './data/languages.js';
import { timezones } from './data/timezones.js';
export { countryCodes } from './data/countryCodes.js';
export { countries } from './data/countries.js';
export { countryCallingCodes } from './data/countryCallingCodes.js';
export { countryLanguages } from './data/countryLanguages.js';
export { currencyCodes } from './data/currencyCodes.js';
export { currencies } from './data/currencies.js';
export { languageCodes } from './data/languageCodes.js';
export { languages } from './data/languages.js';
export { timezones } from './data/timezones.js';
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
