import React from "react";
import SizemdPlaceholderFalseTextTrueStatu from "../SizemdPlaceholderFalseTextTrueStatu";
import styled from "styled-components";


class TypeAvatarOpenFalse extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Dropdown className={`dropdown ${className || ""}`}>
        <SizemdPlaceholderFalseTextTrueStatu />
      </Dropdown>
    );
  }
}

const Dropdown = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;

  &.dropdown.dropdown-1 {
    margin-left: 56px;
  }

  &.dropdown.dropdown-2 {
    margin-left: 56px;
  }

  &.dropdown.dropdown-3 {
    margin-left: 56px;
  }

  &.dropdown.dropdown-4 {
    margin-left: 56px;
  }

  &.dropdown.dropdown-5 {
    margin-left: 56px;
  }
`;

export default TypeAvatarOpenFalse;
