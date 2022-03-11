import React from "react";
import SocialGoogleSupportingTextTrueTheme from "../SocialGoogleSupportingTextTrueTheme";
import "./StyleButtonsThemeColorWithBrand.sass";

class StyleButtonsThemeColorWithBrand extends React.Component {
  render() {
    const { socialGoogleSupportingTextTrueTheme } = this.props;

    return (
      <div className="social-button-groups">
        <SocialGoogleSupportingTextTrueTheme
          text={socialGoogleSupportingTextTrueTheme.text}
          socialIconProps={socialGoogleSupportingTextTrueTheme.socialIconProps}
        />
      </div>
    );
  }
}

export default StyleButtonsThemeColorWithBrand;
