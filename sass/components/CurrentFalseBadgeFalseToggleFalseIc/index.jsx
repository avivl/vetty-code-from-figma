import React from "react";
import "./CurrentFalseBadgeFalseToggleFalseIc.sass";

class CurrentFalseBadgeFalseToggleFalseIc extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`nav-item-base ${className || ""}`}>
        <div className="text-10 inter-medium-oxford-blue-16px">Job Posts</div>
      </div>
    );
  }
}

export default CurrentFalseBadgeFalseToggleFalseIc;
