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
  height: 44px;
  position: relative;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 360px;
`;

export default StyleButtonsThemeColorWithBrand;
