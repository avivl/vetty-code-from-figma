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
          chevronDown={labelTrueTypeDefaultStatePlaceholde.chevronDown}
          className={labelTrueTypeDefaultStatePlaceholde.className}
          content5Props={labelTrueTypeDefaultStatePlaceholde.content5Props}
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  width: 434px;
  height: 70px;
  position: relative;
  display: flex;

  &.input-dropdown.input-dropdown-1 {
    margin-left: 35px;
  }

  &.input-dropdown.input-dropdown-2 {
    margin-top: 100px;
    margin-left: 116px;
  }

  &.input-dropdown.input-dropdown-3 {
    margin-left: 35px;
  }
`;

export default StatePlaceholderTypeDefaultSupporti;
