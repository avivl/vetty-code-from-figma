import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { Border1pxMischka } from "../../styledMixins";


class SelectedFalseSupportingTextFalseTyp extends React.Component {
  render() {
    const { className, textProps } = this.props;

    return (
      <Input className={`input-23 ${className || ""}`}>
        <Text className={textProps.className}>{textProps.children}</Text>
      </Input>
    );
  }
}

const Input = styled.div`
  ${Border1pxMischka}
  width: 434px;
  height: 44px;
  position: relative;
  margin-top: 6px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.input-23.input-24 {
    box-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }

  &.input-23.input-dropdown-menu-item {
    min-width: 434px;
    width: unset;
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-23.input-dropdown-menu-item-1 {
    min-width: 434px;
    width: unset;
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-23.input-dropdown-menu-item-2 {
    min-width: 434px;
    width: unset;
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-23.input-dropdown-menu-item-3 {
    min-width: 434px;
    width: unset;
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-23.input-dropdown-menu-item-4 {
    min-width: 434px;
    width: unset;
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-23.input-dropdown-menu-item-5 {
    min-width: 434px;
    width: unset;
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-23.input-dropdown-menu-item-6 {
    min-width: 434px;
    width: unset;
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }
`;

export default SelectedFalseSupportingTextFalseTyp;
