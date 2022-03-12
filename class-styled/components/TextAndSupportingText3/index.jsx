import React from "react";
import styled from "styled-components";
import { InterMediumMirage24px } from "../../styledMixins";


class TextAndSupportingText3 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <TextAndSupportingText className={`text-and-supporting-text-16 ${className || ""}`}>
        <Text className="text-110">Technical Program Manager, Mobile Software Engineering</Text>
      </TextAndSupportingText>
    );
  }
}

const TextAndSupportingText = styled.div`
  width: 1164px;
  display: flex;
`;

const Text = styled.div`
  ${InterMediumMirage24px}
  width: 1164px;
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumMirage24px}

  .text-and-supporting-text-16.text-and-supporting-text-18  & {
    width: 663px;
  }
`;

export default TextAndSupportingText3;
