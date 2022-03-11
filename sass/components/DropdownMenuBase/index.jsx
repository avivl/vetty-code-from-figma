import React from "react";
import IconTrueCheckboxFalseShortcutFalseS from "../IconTrueCheckboxFalseShortcutFalseS";
import "./DropdownMenuBase.sass";

class DropdownMenuBase extends React.Component {
  render() {
    const { iconTrueCheckboxFalseShortcutFalseS } = this.props;

    return (
      <div className="dropdown-menu-base">
        <IconTrueCheckboxFalseShortcutFalseS
          logOut={iconTrueCheckboxFalseShortcutFalseS.logOut}
          text={iconTrueCheckboxFalseShortcutFalseS.text}
        />
      </div>
    );
  }
}

export default DropdownMenuBase;
