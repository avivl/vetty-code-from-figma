import React from "react";
import "./IconFalse2.sass";

class IconFalse2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`badge-base-4 ${className || ""}`}>
        <div className="text-145">{children}</div>
      </div>
    );
  }
}

export default IconFalse2;
