import React from "react";
import "./SizemdIconFalse2.sass";

class SizemdIconFalse2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`button-base-21-1 ${className || ""}`}>
        <div className="text-105 inter-medium-royal-blue-14px">{children}</div>
      </div>
    );
  }
}

export default SizemdIconFalse2;
