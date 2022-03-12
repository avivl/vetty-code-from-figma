import React from "react";
import DestructiveFalse32 from "../DestructiveFalse32";
import styled from "styled-components";


class LabelTrueHintTextFalseDestructiveFa5 extends React.Component {
  render() {
    const { className, destructiveFalse32Props } = this.props;

    return (
      <TextareaInputField className={`textarea-input-field-4 ${className || ""}`}>
        <DestructiveFalse32 inputWithLabel2Props={destructiveFalse32Props.inputWithLabel2Props} />
      </TextareaInputField>
    );
  }
}

const TextareaInputField = styled.div`
  width: 904px;
  height: 162px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.textarea-input-field-4.textarea-input-field-5 {
    margin-left: 2px;
  }

  &.textarea-input-field-4.textarea-input-field-6 {
    margin-top: unset;
  }

  &.textarea-input-field-4.textarea-input-field-7 {
    margin-top: 38px;
  }

  &.textarea-input-field-4.textarea-input-field-8 {
    margin-left: 2px;
  }
`;

export default LabelTrueHintTextFalseDestructiveFa5;
