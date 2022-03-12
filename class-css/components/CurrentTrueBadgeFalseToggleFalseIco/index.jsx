import React from "react";
import "./CurrentTrueBadgeFalseToggleFalseIco.css";

class CurrentTrueBadgeFalseToggleFalseIco extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`nav-item-base-2 ${className || ""}`}>
        <div className="content-49">
          <div className="text-101 inter-medium-royal-blue-16px">{children}</div>
        </div>
      </div>
    );
  }
}

export default CurrentTrueBadgeFalseToggleFalseIco;
