import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";


class Section5 extends React.Component {
  render() {
    const { className, text2Props } = this.props;

    return (
      <Section className={`section-29 ${className || ""}`}>
        <Text2 className={text2Props.className}>{text2Props.children}</Text2>
      </Section>
    );
  }
}

const Section = styled.div`
  width: 343px;
  height: 664px;
  position: relative;
  margin-top: 16px;
  display: flex;

  &.section-29.section-30 {
    height: 408px;
  }

  &.section-29.section-31 {
    height: 408px;
  }
`;

export default Section5;
