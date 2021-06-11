const path = require('path')
const fs = require('fs')
const readline = require('readline')


const separator = '/'
const mainDir = '../inrating.top/src'
const fileExtensions = ['vue', 'js', 'ts', 'vue.ts']
const listOfKeywords = [/api\./gm, /\$http\./gm]
const apiFilePath = '../inrating.top/src/common-components/api/api.ts'
const listOfKeywordsForApi = [
  /(api\.)(\w+)(\.)(\w+)(\.)?(\w+)?(\.)?(\w+)?/m,
  /(\$http\.)(\w+)(\.)(\w+)(\.)?(\w+)?(\.)?(\w+)?/m
]

const recFindByExt = async(base, ext, keywords, separator, files, result) => {
  files = files || fs.readdirSync(base)
  result = result || {}

  await Promise.all(files.map(async file => {
    const newbase = path.join(base, file)
    if (fs.statSync(newbase).isDirectory()) {
      result = await recFindByExt(newbase, ext, keywords, separator, fs.readdirSync(newbase), result)
    } else {
      if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
        result = await lineReaderHelper(newbase, file, keywords, result)
      }
    }
  }))
  return result
}

const lineReaderHelper = async(pathname, fileName, keywords, resultObj) => {
  const result = resultObj
  const fileStream = fs.createReadStream(pathname)

  const r1 = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  for await (const line of r1) {
    if (line.search(keywords[0]) !== -1 || line.search(keywords[1]) !== -1) {
      await findExactApiPath(line, keywords)

      if (result.hasOwnProperty(fileName)) {
        const res = Object.keys(result[fileName])
          .map(i => result[fileName][i].trim())
          .some(e => e !== line.trim())

        if (res) {
          result[fileName] = {
            ...result[fileName],
            [Object.keys(result[fileName]).length]: line.trim()
          }
        }
      } else {
        result[fileName] = {
          0: line.trim()
        }
      }
    }
  }

  return result
}

// <<Temp.. Do not try this at home (Temporary..)
const findExactApiPath = async(line, keywords) => {
  const res = line.match(listOfKeywordsForApi[0]) || line.match(listOfKeywordsForApi[1])
  const apiRouteArray = res.filter((i, index) => index !== 0 
    && index !== 1 
    && i !== '.' 
    && typeof i === 'string'
  )

  const apiName = apiRouteArray[apiRouteArray.length - 1]
  const regEx1 = new RegExp(apiName, 'm')

  const secondFileStream = fs.createReadStream(apiFilePath)
  const r1 = readline.createInterface({
    input: secondFileStream,
    crlfDelay: Infinity
  })

  let nextLine = false


  for await (const lineFromStream of r1) {
    if (nextLine) {
      nextLine = false
    }

    if (lineFromStream.search(regEx1) !== -1) {
      nextLine = true
    }
  }
}
// Temp>>

const runner = async(pathSource, files, regex, separator) => {
  const finalArray = []
  for (let i = 0; i < files.length; i++) {
    const res = await recFindByExt(
      path.join(__dirname, pathSource),
      files[i],
      regex,
      separator
    )
    finalArray.push(res)
  }
  return finalArray
}


(async () => {
  const res = await runner(
      mainDir, 
      fileExtensions, 
      listOfKeywords, 
      separator
    )
})()

