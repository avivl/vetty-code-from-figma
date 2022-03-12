import React from "react";
import SizemdIconLeading3 from "../SizemdIconLeading3";
import styled from "styled-components";


class SizemdHierarchyLinkGrayIconLeadingD extends React.Component {
  render() {
    const { className, sizemdIconLeading3Props } = this.props;

    return (
      <Button className={`button-13 ${className || ""}`}>
        <SizemdIconLeading3 text={sizemdIconLeading3Props.text} className={sizemdIconLeading3Props.className} />
      </Button>
    );
  }
}

const Button = styled.div`
  width: 61px;
  height: 20px;
  position: relative;
  display: flex;

  &.button-13.button-14 {
    margin-left: 121px;
    width: 118px;
    margin-top: 32px;
  }

  &.button-13.button-15 {
    margin-left: 121px;
    width: 118px;
    margin-top: 32px;
  }

  &.button-13.button-16 {
    margin-left: 121px;
    width: 118px;
    margin-top: 32px;
  }

  &.button-13.button-17 {
    margin-left: 121px;
    width: 118px;
    margin-top: 32px;
  }
`;

export default SizemdHierarchyLinkGrayIconLeadingD;
