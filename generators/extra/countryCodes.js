const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')
const {excludedCountryCodes} = require('../config')

const supplementalData = require('../../data/core/supplementalData.json')
const countryCodes = Object
  .keys(supplementalData.territoryInfo)
  .filter(c => excludedCountryCodes.indexOf(c) === -1)

const filename = 'countryCodes.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(countryCodes))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
