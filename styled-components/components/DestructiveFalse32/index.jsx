import React from "react";
import InputWithLabel2 from "../InputWithLabel2";
import styled from "styled-components";


class DestructiveFalse32 extends React.Component {
  render() {
    const { className, inputWithLabel2Props } = this.props;

    return (
      <TextareaInputField className={`textarea-input-field-2 ${className || ""}`}>
        <InputWithLabel2
          label={inputWithLabel2Props.label}
          className={inputWithLabel2Props.className}
          inputProps={inputWithLabel2Props.inputProps}
        />
      </TextareaInputField>
    );
  }
}

const TextareaInputField = styled.div`
  height: 162px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;

  &.textarea-input-field-2.textarea-input-field-3 {
    margin-left: 2px;
  }

  &.textarea-input-field-2.textarea-input-field-4 {
    margin-top: unset;
  }

  &.textarea-input-field-2.textarea-input-field-5 {
    margin-top: 38px;
  }

  &.textarea-input-field-2.textarea-input-field-6 {
    margin-left: 2px;
  }
`;

export default DestructiveFalse32;
