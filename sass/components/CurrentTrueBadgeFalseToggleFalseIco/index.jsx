import React from "react";
import "./CurrentTrueBadgeFalseToggleFalseIco.sass";

class CurrentTrueBadgeFalseToggleFalseIco extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`nav-item-base-3 ${className || ""}`}>
        <div className="text-73 inter-medium-royal-blue-16px">{children}</div>
      </div>
    );
  }
}

export default CurrentTrueBadgeFalseToggleFalseIco;
