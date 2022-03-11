import React from "react";
import TypeLeadingTextDestructiveFalse from "../TypeLeadingTextDestructiveFalse";
import styled from "styled-components";


class TypeLeadingTextDestructiveFalse2 extends React.Component {
  render() {
    const { className, typeLeadingTextDestructiveFalseProp } = this.props;

    return (
      <InputField className={`input-field-12 ${className || ""}`}>
        <TypeLeadingTextDestructiveFalse className={typeLeadingTextDestructiveFalseProp.className} />
      </InputField>
    );
  }
}

const InputField = styled.div`
  height: 70px;
  position: relative;
  margin-left: 24px;
  display: flex;
  align-items: flex-start;
  min-width: 176px;

  &.input-field-12.input-field-13 {
    margin-top: 24px;
    min-width: 346px;
    margin-left: unset;
  }

  &.input-field-12.input-field-14 {
    margin-left: 36px;
    min-width: 161px;
  }

  &.input-field-12.input-field-15 {
    margin-top: 24px;
    min-width: 346px;
    margin-left: unset;
  }

  &.input-field-12.input-field-16 {
    margin-left: 36px;
    min-width: 161px;
  }
`;

export default TypeLeadingTextDestructiveFalse2;
