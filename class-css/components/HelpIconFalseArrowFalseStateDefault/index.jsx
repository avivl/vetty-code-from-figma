import React from "react";
import "./HelpIconFalseArrowFalseStateDefault.css";

class HelpIconFalseArrowFalseStateDefault extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`table-header ${className || ""}`}>
        <div className="text-142 inter-medium-pale-sky-12px">{children}</div>
      </div>
    );
  }
}

export default HelpIconFalseArrowFalseStateDefault;
