import * as React from "react";
import styled from "react-emotion";
import Spinner from "../Spinner";
export class Button extends React.PureComponent {
  render() {
    const {
      disabled,
      isLoading,
      text,
      secondary,
      onClick,
      fullWidth,
      large
    } = this.props;
    return React.createElement(
      StyledButton,
      {
        secondary: secondary,
        onClick: onClick,
        disabled: disabled,
        isLoading: isLoading,
        fullWidth: fullWidth,
        large: large
      },
      text,
      isLoading && React.createElement(Spinner, null)
    );
  }
}
Button.displayName = "Button";
Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  isLoading: false,
  large: false,
  secondary: false
};
const StyledButton = styled("button")`
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

  ${props =>
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

  ${props => props.fullWidth && "width: 100%;"};

  ${props =>
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

  ${props =>
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
