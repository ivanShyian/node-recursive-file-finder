const path = require('path')
const fs = require('fs')
const readline = require('readline')


const separator = '\\'
const mainDir = '../../$vue-js/$vue-inrating/inrating.top/src'
const fileExtensions = ['vue', 'js', 'ts', 'vue.ts']
const listOfKeywords = [/api\./gm, /\$http\./gm]
const apiFilePath = '../../$vue-js/$vue-inrating/inrating.top/src/common-components/api/api.ts'
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

const findExactApiPath = async(objectOfItems, keywords, apiPath) => {
  const objHelper = objectOfItems
  await Promise.all(Object.keys(objHelper).map(async file => {
    await Promise.all(Object.keys(objHelper[file]).map(async idx => {
       const regex = objHelper[file][idx].match(listOfKeywordsForApi[0]) || objHelper[file][idx].match(listOfKeywordsForApi[1])
       const apiRouteArray = regex.filter((i, index) => 
         index !== 0 
          && index !== 1 
           && i !== '.' 
            && typeof i === 'string'
       )

       const apiName = apiRouteArray[apiRouteArray.length - 1]
       const regexOfApiName = new RegExp(` ${apiName}`, 'm')
       const apiFileStream = fs.createReadStream(apiPath)
       const rline = readline.createInterface({
         input: apiFileStream,
         crlfDelay: Infinity
       })

       let nextLine = false
       for await (const lineFromStream of rline) {

         if (nextLine) {
           nextLine = false
           objHelper[file] = {...objHelper[file], [idx]: lineFromStream.trim()}
         }

         if (lineFromStream.search(regexOfApiName) !== -1) {
           nextLine = true
         }
       }
    }))
  }))
  return objHelper
}

const runner = async(pathSource, files, regex, separator, extraRegex, api) => {
  let finalObj = {}

  await Promise.all(files.map(async file => {
    const result = await recFindByExt(
      path.join(__dirname, pathSource),
      file,
      regex,
      separator
    )

    const res = await findExactApiPath(result, extraRegex, api)
    finalObj = {...finalObj, ...res}
  }))
  return finalObj
}


(async () => {
  const res = await runner(
      mainDir, 
      fileExtensions, 
      listOfKeywords, 
      separator,
      listOfKeywordsForApi,
      apiFilePath
    )
  console.log(Object.keys(res).length)
})()

