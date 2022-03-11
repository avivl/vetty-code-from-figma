import React from "react";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterMediumMirage16px } from "../../styledMixins";


class Content2 extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <Content className={`content-2 ${className || ""}`}>
        <Text className="text-33">{text}</Text>
        <SupportingText className="supporting-text-1">{supportingText}</SupportingText>
      </Content>
    );
  }
}

const Content = styled.div`
  width: 264px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 72px;

  &.content-2.content-3 {
    min-height: 52px;
  }

  &.content-2.content-5 {
    min-height: 52px;
  }

  &.content-2.content-6 {
    min-height: 52px;
  }

  &.content-2.content-7 {
    min-height: 52px;
  }

  &.content-2.content-8 {
    min-height: 52px;
  }

  &.content-2.content-9 {
    min-height: 52px;
  }
`;

const Text = styled.div`
  ${InterMediumMirage16px}
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky14px}
  width: 264px;
  min-height: 40px;
  margin-top: 8px;
  letter-spacing: 0;
  line-height: 20px;
`;

const SupportingText1 = styled.div`
  ${InterNormalPaleSky14px}

  .content-2.content-3  & {
    min-height: 20px;
    white-space: nowrap;
    width: unset;
  }
`;

const SupportingText2 = styled.div`
  ${InterNormalPaleSky14px}

  .content-2.content-5  & {
    min-height: 20px;
    white-space: nowrap;
    width: unset;
  }
`;

const SupportingText3 = styled.div`
  ${InterNormalPaleSky14px}

  .content-2.content-6  & {
    min-height: 20px;
    white-space: nowrap;
    width: unset;
  }
`;

const SupportingText4 = styled.div`
  ${InterNormalPaleSky14px}

  .content-2.content-7  & {
    min-height: 20px;
    white-space: nowrap;
    width: unset;
  }
`;

const SupportingText5 = styled.div`
  ${InterNormalPaleSky14px}

  .content-2.content-8  & {
    min-height: 20px;
    white-space: nowrap;
    width: unset;
  }
`;

const SupportingText6 = styled.div`
  ${InterNormalPaleSky14px}

  .content-2.content-9  & {
    min-height: 20px;
    white-space: nowrap;
    width: unset;
  }
`;

export default Content2;
