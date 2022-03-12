import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";
import { Border1pxMischka } from "../../styledMixins";


class Input2 extends React.Component {
  render() {
    const { className, text2Props } = this.props;

    return (
      <Input className={`input-18 ${className || ""}`}>
        <Text2 className={text2Props.className}>{text2Props.children}</Text2>
      </Input>
    );
  }
}

const Input = styled.div`
  ${Border1pxMischka}
  width: 346px;
  height: 102px;
  position: relative;
  margin-top: 10px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.input-18.input-19 {
    height: 136px;
    margin-top: 9px;
  }

  &.input-18.input-20 {
    height: 136px;
    margin-top: 9px;
  }

  &.input-18.input-21 {
    height: 136px;
    margin-top: 9px;
  }

  &.input-18.input-22 {
    height: 136px;
    margin-top: 9px;
  }
`;

export default Input2;
