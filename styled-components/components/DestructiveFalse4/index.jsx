import React from "react";
import Input from "../Input";
import styled from "styled-components";
import { InterMediumEbonyClay14px } from "../../styledMixins";


class DestructiveFalse4 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <TextareaInputFieldBase>
        <Label>Add links for similar work you’ve done in the past (seperate by rows)</Label>
        <Input className={inputProps.className}>{inputProps.children}</Input>
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  width: 904px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 162px;
`;

const Label = styled.p`
  ${InterMediumEbonyClay14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const TextareaInputFieldBase1 = styled.div`
  width: 904px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 162px;
`;

const Label1 = styled.p`
  ${InterMediumEbonyClay14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default DestructiveFalse4;
