import React from "react";
import IconFalse3 from "../IconFalse3";
import "./SizesmIconFalseColorBlueLight.sass";

class SizesmIconFalseColorBlueLight extends React.Component {
  render() {
    const { className, iconFalse2Props } = this.props;

    return (
      <div className={`badge-6 ${className || ""}`}>
        <IconFalse3 className={iconFalse2Props.className}>{iconFalse2Props.children}</IconFalse3>
      </div>
    );
  }
}

export default SizesmIconFalseColorBlueLight;
