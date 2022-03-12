import React from "react";
import SizemdIconFalse6 from "../SizemdIconFalse6";
import styled from "styled-components";


class SizemdHierarchyLinkColorIconFalseDe2 extends React.Component {
  render() {
    const { className, sizemdIconFalseProps } = this.props;

    return (
      <Button className={`button-24 ${className || ""}`}>
        <SizemdIconFalse6 className={sizemdIconFalseProps.className}>{sizemdIconFalseProps.children}</SizemdIconFalse6>
      </Button>
    );
  }
}

const Button = styled.div`
  width: 113px;
  height: 20px;
  position: relative;
  margin-left: 70px;
  display: flex;

  &.button-24.button-25 {
    width: 51px;
    margin-left: 4px;
  }

  &.button-24.button-26 {
    width: 101px;
    margin-left: 4px;
  }
`;

export default SizemdHierarchyLinkColorIconFalseDe2;
