const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')
const expat = require('node-expat')
const {objectkit} = require('basekits')
const {updateSizeReport} = require('../../helpers')

const src = path.join('cldr-data/supplemental/supplementalData.xml')
const filename = 'supplementalData.json'
const dest = path.join('data/core', filename)

const data = fs.readFileSync(src, 'utf8')
parse(data)

function parse(body) {
  const parser = new expat.Parser('UTF-8')
  const stream = new Readable()

  parser.on('error', function(err) {
    throw err
  })

  const territoryInfo = {
    list: {},
    activeItem: null,
    activeLanguage: null
  }
  const currencyData = {
    list: {},
    activeItem: null
  }
  const languageData = []

  parser.on('startElement', function (name, attrs) {
    if (name == 'territory') {
      territoryInfo.activeItem = attrs.type
      territoryInfo.list[territoryInfo.activeItem] = {
        name: null,
        code: attrs.type,
        gdp: parseFloat(attrs.gdp),
        population: parseFloat(attrs.population),
        languages: []
      }
    }

    if (name == 'languagePopulation' && territoryInfo.activeItem) {
      const official = objectkit.getProp(attrs, 'officialStatus', false)
      const obj = {
        code: attrs.type,
        name: null,
        populationPercent: parseFloat(attrs.populationPercent),
        official: !official ? false : official.indexOf('official') !== -1 ? true : false
      }
      territoryInfo.activeLanguage = obj
    }

    if (name == 'region' && attrs['iso3166']) {
      currencyData.activeItem = attrs['iso3166']
    }

    if (name == 'currency' && attrs['iso4217'] && currencyData.activeItem) {
      if (!currencyData.list.hasOwnProperty(attrs['iso4217'])) {
        currencyData.list[attrs['iso4217']] = []
      }
      currencyData.list[attrs['iso4217']].push(currencyData.activeItem)
      currencyData.activeItem = null
    }

    if (name == 'language') {
      languageData.push(attrs)
    }
  })

  parser.on('comment', function(c) {
    if (territoryInfo.activeItem && !territoryInfo.list[territoryInfo.activeItem].name) {
      territoryInfo.list[territoryInfo.activeItem].name = c
    }

    if (territoryInfo.activeLanguage && territoryInfo.activeItem) {
      territoryInfo.activeLanguage.name = c
      territoryInfo.list[territoryInfo.activeItem].languages.push(territoryInfo.activeLanguage)
      territoryInfo.activeLanguage = null
    }
  })

  parser.on('endElement', function(name) {
    if (name == 'territory') {
      territoryInfo.activeItem = null
    }
  })

  parser.on('close', function() {
    const data = Object.assign({}, {
      languageData: languageData,
      territoryInfo: territoryInfo.list,
      currencyData: currencyData.list
    })
    fs.writeFile(dest, JSON.stringify(data), function(err) {
      if (err) throw err
      updateSizeReport(dest, 'core')
      console.log(filename + ' has been created successfully.')
    })
  })

  stream.push(body)
  stream.push(null)
  stream.pipe(parser)
}
