const fs = require('fs')
const path = require('path')
const {updateSizeReport} = require('../../helpers')

const filename = 'languageNamesByCode.json'
const dest = path.join('data/extra', filename)
const languageEnglishNames = JSON
  .parse(fs.readFileSync('data/core/main/en.json', 'utf8'))
  .languages

const obj = Object
  .keys(languageEnglishNames)
  .reduce(function(memo, l) {
    const languageNamesPath = 'data/core/main/' + l + '.json'
    if (!fs.existsSync(languageNamesPath)) {
      memo[l] = languageEnglishNames[l]
    }
    else {
      memo[l] = JSON
        .parse(fs.readFileSync(languageNamesPath, 'utf8'))
        .languages[l]
    }
    return memo
  }, {})

fs.writeFileSync(dest, JSON.stringify(obj))
updateSizeReport(dest, 'extra')
console.log(filename + ' has been created successfully.')
