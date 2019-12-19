const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')
const expat = require('node-expat')
const fetch = require('node-fetch')
const {updateSizeReport} = require('../../helpers')

const url = 'https://www.currency-iso.org/dam/downloads/lists/list_one.xml'
const filename = 'currencies.json'
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
    fs.writeFile(dest, JSON.stringify(list), function(err) {
      if (err) throw err
      updateSizeReport(dest, 'core')
      console.log(filename + ' has been created successfully.')
    })
  })

  stream.push(body)
  stream.push(null)
  stream.pipe(parser)
}
