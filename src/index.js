const fs = require('fs')
const { resolve } = require('path')
const stripJsonComments = require('strip-json-comments')

function resolveTSConfigPathsToWebpackAlias(path, context = './') {

    const json = fs.readFileSync(path, 'utf8')
    const tsconfig = stripJsonComments(json)
    const { paths } = JSON.parse(tsconfig).compilerOptions

    const aliases = {}

    Object.keys(paths).forEach((item) => {
      const key = item.replace('/*', '')
      const value = resolve(context, paths[item][0].replace('/*', ''))

      aliases[key] = value
    })

    return aliases
}

module.exports = resolveTSConfigPathsToWebpackAlias
