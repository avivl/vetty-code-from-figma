import React from "react";
import Input2 from "../Input2";
import styled from "styled-components";


class DestructiveFalse4 extends React.Component {
  render() {
    const { label, className, input2Props } = this.props;

    return (
      <TextareaInputFieldBase className={`textarea-input-field-base-6 ${className || ""}`}>
        <InputWithLabel className="input-with-label-13">
          <Label className="label-11" src={label} />
          <Input2 className={input2Props.className} text2Props={input2Props.text2Props} />
        </InputWithLabel>
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  width: 346px;
  display: flex;
`;

const InputWithLabel = styled.div`
  width: 346px;
  height: 162px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.img`
  margin-left: 99.5px;
  width: 360.652099609375px;
  height: 14.29345703125px;
  margin-top: 2.8px;
`;

const Label1 = styled.img`
  .textarea-input-field-base-6.textarea-input-field-base-7 & {
    margin-left: 1px;
    width: 301.242431640625px;
  }
`;

const Label2 = styled.img`
  .textarea-input-field-base-6.textarea-input-field-base-8 & {
    width: 360.65234375px;
  }
`;

const Label3 = styled.img`
  .textarea-input-field-base-6.textarea-input-field-base-9 & {
    margin-left: 1px;
    width: 301.2431640625px;
  }
`;

export default DestructiveFalse4;
