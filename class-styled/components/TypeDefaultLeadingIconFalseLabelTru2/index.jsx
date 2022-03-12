import React from "react";
import TypeDefaultDestructiveFalse2 from "../TypeDefaultDestructiveFalse2";
import styled from "styled-components";


class TypeDefaultLeadingIconFalseLabelTru2 extends React.Component {
  render() {
    const { className, typeDefaultDestructiveFalse2Props } = this.props;

    return (
      <InputField className={`input-field-14 ${className || ""}`}>
        <TypeDefaultDestructiveFalse2 inputWithLabel4Props={typeDefaultDestructiveFalse2Props.inputWithLabel4Props} />
      </InputField>
    );
  }
}

const InputField = styled.div`
  width: 360px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;

  &.input-field-14.input-field-15 {
    margin-top: 20px;
  }

  &.input-field-14.input-field-16 {
    margin-top: 20px;
  }

  &.input-field-14.input-field-17 {
    margin-top: 20px;
  }
`;

export default TypeDefaultLeadingIconFalseLabelTru2;
