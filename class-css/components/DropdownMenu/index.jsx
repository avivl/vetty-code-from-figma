import React from "react";
import Content from "../Content";
import DropdownMenuBase from "../DropdownMenuBase";
import "./DropdownMenu.css";

class DropdownMenu extends React.Component {
  render() {
    const { text, supportingText, dropdownMenuBaseProps } = this.props;

    return (
      <div className="dropdown-menu screen">
        <div className="dropdown-list-header">
          <div className="avatar-label-group">
            <Content />
            <div className="text-and-supporting-text">
              <div className="text inter-medium-oxford-blue-14px">{text}</div>
              <div className="text inter-normal-pale-sky-14px">{supportingText}</div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <DropdownMenuBase
          iconTrueCheckboxFalseShortcutFalseS={dropdownMenuBaseProps.iconTrueCheckboxFalseShortcutFalseS}
        />
      </div>
    );
  }
}

export default DropdownMenu;
