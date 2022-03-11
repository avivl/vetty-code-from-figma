import React from "react";
import SizelgIconFalse3 from "../SizelgIconFalse3";
import styled from "styled-components";


class SizelgHierarchyPrimaryIconFalseDest2 extends React.Component {
  render() {
    const { className, sizelgIconFalseProps } = this.props;

    return (
      <Button className={`button-27 ${className || ""}`}>
        <SizelgIconFalse3 className={sizelgIconFalseProps.className}>{sizelgIconFalseProps.children}</SizelgIconFalse3>
      </Button>
    );
  }
}

const Button = styled.div`
  height: 44px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 360px;
  border-radius: 8px;

  &.button-27.button-28 {
    margin-top: 32px;
  }

  &.button-27.button-29 {
    margin-top: 24px;
  }

  &.button-27.button-30 {
    margin-top: 32px;
  }

  &.button-27.button-31 {
    margin-top: 24px;
  }
`;

export default SizelgHierarchyPrimaryIconFalseDest2;
