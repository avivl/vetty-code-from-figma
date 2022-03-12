import React from "react";
import SizemdHierarchyTertiaryGrayIconOnly from "../SizemdHierarchyTertiaryGrayIconOnly";
import "./StyleActionIconsSupportingTextFalse.sass";

class StyleActionIconsSupportingTextFalse extends React.Component {
  render() {
    const { className, sizemdHierarchyTertiaryGrayIconOnly } = this.props;

    return (
      <div className={`table-cell-29 ${className || ""}`}>
        <SizemdHierarchyTertiaryGrayIconOnly
          className={sizemdHierarchyTertiaryGrayIconOnly.className}
          sizemdIconOnlyProps={sizemdHierarchyTertiaryGrayIconOnly.sizemdIconOnlyProps}
        />
      </div>
    );
  }
}

export default StyleActionIconsSupportingTextFalse;
