const { spawn } = require('child_process')
const os = require('os')
const fs = require('fs')

const libpath = 'generators/jstz-update-dst-rules/jstz'
const dest = 'data/jstz'

const gen = spawn(
  'python2',
  [libpath + '/utilities/dst.py', 'generate']
)

gen.stdout.on('data', function(data) {
  console.log(data.toString())
})

gen.stderr.on('data', function(data) {
  console.log(data.toString())
})

gen.on('error', function(err) {
  throw err
})

gen.on('close', function(code) {
  if (code == 0) {
    // bundle rules and the library
    const main = fs.readFileSync(libpath + '/jstz.main.js', 'utf8')
    const rules = fs.readFileSync(libpath + '/jstz.rules.js', 'utf8')
    const data = main + os.EOL + rules + os.EOL + os.EOL + 'module.exports = jstz'
    try {
      fs.mkdirSync(dest)
    } catch (e) {}
    fs.writeFileSync(dest + '/index.js', data)

    console.log('jstz dst rules updated. add ' + dest + '/index.js file into your bundle.')
  }
})
