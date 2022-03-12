import React from "react";
import SocialIcon from "../SocialIcon";
import "./SocialGoogleSupportingTextTrueTheme.css";

class SocialGoogleSupportingTextTrueTheme extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <button className="social-button border-1px-mischka">
        <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
        <div className="text-116 inter-medium-oxford-blue-16px">{text}</div>
      </button>
    );
  }
}

export default SocialGoogleSupportingTextTrueTheme;
