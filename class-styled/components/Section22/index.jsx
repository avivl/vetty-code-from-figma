import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";


class Section22 extends React.Component {
  render() {
    const { text21Props, text22Props } = this.props;

    return (
      <Section>
        <Text2 className={text21Props.className}>{text21Props.children}</Text2>
        <Text2 className={text22Props.className}>{text22Props.children}</Text2>
      </Section>
    );
  }
}

const Section = styled.div`
  width: 904px;
  height: 265px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Section1 = styled.div`
  width: 904px;
  height: 265px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Section2 = styled.div`
  width: 904px;
  height: 265px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Section3 = styled.div`
  width: 904px;
  height: 265px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

export default Section22;
