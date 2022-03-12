import React from "react";
import SocialIcon from "../SocialIcon";
import "./SocialGoogleSupportingTextTrueTheme2.css";

class SocialGoogleSupportingTextTrueTheme2 extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <button className="social-button-1 border-1px-mischka">
        <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
        <div className="text-132 inter-medium-oxford-blue-16px">{text}</div>
      </button>
    );
  }
}

export default SocialGoogleSupportingTextTrueTheme2;
