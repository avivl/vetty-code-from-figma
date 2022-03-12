import React from "react";
import "./CurrentTrueTypeTextIconFalseStateDe.sass";

class CurrentTrueTypeTextIconFalseStateDe extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`breadcrumb-button-base-4 ${className || ""}`}>
        <p className="text-16 inter-medium-purple-heart-14px">{children}</p>
      </div>
    );
  }
}

export default CurrentTrueTypeTextIconFalseStateDe;
