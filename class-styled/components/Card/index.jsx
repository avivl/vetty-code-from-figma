import React from "react";
import SizemdHierarchyLinkColorIconFalseDe from "../SizemdHierarchyLinkColorIconFalseDe";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterSemiBoldMirage16px, InterMediumRoyalBlue14px } from "../../styledMixins";


class Card extends React.Component {
  render() {
    const { className, sizemdHierarchyLinkColorIconFalseDe } = this.props;

    return (
      <Card1 className={`card ${className || ""}`}>
        <Content className="content-31">
          <HeadingAndToggle className="heading-and-toggle">
            <HeadingAndIcon className="heading-and-icon">
              <Heading className="heading-2">Technical Program Manager, Mobile Software Engineering</Heading>
            </HeadingAndIcon>
          </HeadingAndToggle>
          <Frame14014 className="frame-14014">
            <Link className="link" src="/img/link@2x.png" />
            <SupportingText className="supporting-text-7">www.vetti.com/technical345</SupportingText>
          </Frame14014>
        </Content>
        <Action className="action">
          <Divider className="divider-6"></Divider>
          <Content1 className="content-32">
            <SizemdHierarchyLinkColorIconFalseDe
              sizemdIconFalse2Props={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalse2Props}
            />
            <Text className="text-98">View Page</Text>
          </Content1>
        </Action>
      </Card1>
    );
  }
}

const Card1 = styled.div`
  width: 368px;
  height: 193px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280f, 0px 1px 3px #1018281a;

  &.card.card-1 {
    margin-left: 24px;
  }

  &.card.card-2 {
    margin-left: 24px;
  }

  &.card.card-4 {
    margin-left: 24px;
  }

  &.card.card-5 {
    margin-left: 24px;
  }

  &.card.card-6 {
    margin-left: 24px;
  }

  &.card.card-7 {
    margin-left: 24px;
  }
`;

const Content = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
`;

const HeadingAndToggle = styled.div`
  margin-left: 24px;
  width: 320px;
  margin-top: 24px;
  display: flex;
`;

const HeadingAndIcon = styled.div`
  width: 320px;
  display: flex;
`;

const Heading = styled.p`
  ${InterSemiBoldMirage16px}
  width: 276px;
  height: 48px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Frame14014 = styled.div`
  margin-left: 24px;
  width: 307px;
  margin-top: 24px;
  display: flex;
`;

const Link = styled.img`
  margin-top: 2px;
  width: 16px;
  height: 16px;
`;

const SupportingText = styled.div`
  ${InterNormalPaleSky14px}
  width: 286px;
  height: 20px;
  margin-left: 5px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Action = styled.div`
  height: 53px;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 368px;
  height: 1px;
  background-color: var(--gallery);
`;

const Content1 = styled.div`
  width: 368px;
  height: 52px;
  position: relative;
  display: flex;
`;

const Text = styled.div`
  ${InterMediumRoyalBlue14px}
  margin-top: 16px;
  width: 71px;
  height: 20px;
  margin-left: 16px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default Card;
