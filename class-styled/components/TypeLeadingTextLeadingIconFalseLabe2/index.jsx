import React from "react";
import TypeLeadingTextDestructiveFalse2 from "../TypeLeadingTextDestructiveFalse2";
import styled from "styled-components";


class TypeLeadingTextLeadingIconFalseLabe2 extends React.Component {
  render() {
    const { className, typeLeadingTextDestructiveFalse2Pro } = this.props;

    return (
      <InputField className={`input-field-11 ${className || ""}`}>
        <TypeLeadingTextDestructiveFalse2
          addOn={typeLeadingTextDestructiveFalse2Pro.addOn}
          textInput={typeLeadingTextDestructiveFalse2Pro.textInput}
          className={typeLeadingTextDestructiveFalse2Pro.className}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  width: 346px;
  height: 70px;
  position: relative;
  margin-top: 24px;
  display: flex;
  justify-content: center;

  &.input-field-11.input-field-12 {
    width: 161px;
    margin-left: 36px;
    margin-top: unset;
  }

  &.input-field-11.input-field-13 {
    width: 161px;
    margin-left: 36px;
    margin-top: unset;
  }
`;

export default TypeLeadingTextLeadingIconFalseLabe2;
