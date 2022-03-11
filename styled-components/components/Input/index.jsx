import React from "react";
import styled from "styled-components";
import { Border1pxMischka, InterNormalPaleSky16px } from "../../styledMixins";


class Input extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Input1 className={`input-4 ${className || ""}`}>
        <Text className="text-32">{children}</Text>
      </Input1>
    );
  }
}

const Input1 = styled.div`
  ${Border1pxMischka}
  width: 904px;
  height: 136px;
  margin-top: 9px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.input-4.input-6 {
    margin-top: 6px;
  }

  &.input-4.input-7 {
    margin-top: 6px;
  }

  &.input-4.input-8 {
    margin-top: 6px;
  }

  &.input-4.input-9 {
    margin-top: 6px;
  }

  &.input-4.input-10 {
    margin-top: 6px;
    background-color: var(--white-lilac);
  }

  &.input-4.input-11 {
    height: 128px;
    margin-top: 6px;
  }

  &.input-4.input-12 {
    margin-top: 6px;
  }

  &.input-4.input-13 {
    margin-top: 6px;
  }

  &.input-4.input-14 {
    margin-top: 6px;
  }
`;

const Text = styled.p`
  ${InterNormalPaleSky16px}
  width: 876px;
  min-height: 116px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky16px}

  .input-4.input-11  & {
    min-height: 108px;
  }
`;

export default Input;
