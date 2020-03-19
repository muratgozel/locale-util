const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')
const {excludedCountryCodes} = require('../config')

const supplementalData = require('../../data/core/supplementalData.json')
const currencyCodesByCountry = Object
  .keys(supplementalData.currencyData)
  .reduce(function(memo, currencyCode) {
    const countryCode = supplementalData.currencyData[currencyCode]
    if (excludedCountryCodes.indexOf(countryCode) === -1) {
      memo[countryCode] = currencyCode
    }
    return memo
  }, {})

const filename = 'currencyCodesByCountry.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(currencyCodesByCountry))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
