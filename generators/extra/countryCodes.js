const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')

const supplementalData = require('../../data/core/supplementalData.json')
const countryCodes = Object.keys(supplementalData.territoryInfo)

const filename = 'countryCodes.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(countryCodes))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
