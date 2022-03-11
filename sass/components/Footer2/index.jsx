import React from "react";
import StateDefault from "../StateDefault";
import "./Footer2.sass";

class Footer2 extends React.Component {
  render() {
    const { className, stateDefaultProps } = this.props;

    return (
      <div className={`footer-3 ${className || ""}`}>
        <div className="divider-17"></div>
        <StateDefault
          className={stateDefaultProps.className}
          sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
        />
      </div>
    );
  }
}

export default Footer2;
