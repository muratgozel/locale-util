import { countryCodes } from '#src/data/countryCodes';
import { countries } from '#src/data/countries';
import { countryCallingCodes } from '#src/data/countryCallingCodes';
import { countryLanguages } from '#src/data/countryLanguages';
import { currencyCodes } from '#src/data/currencyCodes';
import { currencies } from '#src/data/currencies';
import { languageCodes } from '#src/data/languageCodes';
import { languages } from '#src/data/languages';
import { timezones } from '#src/data/timezones';
export { countryCodes } from '#src/data/countryCodes';
export { countries } from '#src/data/countries';
export { countryCallingCodes } from '#src/data/countryCallingCodes';
export { countryLanguages } from '#src/data/countryLanguages';
export { currencyCodes } from '#src/data/currencyCodes';
export { currencies } from '#src/data/currencies';
export { languageCodes } from '#src/data/languageCodes';
export { languages } from '#src/data/languages';
export { timezones } from '#src/data/timezones';
export const isCountryCode = (v) => {
    return countryCodes.includes(v);
};
export const findCountry = (v) => {
    return countries.some(({ code }) => code === v)
        ? countries.filter(({ code }) => code === v)[0]
        : undefined;
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
    return currencyCodes.includes(v);
};
export const findCurrency = (v) => {
    return isCurrencyCode(v) && currencies.some(({ code }) => code === v)
        ? currencies.filter(({ code }) => code === v)[0]
        : undefined;
};
export const isLanguageCode = (v) => {
    return languageCodes.includes(v);
};
export const findLanguage = (v) => {
    return isLanguageCode(v) && languages.some(({ code }) => code === v)
        ? languages.filter(({ code }) => code === v)[0]
        : undefined;
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
