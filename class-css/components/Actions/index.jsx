import React from "react";
import StateDefault from "../StateDefault";
import "./Actions.css";

class Actions extends React.Component {
  render() {
    const { className, stateDefaultProps } = this.props;

    return (
      <div className={`actions-9 ${className || ""}`}>
        <StateDefault
          className={stateDefaultProps.className}
          sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
        />
      </div>
    );
  }
}

export default Actions;
