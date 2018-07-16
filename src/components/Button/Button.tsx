import * as React from 'react';
import styled from 'react-emotion';

import { PropsWithTheme } from '../../../utils/styledHelpers';
import Spinner from '../Spinner';

export interface IButtonProps {
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  text: string;
  type: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export class Button extends React.PureComponent<IButtonProps, {}> {
  public static displayName: string = 'Button';

  public static defaultProps: Partial<IButtonProps> = {
    disabled: false,
    isLoading: false,
  };

  public render(): JSX.Element {
    const { disabled, isLoading, text, type, onClick } = this.props;

    return (
      <StyledButton
        type={type}
        onClick={onClick}
        disabled={disabled}
        isLoading={isLoading}
      >
        {text}
        {isLoading && <Spinner />}
      </StyledButton>
    );
  }
}

interface IButtonStyledProps {
  isLoading?: boolean;
  type: string;
}

const StyledButton = styled<IButtonStyledProps, 'button'>('button')`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 18px;
  font-weight: 500;
  padding: 11px 16px;
  padding-bottom: 10px;
  cursor: pointer;
  box-shadow: none;
  text-transform: uppercase;
  white-space: nowrap;
  transition-property: background-color, color, border;
  transition-duration: 0.15s;
  transition-timing-function: ease-in;
  outline: none;

  ${(props: PropsWithTheme<IButtonStyledProps>) =>
    props.type === 'primary'
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
