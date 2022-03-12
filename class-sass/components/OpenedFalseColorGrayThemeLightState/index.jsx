import React from "react";
import SocialIcon from "../SocialIcon";
import "./OpenedFalseColorGrayThemeLightState.sass";

class OpenedFalseColorGrayThemeLightState extends React.Component {
  render() {
    const { className, socialIconProps } = this.props;

    return (
      <div className={`application-nav-menu-button ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} />
      </div>
    );
  }
}

export default OpenedFalseColorGrayThemeLightState;
