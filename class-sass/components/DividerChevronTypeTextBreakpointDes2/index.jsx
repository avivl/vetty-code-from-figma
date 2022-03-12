import React from "react";
import CurrentFalseTypeTextIconFalseStateD from "../CurrentFalseTypeTextIconFalseStateD";
import CurrentTrueTypeTextIconFalseStateDe from "../CurrentTrueTypeTextIconFalseStateDe";
import "./DividerChevronTypeTextBreakpointDes2.sass";

class DividerChevronTypeTextBreakpointDes2 extends React.Component {
  render() {
    const {
      currentFalseTypeTextIconFalseStateD,
      currentFalseTypeTextIconFalseStateD2,
      currentTrueTypeTextIconFalseStateDe,
    } = this.props;

    return (
      <div className="breadcrumbs-1">
        <CurrentFalseTypeTextIconFalseStateD>
          {currentFalseTypeTextIconFalseStateD.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <img className="chevron-right-3" src="/img/chevron-right@2x.png" />
        <CurrentFalseTypeTextIconFalseStateD className={currentFalseTypeTextIconFalseStateD2.className}>
          {currentFalseTypeTextIconFalseStateD2.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <img className="chevron-right-3" src="/img/chevron-right@2x.png" />
        <CurrentTrueTypeTextIconFalseStateDe className={currentTrueTypeTextIconFalseStateDe.className}>
          {currentTrueTypeTextIconFalseStateDe.children}
        </CurrentTrueTypeTextIconFalseStateDe>
      </div>
    );
  }
}

export default DividerChevronTypeTextBreakpointDes2;
