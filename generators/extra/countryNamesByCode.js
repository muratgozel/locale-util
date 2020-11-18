const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')

const filename = 'countryNamesByCode.json'
const dest = path.join('data/extra', filename)
const countryEnglishNames = JSON
  .parse(fs.readFileSync('data/core/main/en.json', 'utf8'))
  .countryNamesByCode

const obj = Object
  .keys(countryEnglishNames)
  .reduce(function(memo, l) {
    const countryNamesPath = 'data/core/main/' + l + '.json'
    if (!fs.existsSync(countryNamesPath)) {
      memo[l] = countryEnglishNames[l]
    }
    else {
      memo[l] = JSON
        .parse(fs.readFileSync(countryNamesPath, 'utf8'))
        .countryNamesByCode[l]
    }
    return memo
  }, {})

fs.writeFileSync(dest, JSON.stringify(obj))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
