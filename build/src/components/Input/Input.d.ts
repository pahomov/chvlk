import * as React from 'react';
export interface IInputProps {
    type: string;
    value: string;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    onClear: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    readonly?: boolean;
    currency?: string;
    label?: string;
    error?: string;
    placeholder?: string;
}
export declare class Input extends React.PureComponent<IInputProps, {}> {
    static displayName: string;
    static defaultProps: Partial<IInputProps>;
    render(): JSX.Element;
}
export default Input;
