import React from "react";
import IconFalse from "../IconFalse";
import styled from "styled-components";


class SizesmIconFalseColorPrimary extends React.Component {
  render() {
    const { className, iconFalseProps } = this.props;

    return (
      <Badge className={`badge ${className || ""}`}>
        <IconFalse className={iconFalseProps.className}>{iconFalseProps.children}</IconFalse>
      </Badge>
    );
  }
}

const Badge = styled.div`
  margin-top: 3px;
  width: 23px;
  height: 22px;
  position: relative;
  margin-left: 8px;
  display: flex;
  mix-blend-mode: multiply;

  &.badge.badge-1 {
    width: 24px;
  }

  &.badge.badge-2 {
    margin-top: 25px;
    width: 47px;
    margin-left: 24px;
  }

  &.badge.badge-3 {
    margin-top: 25px;
    width: 47px;
    margin-left: 24px;
  }
`;

export default SizesmIconFalseColorPrimary;
