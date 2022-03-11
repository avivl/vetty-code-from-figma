import React from "react";
import styled from "styled-components";
import { InterNormalMirage16px } from "../../styledMixins";


class Text extends React.Component {
  render() {
    const { children, className } = this.props;

    return <Text1 className={`text-12 ${className || ""}`}>{children}</Text1>;
  }
}

const Text1 = styled.div`
  ${InterNormalMirage16px}
  min-height: 24px;
  min-width: 131px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;

  &.text-12.text-14 {
    width: 406px;
    min-width: unset;
  }

  &.text-12.text-15 {
    width: 406px;
    min-width: unset;
  }

  &.text-12.text-16 {
    width: 382px;
    min-width: unset;
  }

  &.text-12.text-17 {
    position: absolute;
    width: 872px;
    top: 2px;
    left: 0;
    min-height: unset;
    min-width: unset;
    white-space: unset;
  }

  &.text-12.text-18 {
    width: 876px;
    min-height: 116px;
    min-width: unset;
    white-space: unset;
  }

  &.text-12.text-19 {
    min-width: 72px;
  }

  &.text-12.text-20 {
    min-width: 169px;
  }

  &.text-12.text-21 {
    min-width: 125px;
  }

  &.text-12.text-22 {
    min-width: 72px;
  }

  &.text-12.text-23 {
    min-width: 79px;
  }

  &.text-12.text-24 {
    min-width: 98px;
  }

  &.text-12.text-25 {
    min-width: 227px;
  }

  &.text-12.text-26 {
    min-width: 143px;
  }

  &.text-12.text-27 {
    min-width: 92px;
  }

  &.text-12.text-28 {
    min-width: 95px;
  }

  &.text-12.text-29 {
    min-width: 95px;
  }

  &.text-12.text-30 {
    min-width: 108px;
  }
`;

export default Text;
