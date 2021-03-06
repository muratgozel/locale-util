const fs = require('fs')
const path = require('path')
const { Readable } = require('stream')
const expat = require('node-expat')
const {updateSizeReport} = require('../../helpers')

const src = path.join('cldr-data/supplemental/windowsZones.xml')
const filename = 'timezones.json'
const dest = path.join('data/core', filename)

const data = fs.readFileSync(src, 'utf8')
parse(data)

function parse(body) {
  const parser = new expat.Parser('UTF-8')
  const stream = new Readable()

  parser.on('error', function(err) {
    throw err
  })

  const timezones = []
  let utcOffset = null

  parser.on('comment', function(c) {
    const commentParserRe = /\(UTC(\+|-)[0-9]{2}:[0-9]{2}\)/
    const utcOffsetParserRe = /(\+|-)[0-9]{2}:[0-9]{2}/
    const matches = c.match(commentParserRe)
    if (Array.isArray(matches) && matches.length > 0) {
      utcOffset = 'UTC' + c.match(utcOffsetParserRe)[0]
    }
  })

  parser.on('startElement', function (name, attrs) {
    if (name == 'mapZone' && attrs.territory && attrs.type) {
      if (!/[0-9]/g.test(attrs.territory)) {
        attrs.type.split(' ').map(function(type) {
          const obj = {
            utcOffset: utcOffset,
            name: attrs.other,
            territory: attrs.territory,
            id: type
          }
          timezones.push(obj)
        })
      }
    }
  })

  parser.on('close', function() {
    fs.writeFile(dest, JSON.stringify(timezones), function(err) {
      if (err) throw err
      updateSizeReport(dest, 'core')
      console.log(filename + ' has been created successfully.')
    })
  })

  stream.push(body)
  stream.push(null)
  stream.pipe(parser)
}
