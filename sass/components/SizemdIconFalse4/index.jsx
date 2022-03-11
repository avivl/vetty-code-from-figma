import React from "react";
import "./SizemdIconFalse4.sass";

class SizemdIconFalse4 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`button-base-33 ${className || ""}`}>
        <div className="text-111 inter-medium-royal-blue-14px">{children}</div>
      </div>
    );
  }
}

export default SizemdIconFalse4;
