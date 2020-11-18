const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')
const {excludedCountryCodes} = require('../config')

const supplementalData = require('../../data/core/supplementalData.json')
const currencyCodesByCountry = Object
  .keys(supplementalData.currencyData)
  .reduce(function(memo, currencyCode) {
    const countryCodes = supplementalData.currencyData[currencyCode]
    for (var i = 0; i < countryCodes.length; i++) {
      const c = countryCodes[i]
      if (excludedCountryCodes.indexOf(c) === -1) {
        memo[c] = currencyCode
      }
    }
    return memo
  }, {})

const filename = 'currencyCodesByCountry.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(currencyCodesByCountry))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
