import React from "react";
import SizemdIconFalse3 from "../SizemdIconFalse3";
import "./SizemdHierarchySecondaryGrayIconFal.sass";

class SizemdHierarchySecondaryGrayIconFal extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`button-21 ${className || ""}`}>
        <SizemdIconFalse3 />
      </div>
    );
  }
}

export default SizemdHierarchySecondaryGrayIconFal;
