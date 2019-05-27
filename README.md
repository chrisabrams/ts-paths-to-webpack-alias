# ts-paths-to-webpack-alias

Resolve TypeScript paths to Webpack alias paths.

## Install

    yarn add ts-paths-to-webpack-alias

    or

    npm install ts-paths-to-webpack-alias

## Usage

In the `resolve` section of the Webpack config add to the alias object:

    resolve: {
      alias: {
        ...resolveTSPathsToWebpackAlias(pathToTSConfigFile, webpackContext),
      },
    },

`pathToTSConfigFile` is the path to the `tsconfig.json` file used for the project. `webpackContext` should match the path given to Webpack's `context`.
