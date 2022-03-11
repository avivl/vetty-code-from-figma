import React from "react";
import SelectedFalseSupportingTextFalseTyp from "../SelectedFalseSupportingTextFalseTyp";
import styled from "styled-components";
import { InterMediumOxfordBlue14px } from "../../styledMixins";


class TypeDefaultDestructiveFalse4 extends React.Component {
  render() {
    const { className, selectedFalseSupportingTextFalseTyp } = this.props;

    return (
      <InputFieldBase className={`input-field-base-18 ${className || ""}`}>
        <Label className="label-23">Full Name *</Label>
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp.className}
          textProps={selectedFalseSupportingTextFalseTyp.textProps}
        />
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 434px;
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

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-field-base-18.input-field-base-19  & {
    text-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }
`;

export default TypeDefaultDestructiveFalse4;
