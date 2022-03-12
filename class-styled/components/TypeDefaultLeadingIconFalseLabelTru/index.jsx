import React from "react";
import TypeDefaultDestructiveFalse from "../TypeDefaultDestructiveFalse";
import styled from "styled-components";


class TypeDefaultLeadingIconFalseLabelTru extends React.Component {
  render() {
    const { className, typeDefaultDestructiveFalseProps } = this.props;

    return (
      <InputField className={`input-field ${className || ""}`}>
        <TypeDefaultDestructiveFalse
          label={typeDefaultDestructiveFalseProps.label}
          className={typeDefaultDestructiveFalseProps.className}
          text2Props={typeDefaultDestructiveFalseProps.text2Props}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  width: 434px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;

  &.input-field.input-field-1 {
    margin-left: 24px;
  }

  &.input-field.input-field-2 {
    width: 346px;
  }

  &.input-field.input-field-3 {
    width: 346px;
    margin-top: 24px;
  }

  &.input-field.input-field-4 {
    margin-left: 36px;
  }

  &.input-field.input-field-5 {
    margin-top: 14px;
  }

  &.input-field.input-field-6 {
    width: 346px;
  }

  &.input-field.input-field-7 {
    width: 346px;
    margin-top: 24px;
  }

  &.input-field.input-field-8 {
    margin-left: 36px;
  }

  &.input-field.input-field-9 {
    margin-left: 24px;
  }
`;

export default TypeDefaultLeadingIconFalseLabelTru;
