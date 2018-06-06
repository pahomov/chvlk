import * as React from 'react';
import styled from 'react-emotion';
import { PropsWithTheme } from '../../../utils/styledHelpers';
import CloseSvg from './img/close.svg';

export interface IInputProps {
  type: string;
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  readonly?: boolean;
  currency?: string;
  label?: string;
  error?: string;
  placeholder?: string;
}

export class Input extends React.PureComponent<IInputProps, {}> {
  public static displayName: string = 'Input';

  public static defaultProps: IDefaultPropsType = {
    error: '',
    type: 'text',
    value: '',
  };

  public render(): JSX.Element {
    const {
      type,
      value,
      disabled,
      onChange,
      currency,
      label,
      error,
      onClick,
      placeholder,
    } = this.props;

    return (
      <div>
        <Label>{label}</Label>

        <InputWrapper>
          {currency &&
            <CurrencyMask isInvalid={!!(error && error.length > 0)}>
              {currency}
            </CurrencyMask>}

          <InputStyled
            value={value}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            onChange={onChange}
            hasCurrency={!!currency}
            isCloseBtnVisible={!!(value && value.length > 0)}
            isInvalid={!!(error && error.length > 0)}
          />

          {value &&
            value.length > 0 &&
            onClick &&
            <CloseSvgWrapper
              onClick={this.props.onClick}
              isInvalid={!!(error && error.length > 0)}
            >
              <CloseSvg />
            </CloseSvgWrapper>}

        </InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}

export default Input;

const InputWrapper = styled.div`
  color: ${({ theme }: { theme: IStyledTheme }): string => theme.colors.main};
  position: relative;
`;

interface IInputStyledProps {
  isInvalid: boolean;
  hasCurrency: boolean;
  isCloseBtnVisible: boolean;
}

const InputStyled = styled<IInputStyledProps, 'input'>('input')`
  width: 100%;
  height: 40px;

  border: 1px solid ${(props: PropsWithTheme<IInputStyledProps>) =>
    props.theme.colors.borderControlDefault};

  background-color: ${(props: PropsWithTheme<IInputStyledProps>) =>
    props.theme.colors.bgControlDefault};
  
  color: ${(props: PropsWithTheme<IInputStyledProps>) =>
    props.theme.colors.textControlDefault};

  padding-left: 16px;
  padding-right: 16px;
  line-height: 40px;
  font-size: 14px;
  border-radius: 4px;
  outline: 0;
  -webkit-appearance: none;

  transition-property: background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 

  padding-left: ${(props: PropsWithTheme<IInputStyledProps>) =>
    props.hasCurrency ? '30px' : '16px'};

  padding-right: ${(props: PropsWithTheme<IInputStyledProps>) =>
    props.isCloseBtnVisible ? '40px' : '16px'};

  :hover {
    border-color: ${(props: PropsWithTheme<IInputStyledProps>) =>
      props.theme.colors.borderControlHover};
      
    background-color: ${(props: PropsWithTheme<IInputStyledProps>) =>
      props.theme.colors.bgControlHover};
  }

  :focus {
    background-color: ${(props: PropsWithTheme<IInputStyledProps>) =>
      props.theme.colors.bgControlFocus};
    
    border-color: ${(props: PropsWithTheme<IInputStyledProps>) =>
      props.theme.colors.borderControlFocus};
  }

  :disabled {
    border-color: ${(props: PropsWithTheme<IInputStyledProps>) =>
      props.theme.colors.borderControlDisabled};
      
    background-color: ${(props: PropsWithTheme<IInputStyledProps>) =>
      props.theme.colors.bgControlDisabled};
  }

  :read-only {
    background-color: #F9F9F9;

    border-color: ${(props: PropsWithTheme<IInputStyledProps>) =>
      props.theme.colors.borderControlDefault};
  }

  ${(props: PropsWithTheme<IInputStyledProps>) =>
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
      : '16px'};
`;

interface ICurrencyMaskProps {
  isInvalid: boolean;
}

const CurrencyMask = styled<ICurrencyMaskProps, 'div'>('div')`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  line-height: 41px;
  padding-left: 16px;
  padding-right: 8px;
  color: ${(props: ICurrencyMaskProps) =>
    props.isInvalid ? '#E50000' : '#4F5F6F'};
`;

interface ICloseSvgWrapperProps {
  isInvalid: boolean;
}

const CloseSvgWrapper = styled<ICloseSvgWrapperProps, 'button'>('button')`
  position: absolute;
  top: 1px;
  right: 0;
  width: 40px;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: none;
  background-color: transparent;
  outline: 0;

  :hover {
    g {
      stroke: ${(props: ICloseSvgWrapperProps) =>
        props.isInvalid ? '#E50000' : '#A6ADB6'};
    }
  }

  :focus {
    g {
      stroke: ${(props: ICloseSvgWrapperProps) =>
        props.isInvalid ? '#B50101' : '#8293A3'};
    }
  }

  svg {
    width: 15px;
    height: 15px;
    display: block;
    margin: auto;

    g {
      stroke: ${(props: ICloseSvgWrapperProps) =>
        props.isInvalid ? '#F17878' : '#C0CED8'};
    }
  }
`;

const Label = styled.div`
  font-size: 13px;
  line-height: 18px;
  
  color: ${({ theme }: PropsWithTheme<{}>): string =>
    theme.colors.textSecondaryColor};

  margin-bottom: 8px;
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  color: #E50000;
  font-size: 12px;
  line-height: 17px;
  color: ${({ theme }: PropsWithTheme<{}>): string =>
    theme.colors.textErrorColor};
`;
