import React from "react";
import "./SocialIcon.sass";

class SocialIcon extends React.Component {
  render() {
    const { src, className } = this.props;

    return <img className={`menu-2 ${className || ""}`} src={src} />;
  }
}

export default SocialIcon;
