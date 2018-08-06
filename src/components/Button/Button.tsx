import * as React from 'react';
import styled from 'react-emotion';

import { PropsWithTheme } from '../../../utils/styledHelpers';
import Spinner from '../Spinner';

export interface IButtonProps {
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  secondary?: boolean;
  large?: boolean;
}

export class Button extends React.PureComponent<IButtonProps, {}> {
  public static displayName: string = 'Button';

  public static defaultProps: Partial<IButtonProps> = {
    disabled: false,
    fullWidth: false,
    isLoading: false,
    large: false,
    secondary: false,
  };

  public render(): JSX.Element {
    const {
      disabled,
      isLoading,
      text,
      secondary,
      onClick,
      fullWidth,
      large,
    } = this.props;

    return (
      <StyledButton
        secondary={secondary!}
        onClick={onClick}
        disabled={disabled}
        isLoading={isLoading}
        fullWidth={fullWidth!}
        large={large!}
      >
        {text}
        {isLoading && <Spinner />}
      </StyledButton>
    );
  }
}

interface IButtonStyledProps {
  isLoading?: boolean;
  secondary: boolean;
  fullWidth: boolean;
  large: boolean;
}

const StyledButton = styled<IButtonStyledProps, 'button'>('button')`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  line-height: 18px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: none;
  text-transform: uppercase;
  transition-property: background-color, color, border;
  transition-duration: 0.15s;
  transition-timing-function: ease-in;
  outline: none;

  ${(props: PropsWithTheme<IButtonStyledProps>) =>
    props.large
      ? `
      font-size: 18px;
      padding: 15px 40px 14px 40px;
      line-height: 24px;
    `
      : `
        font-size: 12px;
        padding: 11px 16px 10px;  
      `};

  ${(props: PropsWithTheme<IButtonStyledProps>) =>
    props.fullWidth && 'width: 100%;'};

  ${(props: PropsWithTheme<IButtonStyledProps>) =>
    !props.secondary
      ? `
    background-color: ${props.theme.colors.linkDefault};
    border: 1px solid transparent;

    &:hover, 
    &:focus {
      background-color: ${props.theme.colors.linkHover};
    }

    &:active {
      background-color: ${props.theme.colors.linkActive};
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
      background-color: ${props.theme.colors.linkDefault};
    }
    `
      : `
      color: ${props.theme.colors.linkDefault};
      border: 1px solid ${props.theme.colors.linkDefault};

      &:hover,
      &:focus {
        color: #fff;
        background-color: ${props.theme.colors.linkHover};
      }

      &:active {
        background-color: ${props.theme.colors.linkActive};
        color: #fff;
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
        color: ${props.theme.colors.linkDefault};
        background-color: #fff;
      }
  `};

  ${(props: PropsWithTheme<IButtonStyledProps>) =>
    props.isLoading &&
    `
      background-color: #FEBC91;
      cursor: default;
      pointer-events: none;
      color: transparent;
      border-color: transparent;
    `};
`;

export default Button;
