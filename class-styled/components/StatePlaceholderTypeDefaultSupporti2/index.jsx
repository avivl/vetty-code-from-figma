import React from "react";
import LabelTrueTypeDefaultStatePlaceholde2 from "../LabelTrueTypeDefaultStatePlaceholde2";
import styled from "styled-components";


class StatePlaceholderTypeDefaultSupporti2 extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStatePlaceholde } = this.props;

    return (
      <InputDropdown className={`input-dropdown-7 ${className || ""}`}>
        <LabelTrueTypeDefaultStatePlaceholde2
          label={labelTrueTypeDefaultStatePlaceholde.label}
          className={labelTrueTypeDefaultStatePlaceholde.className}
          text2Props={labelTrueTypeDefaultStatePlaceholde.text2Props}
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  width: 284px;
  height: 70px;
  position: relative;
  margin-left: 24px;
  display: flex;

  &.input-dropdown-7.input-dropdown-8 {
    width: 346px;
    margin-top: 24px;
    margin-left: unset;
  }

  &.input-dropdown-7.input-dropdown-9 {
    width: 346px;
    margin-top: 24px;
    margin-left: unset;
  }

  &.input-dropdown-7.input-dropdown-10 {
    width: 346px;
    margin-top: 24px;
    margin-left: unset;
  }

  &.input-dropdown-7.input-dropdown-11 {
    width: 346px;
    margin-top: 24px;
    margin-left: unset;
  }

  &.input-dropdown-7.input-dropdown-12 {
    width: 346px;
    margin-top: 24px;
    margin-left: unset;
  }

  &.input-dropdown-7.input-dropdown-13 {
    width: 346px;
    margin-top: 24px;
    margin-left: unset;
  }
`;

export default StatePlaceholderTypeDefaultSupporti2;
