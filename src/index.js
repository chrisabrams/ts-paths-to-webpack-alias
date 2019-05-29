const resolveTSPathsToAlias = require('ts-paths-to-alias-core')

class ResolveTSPathsToWebpackAlias {

  constructor(options) {
    this.options = options
  }

  apply(compiler) {

    const aliases = resolveTSPathsToAlias({
      configFile: this.options.configFile,
      context: this.options.context || compiler.context,
    })

    compiler.options.resolve.alias = {
      ...compiler.options.resolve.alias,
      ...aliases,
    }
    
  }
}

module.exports = ResolveTSPathsToWebpackAlias
