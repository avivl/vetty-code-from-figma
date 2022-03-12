import React from "react";
import "./SizelgIconFalse3.sass";

class SizelgIconFalse3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <button className={`button-base-38 ${className || ""}`}>
        <div className="text-131 inter-medium-white-16px">{children}</div>
      </button>
    );
  }
}

export default SizelgIconFalse3;
