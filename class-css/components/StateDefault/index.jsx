import React from "react";
import SizemdIconFalse from "../SizemdIconFalse";
import "./StateDefault.css";

class StateDefault extends React.Component {
  render() {
    const { className, sizemdIconFalseProps } = this.props;

    return (
      <div className={`button-2 ${className || ""}`}>
        <SizemdIconFalse className={sizemdIconFalseProps.className} />
      </div>
    );
  }
}

export default StateDefault;
