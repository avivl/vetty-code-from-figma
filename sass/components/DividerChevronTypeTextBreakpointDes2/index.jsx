import React from "react";
import CurrentFalseTypeTextIconFalseStateD from "../CurrentFalseTypeTextIconFalseStateD";
import CurrentTrueTypeTextIconFalseStateDe from "../CurrentTrueTypeTextIconFalseStateDe";
import "./DividerChevronTypeTextBreakpointDes2.sass";

class DividerChevronTypeTextBreakpointDes2 extends React.Component {
  render() {
    const {
      className,
      currentFalseTypeTextIconFalseStateD1Props,
      currentFalseTypeTextIconFalseStateD2Props,
      currentTrueTypeTextIconFalseStateDeProps,
    } = this.props;

    return (
      <div className={`breadcrumbs-1 ${className || ""}`}>
        <CurrentFalseTypeTextIconFalseStateD>
          {currentFalseTypeTextIconFalseStateD1Props.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <img className="chevron-right-2" src="/img/chevron-right@2x.svg" />
        <CurrentFalseTypeTextIconFalseStateD className={currentFalseTypeTextIconFalseStateD2Props.className}>
          {currentFalseTypeTextIconFalseStateD2Props.children}
        </CurrentFalseTypeTextIconFalseStateD>
        <img className="chevron-right-2" src="/img/chevron-right@2x.svg" />
        <CurrentTrueTypeTextIconFalseStateDe className={currentTrueTypeTextIconFalseStateDeProps.className}>
          {currentTrueTypeTextIconFalseStateDeProps.children}
        </CurrentTrueTypeTextIconFalseStateDe>
      </div>
    );
  }
}

export default DividerChevronTypeTextBreakpointDes2;
