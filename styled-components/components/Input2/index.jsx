import React from "react";
import styled from "styled-components";
import { Border1pxMischka, InterNormalPaleSky16px } from "../../styledMixins";


class Input2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Input className={`input-15 ${className || ""}`}>
        <Text className="text-43">{children}</Text>
      </Input>
    );
  }
}

const Input = styled.div`
  ${Border1pxMischka}
  width: 346px;
  height: 44px;
  margin-top: 6px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.input-15.input-16 {
    height: 102px;
    margin-top: 10px;
  }

  &.input-15.input-17 {
    height: 136px;
    margin-top: 9px;
  }

  &.input-15.input-18 {
    height: 136px;
    margin-top: 9px;
  }

  &.input-15.input-19 {
    height: 102px;
    margin-top: 10px;
  }

  &.input-15.input-20 {
    height: 136px;
    margin-top: 9px;
  }

  &.input-15.input-21 {
    height: 136px;
    margin-top: 9px;
  }
`;

const Text = styled.div`
  ${InterNormalPaleSky16px}
  width: 318px;
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Text1 = styled.p`
  ${InterNormalPaleSky16px}

  .input-15.input-16  & {
    min-height: 82px;
    white-space: unset;
  }
`;

const Text2 = styled.div`
  ${InterNormalPaleSky16px}

  .input-15.input-17  & {
    min-height: 116px;
    white-space: unset;
  }
`;

const Text3 = styled.div`
  ${InterNormalPaleSky16px}

  .input-15.input-18  & {
    min-height: 116px;
    white-space: unset;
  }
`;

const Text4 = styled.p`
  ${InterNormalPaleSky16px}

  .input-15.input-19  & {
    min-height: 82px;
    white-space: unset;
  }
`;

const Text5 = styled.div`
  ${InterNormalPaleSky16px}

  .input-15.input-20  & {
    min-height: 116px;
    white-space: unset;
  }
`;

const Text6 = styled.div`
  ${InterNormalPaleSky16px}

  .input-15.input-21  & {
    min-height: 116px;
    white-space: unset;
  }
`;

export default Input2;
