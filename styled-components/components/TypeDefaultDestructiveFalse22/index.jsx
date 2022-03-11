import React from "react";
import TypeDefaultDestructiveFalse from "../TypeDefaultDestructiveFalse";
import styled from "styled-components";
import { InterNormalPaleSky14px } from "../../styledMixins";


class TypeDefaultDestructiveFalse22 extends React.Component {
  render() {
    const { label, typeDefaultDestructiveFalseProps } = this.props;

    return (
      <InputFieldBase>
        <TypeDefaultDestructiveFalse
          label={typeDefaultDestructiveFalseProps.label}
          text={typeDefaultDestructiveFalseProps.text}
          className={typeDefaultDestructiveFalseProps.className}
        />
        <HintText>{label}</HintText>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 96px;
`;

const HintText = styled.p`
  ${InterNormalPaleSky14px}
  min-height: 20px;
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
  align-items: flex-start;
  min-height: 96px;
`;

const HintText1 = styled.p`
  ${InterNormalPaleSky14px}
  min-height: 20px;
  margin-top: 6px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default TypeDefaultDestructiveFalse22;
