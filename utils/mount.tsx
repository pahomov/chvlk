import { mount } from 'enzyme';
import * as React from 'react';
import theme from '../src/themes/default';
import { ThemeProvider } from './styled';

export default (tree: JSX.Element): any =>
  mount(
    <ThemeProvider theme={theme}>
      {tree}
    </ThemeProvider>
  );
