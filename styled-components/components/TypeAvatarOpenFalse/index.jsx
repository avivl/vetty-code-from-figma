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
  height: 40px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 40px;

  &.dropdown.dropdown-1 {
    margin-left: 995px;
  }

  &.dropdown.dropdown-2 {
    margin-left: 913px;
  }

  &.dropdown.dropdown-4 {
    margin-left: 814px;
  }

  &.dropdown.dropdown-5 {
    margin-left: 995px;
  }

  &.dropdown.dropdown-6 {
    margin-left: 995px;
  }
`;

export default TypeAvatarOpenFalse;
