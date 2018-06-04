import * as React from 'react';
import styled from '../../../utils/styled';
import { IStyledTheme } from '../../themes';
import CloseSvg from './img/close.svg';

interface IInputProps {
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

interface IDefaultPropsType {
  type: string;
  value: string;
}

export class Input extends React.PureComponent<IInputProps, {}> {
  public static displayName: string = 'Input';

  public static defaultProps: IDefaultPropsType = {
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
            <CurrencyMask isInvalid={error}>{currency}</CurrencyMask>}

          <InputStyled
            value={value}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            onChange={onChange}
            currency={currency}
            isCloseBtnVisible={value && value.length > 0}
            isInvalid={error}
          />

          {value &&
            value.length > 0 &&
            onClick &&
            <CloseSvgWrapper onClick={this.props.onClick()} isInvalid={error}>
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
  -webkit-font-smoothing: antialiased;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #E1E4E7;
  background-color: #EFF5FA;
  color: #4F5F6F;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 40px;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
  outline: 0;
  -webkit-appearance: none;

  transition-property: background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 

  padding-left: ${({ currency }: { currency: string }) =>
    currency ? '30px' : '16px'};

  padding-right: ${({ isCloseBtnVisible }: { isCloseBtnVisible: boolean }) =>
    isCloseBtnVisible ? '40px' : '16px'};

  :hover {
    border-color: #A6ADB6;
  }

  :focus {
    background-color: #DEEBF5;
    border-color: #A6ADB6;
  }

  :disabled {
    border-color: #F0F2F3;
    background-color: #FAFDFF;
  }

  :read-only {
    background-color: #F9F9F9;
    border-color: #E1E4E7;
  }

  ${({ isInvalid }: { isInvalid: string }) =>
    isInvalid
      ? `
    color: #E50000;
    background-color: #FBE3E3;
    border-color: #E50000;

    &:hover {
      border-color: #E50000;
      background-color: #F9D4D4;
    }

    &:focus {
      border-color: #E50000;
      background-color: #F9D4D4;
    }
  `
      : '16px'};
`;

const CurrencyMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  line-height: 41px;
  padding-left: 16px;
  padding-right: 8px;

  color: ${({ isInvalid }: { isInvalid: boolean }) =>
    isInvalid ? '#E50000' : '#4F5F6F'};
`;

const CloseSvgWrapper = styled.button`
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
      stroke: ${({ isInvalid }: { isInvalid: boolean }) =>
        isInvalid ? '#E50000' : '#A6ADB6'};
    }
  }

  :focus {
    g {
      stroke: ${({ isInvalid }: { isInvalid: boolean }) =>
        isInvalid ? '#B50101' : '#8293A3'};
    }
  }

  svg {
    width: 15px;
    height: 15px;
    display: block;
    margin: auto;

    g {
      stroke: ${({ isInvalid }: { isInvalid: boolean }) =>
        isInvalid ? '#F17878' : '#C0CED8'};
    }
  }
`;

const Label = styled.div`
  font-size: 13px;
  line-height: 18px;
  color: #8293A3;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  color: #E50000;
  font-size: 12px;
  line-height: 17px;
`;
