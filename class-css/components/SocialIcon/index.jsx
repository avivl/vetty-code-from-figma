import React from "react";
import "./SocialIcon.css";

class SocialIcon extends React.Component {
  render() {
    const { src, className } = this.props;

    return <img className={`menu-2 ${className || ""}`} src={src} />;
  }
}

export default SocialIcon;
