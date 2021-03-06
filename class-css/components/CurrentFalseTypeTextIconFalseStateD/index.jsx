import React from "react";
import "./CurrentFalseTypeTextIconFalseStateD.css";

class CurrentFalseTypeTextIconFalseStateD extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`breadcrumb-button-base ${className || ""}`}>
        <div className="text-17 inter-medium-pale-sky-14px">{children}</div>
      </div>
    );
  }
}

export default CurrentFalseTypeTextIconFalseStateD;
