const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')

const languageNamesByCode = require('../../data/core/languageNamesByCode.json')
const languageCodes = Object.keys(languageNamesByCode)

const filename = 'languageCodes.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(languageCodes))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
