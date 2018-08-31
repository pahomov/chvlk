/* tslint:disable:max-line-length */
import * as React from 'react';

export class CloseSvg extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <svg width={12} height={12} {...this.props}>
        <g stroke="#C0CED8" strokeWidth={1.4}>
          <path d="M11.9 0L.47 11.44M.47 0L11.9 11.44" />
        </g>
      </svg>
    );
  }
}

export default CloseSvg;
