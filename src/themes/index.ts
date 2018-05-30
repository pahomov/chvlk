export interface IStyledTheme {
  colors: {
    main: string;
    background: string;
    border: string;
    palette: {
      primary: string;
      secondary: string;
      action: {
        disabled: {
          secondary: string;
        };
        hover: {
          secondary: string;
        };
        active: {
          secondary: string;
        };
      };
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
}

export { default } from './default';
