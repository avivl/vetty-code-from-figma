import React from "react";
import Input from "../Input";
import styled from "styled-components";
import { InterMediumOxfordBlue14px } from "../../styledMixins";


class InputWithLabel2 extends React.Component {
  render() {
    const { label, className, inputProps } = this.props;

    return (
      <TextareaInputFieldBase className={`textarea-input-field-base-11 ${className || ""}`}>
        <Label className="label-9">{label}</Label>
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

  &.textarea-input-field-base-11.input-with-label-2 {
    min-height: 154px;
  }
`;

const Label = styled.p`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default InputWithLabel2;
