import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import Section from "../Section";
import Section22 from "../Section22";
import styled from "styled-components";


class Frame14015 extends React.Component {
  render() {
    const { supportingTextTrueTabsFalseActionsF, sectionProps, section22Props } = this.props;

    return (
      <Frame140151>
        <SupportingTextTrueTabsFalseActionsF>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <Section1 src="/img/section@1x.png" />
        <Section text2Props={sectionProps.text2Props} />
        <Section22 text21Props={section22Props.text21Props} text22Props={section22Props.text22Props} />
      </Frame140151>
    );
  }
}

const Frame140151 = styled.div`
  width: 904px;
  height: 661px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section1 = styled.img`
  width: 904px;
  height: 56px;
  margin-top: 24px;
`;

const Frame140152 = styled.div`
  width: 904px;
  height: 661px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section2 = styled.img`
  width: 904px;
  height: 56px;
  margin-top: 24px;
`;

const Frame140153 = styled.div`
  width: 904px;
  height: 661px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section3 = styled.img`
  width: 904px;
  height: 56px;
  margin-top: 24px;
`;

export default Frame14015;
