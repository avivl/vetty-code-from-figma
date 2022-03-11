import React from "react";
import IconFalse3 from "../IconFalse3";
import styled from "styled-components";


class SizesmIconFalseColorSuccess extends React.Component {
  render() {
    return (
      <Badge>
        <IconFalse3 />
      </Badge>
    );
  }
}

const Badge = styled.div`
  height: 22px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 47px;
  mix-blend-mode: multiply;
`;

export default SizesmIconFalseColorSuccess;
