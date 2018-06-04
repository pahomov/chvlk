import { ThemeProvider } from 'emotion-theming';
import * as styledComponents from 'react-emotion';

const { default: styled, css, injectGlobal, keyframes } = styledComponents;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
