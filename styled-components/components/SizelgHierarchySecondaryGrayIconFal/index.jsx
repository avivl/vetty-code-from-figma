import React from "react";
import SizelgIconFalse2 from "../SizelgIconFalse2";
import styled from "styled-components";


class SizelgHierarchySecondaryGrayIconFal extends React.Component {
  render() {
    const { sizelgIconFalse2Props } = this.props;

    return (
      <Button>
        <SizelgIconFalse2>{sizelgIconFalse2Props.children}</SizelgIconFalse2>
      </Button>
    );
  }
}

const Button = styled.div`
  height: 44px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 375px;
  border-radius: 8px;
`;

export default SizelgHierarchySecondaryGrayIconFal;
