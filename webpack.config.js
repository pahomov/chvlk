const path = require('path');
const getDirectories = require('./utils/getDirectories');

// entry points
const entry = {};

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
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: { transpileOnly: true }
      },
      {
        test: /src\/.*\.tsx?$/,
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
      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        test: /\.svg$/,
        loader: "react-svg-loader",
        
      },
      {
        test: /\.tsx?$/,
        loader: 'prettier-loader',
        options: {
          singleQuote: true,
          trailingComma: 'es5',
          parser: 'typescript',
        }
      },
    ]
  },

  externals: [
    'react',
    'react-dom',
    'emotion'
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map'
};

module.exports = common;
