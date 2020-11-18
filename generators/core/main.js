const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')
const expat = require('node-expat')
const {objectkit} = require('basekits')
const {updateSizeReport} = require('../../helpers')

const src = path.join('cldr-data/main')
const dest = path.join('data/core/main')
fs.mkdirSync(dest, {recursive: true})

const files = fs.readdirSync(src).filter(f => path.extname(f) == '.xml')
for (var i = 0; i < files.length; i++) {
  const filename = path.basename(files[i])
  const data = fs.readFileSync(path.join(src, filename), 'utf8')
  parse(data, path.basename(filename, '.xml'))
}

function parse(data, locale) {
  const parser = new expat.Parser('UTF-8')
  const stream = new Readable()

  let lookForLanguages = false
  let lookForTerritories = false
  let lookForCurrencies = false
  let lookForCurrencyDisplayName = false
  let activeLanguageTag = null
  let activeCountryCode = null
  let activeCurrencyCode = null
  const obj = {
    languages: {},
    countryNamesByCode: {},
    currencyNamesByCode: {}
  }

  parser.on('error', function(err) {
    throw err
  })

  parser.on('startElement', function(name, attrs) {
    if (name == 'languages') {
      lookForLanguages = true
    }

    if (name == 'language' && lookForLanguages) {
      obj.languages[attrs.type] = null
      activeLanguageTag = attrs.type
    }

    if (name == 'territories') {
      lookForTerritories = true
    }

    if (name == 'territory' && lookForTerritories && !attrs.hasOwnProperty('alt') && /[A-Z]{2}/.test(attrs.type)) {
      obj.countryNamesByCode[attrs.type] = null
      activeCountryCode = attrs.type
    }

    if (name == 'currencies') {
      lookForCurrencies = true
    }

    if (name == 'currency' && lookForCurrencies) {
      obj.currencyNamesByCode[attrs.type] = null
      activeCurrencyCode = attrs.type
    }

    if (name == 'displayName' && lookForCurrencies && activeCurrencyCode) {
      lookForCurrencyDisplayName = true
    }
  })

  parser.on('text', function(text) {
    if (activeLanguageTag) {
      obj.languages[activeLanguageTag] = text
    }

    if (activeCountryCode) {
      obj.countryNamesByCode[activeCountryCode] = text
    }

    if (lookForCurrencyDisplayName) {
      obj.currencyNamesByCode[activeCurrencyCode] = text
    }
  })

  parser.on('endElement', function(name) {
    if (name == 'language') {
      activeLanguageTag = null;
    }

    if (name == 'territory') {
      activeCountryCode = null;
    }

    if (name == 'displayName' && lookForCurrencyDisplayName) {
      lookForCurrencyDisplayName = false
      activeCurrencyCode = null
    }
  })

  parser.on('close', function() {
    fs.writeFile(path.join(dest, locale + '.json'), JSON.stringify(obj, null, 2), function(err) {
      if (err) throw err
      updateSizeReport(path.join(dest, locale + '.json'), 'core')
      console.log('main/' + locale + '.json has been created successfully.')
    })
  })

  stream.push(data)
  stream.push(null)
  stream.pipe(parser)
}
