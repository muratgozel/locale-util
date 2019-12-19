const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')
const expat = require('node-expat')
const fetch = require('node-fetch')
const {updateSizeReport} = require('../../helpers')

const url = 'https://raw.githubusercontent.com/googlei18n/libphonenumber/master/resources/PhoneNumberMetadata.xml'
const filename = 'phoneNumberMetadata.json'
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

  const phoneNumberMetadata = {}

  parser.on('startElement', function (name, attrs) {
    if (name == 'territory' && attrs.id && attrs.countryCode) {
      phoneNumberMetadata[attrs.id] = attrs.countryCode
    }
  })

  parser.on('close', function() {
    fs.writeFile(dest, JSON.stringify(phoneNumberMetadata), function(err) {
      if (err) throw err
      updateSizeReport(dest, 'core')
      console.log(filename + ' has been created successfully.')
    })
  })

  stream.push(body)
  stream.push(null)
  stream.pipe(parser)
}
