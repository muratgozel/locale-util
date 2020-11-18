const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')
const expat = require('node-expat')
const {updateSizeReport} = require('../../helpers')

const src = path.join('cldr-data/subdivisions')
const dest = path.join('data/core/subdivisions')
fs.mkdirSync(dest, {recursive: true})

const files = fs.readdirSync(src).filter(f => path.extname(f) == '.xml')
for (var i = 0; i < files.length; i++) {
  const filename = path.basename(files[i])
  const data = fs.readFileSync(path.join(src, filename), 'utf8')
  parse(data, path.basename(filename, '.xml'))
}

function parse(body, filename) {
  const parser = new expat.Parser('UTF-8')
  const stream = new Readable()

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
      if (!map.hasOwnProperty(countryCode)) map[countryCode] = {}
      map[countryCode][subdivisionCode] = text
      countryCode = null
      subdivisionCode = null
    }
  })

  parser.on('close', function() {
    fs.writeFile(path.join(dest, filename + '.json'), JSON.stringify(map), function(err) {
      if (err) throw err
      //updateSizeReport(path.join(dest, filename + '.json'), 'core')
      console.log(filename + '.json has been created successfully.')
    })
  })

  stream.push(body)
  stream.push(null)
  stream.pipe(parser)
}
