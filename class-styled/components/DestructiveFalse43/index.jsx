import React from "react";
import Input from "../Input";
import styled from "styled-components";
import { InterMediumEbonyClay14px } from "../../styledMixins";


class DestructiveFalse43 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <InputWithLabel>
        <Label>Add links for similar work you’ve done in the past (seperate by rows)</Label>
        <Input className={inputProps.className} text2Props={inputProps.text2Props} />
      </InputWithLabel>
    );
  }
}

const InputWithLabel = styled.div`
  width: 904px;
  height: 162px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  ${InterMediumEbonyClay14px}
  width: 457px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const InputWithLabel1 = styled.div`
  width: 904px;
  height: 162px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.p`
  ${InterMediumEbonyClay14px}
  width: 457px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default DestructiveFalse43;
