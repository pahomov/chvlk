import * as React from 'react';
import styled from 'react-emotion';
import { PropsWithTheme } from '../../../utils/styledHelpers';
import InfoIcon from './img/info.svg';
import TriangleIcon from './img/triangle.svg';

export interface INoteProps {
  children: JSX.Element | string;
  hideActionName: string;
  showActionName: string;
}

interface INoteState {
  readonly isOpen: boolean;
}
interface ITriangleProps {
  readonly isOpen: boolean;
  readonly [k: string]: any;
}

export class Note extends React.PureComponent<INoteProps, INoteState> {
  public static displayName: string = 'Note';

  public readonly state: INoteState = {
    isOpen: true,
  };

  public render(): JSX.Element {
    const { hideActionName, showActionName, ...other } = this.props;
    const { isOpen } = this.state;
    return (
      <div {...other}>
        <Top>
          <ActiveArea onClick={this.handleClick}>
            <StyledInfoIcon />
            <ActionName>
              {isOpen ? hideActionName : showActionName}
            </ActionName>
            <StyledTriangleIcon isOpen={isOpen} />
          </ActiveArea>
        </Top>
        <Collapsible isOpen={isOpen}>
          {this.props.children}
        </Collapsible>
      </div>
    );
  }

  private handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

const Collapsible = styled<{ isOpen: boolean }, 'div'>('div')`
  padding-top: 11px;
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'block' : 'none')};
  border-bottom: 1px solid ${({ theme }: PropsWithTheme<{}>): string =>
    theme.colors.borderControlDefault};
  color: ${({ theme }: PropsWithTheme<{}>): string =>
    theme.colors.textPrimaryColor};
`;

const Top = styled('div')`
  display: flex;
  align-items: center;
  &:after {
    content: " ";
    height: 1px;
    background-color: ${({ theme }: PropsWithTheme<{}>): string =>
      theme.colors.borderControlDefault};
    flex-grow: 1;
  }
`;

const ActiveArea = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 13px;
  user-select: none;
  color: ${({ theme }: PropsWithTheme<{}>): string =>
    theme.colors.textSecondaryColor};
  & svg {
    transition: fill 0.12s ease;
    fill: ${({ theme }: PropsWithTheme<{}>): string =>
      theme.colors.textSecondaryColor};
  }
  &:hover {
    color: ${({ theme }: PropsWithTheme<{}>): string =>
      theme.colors.textSecondaryColorHover};
    svg {
      fill: ${({ theme }: PropsWithTheme<{}>): string =>
        theme.colors.textSecondaryColorHover};
    }
  }
  &:active {
    color: ${({ theme }: PropsWithTheme<{}>): string =>
      theme.colors.textSecondaryColorHover};
    svg {
      fill: ${({ theme }: PropsWithTheme<{}>): string =>
        theme.colors.textSecondaryColorHover};
    }
  }
`;

const ActionName = styled('span')`
  margin: 0 6px 0 8px;
  border-bottom: 1px dashed #AEB9C3;
`;

const StyledInfoIcon = styled(InfoIcon)`
  width: 16px;
  height: 16px;
`;

const StyledTriangleIcon = styled(({ isOpen: _, ...other }: ITriangleProps) =>
  <TriangleIcon {...other} />
)`
  display: inline-block;
  width: 10px;
  height: 4px;
  transition: transform 0.2s ease-in-out;
  transform: ${({ isOpen }: ITriangleProps) =>
    isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export default Note;
