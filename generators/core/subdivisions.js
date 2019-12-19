const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')
const expat = require('node-expat')
const fetch = require('node-fetch')
const {updateSizeReport} = require('../../helpers')

const url = 'https://raw.githubusercontent.com/unicode-org/cldr/master/common/subdivisions/en.xml'
const filename = 'subdivisions.json'
const dest = path.join('data/core', filename)

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

  const map = {}
  let countryCode = null
  let subdivisionCode = null

  parser.on('startElement', function (name, attrs) {
    if (name == 'subdivision') {
      countryCode = attrs.type.slice(0, 2).toUpperCase()
      subdivisionCode = attrs.type.slice(2).toUpperCase()
    }
  })

  parser.on('text', function (text) {
    if (countryCode !== null && subdivisionCode !== null) {
      if (!map.hasOwnProperty(countryCode)) map[countryCode] = []
      map[countryCode].push({[subdivisionCode]: text})
      countryCode = null
      subdivisionCode = null
    }
  })

  parser.on('close', function() {
    fs.writeFile(dest, JSON.stringify(map), function(err) {
      if (err) throw err
      updateSizeReport(dest, 'core')
      console.log(filename + ' has been created successfully.')
    })
  })

  stream.push(body)
  stream.push(null)
  stream.pipe(parser)
}
