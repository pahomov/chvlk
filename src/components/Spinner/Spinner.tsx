import * as React from 'react';
import styled, { keyframes } from 'react-emotion';

export class Spinner extends React.PureComponent<{}, {}> {
  public static displayName: string = 'Spinner';

  public render(): JSX.Element {
    return <StyledSpinner />;
  }
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
  transform: translateX(-50%) translateY(-50%);
  width: 18px;
  height: 18px;
  user-select: none;

  :before {
    position: absolute;
    content: "";
    top: 0%;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 500rem;
    border-width: 0.2em;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.5);
    margin: 0 0 0 -9px;
  }

  :after {
    position: absolute;
    content: "";
    top: 0%;
    left: 50%;
    box-shadow: transparent 0px 0px 0px 1px;
    width: 18px;
    height: 18px;
    animation: ${spin} 0.6s linear infinite;
    border-radius: 500rem;
    border-color: #fff transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    margin: 0 0 0 -9px;
  }
`;

export default Spinner;
