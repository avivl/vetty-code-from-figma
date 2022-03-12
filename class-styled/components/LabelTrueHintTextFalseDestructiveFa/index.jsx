import React from "react";
import DestructiveFalse62 from "../DestructiveFalse62";
import styled from "styled-components";


class LabelTrueHintTextFalseDestructiveFa extends React.Component {
  render() {
    const { destructiveFalse62Props } = this.props;

    return (
      <TextareaInputField>
        <DestructiveFalse62 inputProps={destructiveFalse62Props.inputProps} />
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
`;

const TextareaInputField1 = styled.div`
  width: 904px;
  height: 162px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LabelTrueHintTextFalseDestructiveFa;
