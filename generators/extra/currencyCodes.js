const fs = require('fs')
const path = require('path')

const currencies = require('../../data/core/currencies.json')
const currencyCodes = currencies.map(obj => obj.code)

const filename = 'currencyCodes.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(currencyCodes))
console.log(filename + ' has been created successfully.')
