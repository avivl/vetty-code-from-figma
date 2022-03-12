import React from "react";
import IconFalse from "../IconFalse";
import "./SizesmIconFalseColorPrimary.css";

class SizesmIconFalseColorPrimary extends React.Component {
  render() {
    const { className, iconFalseProps } = this.props;

    return (
      <div className={`badge ${className || ""}`}>
        <IconFalse className={iconFalseProps.className}>{iconFalseProps.children}</IconFalse>
      </div>
    );
  }
}

export default SizesmIconFalseColorPrimary;
