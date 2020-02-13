const fs = require('fs')
const path = require('path')
const kit = require('@basekits/core')
const kitType = require('@basekits/kit-type')
const kitObject = require('@basekits/kit-object')
const kitError = require('@basekits/kit-error')
const kitValidator = require('@basekits/kit-validator')
kit.addKit(kitType)
kit.addKit(kitObject)
kit.addKit(kitError)
kit.addKit(kitValidator)
const {updateSizeReport} = require('../../helpers')

const supplementalData = require('../../data/core/supplementalData.json')
const countryCodes = Object.keys(supplementalData.territoryInfo)
const countriesByCode = countryCodes.reduce(function(memo, code) {
  if (kit.isNotEmpty( kit.getProp(supplementalData.territoryInfo[code], 'name') )) {
    memo[code] = supplementalData.territoryInfo[code].name
  }
  return memo
}, {})

const filename = 'countriesByCode.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(countriesByCode))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
