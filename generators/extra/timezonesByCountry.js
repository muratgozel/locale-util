const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')
const {excludedCountryCodes} = require('../config')

const timezones = require('../../data/core/timezones.json')
const timezonesByCountry = {}
for (let i = 0; i < timezones.length; i++) {
  const country = timezones[i].territory
  if (excludedCountryCodes.indexOf(country) === -1) {
    if (!timezonesByCountry[country]) timezonesByCountry[country] = []
    timezonesByCountry[country].push(timezones[i].id)
  }
}

const filename = 'timezonesByCountry.json'
const dest = path.join('data/extra', filename)
fs.writeFileSync(dest, JSON.stringify(timezonesByCountry))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
