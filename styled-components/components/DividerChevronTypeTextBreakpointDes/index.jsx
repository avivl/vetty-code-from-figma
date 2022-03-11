import React from "react";
import CurrentFalseTypeTextIconFalseStateD from "../CurrentFalseTypeTextIconFalseStateD";
import CurrentTrueTypeTextIconFalseStateDe from "../CurrentTrueTypeTextIconFalseStateDe";
import styled from "styled-components";


class DividerChevronTypeTextBreakpointDes extends React.Component {
  render() {
    const {
      chevronRight1,
      chevronRight2,
      currentFalseTypeTextIconFalseStateD,
      currentTrueTypeTextIconFalseStateDe,
      currentFalseTypeTextIconFalseStateD2,
    } = this.props;

    return (
      <Breadcrumbs>
        <CurrentFalseTypeTextIconFalseStateD>
          {currentFalseTypeTextIconFalseStateD.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <ChevronRight src={chevronRight1} />
        <CurrentTrueTypeTextIconFalseStateDe>
          {currentTrueTypeTextIconFalseStateDe.children}
        </CurrentTrueTypeTextIconFalseStateDe>
        <ChevronRight src={chevronRight2} />
        <CurrentFalseTypeTextIconFalseStateD className={currentFalseTypeTextIconFalseStateD2.className}>
          {currentFalseTypeTextIconFalseStateD2.children}
        </CurrentFalseTypeTextIconFalseStateD>
      </Breadcrumbs>
    );
  }
}

const Breadcrumbs = styled.div`
  height: 20px;
  position: relative;
  margin-top: 30px;
  margin-left: 216px;
  display: flex;
  align-items: center;
  min-width: 610px;
  border-radius: 6px;
`;

const ChevronRight = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

export default DividerChevronTypeTextBreakpointDes;
