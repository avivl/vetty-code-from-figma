import React from "react";
import IconFalse4 from "../IconFalse4";
import styled from "styled-components";


class SizesmIconFalseColorWarning extends React.Component {
  render() {
    return (
      <Badge>
        <IconFalse4 />
      </Badge>
    );
  }
}

const Badge = styled.div`
  margin-top: 25px;
  width: 106px;
  height: 22px;
  margin-left: 24px;
  position: relative;
  display: flex;
  mix-blend-mode: multiply;
`;

const Badge1 = styled.div`
  margin-top: 25px;
  width: 106px;
  height: 22px;
  margin-left: 24px;
  position: relative;
  display: flex;
  mix-blend-mode: multiply;
`;

export default SizesmIconFalseColorWarning;
