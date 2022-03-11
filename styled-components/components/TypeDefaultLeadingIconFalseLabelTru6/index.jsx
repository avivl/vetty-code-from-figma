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
          text={typeDefaultDestructiveFalse5Props.text}
          openFalseSupportingTextFalseTooltip={typeDefaultDestructiveFalse5Props.openFalseSupportingTextFalseTooltip}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  height: 70px;
  position: relative;
  margin-top: 23px;
  display: flex;
  align-items: flex-start;
  min-width: 434px;
`;

export default TypeDefaultLeadingIconFalseLabelTru6;
