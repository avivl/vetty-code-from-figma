import React from "react";
import SizexlColorPrimaryThemeLightCircleO from "../SizexlColorPrimaryThemeLightCircleO";
import TextAndSupportingText from "../TextAndSupportingText";
import "./Header.sass";

class Header extends React.Component {
  render() {
    const { className, textAndSupportingTextProps } = this.props;

    return (
      <div className={`header-4 ${className || ""}`}>
        <SizexlColorPrimaryThemeLightCircleO />
        <TextAndSupportingText
          text={textAndSupportingTextProps.text}
          supportingText={textAndSupportingTextProps.supportingText}
          className={textAndSupportingTextProps.className}
        />
      </div>
    );
  }
}

export default Header;
