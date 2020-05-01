const fs = require('fs')
const path = require('path')
const {validationkit, objectkit} = require('basekits')
const {updateSizeReport} = require('../../helpers')
const {excludedCountryCodes} = require('../config')

const supplementalData = require('../../data/core/supplementalData.json')
const countryCodes = Object.keys(supplementalData.territoryInfo)
const countriesByCode = countryCodes.reduce(function(memo, code) {
  if (validationkit.isNotEmpty( objectkit.getProp(supplementalData.territoryInfo[code], 'name') )
  && excludedCountryCodes.indexOf(code) === -1) {
    memo[code] = supplementalData.territoryInfo[code].name
  }
  return memo
}, {})

const filename = 'countriesByCode.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(countriesByCode))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
