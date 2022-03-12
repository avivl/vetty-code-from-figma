import React from "react";
import StateDefault from "../StateDefault";
import "./Footer2.css";

class Footer2 extends React.Component {
  render() {
    const { className, stateDefaultProps } = this.props;

    return (
      <div className={`footer-3 ${className || ""}`}>
        <div className="divider-18"></div>
        <div className="content-66">
          <div className="actions-5">
            <StateDefault
              className={stateDefaultProps.className}
              sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer2;
