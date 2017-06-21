/// <reference types="react" />
import * as React from 'react';
export interface IButtonProps {
    onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    children: JSX.Element | string;
}
export declare class Button extends React.Component<IButtonProps, undefined> {
    static displayName: string;
    render(): JSX.Element;
}
export default Button;
