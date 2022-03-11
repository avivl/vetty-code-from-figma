import React from "react";
import OpenFalseSupportingTextFalseTooltip from "../OpenFalseSupportingTextFalseTooltip";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, InterNormalPaleSky16px, Border1pxMischka } from "../../styledMixins";


class TypeDefaultDestructiveFalse5 extends React.Component {
  render() {
    const { label, text, openFalseSupportingTextFalseTooltip } = this.props;

    return (
      <InputFieldBase>
        <Label>{label}</Label>
        <Input>
          <Text>{text}</Text>
          <OpenFalseSupportingTextFalseTooltip src={openFalseSupportingTextFalseTooltip.src} />
        </Input>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 434px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  width: 434px;
  height: 44px;
  position: relative;
  margin-top: 6px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterNormalPaleSky16px}
  width: 382px;
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default TypeDefaultDestructiveFalse5;
