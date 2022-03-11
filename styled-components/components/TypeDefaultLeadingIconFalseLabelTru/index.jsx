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
          text={typeDefaultDestructiveFalseProps.text}
          className={typeDefaultDestructiveFalseProps.className}
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
  min-width: 434px;

  &.input-field.input-field-1 {
    margin-left: 24px;
  }

  &.input-field.input-field-2 {
    min-width: 360px;
  }

  &.input-field.input-field-3 {
    margin-top: 20px;
    min-width: 360px;
  }

  &.input-field.input-field-4 {
    margin-left: 36px;
  }

  &.input-field.input-field-5 {
    margin-top: 14px;
  }

  &.input-field.input-field-6 {
    margin-left: 36px;
  }

  &.input-field.input-field-7 {
    margin-left: 24px;
  }

  &.input-field.input-field-8 {
    min-width: 360px;
  }

  &.input-field.input-field-9 {
    margin-top: 20px;
    min-width: 360px;
  }

  &.input-field.input-field-10 {
    min-width: 360px;
  }

  &.input-field.input-field-11 {
    margin-top: 20px;
    min-width: 360px;
  }
`;

export default TypeDefaultLeadingIconFalseLabelTru;
