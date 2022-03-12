import React from "react";
import IconFalse2 from "../IconFalse2";
import "./SizesmIconFalseColorError.css";

class SizesmIconFalseColorError extends React.Component {
  render() {
    const { iconFalse2Props } = this.props;

    return (
      <div className="badge-2">
        <IconFalse2>{iconFalse2Props.children}</IconFalse2>
      </div>
    );
  }
}

export default SizesmIconFalseColorError;
