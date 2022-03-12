import React from "react";
import SocialGoogleSupportingTextTrueTheme from "../SocialGoogleSupportingTextTrueTheme";
import styled from "styled-components";


class StyleButtonsThemeColorWithBrand extends React.Component {
  render() {
    const { socialGoogleSupportingTextTrueTheme } = this.props;

    return (
      <SocialButtonGroups>
        <SocialGoogleSupportingTextTrueTheme
          text={socialGoogleSupportingTextTrueTheme.text}
          socialIconProps={socialGoogleSupportingTextTrueTheme.socialIconProps}
        />
      </SocialButtonGroups>
    );
  }
}

const SocialButtonGroups = styled.div`
  width: 360px;
  height: 44px;
  position: relative;
  margin-top: 16px;
  display: flex;
`;

export default StyleButtonsThemeColorWithBrand;
