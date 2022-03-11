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
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 173px;
  border-radius: 8px;

  &.button-02.button-02-1 {
    align-self: flex-end;
    min-width: 201px;
  }

  &.button-02.button-01 {
    min-width: 168px;
  }

  &.button-02.button-02-2 {
    min-width: 201px;
    margin-left: unset;
  }

  &.button-02.button-01-1 {
    min-width: 168px;
  }

  &.button-02.button-02-3 {
    min-width: 201px;
    margin-left: unset;
  }
`;

export default SizemdHierarchySecondaryGrayIconLea2;
