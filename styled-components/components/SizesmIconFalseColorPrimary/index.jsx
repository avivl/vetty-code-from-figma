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
  height: 22px;
  position: relative;
  margin-left: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 23px;
  mix-blend-mode: multiply;

  &.badge.badge-1 {
    min-width: 24px;
  }

  &.badge.badge-2 {
    min-width: 47px;
    margin-left: unset;
  }
`;

export default SizesmIconFalseColorPrimary;
