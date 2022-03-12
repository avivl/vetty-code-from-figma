import React from "react";
import DestructiveFalse4 from "../DestructiveFalse4";
import styled from "styled-components";


class LabelTrueHintTextFalseDestructiveFa4 extends React.Component {
  render() {
    const { destructiveFalse4Props } = this.props;

    return (
      <TextareaInputField>
        <DestructiveFalse4
          label={destructiveFalse4Props.label}
          className={destructiveFalse4Props.className}
          input2Props={destructiveFalse4Props.input2Props}
        />
      </TextareaInputField>
    );
  }
}

const TextareaInputField = styled.div`
  width: 346px;
  height: 162px;
  position: relative;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextareaInputField1 = styled.div`
  width: 346px;
  height: 162px;
  position: relative;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LabelTrueHintTextFalseDestructiveFa4;
