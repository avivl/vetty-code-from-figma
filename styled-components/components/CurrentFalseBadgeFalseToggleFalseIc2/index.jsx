import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";
import { InterMediumOxfordBlue16px } from "../../styledMixins";


class CurrentFalseBadgeFalseToggleFalseIc2 extends React.Component {
  render() {
    const { text, socialIconProps } = this.props;

    return (
      <NavItemBase>
        <SocialIcon src={socialIconProps.src} />
        <Text>{text}</Text>
      </NavItemBase>
    );
  }
}

const NavItemBase = styled.div`
  width: 296px;
  height: 40px;
  position: relative;
  display: flex;
  padding: 7.5px 12px;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 6px;
  overflow: hidden;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue16px}
  min-height: 24px;
  align-self: center;
  margin-left: 12px;
  min-width: 76px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default CurrentFalseBadgeFalseToggleFalseIc2;
