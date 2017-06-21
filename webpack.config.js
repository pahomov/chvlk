const fs = require("fs");
const path = require("path");

// entry points
const entry = {};

// add index to entry
entry.index = path.join(__dirname, "src", "index.ts");

// add components to entry
const componentsPath = path.join(__dirname, "src", "components");
getDirectories(componentsPath).reduce((total, cur) => {
  total[`${cur}/index`] = path.join(componentsPath, cur, "index.ts");
  return total;
}, entry);

// add themes to entry
const themesPath = path.join(__dirname, "src", "themes", "index.ts");
entry['themes/index'] = themesPath;

// common config
const common = {
  entry,

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "lib")
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
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
        loader: "awesome-typescript-loader",
        options: { transpileOnly: false }
      },
      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre"
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between
  // builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "styled-components": "styled"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map"
};

module.exports = common;

function getDirectories(srcpath) {
  return fs
    .readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
}
