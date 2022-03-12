import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { InterNormalCinnabar14px, InterMediumOxfordBlue14px, Border1pxMonaLisa } from "../../styledMixins";


class TypeDefaultDestructiveTrue extends React.Component {
  render() {
    const { label, alertCircle, hintText, textProps } = this.props;

    return (
      <InputFieldBase>
        <InputWithLabel>
          <Label>{label}</Label>
          <Input>
            <Content>
              <Text className={textProps.className}>{textProps.children}</Text>
            </Content>
            <AlertCircle src={alertCircle} />
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
`;

const InputWithLabel = styled.div`
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
  ${Border1pxMonaLisa}
  width: 434px;
  height: 44px;
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

const AlertCircle = styled.img`
  margin-top: 14px;
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

const HintText = styled.p`
  ${InterNormalCinnabar14px}
  height: 20px;
  margin-top: 6px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default TypeDefaultDestructiveTrue;
