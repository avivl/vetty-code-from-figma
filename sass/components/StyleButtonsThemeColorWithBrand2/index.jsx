import React from "react";
import SocialGoogleSupportingTextTrueTheme2 from "../SocialGoogleSupportingTextTrueTheme2";
import "./StyleButtonsThemeColorWithBrand2.sass";

class StyleButtonsThemeColorWithBrand2 extends React.Component {
  render() {
    const { socialGoogleSupportingTextTrueTheme2Props } = this.props;

    return (
      <div className="social-button-groups-1">
        <SocialGoogleSupportingTextTrueTheme2
          text={socialGoogleSupportingTextTrueTheme2Props.text}
          socialIconProps={socialGoogleSupportingTextTrueTheme2Props.socialIconProps}
        />
      </div>
    );
  }
}

export default StyleButtonsThemeColorWithBrand2;
