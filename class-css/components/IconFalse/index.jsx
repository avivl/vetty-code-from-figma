import React from "react";
import "./IconFalse.css";

class IconFalse extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`badge-base ${className || ""}`}>
        <div className="text-141 inter-medium-purple-heart-12px">{children}</div>
      </div>
    );
  }
}

export default IconFalse;
