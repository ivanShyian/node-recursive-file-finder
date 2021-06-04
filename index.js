const path = require('path')
const fs = require('fs')

function recFindByExt(base,ext,files,result) {
  files = files || fs.readdirSync(base)
  result = result || []

  files.forEach(file => {
      const newbase = path.join(base, file)
      if (fs.statSync(newbase).isDirectory()) {
        result = recFindByExt(newbase,ext,fs.readdirSync(newbase),result)
      }
      else {
        if (file.substr(-1*(ext.length+1)) === '.' + ext) {
          const exactFile = newbase.split('/')
          result.push(exactFile[exactFile.length - 1])
        }
      }
    }
  )
  return result
}

const helper = (ext) => {
  const final = []
  for(let i = 0; i < ext.length; i++) {
    final.push(...recFindByExt(path.join(__dirname, '../', 'inrating.top', 'src'),ext[i]))
  }
  return final
}

console.log(helper(['vue', 'js', 'ts']))