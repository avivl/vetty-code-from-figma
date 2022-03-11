import React from "react";
import SizemdHierarchyTertiaryGrayIconOnly from "../SizemdHierarchyTertiaryGrayIconOnly";
import "./StyleActionIconsSupportingTextFalse.sass";

class StyleActionIconsSupportingTextFalse extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`table-cell-20 ${className || ""}`}>
        <SizemdHierarchyTertiaryGrayIconOnly />
      </div>
    );
  }
}

export default StyleActionIconsSupportingTextFalse;
