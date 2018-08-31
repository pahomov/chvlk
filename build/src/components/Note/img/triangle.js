import * as React from "react";
export class SvgComponent extends React.PureComponent {
  render() {
    return React.createElement(
      "svg",
      Object.assign({ width: 12, height: 12 }, this.props),
      React.createElement(
        "g",
        { stroke: "#C0CED8", strokeWidth: 1.4 },
        React.createElement("path", { d: "M11.9 0L.47 11.44M.47 0L11.9 11.44" })
      )
    );
  }
}
export default SvgComponent;
