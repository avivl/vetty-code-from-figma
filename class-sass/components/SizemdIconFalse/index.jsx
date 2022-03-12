import React from "react";
import "./SizemdIconFalse.sass";

class SizemdIconFalse extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`button-base-2 ${className || ""}`}>
        <div className="text-23 inter-medium-white-14px">Apply to Job</div>
      </div>
    );
  }
}

export default SizemdIconFalse;
