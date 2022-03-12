import React from "react";
import InputWithLabel4 from "../InputWithLabel4";
import styled from "styled-components";
import { InterNormalPaleSky14px } from "../../styledMixins";


class TypeDefaultDestructiveFalse3 extends React.Component {
  render() {
    const { inputWithLabel4Props } = this.props;

    return (
      <InputFieldBase>
        <InputWithLabel4
          label={inputWithLabel4Props.label}
          className={inputWithLabel4Props.className}
          text2Props={inputWithLabel4Props.text2Props}
        />
        <HintText>Must be at least 8 characters.</HintText>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const HintText = styled.p`
  ${InterNormalPaleSky14px}
  height: 20px;
  margin-top: 6px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const InputFieldBase1 = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const HintText1 = styled.p`
  ${InterNormalPaleSky14px}
  height: 20px;
  margin-top: 6px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default TypeDefaultDestructiveFalse3;
