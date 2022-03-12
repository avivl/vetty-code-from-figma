import React from "react";
import DestructiveFalse2 from "../DestructiveFalse2";
import styled from "styled-components";


class LabelTrueHintTextFalseDestructiveFa2 extends React.Component {
  render() {
    const { destructiveFalse2Props } = this.props;

    return (
      <TextareaInputField>
        <DestructiveFalse2
          label={destructiveFalse2Props.label}
          className={destructiveFalse2Props.className}
          inputProps={destructiveFalse2Props.inputProps}
        />
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

export default LabelTrueHintTextFalseDestructiveFa2;
