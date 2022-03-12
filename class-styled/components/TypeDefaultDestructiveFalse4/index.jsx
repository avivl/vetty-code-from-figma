import React from "react";
import SelectedFalseSupportingTextFalseTyp from "../SelectedFalseSupportingTextFalseTyp";
import styled from "styled-components";
import { InterMediumOxfordBlue14px } from "../../styledMixins";


class TypeDefaultDestructiveFalse4 extends React.Component {
  render() {
    const { className, selectedFalseSupportingTextFalseTyp } = this.props;

    return (
      <InputFieldBase className={`input-field-base-17 ${className || ""}`}>
        <InputWithLabel className="input-with-label-31">
          <Label className="label-27">Full Name *</Label>
          <SelectedFalseSupportingTextFalseTyp
            className={selectedFalseSupportingTextFalseTyp.className}
            textProps={selectedFalseSupportingTextFalseTyp.textProps}
          />
        </InputWithLabel>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 434px;
  display: flex;
`;

const InputWithLabel = styled.div`
  width: 434px;
  height: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 77px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-field-base-17.input-field-base-18  & {
    text-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }
`;

export default TypeDefaultDestructiveFalse4;
