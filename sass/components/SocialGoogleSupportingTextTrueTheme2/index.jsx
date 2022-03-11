import React from "react";
import SocialIcon from "../SocialIcon";
import "./SocialGoogleSupportingTextTrueTheme2.sass";

class SocialGoogleSupportingTextTrueTheme2 extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <div className="social-button-1 border-1px-mischka">
        <SocialIcon src={socialIconProps.src} />
        <div className="text-114 inter-medium-oxford-blue-16px">{text}</div>
      </div>
    );
  }
}

export default SocialGoogleSupportingTextTrueTheme2;
