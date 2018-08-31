var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
  };
import * as React from "react";
import styled from "react-emotion";
import InfoIcon from "./img/info";
import TriangleIcon from "./img/triangle";
import {
  getItem as localStorageGet,
  setItem as localStorageSet
} from "../../../utils/localStorage";
export class Note extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = e => {
      const { storageKey } = this.props;
      const newIsOpen = !this.state.isOpen;
      if (this.props.onToggle) {
        e.persist();
      }
      this.setState({ isOpen: newIsOpen }, () => {
        if (storageKey) {
          localStorageSet(storageKey, newIsOpen);
        }
        if (this.props.onToggle) {
          this.props.onToggle(!this.state.isOpen, e);
        }
      });
    };
    const { storageKey, isDefaultOpen = true } = props;
    if (storageKey) {
      let isOpen = localStorageGet(storageKey);
      if (typeof isOpen !== "boolean") {
        isOpen = isDefaultOpen;
      }
      this.state = { isOpen };
    } else {
      this.state = { isOpen: isDefaultOpen };
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (typeof props.isOpen !== "undefined" && props.isOpen !== state.isOpen) {
      const { storageKey } = props;
      if (storageKey) {
        localStorageSet(storageKey, props.isOpen);
      }
      return { isOpen: props.isOpen };
    }
    return null;
  }
  render() {
    const _a = this.props,
      { hideActionName, showActionName, storageKey } = _a,
      other = __rest(_a, ["hideActionName", "showActionName", "storageKey"]);
    const { isOpen } = this.state;
    return React.createElement(
      "div",
      Object.assign({}, other),
      React.createElement(
        Top,
        null,
        React.createElement(
          ActiveArea,
          { onClick: this.handleClick },
          React.createElement(StyledInfoIcon, null),
          React.createElement(
            ActionName,
            null,
            isOpen ? hideActionName : showActionName
          ),
          React.createElement(StyledTriangleIcon, { isOpen: isOpen })
        )
      ),
      React.createElement(Collapsible, { isOpen: isOpen }, this.props.children)
    );
  }
}
Note.displayName = "Note";
const Collapsible = styled("div")`
  padding: 11px 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderControlDefault};
  color: ${({ theme }) => theme.colors.textPrimaryColor};
`;
const Top = styled("div")`
  display: flex;
  align-items: center;
  &:after {
    content: " ";
    height: 1px;
    background-color: ${({ theme }) => theme.colors.borderControlDefault};
    flex-grow: 1;
  }
`;
const ActiveArea = styled("div")`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 13px;
  user-select: none;
  color: ${({ theme }) => theme.colors.textSecondaryColor};
  & svg {
    transition: fill 0.12s ease;
    fill: ${({ theme }) => theme.colors.textSecondaryColor};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.textSecondaryColorHover};
    svg {
      fill: ${({ theme }) => theme.colors.textSecondaryColorHover};
    }
  }
  &:active {
    color: ${({ theme }) => theme.colors.textSecondaryColorHover};
    svg {
      fill: ${({ theme }) => theme.colors.textSecondaryColorHover};
    }
  }
`;
const ActionName = styled("span")`
  margin: 0 6px 0 8px;
  border-bottom: 1px dashed #aeb9c3;
`;
const StyledInfoIcon = styled(InfoIcon)`
  width: 16px;
  height: 16px;
`;
const StyledTriangleIcon = styled(_a => {
  var { isOpen: _ } = _a,
    other = __rest(_a, ["isOpen"]);
  return React.createElement(TriangleIcon, Object.assign({}, other));
})`
  display: inline-block;
  width: 10px;
  height: 4px;
  transition: transform 0.2s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;
export default Note;
