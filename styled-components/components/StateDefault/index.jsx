import React from "react";
import SizemdIconFalse from "../SizemdIconFalse";
import styled from "styled-components";


class StateDefault extends React.Component {
  render() {
    const { className, sizemdIconFalseProps } = this.props;

    return (
      <Button className={`button ${className || ""}`}>
        <SizemdIconFalse className={sizemdIconFalseProps.className} />
      </Button>
    );
  }
}

const Button = styled.div`
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 117px;
  border-radius: 8px;

  &.button.button-1 {
    margin-top: 16px;
    margin-left: unset;
  }

  &.button.button-2 {
    margin-left: 12px;
  }

  &.button.button-3 {
    margin-top: 16px;
    margin-left: unset;
  }

  &.button.button-4 {
    margin-top: 16px;
  }

  &.button.button-5 {
    margin-top: 16px;
    margin-left: unset;
  }

  &.button.button-6 {
    margin-top: 16px;
    margin-left: unset;
  }

  &.button.button-7 {
    margin-left: 517px;
  }

  &.button.button-8 {
    margin-top: 16px;
    margin-left: unset;
  }
`;

export default StateDefault;
