import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxPerfume } from "../../styledMixins";


class DestructiveFalse5 extends React.Component {
  render() {
    const { label, textProps } = this.props;

    return (
      <TextareaInputFieldBase>
        <Label>{label}</Label>
        <Input>
          <Text className={textProps.className}>{textProps.children}</Text>
        </Input>
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  width: 904px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 162px;
`;

const Label = styled.p`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxPerfume}
  width: 904px;
  height: 136px;
  position: relative;
  margin-top: 6px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
`;

export default DestructiveFalse5;
