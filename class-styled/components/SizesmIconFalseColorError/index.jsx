import React from "react";
import IconFalse2 from "../IconFalse2";
import styled from "styled-components";


class SizesmIconFalseColorError extends React.Component {
  render() {
    const { iconFalse2Props } = this.props;

    return (
      <Badge>
        <IconFalse2>{iconFalse2Props.children}</IconFalse2>
      </Badge>
    );
  }
}

const Badge = styled.div`
  margin-top: 25px;
  width: 79px;
  height: 22px;
  margin-left: 24px;
  position: relative;
  display: flex;
  mix-blend-mode: multiply;
`;

const Badge1 = styled.div`
  margin-top: 25px;
  width: 79px;
  height: 22px;
  margin-left: 24px;
  position: relative;
  display: flex;
  mix-blend-mode: multiply;
`;

export default SizesmIconFalseColorError;
