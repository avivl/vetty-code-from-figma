import React from "react";
import Input2 from "../Input2";
import styled from "styled-components";


class DestructiveFalse2 extends React.Component {
  render() {
    const { className, input2Props } = this.props;

    return (
      <TextareaInputFieldBase className={`textarea-input-field-base-6 ${className || ""}`}>
        <Label className="label-8" src="/img/label-3@2x.svg" />
        <Input2 className={input2Props.className}>{input2Props.children}</Input2>
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  width: 346px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 162px;

  &.textarea-input-field-base-6.textarea-input-field-base-7 {
    align-items: flex-end;
  }

  &.textarea-input-field-base-6.textarea-input-field-base-9 {
    align-items: flex-end;
  }
`;

const Label = styled.img`
  width: 310px;
  height: 47px;
  margin-top: 3px;
  margin-left: 2.5px;
`;

const Label1 = styled.img`
  .textarea-input-field-base-6.textarea-input-field-base-7 & {
    width: 361px;
    height: 14px;
    margin-top: 2px;
    margin-right: -114.15px;
    margin-left: unset;
  }
`;

const Label2 = styled.img`
  .textarea-input-field-base-6.textarea-input-field-base-8 & {
    width: 301px;
    height: 14px;
    margin-top: 2px;
    margin-left: 1px;
  }
`;

const Label3 = styled.img`
  .textarea-input-field-base-6.textarea-input-field-base-9 & {
    width: 361px;
    height: 14px;
    margin-top: 2px;
    margin-right: -114.15px;
    margin-left: unset;
  }
`;

const Label4 = styled.img`
  .textarea-input-field-base-6.textarea-input-field-base-10 & {
    width: 301px;
    height: 14px;
    margin-top: 2px;
    margin-left: 1px;
  }
`;

export default DestructiveFalse2;
