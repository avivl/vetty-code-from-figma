import React from "react";
import CurrentFalseTypeTextIconFalseStateD from "../CurrentFalseTypeTextIconFalseStateD";
import CurrentTrueTypeTextIconFalseStateDe from "../CurrentTrueTypeTextIconFalseStateDe";
import "./DividerChevronTypeTextBreakpointDes.css";

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
      <div className="breadcrumbs">
        <CurrentFalseTypeTextIconFalseStateD>
          {currentFalseTypeTextIconFalseStateD.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <img className="chevron-right" src={chevronRight1} />
        <CurrentTrueTypeTextIconFalseStateDe>
          {currentTrueTypeTextIconFalseStateDe.children}
        </CurrentTrueTypeTextIconFalseStateDe>
        <img className="chevron-right" src={chevronRight2} />
        <CurrentFalseTypeTextIconFalseStateD className={currentFalseTypeTextIconFalseStateD2.className}>
          {currentFalseTypeTextIconFalseStateD2.children}
        </CurrentFalseTypeTextIconFalseStateD>
      </div>
    );
  }
}

export default DividerChevronTypeTextBreakpointDes;
