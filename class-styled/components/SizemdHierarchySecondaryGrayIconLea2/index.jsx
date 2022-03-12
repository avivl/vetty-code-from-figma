import React from "react";
import SizemdIconLeading2 from "../SizemdIconLeading2";
import styled from "styled-components";


class SizemdHierarchySecondaryGrayIconLea2 extends React.Component {
  render() {
    const { className, sizemdIconLeading2Props } = this.props;

    return (
      <Button02 className={`button-02 ${className || ""}`}>
        <SizemdIconLeading2 text={sizemdIconLeading2Props.text} className={sizemdIconLeading2Props.className} />
      </Button02>
    );
  }
}

const Button02 = styled.div`
  width: 173px;
  height: 40px;
  position: relative;
  display: flex;
  border-radius: 8px;

  &.button-02.button-02-1 {
    width: 201px;
  }

  &.button-02.button-01-1 {
    width: 168px;
  }

  &.button-02.button-02-2 {
    width: 201px;
  }

  &.button-02.button-01-2 {
    width: 168px;
  }

  &.button-02.button-02-3 {
    width: 201px;
  }

  &.button-02.button-01-3 {
    width: 168px;
  }

  &.button-02.button-02-4 {
    width: 201px;
  }
`;

export default SizemdHierarchySecondaryGrayIconLea2;
