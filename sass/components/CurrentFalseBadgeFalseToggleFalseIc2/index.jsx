import React from "react";
import SocialIcon from "../SocialIcon";
import "./CurrentFalseBadgeFalseToggleFalseIc2.sass";

class CurrentFalseBadgeFalseToggleFalseIc2 extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <div className="nav-item-base-5">
        <SocialIcon src={socialIconProps.src} />
        <div className="text-107 inter-medium-oxford-blue-16px">{text}</div>
      </div>
    );
  }
}

export default CurrentFalseBadgeFalseToggleFalseIc2;
