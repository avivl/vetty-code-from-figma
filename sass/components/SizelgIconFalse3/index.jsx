import React from "react";
import "./SizelgIconFalse3.sass";

class SizelgIconFalse3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`button-base-36 ${className || ""}`}>
        <div className="text-113 inter-medium-white-16px">{children}</div>
      </div>
    );
  }
}

export default SizelgIconFalse3;
