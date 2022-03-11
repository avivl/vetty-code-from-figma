import React from "react";
import styled from "styled-components";
import { InterNormalPaleSky16px, InterSemiBoldMirage30px } from "../../styledMixins";


class TextAndSupportingText3 extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <TextAndSupportingText className={`text-and-supporting-text-7 ${className || ""}`}>
        <Text className="text-66">{text}</Text>
        <SupportingText className="supporting-text-9">{supportingText}</SupportingText>
      </TextAndSupportingText>
    );
  }
}

const TextAndSupportingText = styled.div`
  width: 360px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 74px;

  &.text-and-supporting-text-7.text-and-supporting-text-8 {
    margin-top: 19px;
    min-height: 98px;
  }

  &.text-and-supporting-text-7.text-and-supporting-text-9 {
    min-height: 98px;
  }
`;

const Text = styled.div`
  ${InterSemiBoldMirage30px}
  width: 360px;
  min-height: 38px;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky16px}
  width: 360px;
  min-height: 24px;
  margin-top: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const SupportingText1 = styled.p`
  ${InterNormalPaleSky16px}

  .text-and-supporting-text-7.text-and-supporting-text-8  & {
    min-height: 48px;
    white-space: unset;
  }
`;

const SupportingText2 = styled.p`
  ${InterNormalPaleSky16px}

  .text-and-supporting-text-7.text-and-supporting-text-9  & {
    min-height: 48px;
    white-space: unset;
  }
`;

export default TextAndSupportingText3;
