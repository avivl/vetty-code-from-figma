import React from "react";
import "./SizexlIconFalse.css";

class SizexlIconFalse extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="button-base-32">
        <div className="text-120 inter-medium-white-14px">{children}</div>
      </div>
    );
  }
}

export default SizexlIconFalse;
