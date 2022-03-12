import React from "react";
import "./SizemdIconFalse6.css";

class SizemdIconFalse6 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`button-base-35 ${className || ""}`}>
        <div className="text-130 inter-medium-royal-blue-14px">{children}</div>
      </div>
    );
  }
}

export default SizemdIconFalse6;
