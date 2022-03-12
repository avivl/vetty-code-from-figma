import React from "react";
import styled from "styled-components";
import { InterNormalMirage16px } from "../../styledMixins";


class Text extends React.Component {
  render() {
    const { children, className } = this.props;

    return <Text1 className={`text-74 ${className || ""}`}>{children}</Text1>;
  }
}

const Text1 = styled.div`
  ${InterNormalMirage16px}
  width: 131px;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;

  &.text-74.text-76 {
    width: 406px;
  }

  &.text-74.text-77 {
    width: 406px;
  }

  &.text-74.text-78 {
    width: 382px;
  }

  &.text-74.text-79 {
    position: absolute;
    width: 872px;
    top: 2px;
    left: 0;
    height: unset;
    white-space: unset;
  }

  &.text-74.text-80 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
    white-space: unset;
  }

  &.text-74.text-81 {
    width: 72px;
  }

  &.text-74.text-82 {
    width: 169px;
  }

  &.text-74.text-83 {
    width: 125px;
  }

  &.text-74.text-84 {
    width: 72px;
  }

  &.text-74.text-85 {
    width: 79px;
  }

  &.text-74.text-86 {
    width: 98px;
  }

  &.text-74.text-87 {
    width: 227px;
  }

  &.text-74.text-88 {
    width: 143px;
  }

  &.text-74.text-89 {
    width: 92px;
  }

  &.text-74.text-90 {
    width: 95px;
  }

  &.text-74.text-91 {
    width: 95px;
  }

  &.text-74.text-92 {
    width: 108px;
  }
`;

export default Text;
