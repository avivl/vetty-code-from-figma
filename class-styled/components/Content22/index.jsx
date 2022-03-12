import React from "react";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterMediumMirage16px } from "../../styledMixins";


class Content22 extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <TextAndSupportingText className={`text-and-supporting-text-3 ${className || ""}`}>
        <Text className="text-94">{text}</Text>
        <SupportingText className="supporting-text-6">{supportingText}</SupportingText>
      </TextAndSupportingText>
    );
  }
}

const TextAndSupportingText = styled.div`
  width: 264px;
  height: 72px;
  display: flex;
  flex-direction: column;

  &.text-and-supporting-text-3.text-and-supporting-text-4 {
    height: 52px;
  }

  &.text-and-supporting-text-3.text-and-supporting-text-6 {
    height: 52px;
  }

  &.text-and-supporting-text-3.text-and-supporting-text-7 {
    height: 52px;
  }

  &.text-and-supporting-text-3.text-and-supporting-text-8 {
    height: 52px;
  }

  &.text-and-supporting-text-3.text-and-supporting-text-9 {
    height: 52px;
  }

  &.text-and-supporting-text-3.text-and-supporting-text-10 {
    height: 52px;
  }
`;

const Text = styled.div`
  ${InterMediumMirage16px}
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky14px}
  height: 40px;
  margin-top: 8px;
  letter-spacing: 0;
  line-height: 20px;
`;

const SupportingText1 = styled.div`
  ${InterNormalPaleSky14px}

  .text-and-supporting-text-3.text-and-supporting-text-4  & {
    height: 20px;
    white-space: nowrap;
  }
`;

const SupportingText2 = styled.div`
  ${InterNormalPaleSky14px}

  .text-and-supporting-text-3.text-and-supporting-text-6  & {
    height: 20px;
    white-space: nowrap;
  }
`;

const SupportingText3 = styled.div`
  ${InterNormalPaleSky14px}

  .text-and-supporting-text-3.text-and-supporting-text-7  & {
    height: 20px;
    white-space: nowrap;
  }
`;

const SupportingText4 = styled.div`
  ${InterNormalPaleSky14px}

  .text-and-supporting-text-3.text-and-supporting-text-8  & {
    height: 20px;
    white-space: nowrap;
  }
`;

const SupportingText5 = styled.div`
  ${InterNormalPaleSky14px}

  .text-and-supporting-text-3.text-and-supporting-text-9  & {
    height: 20px;
    white-space: nowrap;
  }
`;

const SupportingText6 = styled.div`
  ${InterNormalPaleSky14px}

  .text-and-supporting-text-3.text-and-supporting-text-10  & {
    height: 20px;
    white-space: nowrap;
  }
`;

export default Content22;
