import React from "react";
import SocialIcon from "../SocialIcon";
import "./SocialGoogleSupportingTextTrueTheme.sass";

class SocialGoogleSupportingTextTrueTheme extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <div className="social-button border-1px-mischka">
        <SocialIcon src={socialIconProps.src} />
        <div className="text-94 inter-medium-oxford-blue-16px">{text}</div>
      </div>
    );
  }
}

export default SocialGoogleSupportingTextTrueTheme;
