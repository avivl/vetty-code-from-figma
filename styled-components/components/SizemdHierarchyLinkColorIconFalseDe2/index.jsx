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
  height: 20px;
  position: relative;
  margin-left: 70px;
  display: flex;
  align-items: flex-start;
  min-width: 113px;

  &.button-24.button-25 {
    margin-left: 4px;
    min-width: 51px;
  }

  &.button-24.button-26 {
    margin-left: 4px;
    min-width: 101px;
  }
`;

export default SizemdHierarchyLinkColorIconFalseDe2;
