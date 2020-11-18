const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')
const expat = require('node-expat')
const fetch = require('node-fetch')
const {updateSizeReport} = require('../../helpers')
const {excludedCountryCodes} = require('../config')

const url = 'https://www.currency-iso.org/dam/downloads/lists/list_one.xml'
const filename = 'currencies.json'
const dest = path.join('data/core', filename)

const supplementalData = require('../../data/core/supplementalData.json')
const currencyCodesByCountry = Object
  .keys(supplementalData.currencyData)
  .reduce(function(memo, currencyCode) {
    const countryCodes = supplementalData.currencyData[currencyCode]
    for (var i = 0; i < countryCodes.length; i++) {
      const c = countryCodes[i]
      if (excludedCountryCodes.indexOf(c) === -1) {
        memo[c] = currencyCode
      }
    }
    return memo
  }, {})

fetch(url)
  .then(res => res.text())
  .then(function(body) {
    const parser = new expat.Parser('UTF-8')
    const stream = new Readable()

    return parse(body, parser, stream)
  })
  .catch(function(err) {
    throw err
  })

function parse(body, parser, stream) {
  parser.on('error', function(err) {
    throw err
  })

  const list = []
  let activeProp = null
  let activeCurrency = null
  const propsMap = {
    'CcyNm': 'name',
    'Ccy': 'code',
    'CcyNbr': 'num',
    'CcyMnrUnts': 'deciLen'
  }
  const props = Object.keys(propsMap)

  parser.on('startElement', function (name, attrs) {
    if (name == 'CcyNtry') {
      activeCurrency = {}
    }

    if (props.indexOf(name) !== -1) {
      activeProp = propsMap[name]
    }
  })

  parser.on('text', function (text) {
    if (activeProp !== null) {
      activeCurrency[activeProp] = activeProp == 'deciLen'
        ? parseFloat(text)
        : text
    }
  })

  parser.on('endElement', function (name) {
    if (name == 'CcyNtry') {
      if (list.map(o => o.code).indexOf(activeCurrency.code) === -1) {
        list.push(activeCurrency)
      }

      activeCurrency = null
    }

    if (props.indexOf(name) !== -1) {
      activeProp = null
    }
  })

  parser.on('close', function() {
    // replace currency names with their native names
    const localizedList = list
      .map(function(item) {
        const countryMatches = Object
          .keys(currencyCodesByCountry)
          .filter(country => currencyCodesByCountry[country] == item.code)
        if (countryMatches && countryMatches.length > 0) {
          const countryDataPath = 'data/core/byLocale/' + (countryMatches.length > 1 ? 'en' : countryMatches[0].toLowerCase()) + '.json'
          if (!fs.existsSync(countryDataPath)) {
            return null
          }
          const countryData = JSON.parse(fs.readFileSync(countryDataPath, 'utf8'))
          item.name = countryData.currencyNamesByCode[Object
            .keys(countryData.currencyNamesByCode)
            .filter(c => c == item.code)[0]]
          return item
        }
        else {
          return null
        }
      })
      .filter(item => item !== null)

    fs.writeFile(dest, JSON.stringify(localizedList), function(err) {
      if (err) throw err
      updateSizeReport(dest, 'core')
      console.log(filename + ' has been created successfully.')
    })
  })

  stream.push(body)
  stream.push(null)
  stream.pipe(parser)
}
