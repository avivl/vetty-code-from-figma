import React from "react";
import LabelTrueTypeDefaultStatePlaceholde from "../LabelTrueTypeDefaultStatePlaceholde";
import styled from "styled-components";


class StatePlaceholderTypeDefaultSupporti extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStatePlaceholde } = this.props;

    return (
      <InputDropdown className={`input-dropdown ${className || ""}`}>
        <LabelTrueTypeDefaultStatePlaceholde
          label={labelTrueTypeDefaultStatePlaceholde.label}
          text={labelTrueTypeDefaultStatePlaceholde.text}
          className={labelTrueTypeDefaultStatePlaceholde.className}
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  height: 70px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 434px;

  &.input-dropdown.input-dropdown-1 {
    margin-left: 24px;
    min-width: 284px;
  }

  &.input-dropdown.input-dropdown-2 {
    margin-top: 24px;
    min-width: 346px;
  }

  &.input-dropdown.input-dropdown-3 {
    margin-top: 24px;
    min-width: 346px;
  }

  &.input-dropdown.input-dropdown-4 {
    margin-top: 24px;
    min-width: 346px;
  }

  &.input-dropdown.input-dropdown-5 {
    margin-left: 35px;
  }

  &.input-dropdown.input-dropdown-6 {
    margin-top: 100px;
    margin-left: 116px;
  }

  &.input-dropdown.input-dropdown-7 {
    margin-top: 24px;
    min-width: 346px;
  }

  &.input-dropdown.input-dropdown-8 {
    margin-top: 24px;
    min-width: 346px;
  }

  &.input-dropdown.input-dropdown-9 {
    margin-top: 24px;
    min-width: 346px;
  }

  &.input-dropdown.input-dropdown-10 {
    margin-left: 35px;
  }

  &.input-dropdown.input-dropdown-11 {
    margin-left: 24px;
    min-width: 284px;
  }
`;

export default StatePlaceholderTypeDefaultSupporti;
