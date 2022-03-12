import React from "react";
import styled from "styled-components";
import { InterMediumMirage24px } from "../../styledMixins";


class TextAndSupportingText2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <TextAndSupportingText className={`text-and-supporting-text-12 ${className || ""}`}>
        <Text className="text-101">Technical Program Manager, Mobile Software Engineering</Text>
      </TextAndSupportingText>
    );
  }
}

const TextAndSupportingText = styled.div`
  width: 343px;
  margin-top: 20px;
  display: flex;

  &.text-and-supporting-text-12.text-and-supporting-text-13 {
    margin-top: unset;
  }
`;

const Text = styled.div`
  ${InterMediumMirage24px}
  width: 343px;
  height: 64px;
  letter-spacing: 0;
  line-height: 32px;
`;

export default TextAndSupportingText2;
