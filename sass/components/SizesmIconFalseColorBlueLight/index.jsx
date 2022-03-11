import React from "react";
import IconFalse2 from "../IconFalse2";
import "./SizesmIconFalseColorBlueLight.sass";

class SizesmIconFalseColorBlueLight extends React.Component {
  render() {
    const { iconFalse2Props } = this.props;

    return (
      <div className="badge-4">
        <IconFalse2 className={iconFalse2Props.className}>{iconFalse2Props.children}</IconFalse2>
      </div>
    );
  }
}

export default SizesmIconFalseColorBlueLight;
