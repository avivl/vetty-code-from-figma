import React from "react";
import styled from "styled-components";
import { InterNormalPaleSky16px, InterSemiBoldMirage30px } from "../../styledMixins";


class TextAndSupportingText32 extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <TextAndSupportingText className={`text-and-supporting-text-23 ${className || ""}`}>
        <Text className="text-123">{text}</Text>
        <SupportingText className="supporting-text-13">{supportingText}</SupportingText>
      </TextAndSupportingText>
    );
  }
}

const TextAndSupportingText = styled.div`
  width: 360px;
  height: 74px;
  margin-top: 9px;
  display: flex;
  flex-direction: column;

  &.text-and-supporting-text-23.text-and-supporting-text-24 {
    height: 98px;
    margin-top: 19px;
  }

  &.text-and-supporting-text-23.text-and-supporting-text-25 {
    height: 98px;
  }
`;

const Text = styled.div`
  ${InterSemiBoldMirage30px}
  height: 38px;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky16px}
  height: 24px;
  margin-top: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const SupportingText1 = styled.p`
  ${InterNormalPaleSky16px}

  .text-and-supporting-text-23.text-and-supporting-text-24  & {
    height: 48px;
    white-space: unset;
  }
`;

const SupportingText2 = styled.p`
  ${InterNormalPaleSky16px}

  .text-and-supporting-text-23.text-and-supporting-text-25  & {
    height: 48px;
    white-space: unset;
  }
`;

export default TextAndSupportingText32;
