# node-recursive-file-searcher

РЕКУРСИЯ!!!

    const recFindByExt = (base, ext, keywords, separator, files, result) => {
      files = files || fs.readdirSync(base)
      result = result || {}

      files.forEach(async file => {
        const newbase = path.join(base, file)
        if (fs.statSync(newbase).isDirectory()) {
          result = recFindByExt(newbase, ext, keywords, separator, fs.readdirSync(newbase), result)
        } else {
          if (file.substr(-1 * (ext.length + 1)) === '.' + ext) {
            const filePathArray = newbase.split(separator)
            const fileName = filePathArray[filePathArray.length - 1]
            
            result = await lineReaderHelper(newbase, fileName, keywords, result)
          }
        }
      })
      return result
    }

Функция, которая принимает путь к файлу, ключевые слова (для readline), также результат работы рекурсивной функции:

    const lineReaderHelper = async(pathname, fileName, keywords, resultObj) => {
      const result = resultObj
      const fileStream = fs.createReadStream(pathname)

      const r1 = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      })

      // Мне кажется, что основные проблемы начинаются здесь
      // Почему-то, когда я логирую result внутри этого цикла - результат виден
      // Но когда я с помощью обычного счётчика пытаюсь посмотреть количество выполнений - получаю 0
      
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

Инициатор всего этого дерьма, который запускает в цикле рекурсию для каждого расширения файлов в цикле searchFiles:

    const runner = (pathSource, files, regex, separator) => {
      const finalArray = []
      for (let i = 0; i < searchFiles.length; i++) {
        finalArray.push(recFindByExt(
          path.join(__dirname, pathSource),
          files[i],
          regex,
          separator
        ))
      }
      return finalArray
    }

Начало начал:

    const searchFiles = ['vue', 'js', 'ts', 'vue.ts']
    const searchWords = [/api\./gmi, /\$http\./gmi]
    const separator = '/'

    const res = runner('../file-directory/src', searchFiles, searchWords, separator)
    console.log(res) // [{}, {}, {}, {}]
