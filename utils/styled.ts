import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { IStyledTheme } from '../src/themes';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = (styledComponents as ThemedStyledComponentsModule<
  any
>) as ThemedStyledComponentsModule<IStyledTheme>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
