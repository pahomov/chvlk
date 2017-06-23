const path = require('path');
const getDirectories = require('./utils/getDirectories');

// entry points
const entry = {};

// add index to entry
entry.index = path.join(__dirname, 'src', 'index.ts');

// add components to entry
const componentsPath = path.join(__dirname, 'src', 'components');
getDirectories(componentsPath).reduce((total, cur) => {
  total[`${cur}/index`] = path.join(componentsPath, cur, 'index.ts');
  return total;
}, entry);

// add themes to entry
const themesPath = path.join(__dirname, 'src', 'themes', 'index.ts');
entry['themes/index'] = themesPath;

// common config
const common = {
  entry,

  output: {
    filename: '[name].js',
    path: path.join(__dirname),
    library: 'chvlk',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /src\/.*\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: 'tslint.json',
          emitErrors: true,
          failOnHint: true,
          typeCheck: true,
          fix: true,
          tsConfigFile: 'tsconfig.json',
          formatter: 'codeFrame',
        }
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'prettier-loader',
        options: {
          singleQuote: true,
          trailingComma: 'es5',
          parser: 'typescript',
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: { transpileOnly: false }
      },
      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      }
    ]
  },

  externals: [
    'react',
    'react-dom',
    'styled-components'
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map'
};

module.exports = common;
