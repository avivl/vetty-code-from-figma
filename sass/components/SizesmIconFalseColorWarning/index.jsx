import React from "react";
import IconFalse2 from "../IconFalse2";
import "./SizesmIconFalseColorWarning.sass";

class SizesmIconFalseColorWarning extends React.Component {
  render() {
    const { iconFalse2Props } = this.props;

    return (
      <div className="badge-5">
        <IconFalse2 className={iconFalse2Props.className}>{iconFalse2Props.children}</IconFalse2>
      </div>
    );
  }
}

export default SizesmIconFalseColorWarning;
