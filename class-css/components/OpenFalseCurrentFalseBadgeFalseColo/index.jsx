import React from "react";
import CurrentFalseBadgeFalseToggleFalseIc2 from "../CurrentFalseBadgeFalseToggleFalseIc2";
import "./OpenFalseCurrentFalseBadgeFalseColo.css";

class OpenFalseCurrentFalseBadgeFalseColo extends React.Component {
  render() {
    const { currentFalseBadgeFalseToggleFalseIc } = this.props;

    return (
      <div className="nav-item-dropdown-base">
        <CurrentFalseBadgeFalseToggleFalseIc2
          text={currentFalseBadgeFalseToggleFalseIc.text}
          socialIconProps={currentFalseBadgeFalseToggleFalseIc.socialIconProps}
        />
      </div>
    );
  }
}

export default OpenFalseCurrentFalseBadgeFalseColo;
