import React from "react";
import Text2 from "../Text2";
import OpenFalseSupportingTextFalseTooltip from "../OpenFalseSupportingTextFalseTooltip";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class TypeDefaultDestructiveFalse5 extends React.Component {
  render() {
    const { label, text2Props, openFalseSupportingTextFalseTooltip } = this.props;

    return (
      <InputFieldBase>
        <InputWithLabel>
          <Label>{label}</Label>
          <Input>
            <Content>
              <Text2 className={text2Props.className}>{text2Props.children}</Text2>
            </Content>
            <OpenFalseSupportingTextFalseTooltip src={openFalseSupportingTextFalseTooltip.src} />
          </Input>
        </InputWithLabel>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 434px;
  display: flex;
`;

const InputWithLabel = styled.div`
  width: 434px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 77px;
  height: 20px;
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
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Content = styled.div`
  margin-top: 10px;
  width: 382px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

export default TypeDefaultDestructiveFalse5;
