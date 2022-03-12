import React from "react";
import SizelgIconFalse22 from "../SizelgIconFalse22";
import styled from "styled-components";


class SizelgHierarchySecondaryGrayIconFal extends React.Component {
  render() {
    const { sizelgIconFalse2Props } = this.props;

    return (
      <Button>
        <SizelgIconFalse22>{sizelgIconFalse2Props.children}</SizelgIconFalse22>
      </Button>
    );
  }
}

const Button = styled.div`
  width: 375px;
  height: 44px;
  position: relative;
  display: flex;
  border-radius: 8px;
`;

export default SizelgHierarchySecondaryGrayIconFal;
