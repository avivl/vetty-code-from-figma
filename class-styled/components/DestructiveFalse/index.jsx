import React from "react";
import Input from "../Input";
import styled from "styled-components";


class DestructiveFalse extends React.Component {
  render() {
    const { className, inputProps } = this.props;

    return (
      <InputWithLabel className={`input-with-label-6 ${className || ""}`}>
        <Label className="label-6" src="/img/label@2x.png" />
        <Input text2Props={inputProps.text2Props} />
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

const Label = styled.img`
  margin-left: 1px;
  width: 471.5255126953125px;
  height: 14.293212890625px;
  margin-top: 2.8px;
`;

const Label1 = styled.img`
  .input-with-label-6.input-with-label-7 & {
    width: 471.5263671875px;
  }
`;

export default DestructiveFalse;
