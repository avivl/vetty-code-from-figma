import React from "react";
import "./SizemdIconLeading.sass";

class SizemdIconLeading extends React.Component {
  render() {
    return (
      <div className="button-base-6 border-1px-mischka">
        <img className="calendar" src="/img/calendar@2x.png" />
        <div className="text-80 inter-medium-pale-sky-14px">Select date</div>
      </div>
    );
  }
}

export default SizemdIconLeading;
