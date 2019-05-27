# ts-paths-to-webpack-alias

Resolve TypeScript paths to Webpack alias paths.

## Install

    yarn add ts-paths-to-webpack-alias

    or

    npm install ts-paths-to-webpack-alias

## Usage

In the Webpack config add the plugin:

    const resolveTSPathsToWebpackAlias = require('ts-paths-to-webpack-alias')

    /* ...webpack config */

    plugins: [
      new ResolveTSPathsToWebpackAlias({
        configFile: pathToTSConfigFile
      })
    ]

`pathToTSConfigFile` is the path to the `tsconfig.json` file used for the project.
