import React from "react";
import IconFalse3 from "../IconFalse3";
import styled from "styled-components";


class SizesmIconFalseColorBlueLight extends React.Component {
  render() {
    const { className, iconFalse2Props } = this.props;

    return (
      <Badge className={`badge-5 ${className || ""}`}>
        <IconFalse3 className={iconFalse2Props.className}>{iconFalse2Props.children}</IconFalse3>
      </Badge>
    );
  }
}

const Badge = styled.div`
  margin-top: 25px;
  width: 100px;
  height: 22px;
  margin-left: 24px;
  position: relative;
  display: flex;
  mix-blend-mode: multiply;

  &.badge-5.badge-6 {
    width: 53px;
    margin-left: 33px;
  }

  &.badge-5.badge-7 {
    margin-top: 2px;
    margin-left: unset;
  }
`;

export default SizesmIconFalseColorBlueLight;
