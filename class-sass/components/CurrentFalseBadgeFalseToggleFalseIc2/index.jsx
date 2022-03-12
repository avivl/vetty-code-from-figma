import React from "react";
import SocialIcon from "../SocialIcon";
import "./CurrentFalseBadgeFalseToggleFalseIc2.sass";

class CurrentFalseBadgeFalseToggleFalseIc2 extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <div className="nav-item-base-4">
        <div className="content-92">
          <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
          <div className="text-126 inter-medium-oxford-blue-16px">{text}</div>
        </div>
      </div>
    );
  }
}

export default CurrentFalseBadgeFalseToggleFalseIc2;
