import React from "react";
import IconFalse32 from "../IconFalse32";
import styled from "styled-components";


class SizesmIconFalseColorSuccess extends React.Component {
  render() {
    return (
      <Badge>
        <IconFalse32 />
      </Badge>
    );
  }
}

const Badge = styled.div`
  margin-top: 25px;
  width: 47px;
  height: 22px;
  margin-left: 24px;
  position: relative;
  display: flex;
  mix-blend-mode: multiply;
`;

const Badge1 = styled.div`
  margin-top: 25px;
  width: 47px;
  height: 22px;
  margin-left: 24px;
  position: relative;
  display: flex;
  mix-blend-mode: multiply;
`;

export default SizesmIconFalseColorSuccess;
