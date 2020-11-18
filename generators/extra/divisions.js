const fs = require('fs')
const path = require('path')
const dataTR = require('turkey-neighbourhoods/data/extra')
const {citiesByCode, districtsByCity, neighbourhoodsByDistrictAndCity} = dataTR

const src = path.join('data/core/subdivisions')
const dest = path.join('data/extra/divisions')
fs.mkdirSync(dest, {recursive: true})

const countryOfficialLanguages = JSON.parse(fs.readFileSync('data/extra/countryOfficialLanguages.json', 'utf8'))
const countryCodes = JSON.parse(fs.readFileSync('data/extra/countryCodes.json', 'utf8'))
for (var i = 0; i < countryCodes.length; i++) {
  const arr = []
  const countryCode = countryCodes[i]
  if (countryCode == 'TR') {
    Object.keys(citiesByCode).map(function(cityCode) {
      const item = {code: cityCode, name: citiesByCode[cityCode], children: []}
      districtsByCity[cityCode].map(function(districtName) {
        const item2 = {code: null, name: districtName, children: []}
        neighbourhoodsByDistrictAndCity[cityCode][districtName].map(function(neighborhood) {
          item2.children.push({code: null, name: neighborhood})
        })
        item.children.push(item2)
      })
      arr.push(item)
    })
  }
  else {
    if (countryOfficialLanguages.hasOwnProperty(countryCode)) {
      const primaryLanguage = countryOfficialLanguages[countryCode][0]
      const countryDivisionsPath = path.join(src, primaryLanguage + '.json')
      if (fs.existsSync(countryDivisionsPath)) {
        const obj = JSON.parse(fs.readFileSync(countryDivisionsPath, 'utf8'))
        if (obj.hasOwnProperty(countryCode)) {
          Object.keys(obj[countryCode]).map(function(code) {
            arr.push({code: code, name: obj[countryCode][code], children: []})
          })
        }
      }
    }
  }

  fs.writeFileSync(
    path.join(dest, countryCode.toLowerCase() + '.json'),
    JSON.stringify(arr)
  )
}
