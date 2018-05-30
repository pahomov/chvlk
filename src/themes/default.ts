import { IStyledTheme } from './';

const colors = {
  background: '#FFF',
  border: '#EAEAEA',
  main: '#FD7823',
  palette: {
    action: {
      active: {
        secondary: '#435261',
      },
      disabled: {
        secondary: '#AFB8C0',
      },
      hover: {
        secondary: '#5C6E7E',
      },
    },
    primary: '#2A3642',
    secondary: '#8193A4',
  },
  text: {
    primary: '#2A3642',
    secondary: '#8193A4',
  },
};

const theme: IStyledTheme = {
  colors,
};
export default theme;
