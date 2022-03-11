import React from "react";
import SizemdIconLeading3 from "../SizemdIconLeading3";
import styled from "styled-components";


class SizemdHierarchyLinkGrayIconLeadingD extends React.Component {
  render() {
    const { className, sizemdIconLeading3Props } = this.props;

    return (
      <Button className={`button-12 ${className || ""}`}>
        <SizemdIconLeading3 text={sizemdIconLeading3Props.text} className={sizemdIconLeading3Props.className} />
      </Button>
    );
  }
}

const Button = styled.div`
  height: 20px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 61px;

  &.button-12.button-13 {
    margin-top: 32px;
    min-width: 118px;
  }

  &.button-12.button-14 {
    margin-top: 32px;
    min-width: 118px;
  }

  &.button-12.button-15 {
    margin-top: 32px;
    min-width: 118px;
  }

  &.button-12.button-16 {
    margin-top: 32px;
    min-width: 118px;
  }
`;

export default SizemdHierarchyLinkGrayIconLeadingD;
