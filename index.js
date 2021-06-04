const path = require('path')
const fs = require('fs')
const readline = require('readline')

const recFindByExt = (base, ext, files, result, keywords) => {
  files = files || fs.readdirSync(base)
  result = result || {}

  files.forEach(file => {
      const newbase = path.join(base, file)
      if (fs.statSync(newbase).isDirectory()) {
        result = recFindByExt(newbase, ext, fs.readdirSync(newbase), result)
      }
      else {
        if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
          const exactFile = newbase.split('/')

          // if (fs.readFileSync(newbase, 'utf-8')) {
          //   result[exactFile[exactFile.length - 1]] = 'has'
          // } else {
          //   result[exactFile[exactFile.length - 1]] = '0'
          // }
        }
      }
    }
  )
  return result
}

const helper = (ext, keywords) => {
  const final = []
  for(let i = 0; i < ext.length; i++) {
    final.push(recFindByExt(path.join(__dirname, '../', 'inrating.top', 'src'), ext[i], keywords))
  }
  return final
}

helper(['vue', 'js', 'ts'], ['api', '$http'])