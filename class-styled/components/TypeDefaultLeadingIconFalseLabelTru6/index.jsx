import React from "react";
import TypeDefaultDestructiveFalse5 from "../TypeDefaultDestructiveFalse5";
import styled from "styled-components";


class TypeDefaultLeadingIconFalseLabelTru6 extends React.Component {
  render() {
    const { typeDefaultDestructiveFalse5Props } = this.props;

    return (
      <InputField>
        <TypeDefaultDestructiveFalse5
          label={typeDefaultDestructiveFalse5Props.label}
          text2Props={typeDefaultDestructiveFalse5Props.text2Props}
          openFalseSupportingTextFalseTooltip={typeDefaultDestructiveFalse5Props.openFalseSupportingTextFalseTooltip}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  width: 434px;
  height: 70px;
  position: relative;
  margin-top: 23px;
  display: flex;
  justify-content: center;
`;

export default TypeDefaultLeadingIconFalseLabelTru6;
