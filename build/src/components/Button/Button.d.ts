import * as React from 'react';
export interface IButtonProps {
    onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
    fullWidth?: boolean;
    secondary?: boolean;
    large?: boolean;
}
export declare class Button extends React.PureComponent<IButtonProps, {}> {
    static displayName: string;
    static defaultProps: Partial<IButtonProps>;
    render(): JSX.Element;
}
export default Button;
