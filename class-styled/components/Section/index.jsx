import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";


class Section extends React.Component {
  render() {
    const { className, text2Props } = this.props;

    return (
      <Section1 className={`section-1 ${className || ""}`}>
        <Text2 className={text2Props.className}>{text2Props.children}</Text2>
      </Section1>
    );
  }
}

const Section1 = styled.div`
  width: 904px;
  height: 272px;
  position: relative;
  margin-top: 24px;
  display: flex;

  &.section-1.section-2 {
    height: 280px;
  }

  &.section-1.section-3 {
    height: 148px;
  }

  &.section-1.section-4 {
    height: 584px;
    margin-top: unset;
  }

  &.section-1.section-5 {
    margin-top: 51.5px;
  }

  &.section-1.section-6 {
    height: 280px;
  }

  &.section-1.section-7 {
    height: 148px;
  }

  &.section-1.section-8 {
    height: 584px;
    margin-top: unset;
  }

  &.section-1.section-9 {
    height: 280px;
  }

  &.section-1.section-10 {
    height: 148px;
  }

  &.section-1.section-11 {
    height: 280px;
  }

  &.section-1.section-12 {
    height: 148px;
  }
`;

export default Section;
