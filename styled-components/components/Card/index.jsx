import React from "react";
import SizemdHierarchyLinkColorIconFalseDe from "../SizemdHierarchyLinkColorIconFalseDe";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterSemiBoldMirage16px, InterMediumRoyalBlue14px } from "../../styledMixins";


class Card extends React.Component {
  render() {
    const { className, sizemdHierarchyLinkColorIconFalseDe } = this.props;

    return (
      <Card1 className={`card ${className || ""}`}>
        <Content className="content-16">
          <Heading className="heading-2">Technical Program Manager, Mobile Software Engineering</Heading>
          <Frame14014 className="frame-14014">
            <Link className="link" src="/img/link@2x.svg" />
            <SupportingText className="supporting-text-3">www.vetti.com/technical345</SupportingText>
          </Frame14014>
        </Content>
        <Action className="action">
          <Divider className="divider-6"></Divider>
          <Content1 className="content-17">
            <SizemdHierarchyLinkColorIconFalseDe
              sizemdIconFalse2Props={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalse2Props}
            />
            <Text className="text-37">View Page</Text>
          </Content1>
        </Action>
      </Card1>
    );
  }
}

const Card1 = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 193px;
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
  width: 368px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
  min-height: 140px;
`;

const Heading = styled.p`
  ${InterSemiBoldMirage16px}
  width: 276px;
  min-height: 48px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Frame14014 = styled.div`
  height: 20px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  min-width: 307px;
`;

const Link = styled.img`
  width: 16px;
  height: 16px;
`;

const SupportingText = styled.div`
  ${InterNormalPaleSky14px}
  width: 286px;
  min-height: 20px;
  margin-left: 5px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Action = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 53px;
`;

const Divider = styled.div`
  width: 368px;
  height: 1px;
  background-color: var(--gallery);
`;

const Content1 = styled.div`
  height: 52px;
  position: relative;
  display: flex;
  padding: 0 24px;
  justify-content: flex-end;
  align-items: center;
  min-width: 368px;
`;

const Text = styled.div`
  ${InterMediumRoyalBlue14px}
  min-height: 20px;
  margin-left: 16px;
  min-width: 71px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default Card;
