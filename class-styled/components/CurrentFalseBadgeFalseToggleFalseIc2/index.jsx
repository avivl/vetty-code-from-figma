import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";
import { InterMediumOxfordBlue16px } from "../../styledMixins";


class CurrentFalseBadgeFalseToggleFalseIc2 extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <NavItemBase>
        <Content>
          <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
          <Text>{text}</Text>
        </Content>
      </NavItemBase>
    );
  }
}

const NavItemBase = styled.div`
  width: 296px;
  display: flex;
  background-color: var(--white);
  border-radius: 6px;
  overflow: hidden;
`;

const Content = styled.div`
  margin-top: 8px;
  width: 112px;
  margin-left: 12px;
  position: relative;
  display: flex;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue16px}
  width: 76px;
  height: 24px;
  margin-left: 12px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default CurrentFalseBadgeFalseToggleFalseIc2;
