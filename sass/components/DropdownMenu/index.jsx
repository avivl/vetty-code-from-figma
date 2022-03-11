import React from "react";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import DropdownMenuBase from "../DropdownMenuBase";
import "./DropdownMenu.sass";

class DropdownMenu extends React.Component {
  render() {
    const { text, supportingText, dropdownMenuBaseProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dropdown-menu screen">
          <div className="dropdown-list-header">
            <TypeAvatarOpenFalse />
            <div className="text-and-supporting-text">
              <div className="text inter-medium-oxford-blue-14px">{text}</div>
              <div className="text inter-normal-pale-sky-14px">{supportingText}</div>
            </div>
          </div>
          <div className="divider"></div>
          <DropdownMenuBase
            iconTrueCheckboxFalseShortcutFalseS={dropdownMenuBaseProps.iconTrueCheckboxFalseShortcutFalseS}
          />
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
