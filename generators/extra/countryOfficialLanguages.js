const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')
const {excludedCountryCodes} = require('../config')
const languageNamesByCode = require('../../data/core/languageNamesByCode.json')

const supplementalData = require('../../data/core/supplementalData.json')
const countryOfficialLanguages = Object
  .keys(supplementalData.territoryInfo)
  .filter(c => excludedCountryCodes.indexOf(c) === -1)
  .reduce(function(memo, country) {
    const languages = supplementalData.territoryInfo[country].languages
      .filter(o => o.official)
      .map(o => o.code)
      .filter(code => languageNamesByCode.hasOwnProperty(code))
    if (languages.length > 0) memo[country] = languages
    return memo
  }, {})

const filename = 'countryOfficialLanguages.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(countryOfficialLanguages))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
