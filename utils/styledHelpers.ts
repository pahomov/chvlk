import { IStyledTheme } from '../src/themes';

export type PropsWithTheme<T> = T & {
  theme: IStyledTheme;
};
