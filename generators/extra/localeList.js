const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')
const countryNamesByCode = require('../../data/extra/countryNamesByCode.json')
const languageNamesByCode = require('../../data/extra/languageNamesByCode.json')
const countryOfficialLanguages = require('../../data/extra/countryOfficialLanguages.json')

const localeList = Object
  .keys(countryOfficialLanguages)
  .reduce(function(memo, countryCode) {
    const languages = countryOfficialLanguages[countryCode]
    languages.map(lang =>
      memo[lang+'_'+countryCode] = countryNamesByCode[countryCode]+
        ' - '+languageNamesByCode[lang]+
        ' ('+lang+'_'+countryCode+')')
    return memo
}, {})

const localeListSorted = Object.keys(localeList).sort().reduce(function(memo, tag) {
  memo[tag] = localeList[tag]
  return memo
}, {})

const filename = 'localeList.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(localeListSorted))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
