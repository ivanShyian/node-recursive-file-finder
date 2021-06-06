const path = require('path')
const fs = require('fs')
const lineReader = require('line-reader')

const recFindByExt = (base, ext, keywords, separator, files, result) => {
  files = files || fs.readdirSync(base)
  result = result || {}

  files.forEach(file => {
    const newbase = path.join(base, file)
    if (fs.statSync(newbase).isDirectory()) {
      result = recFindByExt(newbase, ext, keywords, separator, fs.readdirSync(newbase), result)
    } else {
      if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
        const filePathArray = newbase.split(separator)
        const fileName = filePathArray[filePathArray.length - 1]

        result = lineReaderHelper(newbase, fileName, keywords, result)
      }
    }
  })
  return result
}

const lineReaderHelper = (pathname, fileName, keywords, result) => {
  result = result || {}
  lineReader.eachLine(pathname, (line, last) => {
  
    if (line.search(keywords[0]) !== -1 || line.search(keywords[1]) !== -1) {
      if (result.hasOwnProperty(fileName)) {
        for (let key in result[fileName]) {
          if (result[fileName].hasOwnProperty(key)) {
            if (result[fileName][key].trim() !== line.trim()) {
              result[fileName] = {
                ...result[fileName],
                [Object.keys(result[fileName]).length]: line.trim()
              }
            }
          }
        }
      }
      result[fileName] = {
        0: line.trim()
      }
    }

    if (last) {
      return false
    }
  })
  return result
}

const searchFiles = ['vue', 'js', 'ts']
const searchArray = [/api\./gmi, /\$http\./gmi]
const separator = '\\'
const finalArray = []

for (let i = 0; i < searchFiles.length; i++) {
  finalArray.push(recFindByExt(
    path.join(__dirname, '../../$vue-js/$vue-inrating/inrating.top', 'src'),
    searchFiles[i],
    searchArray,
    separator
  ))
}
console.log(finalArray)