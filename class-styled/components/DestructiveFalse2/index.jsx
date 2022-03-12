import React from "react";
import Input from "../Input";
import styled from "styled-components";


class DestructiveFalse2 extends React.Component {
  render() {
    const { label, className, inputProps } = this.props;

    return (
      <TextareaInputFieldBase className={`textarea-input-field-base-1 ${className || ""}`}>
        <InputWithLabel className="input-with-label-8">
          <Label className="label-7" src={label} />
          <Input text2Props={inputProps.text2Props} />
        </InputWithLabel>
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  width: 904px;
  display: flex;
`;

const InputWithLabel = styled.div`
  width: 904px;
  height: 162px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.img`
  margin-left: 1px;
  width: 557.4259033203125px;
  height: 14.293212890625px;
  margin-top: 2.8px;
`;

const Label1 = styled.img`
  .textarea-input-field-base-1.textarea-input-field-base-2 & {
    width: 301.2423095703125px;
  }
`;

const Label2 = styled.img`
  .textarea-input-field-base-1.textarea-input-field-base-3 & {
    width: 557.4267578125px;
  }
`;

const Label3 = styled.img`
  .textarea-input-field-base-1.textarea-input-field-base-4 & {
    width: 301.2431640625px;
  }
`;

export default DestructiveFalse2;
