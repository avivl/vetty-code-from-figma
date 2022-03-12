import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { Border1pxMischka } from "../../styledMixins";


class SelectedFalseSupportingTextFalseTyp extends React.Component {
  render() {
    const { className, textProps } = this.props;

    return (
      <Input className={`input-25 ${className || ""}`}>
        <Content className="content-49">
          <Text className={textProps.className}>{textProps.children}</Text>
        </Content>
      </Input>
    );
  }
}

const Input = styled.div`
  ${Border1pxMischka}
  width: 434px;
  height: 44px;
  margin-top: 6px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.input-25.input-26 {
    box-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }

  &.input-25.input-dropdown-menu-item {
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-25.input-dropdown-menu-item-1 {
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-25.input-dropdown-menu-item-2 {
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-25.input-dropdown-menu-item-3 {
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-25.input-dropdown-menu-item-4 {
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-25.input-dropdown-menu-item-5 {
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }

  &.input-25.input-dropdown-menu-item-6 {
    margin-top: unset;
    background-color: unset;
    border-radius: unset;
    overflow: unset;
    box-shadow: unset;
  }
`;

const Content = styled.div`
  margin-top: 10px;
  width: 406px;
  height: 24px;
  margin-left: 14px;
  position: relative;
  display: flex;
`;

export default SelectedFalseSupportingTextFalseTyp;
