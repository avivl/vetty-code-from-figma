import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";
import { Border1pxMischka } from "../../styledMixins";


class Input extends React.Component {
  render() {
    const { className, text2Props } = this.props;

    return (
      <Input1 className={`input-5 ${className || ""}`}>
        <Text2 className={text2Props.className}>{text2Props.children}</Text2>
      </Input1>
    );
  }
}

const Input1 = styled.div`
  ${Border1pxMischka}
  width: 904px;
  height: 136px;
  position: relative;
  margin-top: 9px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.input-5.input-7 {
    margin-top: 6px;
  }

  &.input-5.input-8 {
    margin-top: 6px;
  }

  &.input-5.input-9 {
    margin-top: 6px;
  }

  &.input-5.input-10 {
    margin-top: 6px;
  }

  &.input-5.input-11 {
    margin-top: 6px;
    background-color: var(--white-lilac);
  }

  &.input-5.input-12 {
    height: 128px;
    margin-top: 6px;
  }

  &.input-5.input-13 {
    margin-top: 6px;
  }

  &.input-5.input-14 {
    margin-top: 6px;
  }

  &.input-5.input-15 {
    margin-top: 6px;
  }
`;

export default Input;
