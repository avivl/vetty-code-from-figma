import React from "react";
import SizemdIconFalse3 from "../SizemdIconFalse3";
import styled from "styled-components";


class SizemdHierarchySecondaryGrayIconFal extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Button className={`button-18 ${className || ""}`}>
        <SizemdIconFalse3 />
      </Button>
    );
  }
}

const Button = styled.div`
  height: 40px;
  position: relative;
  margin-left: 1081px;
  display: flex;
  align-items: flex-start;
  min-width: 69px;
  border-radius: 8px;

  &.button-18.button-19 {
    margin-left: 16px;
  }
`;

export default SizemdHierarchySecondaryGrayIconFal;
