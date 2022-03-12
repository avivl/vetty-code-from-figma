import React from "react";
import SizemdIconFalse2 from "../SizemdIconFalse2";
import styled from "styled-components";


class SizemdHierarchyLinkColorIconFalseDe extends React.Component {
  render() {
    const { className, sizemdIconFalse2Props } = this.props;

    return (
      <Button className={`button-11 ${className || ""}`}>
        <SizemdIconFalse2 className={sizemdIconFalse2Props.className}>
          {sizemdIconFalse2Props.children}
        </SizemdIconFalse2>
      </Button>
    );
  }
}

const Button = styled.div`
  margin-top: 16px;
  width: 114px;
  height: 20px;
  position: relative;
  margin-left: 143px;
  display: flex;

  &.button-11.button-12 {
    width: 41px;
    margin-left: 4px;
    margin-top: unset;
  }
`;

export default SizemdHierarchyLinkColorIconFalseDe;
