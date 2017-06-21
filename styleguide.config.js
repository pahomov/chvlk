const path = require("path");
const packageName = require("./package.json").name;
const webpackConfig = require("./webpack.config");

webpackConfig.resolve.alias = {
  "rsg-components/Wrapper": path.join(__dirname, 'utils', 'ExampleWrapper.tsx')
};

module.exports = {
  propsParser: require("react-docgen-typescript").parse,
  components: "src/components/**/[A-Z]*.tsx",
  ignore: ["**/*.test.tsx"],
  showCode: true,
  showUsage: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".js").replace(".tsx", "");
    const dir = path
      .dirname(componentPath)
      .replace("src/components", packageName);
    return `import ${name} from '${dir}';`;
  },
  webpackConfig,
  sections: [
    {
      name: "Introduction",
      content: "docs/introduction.md"
    },
    {
      name: "Usage",
      content: "docs/Usage.md"
    },
    {
      name: "Components",
      components: "src/components/**/[A-Z]*.tsx"
    },
    {
      name: "Contributing",
      content: "docs/Contributing.md"
    }
  ]
};
