import React from "react";
import "./IconFalse3.sass";

class IconFalse3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`badge-base-7 ${className || ""}`}>
        <div className="text-174 inter-medium-allports-12px">{children}</div>
      </div>
    );
  }
}

export default IconFalse3;
