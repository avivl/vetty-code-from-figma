import React from "react";
import SizexlColorPrimaryThemeLightCircleO from "../SizexlColorPrimaryThemeLightCircleO";
import TextAndSupportingText32 from "../TextAndSupportingText32";
import "./Header.css";

class Header extends React.Component {
  render() {
    const { className, sizexlColorPrimaryThemeLightCircleO, textAndSupportingText3Props } = this.props;

    return (
      <div className={`header-4 ${className || ""}`}>
        <SizexlColorPrimaryThemeLightCircleO src={sizexlColorPrimaryThemeLightCircleO.src} />
        <TextAndSupportingText32
          text={textAndSupportingText3Props.text}
          supportingText={textAndSupportingText3Props.supportingText}
          className={textAndSupportingText3Props.className}
        />
      </div>
    );
  }
}

export default Header;
