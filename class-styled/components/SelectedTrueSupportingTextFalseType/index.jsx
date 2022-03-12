import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { Border1pxMischka } from "../../styledMixins";


class SelectedTrueSupportingTextFalseType extends React.Component {
  render() {
    const { chevronDown, className, textProps } = this.props;

    return (
      <Input className={`input-30 ${className || ""}`}>
        <Content className="content-52">
          <Text className={textProps.className}>{textProps.children}</Text>
        </Content>
        <ChevronDown className="chevron-down-4" src={chevronDown} />
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
  box-shadow: 0px 1px 2px #1018280d;

  &.input-30.input-31 {
    overflow: hidden;
    box-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }

  &.input-30.input-dropdown-menu-item-7 {
    margin-top: 4px;
    background-color: var(--white-lilac);
    border-radius: unset;
    box-shadow: unset;
  }

  &.input-30.input-32 {
    overflow: hidden;
    box-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }

  &.input-30.input-dropdown-menu-item-8 {
    margin-top: 4px;
    background-color: var(--white-lilac);
    border-radius: unset;
    box-shadow: unset;
  }
`;

const Content = styled.div`
  margin-top: 10px;
  width: 378px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const ChevronDown = styled.img`
  margin-top: 12px;
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

export default SelectedTrueSupportingTextFalseType;
