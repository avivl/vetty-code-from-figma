import React from "react";
import Input2 from "../Input2";
import styled from "styled-components";
import { InterMediumOxfordBlue14px } from "../../styledMixins";


class TypeDefaultDestructiveFalse2 extends React.Component {
  render() {
    const { label, className, input2Props } = this.props;

    return (
      <InputFieldBase className={`input-field-base-15 ${className || ""}`}>
        <Label className="label-6">{label}</Label>
        <Input2>{input2Props.children}</Input2>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 346px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default TypeDefaultDestructiveFalse2;
