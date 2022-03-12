import React from "react";
import SizemdIconFalse from "../SizemdIconFalse";
import styled from "styled-components";


class StateDefault extends React.Component {
  render() {
    const { className, sizemdIconFalseProps } = this.props;

    return (
      <Button className={`button-2 ${className || ""}`}>
        <SizemdIconFalse className={sizemdIconFalseProps.className} />
      </Button>
    );
  }
}

const Button = styled.div`
  width: 117px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
  border-radius: 8px;

  &.button-2.button-3 {
    margin-left: 788px;
  }

  &.button-2.button-4 {
    margin-left: 12px;
  }

  &.button-2.button-5 {
    margin-left: 230px;
  }

  &.button-2.button-01 {
    margin-left: unset;
  }

  &.button-2.button-6 {
    margin-left: unset;
  }

  &.button-2.button-7 {
    margin-left: 230px;
  }

  &.button-2.button-8 {
    margin-left: 788px;
  }

  &.button-2.button-9 {
    margin-left: 788px;
  }
`;

export default StateDefault;
