import React from "react";
import TypeDefaultDestructiveFalse3 from "../TypeDefaultDestructiveFalse3";
import styled from "styled-components";


class TypeDefaultLeadingIconFalseLabelTru3 extends React.Component {
  render() {
    const { className, typeDefaultDestructiveFalse3Props } = this.props;

    return (
      <InputField className={`input-field-18 ${className || ""}`}>
        <TypeDefaultDestructiveFalse3 inputWithLabel4Props={typeDefaultDestructiveFalse3Props.inputWithLabel4Props} />
      </InputField>
    );
  }
}

const InputField = styled.div`
  width: 360px;
  height: 96px;
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: center;

  &.input-field-18.input-field-19 {
    margin-top: unset;
  }
`;

export default TypeDefaultLeadingIconFalseLabelTru3;
