const fs = require('fs')
const path = require('path')

module.exports = function updateSizeReport(filepath, group) {
  const reportPath = 'dataSizeReport.json'
  const name = path.basename(filepath, path.extname(filepath))
  const sizeInKBs = (fs.statSync(filepath)['size'] / 1000).toFixed(2)
  const sizeReport = JSON.parse(fs.readFileSync(reportPath))
  sizeReport[group][name] = parseFloat(sizeInKBs)
  fs.writeFileSync(reportPath, JSON.stringify(sizeReport, null, 2))
  return sizeInKBs
}
