import React from "react";
import InputWithLabel2 from "../InputWithLabel2";
import styled from "styled-components";


class DestructiveFalse32 extends React.Component {
  render() {
    const { inputWithLabel2Props } = this.props;

    return (
      <TextareaInputFieldBase>
        <InputWithLabel2
          label={inputWithLabel2Props.label}
          className={inputWithLabel2Props.className}
          inputProps={inputWithLabel2Props.inputProps}
        />
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  height: 162px;
  width: 904px;
  position: relative;
  display: flex;
`;

const TextareaInputFieldBase1 = styled.div`
  height: 162px;
  width: 904px;
  position: relative;
  display: flex;
`;

const TextareaInputFieldBase2 = styled.div`
  height: 162px;
  width: 904px;
  position: relative;
  display: flex;
`;

export default DestructiveFalse32;
