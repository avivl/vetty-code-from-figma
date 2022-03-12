import React from "react";
import SizemdIconOnly from "../SizemdIconOnly";
import styled from "styled-components";


class SizemdHierarchyTertiaryGrayIconOnly extends React.Component {
  render() {
    const { className, sizemdIconOnlyProps } = this.props;

    return (
      <Button className={`button-31 ${className || ""}`}>
        <SizemdIconOnly src={sizemdIconOnlyProps.src} />
      </Button>
    );
  }
}

const Button = styled.div`
  margin-top: 16px;
  width: 40px;
  height: 40px;
  margin-left: 16px;
  position: relative;
  display: flex;
  border-radius: 8px;

  &.button-31.button-32 {
    margin-left: 34px;
  }

  &.button-31.button-33 {
    margin-left: 34px;
  }

  &.button-31.button-34 {
    margin-left: 34px;
  }

  &.button-31.button-35 {
    margin-left: 34px;
  }

  &.button-31.button-36 {
    margin-left: 34px;
  }

  &.button-31.button-37 {
    margin-left: 34px;
  }

  &.button-31.button-38 {
    margin-left: 34px;
  }

  &.button-31.button-39 {
    margin-left: 34px;
  }

  &.button-31.button-40 {
    margin-left: 34px;
  }

  &.button-31.button-41 {
    margin-left: 34px;
  }

  &.button-31.button-42 {
    margin-left: 34px;
  }

  &.button-31.button-43 {
    margin-left: 34px;
  }

  &.button-31.button-44 {
    margin-left: 34px;
  }

  &.button-31.button-45 {
    margin-left: 34px;
  }
`;

export default SizemdHierarchyTertiaryGrayIconOnly;
