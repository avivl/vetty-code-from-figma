import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxPerfume } from "../../styledMixins";


class DestructiveFalse5 extends React.Component {
  render() {
    const { label, textProps } = this.props;

    return (
      <InputWithLabel>
        <Label>{label}</Label>
        <Input>
          <Text className={textProps.className}>{textProps.children}</Text>
        </Input>
      </InputWithLabel>
    );
  }
}

const InputWithLabel = styled.div`
  width: 904px;
  height: 162px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  ${InterMediumOxfordBlue14px}
  width: 201px;
  height: 20px;
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
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
`;

export default DestructiveFalse5;
