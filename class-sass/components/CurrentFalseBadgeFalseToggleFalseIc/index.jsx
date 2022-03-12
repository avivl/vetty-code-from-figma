import React from "react";
import Content3 from "../Content3";
import "./CurrentFalseBadgeFalseToggleFalseIc.sass";

class CurrentFalseBadgeFalseToggleFalseIc extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`nav-item-base ${className || ""}`}>
        <Content3 />
      </div>
    );
  }
}

export default CurrentFalseBadgeFalseToggleFalseIc;
