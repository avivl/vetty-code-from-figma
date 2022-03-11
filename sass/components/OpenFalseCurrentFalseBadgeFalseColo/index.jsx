import React from "react";
import CurrentFalseBadgeFalseToggleFalseIc2 from "../CurrentFalseBadgeFalseToggleFalseIc2";
import "./OpenFalseCurrentFalseBadgeFalseColo.sass";

class OpenFalseCurrentFalseBadgeFalseColo extends React.Component {
  render() {
    const { currentFalseBadgeFalseToggleFalseIc2Props } = this.props;

    return (
      <div className="nav-item-dropdown-base">
        <CurrentFalseBadgeFalseToggleFalseIc2
          text={currentFalseBadgeFalseToggleFalseIc2Props.text}
          socialIconProps={currentFalseBadgeFalseToggleFalseIc2Props.socialIconProps}
        />
      </div>
    );
  }
}

export default OpenFalseCurrentFalseBadgeFalseColo;
