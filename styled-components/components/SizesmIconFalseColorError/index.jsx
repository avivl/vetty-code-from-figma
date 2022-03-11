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
  height: 22px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 79px;
  mix-blend-mode: multiply;
`;

export default SizesmIconFalseColorError;
