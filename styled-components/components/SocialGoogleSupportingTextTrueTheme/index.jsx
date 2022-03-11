import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";
import { InterMediumOxfordBlue16px, Border1pxMischka } from "../../styledMixins";


class SocialGoogleSupportingTextTrueTheme extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <SocialButton>
        <SocialIcon src={socialIconProps.src} />
        <Text>{text}</Text>
      </SocialButton>
    );
  }
}

const SocialButton = styled.div`
  ${Border1pxMischka}
  width: 360px;
  height: 44px;
  position: relative;
  display: flex;
  padding: 0 85px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue16px}
  min-height: 24px;
  margin-left: 12px;
  min-width: 154px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default SocialGoogleSupportingTextTrueTheme;
