# ts-paths-to-webpack-alias

Webpack plugin which resolves TypeScript paths to Webpack alias paths.

## Install

    yarn add ts-paths-to-webpack-alias --dev

    or

    npm install ts-paths-to-webpack-alias -D

## Usage

In the Webpack config add the plugin:

    const ResolveTSPathsToWebpackAlias = require('ts-paths-to-webpack-alias')

    /* ...webpack config */

    plugins: [
      new ResolveTSPathsToWebpackAlias({
        tsconfig: pathToTSConfigFile
      })
    ]

### Options

#### Required

- `tsconfig`: The path to the `tsconfig.json` file used for the project.

#### Optional

- `context`: Provide a context for the TypeScript file paths. The default value is the Webpack `context`.
