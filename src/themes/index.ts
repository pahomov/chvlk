export interface IStyledTheme {
  colors: {
    background: string;
    bgErrorDefault: string;
    bgErrorFocus: string;
    bgErrorHover: string;

    bgControlDefault: string;
    bgControlDisabled: string;
    bgControlFocus: string;
    bgControlHover: string;

    borderControlDefault: string;
    borderControlDisabled: string;
    borderControlError: string;
    borderControlFocus: string;
    borderControlHover: string;

    linkActive: string;
    linkDefault: string;
    linkHover: string;

    textControlDefault: string;
    textControlDisabled: string;
    textErrorColor: string;
    textPrimaryColor: string;
    textSecondaryColor: string;
    textSecondaryColorHover: string;
  };
}

export { default } from './default';
