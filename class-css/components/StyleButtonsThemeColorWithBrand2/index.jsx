import React from "react";
import SocialGoogleSupportingTextTrueTheme2 from "../SocialGoogleSupportingTextTrueTheme2";
import "./StyleButtonsThemeColorWithBrand2.css";

class StyleButtonsThemeColorWithBrand2 extends React.Component {
  render() {
    const { socialGoogleSupportingTextTrueTheme } = this.props;

    return (
      <div className="social-button-groups-1">
        <SocialGoogleSupportingTextTrueTheme2
          text={socialGoogleSupportingTextTrueTheme.text}
          socialIconProps={socialGoogleSupportingTextTrueTheme.socialIconProps}
        />
      </div>
    );
  }
}

export default StyleButtonsThemeColorWithBrand2;
