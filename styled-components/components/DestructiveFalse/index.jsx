import React from "react";
import Input from "../Input";
import styled from "styled-components";


class DestructiveFalse extends React.Component {
  render() {
    const { className, inputProps } = this.props;

    return (
      <TextareaInputFieldBase className={`textarea-input-field-base ${className || ""}`}>
        <Label className="label-5" src="/img/label@2x.svg" />
        <Input>{inputProps.children}</Input>
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

const Label = styled.img`
  width: 472px;
  height: 14px;
  margin-top: 2px;
  margin-left: 1px;
`;

const Label1 = styled.img`
  .textarea-input-field-base.textarea-input-field-base-1 & {
    width: 557px;
  }
`;

const Label2 = styled.img`
  .textarea-input-field-base.textarea-input-field-base-2 & {
    width: 301px;
  }
`;

const Label3 = styled.img`
  .textarea-input-field-base.textarea-input-field-base-4 & {
    width: 557px;
  }
`;

const Label4 = styled.img`
  .textarea-input-field-base.textarea-input-field-base-5 & {
    width: 301px;
  }
`;

export default DestructiveFalse;
