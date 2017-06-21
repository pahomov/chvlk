import * as React from 'react';
import theme from '../src/themes/default';
import { ThemeProvider } from '../utils/styled';

export interface IWrapperProps {
  children: any;
}

export default class Wrapper extends React.Component<IWrapperProps, undefined> {
  public render(): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
