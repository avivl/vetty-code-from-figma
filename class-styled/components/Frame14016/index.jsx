import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import Section from "../Section";
import Section22 from "../Section22";
import styled from "styled-components";


class Frame14016 extends React.Component {
  render() {
    const { supportingTextTrueTabsFalseActionsF, sectionProps, section22Props } = this.props;

    return (
      <Frame140161>
        <SupportingTextTrueTabsFalseActionsF>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <Section className={sectionProps.className} text2Props={sectionProps.text2Props} />
        <Section22 text21Props={section22Props.text21Props} text22Props={section22Props.text22Props} />
      </Frame140161>
    );
  }
}

const Frame140161 = styled.div`
  width: 904px;
  height: 593px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Frame140162 = styled.div`
  width: 904px;
  height: 593px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Frame140163 = styled.div`
  width: 904px;
  height: 593px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Frame140164 = styled.div`
  width: 904px;
  height: 593px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export default Frame14016;
