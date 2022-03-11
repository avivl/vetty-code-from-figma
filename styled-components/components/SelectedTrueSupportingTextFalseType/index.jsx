import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { Border1pxMischka } from "../../styledMixins";


class SelectedTrueSupportingTextFalseType extends React.Component {
  render() {
    const { className, textProps } = this.props;

    return (
      <Input className={`input-28 ${className || ""}`}>
        <Text className={textProps.className}>{textProps.children}</Text>
        <ChevronDown className="chevron-down-2" src="/img/chevron-down@2x.svg" />
      </Input>
    );
  }
}

const Input = styled.div`
  ${Border1pxMischka}
  height: 44px;
  position: relative;
  margin-top: 6px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  min-width: 434px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;

  &.input-28.input-29 {
    width: 434px;
    overflow: hidden;
    box-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
    min-width: unset;
  }

  &.input-28.input-dropdown-menu-item-7 {
    background-color: var(--white-lilac);
    margin-top: unset;
    border-radius: unset;
    box-shadow: unset;
  }

  &.input-28.input-30 {
    width: 434px;
    overflow: hidden;
    box-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
    min-width: unset;
  }

  &.input-28.input-dropdown-menu-item-8 {
    background-color: var(--white-lilac);
    margin-top: unset;
    border-radius: unset;
    box-shadow: unset;
  }
`;

const ChevronDown = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 314px;
`;

const ChevronUp = styled.img`
  .input-28.input-29 & {
    margin-left: 217px;
  }
`;

const Check = styled.img`
  .input-28.input-dropdown-menu-item-7 & {
    margin-left: 261px;
  }
`;

const ChevronUp1 = styled.img`
  .input-28.input-30 & {
    margin-left: 159px;
  }
`;

const Check1 = styled.img`
  .input-28.input-dropdown-menu-item-8 & {
    margin-left: 243px;
  }
`;

export default SelectedTrueSupportingTextFalseType;
