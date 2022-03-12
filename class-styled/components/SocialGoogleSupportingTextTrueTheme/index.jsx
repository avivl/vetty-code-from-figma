import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";
import { InterMediumOxfordBlue16px, Border1pxMischka } from "../../styledMixins";


class SocialGoogleSupportingTextTrueTheme extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <button>
        <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
        <Text>{text}</Text>
      </button>
    );
  }
}

const SocialButton = styled.div`
  ${Border1pxMischka}
  width: 360px;
  height: 44px;
  position: relative;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue16px}
  margin-top: 10px;
  width: 154px;
  height: 24px;
  margin-left: 12px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default SocialGoogleSupportingTextTrueTheme;
