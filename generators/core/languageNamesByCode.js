const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const {updateSizeReport} = require('../../helpers')

const url = 'https://raw.githubusercontent.com/unicode-org/cldr/master/tools/java/org/unicode/cldr/util/data/lstreg.txt'
const filename = 'languageNamesByCode.json'
const dest = path.join('data/core', filename)

fetch(url)
  .then(res => res.text())
  .then(function(body) {
    return parse(body)
  })
  .catch(function(err) {
    throw err
  })

function parse(body) {
  const lines = body.split(/[\r\n]+/gm)
  const languageNamesByCode = {}
  let start = false
  for (let i = 0; i < lines.length; i++) {
    if (start) {
      if ('language' == lines[i].slice(0, 8)) {
        const code = lines[i].split('|')[1].replace(/[\s]+/g, '')
        const name = lines[i].split('|')[2].replace(/[\s]+/g, '')
        languageNamesByCode[code] = name
      }
    }
    if (lines[i].length >= 11 && '# ISO 639-1' == lines[i].slice(0, 11)) {
      start = true
    }
    if (lines[i].length >= 11 && '# ISO 639-2' == lines[i].slice(0, 11)) {
      fs.writeFileSync(dest, JSON.stringify(languageNamesByCode))
      updateSizeReport(dest, 'core')
      console.log(filename + ' has been created successfully.')
      break;
    }
  }
}
