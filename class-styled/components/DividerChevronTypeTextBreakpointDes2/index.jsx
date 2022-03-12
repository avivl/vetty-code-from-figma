import React from "react";
import CurrentFalseTypeTextIconFalseStateD from "../CurrentFalseTypeTextIconFalseStateD";
import CurrentTrueTypeTextIconFalseStateDe from "../CurrentTrueTypeTextIconFalseStateDe";
import styled from "styled-components";


class DividerChevronTypeTextBreakpointDes2 extends React.Component {
  render() {
    const {
      currentFalseTypeTextIconFalseStateD,
      currentFalseTypeTextIconFalseStateD2,
      currentTrueTypeTextIconFalseStateDe,
    } = this.props;

    return (
      <Breadcrumbs>
        <CurrentFalseTypeTextIconFalseStateD>
          {currentFalseTypeTextIconFalseStateD.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <ChevronRight src="/img/chevron-right@2x.png" />
        <CurrentFalseTypeTextIconFalseStateD className={currentFalseTypeTextIconFalseStateD2.className}>
          {currentFalseTypeTextIconFalseStateD2.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <ChevronRight src="/img/chevron-right@2x.png" />
        <CurrentTrueTypeTextIconFalseStateDe className={currentTrueTypeTextIconFalseStateDe.className}>
          {currentTrueTypeTextIconFalseStateDe.children}
        </CurrentTrueTypeTextIconFalseStateDe>
      </Breadcrumbs>
    );
  }
}

const Breadcrumbs = styled.div`
  width: 610px;
  height: 20px;
  position: relative;
  display: flex;
  border-radius: 6px;
`;

const ChevronRight = styled.img`
  margin-top: 2px;
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

const Breadcrumbs1 = styled.div`
  width: 610px;
  height: 20px;
  position: relative;
  display: flex;
  border-radius: 6px;
`;

const ChevronRight1 = styled.img`
  margin-top: 2px;
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

const Breadcrumbs2 = styled.div`
  width: 610px;
  height: 20px;
  position: relative;
  display: flex;
  border-radius: 6px;
`;

const ChevronRight2 = styled.img`
  margin-top: 2px;
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

export default DividerChevronTypeTextBreakpointDes2;
