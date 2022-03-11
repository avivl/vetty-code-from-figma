import React from "react";
import SizemdIconFalse2 from "../SizemdIconFalse2";
import styled from "styled-components";


class SizemdHierarchyLinkColorIconFalseDe extends React.Component {
  render() {
    const { className, sizemdIconFalse2Props } = this.props;

    return (
      <Button className={`button-10 ${className || ""}`}>
        <SizemdIconFalse2 className={sizemdIconFalse2Props.className}>
          {sizemdIconFalse2Props.children}
        </SizemdIconFalse2>
      </Button>
    );
  }
}

const Button = styled.div`
  height: 20px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 114px;

  &.button-10.button-11 {
    margin-left: 4px;
    min-width: 41px;
  }
`;

export default SizemdHierarchyLinkColorIconFalseDe;
