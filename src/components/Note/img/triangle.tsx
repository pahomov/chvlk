/* tslint:disable:max-line-length */
import * as React from 'react';

export class SvgComponent extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <svg viewBox="0 0 10 4" {...this.props}>
        <path
          d="M9.83 3.877a.744.744 0 0 1-.822-.004L5 1.043.986 3.877a.742.742 0 0 1-.816 0c-.226-.164-.226-.43-.001-.592L4.59.123a.744.744 0 0 1 .82 0l4.42 3.163c.227.163.227.427 0 .591z"
          fillRule="nonzero"
        />
      </svg>
    );
  }
}

export default SvgComponent;
