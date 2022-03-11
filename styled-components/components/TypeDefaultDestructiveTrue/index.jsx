import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { InterNormalCinnabar14px, InterMediumOxfordBlue14px, Border1pxMonaLisa } from "../../styledMixins";


class TypeDefaultDestructiveTrue extends React.Component {
  render() {
    const { label, hintText, textProps } = this.props;

    return (
      <InputFieldBase>
        <InputWithLabel>
          <Label>{label}</Label>
          <Input>
            <Text className={textProps.className}>{textProps.children}</Text>
            <AlertCircle src="/img/alert-circle@2x.svg" />
          </Input>
        </InputWithLabel>
        <HintText>{hintText}</HintText>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 434px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 96px;
`;

const InputWithLabel = styled.div`
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
  ${Border1pxMonaLisa}
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

const AlertCircle = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

const HintText = styled.p`
  ${InterNormalCinnabar14px}
  min-height: 20px;
  margin-top: 6px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default TypeDefaultDestructiveTrue;
