const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')

const supplementalData = require('../../data/core/supplementalData.json')
const currencyCodesByCountry = Object
  .keys(supplementalData.currencyData)
  .reduce(function(memo, currencyCode) {
    memo[supplementalData.currencyData[currencyCode]] = currencyCode
    return memo
  }, {})

const filename = 'currencyCodesByCountry.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(currencyCodesByCountry))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
