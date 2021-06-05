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

        lineReader.eachLine(newbase, (line, last) => {
          if (last) {
            return false
          }
          if (line.search(keywords[0]) !== -1 || line.search(keywords[1]) !== -1) {
            if (result.hasOwnProperty(fileName)) {
              for (let key in result[fileName]) {
                if (result[fileName].hasOwnProperty(key) && result[fileName][key].trim() !== line.trim()) {
                  return result[fileName] = {
                    ...result[fileName],
                    [Object.keys(result[fileName]).length]: line.trim()
                  }
                }
              }
            }
            return result[fileName] = {
              0: line.trim()
            }
          }
        })
      }
    }
  })
  return result
}

const helper = (ext, keywords, separator) => {
  const final = []
  for (let i = 0; i < ext.length; i++) {
    final.push(recFindByExt(
      path.join(__dirname, '../../$vue-js/$vue-inrating/inrating.top', 'src'),
      searchFiles[i],
      searchArray,
      separator
    ))
  }
  return final
}

const searchFiles = ['vue', 'js', 'ts']
const searchArray = [/api\./gmi, /\$http\./gmi]
const separator = '\\'

const res = helper(searchFiles, searchArray, separator)

console.log(res)
