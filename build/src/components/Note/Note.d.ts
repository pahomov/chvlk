import * as React from 'react';
export interface INoteProps {
    readonly children: JSX.Element | string;
    readonly hideActionName: string;
    readonly showActionName: string;
    readonly storageKey?: string;
    readonly isDefaultOpen?: boolean;
    readonly isOpen?: boolean;
    readonly onToggle?: (isOpen: boolean, e: React.MouseEvent<HTMLElement>) => void;
}
interface INoteState {
    readonly isOpen: boolean;
}
export declare class Note extends React.PureComponent<INoteProps, INoteState> {
    static displayName: string;
    static getDerivedStateFromProps(props: INoteProps, state: INoteState): {
        isOpen?: boolean;
    } | null;
    constructor(props: INoteProps);
    render(): JSX.Element;
    private handleClick;
}
export default Note;
