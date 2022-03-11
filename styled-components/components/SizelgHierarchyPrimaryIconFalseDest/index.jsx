import React from "react";
import SizelgIconFalse from "../SizelgIconFalse";
import styled from "styled-components";


class SizelgHierarchyPrimaryIconFalseDest extends React.Component {
  render() {
    const { sizelgIconFalseProps } = this.props;

    return (
      <Button>
        <SizelgIconFalse>{sizelgIconFalseProps.children}</SizelgIconFalse>
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
`;

export default SizelgHierarchyPrimaryIconFalseDest;
