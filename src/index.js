const fs = require('fs')
const { resolve } = require('path')
const stripJsonComments = require('strip-json-comments')

class ResolveTSPathsToWebpackAlias {

  constructor(options) {
    this.options = options
  }

  apply(compiler) {

    const context = this.options.context || compiler.context
    const json = fs.readFileSync(this.options.configFile, 'utf8')
    const tsconfig = stripJsonComments(json)
    const { paths } = JSON.parse(tsconfig).compilerOptions

    const aliases = {}

    Object.keys(paths).forEach((item) => {
      const key = item.replace('/*', '')
      const value = resolve(context, paths[item][0].replace('/*', '').replace('*', ''))

      aliases[key] = value
    })

    compiler.options.resolve.alias = {
      ...compiler.options.resolve.alias,
      ...aliases,
    }
    
  }
}

module.exports = ResolveTSPathsToWebpackAlias
