import React from "react";
import TypeDefaultDestructiveFalse2 from "../TypeDefaultDestructiveFalse2";
import styled from "styled-components";


class TypeDefaultLeadingIconFalseLabelTru2 extends React.Component {
  render() {
    const { className, typeDefaultDestructiveFalse2Props } = this.props;

    return (
      <InputField className={`input-field-17 ${className || ""}`}>
        <TypeDefaultDestructiveFalse2
          label={typeDefaultDestructiveFalse2Props.label}
          className={typeDefaultDestructiveFalse2Props.className}
          input2Props={typeDefaultDestructiveFalse2Props.input2Props}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  height: 70px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 346px;

  &.input-field-17.input-field-18 {
    margin-top: 24px;
  }

  &.input-field-17.input-field-19 {
    margin-top: 24px;
  }
`;

export default TypeDefaultLeadingIconFalseLabelTru2;
