import React from "react";
import SizemdIconFalse5 from "../SizemdIconFalse5";
import styled from "styled-components";


class SizemdHierarchyPrimaryIconFalseDest extends React.Component {
  render() {
    const { sizemdIconFalse5Props } = this.props;

    return (
      <Button01>
        <SizemdIconFalse5>{sizemdIconFalse5Props.children}</SizemdIconFalse5>
      </Button01>
    );
  }
}

const Button01 = styled.div`
  width: 163px;
  height: 40px;
  position: relative;
  display: flex;
  border-radius: 8px;
`;

export default SizemdHierarchyPrimaryIconFalseDest;
