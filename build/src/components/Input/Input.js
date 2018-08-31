import * as React from "react";
import styled from "react-emotion";
import CloseSvg from "./img/close";
export class Input extends React.PureComponent {
  render() {
    const {
      type,
      value,
      disabled,
      onChange,
      currency,
      label,
      error,
      onClear,
      placeholder
    } = this.props;
    return React.createElement(
      "div",
      null,
      React.createElement(Label, null, label),
      React.createElement(
        InputWrapper,
        null,
        currency &&
          React.createElement(
            CurrencyMask,
            { isInvalid: !!(error && error.length > 0) },
            currency
          ),
        React.createElement(InputStyled, {
          value: value,
          placeholder: placeholder,
          type: type,
          disabled: disabled,
          onChange: onChange,
          hasCurrency: !!currency,
          isCloseBtnVisible: !!(value && value.length > 0),
          isInvalid: !!(error && error.length > 0)
        }),
        value &&
          value.length > 0 &&
          onClear &&
          React.createElement(
            CloseSvgWrapper,
            {
              onClick: this.props.onClear,
              disabled: disabled,
              isInvalid: !!(error && error.length > 0)
            },
            React.createElement(CloseSvg, null)
          )
      ),
      error && React.createElement(ErrorMessage, null, error)
    );
  }
}
Input.displayName = "Input";
Input.defaultProps = {
  error: "",
  type: "text",
  value: ""
};
export default Input;
const InputWrapper = styled("div")`
  position: relative;
`;
const InputStyled = styled("input")`
  width: 100%;
  height: 40px;

  border: 1px solid ${props => props.theme.colors.borderControlDefault};

  background-color: ${props => props.theme.colors.bgControlDefault};

  color: ${props => props.theme.colors.textControlDefault};

  padding-left: 16px;
  padding-right: 16px;
  line-height: 40px;
  font-size: 14px;
  border-radius: 4px;
  outline: 0;

  transition-property: background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding-left: ${props => (props.hasCurrency ? "30px" : "16px")};

  padding-right: ${props => (props.isCloseBtnVisible ? "40px" : "16px")};

  :hover {
    border-color: ${props => props.theme.colors.borderControlHover};

    background-color: ${props => props.theme.colors.bgControlHover};
  }

  :focus {
    background-color: ${props => props.theme.colors.bgControlFocus};

    border-color: ${props => props.theme.colors.borderControlFocus};
  }

  :disabled {
    border-color: ${props => props.theme.colors.borderControlDisabled};

    background-color: ${props => props.theme.colors.bgControlDisabled};
  }

  :read-only {
    background-color: #f9f9f9;

    border-color: ${props => props.theme.colors.borderControlDefault};
  }

  ${props =>
    props.isInvalid
      ? `
  color: ${props.theme.colors.textErrorColor};
  background-color: ${props.theme.colors.bgErrorDefault};
  border-color: ${props.theme.colors.borderControlError};

  &:hover {
    border-color: ${props.theme.colors.borderControlError};
    background-color: #F9D4D4;
  }

  &:focus {
    border-color: ${props.theme.colors.borderControlError};
    background-color: ${props.theme.colors.bgErrorFocus};
  }
  `
      : ""};
`;
const CurrencyMask = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  line-height: 41px;
  padding-left: 16px;
  padding-right: 8px;
  color: ${props => (props.isInvalid ? "#E50000" : "#4F5F6F")};
`;
const CloseSvgWrapper = styled("button")`
  position: absolute;
  top: 1px;
  right: 0;
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: none;
  background-color: transparent;
  outline: 0;

  ${props => (props.disabled ? "pointer-events: none;" : "cursor: pointer;")};

  :hover {
    g {
      stroke: ${props => (props.isInvalid ? "#E50000" : "#A6ADB6")};
    }
  }

  :focus {
    g {
      stroke: ${props => (props.isInvalid ? "#B50101" : "#8293A3")};
    }
  }

  svg {
    width: 15px;
    height: 15px;
    display: block;
    margin: auto;

    g {
      stroke: ${props => (props.isInvalid ? "#F17878" : "#C0CED8")};
    }
  }
`;
const Label = styled("div")`
  font-size: 13px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.textSecondaryColor};

  margin-bottom: 8px;
`;
const ErrorMessage = styled("div")`
  margin-top: 8px;
  font-size: 12px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.textErrorColor};
`;
