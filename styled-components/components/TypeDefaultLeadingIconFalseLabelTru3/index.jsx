import React from "react";
import TypeDefaultDestructiveFalse22 from "../TypeDefaultDestructiveFalse22";
import styled from "styled-components";


class TypeDefaultLeadingIconFalseLabelTru3 extends React.Component {
  render() {
    const { className, typeDefaultDestructiveFalse2Props } = this.props;

    return (
      <InputField className={`input-field-20 ${className || ""}`}>
        <TypeDefaultDestructiveFalse22
          label={typeDefaultDestructiveFalse2Props.label}
          typeDefaultDestructiveFalseProps={typeDefaultDestructiveFalse2Props.typeDefaultDestructiveFalseProps}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  height: 96px;
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 360px;

  &.input-field-20.input-field-21 {
    margin-top: unset;
  }
`;

export default TypeDefaultLeadingIconFalseLabelTru3;
