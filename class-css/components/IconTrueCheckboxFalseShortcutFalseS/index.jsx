import React from "react";
import "./IconTrueCheckboxFalseShortcutFalseS.css";

class IconTrueCheckboxFalseShortcutFalseS extends React.Component {
  render() {
    const { logOut, text } = this.props;

    return (
      <div className="dropdown-list-item">
        <img className="log-out" src={logOut} />
        <div className="text-9 inter-normal-oxford-blue-14px">{text}</div>
      </div>
    );
  }
}

export default IconTrueCheckboxFalseShortcutFalseS;
