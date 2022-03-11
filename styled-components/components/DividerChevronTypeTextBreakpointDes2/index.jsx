import React from "react";
import CurrentFalseTypeTextIconFalseStateD from "../CurrentFalseTypeTextIconFalseStateD";
import CurrentTrueTypeTextIconFalseStateDe from "../CurrentTrueTypeTextIconFalseStateDe";
import styled from "styled-components";


class DividerChevronTypeTextBreakpointDes2 extends React.Component {
  render() {
    const {
      className,
      currentFalseTypeTextIconFalseStateD,
      currentFalseTypeTextIconFalseStateD2,
      currentTrueTypeTextIconFalseStateDe,
    } = this.props;

    return (
      <Breadcrumbs className={`breadcrumbs-1 ${className || ""}`}>
        <CurrentFalseTypeTextIconFalseStateD>
          {currentFalseTypeTextIconFalseStateD.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <ChevronRight className="chevron-right-2" src="/img/chevron-right@2x.svg" />
        <CurrentFalseTypeTextIconFalseStateD className={currentFalseTypeTextIconFalseStateD2.className}>
          {currentFalseTypeTextIconFalseStateD2.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <ChevronRight className="chevron-right-3" src="/img/chevron-right@2x.svg" />
        <CurrentTrueTypeTextIconFalseStateDe className={currentTrueTypeTextIconFalseStateDe.className}>
          {currentTrueTypeTextIconFalseStateDe.children}
        </CurrentTrueTypeTextIconFalseStateDe>
      </Breadcrumbs>
    );
  }
}

const Breadcrumbs = styled.div`
  height: 20px;
  position: relative;
  align-self: flex-start;
  margin-left: 256px;
  display: flex;
  align-items: center;
  min-width: 610px;
  border-radius: 6px;

  &.breadcrumbs-1.breadcrumbs-2 {
    align-self: unset;
  }
`;

const ChevronRight = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

export default DividerChevronTypeTextBreakpointDes2;
