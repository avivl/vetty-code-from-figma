import React from "react";
import SizemdIconOnly from "../SizemdIconOnly";
import "./SizemdHierarchyTertiaryGrayIconOnly.css";

class SizemdHierarchyTertiaryGrayIconOnly extends React.Component {
  render() {
    const { className, sizemdIconOnlyProps } = this.props;

    return (
      <div className={`button-33 ${className || ""}`}>
        <SizemdIconOnly src={sizemdIconOnlyProps.src} />
      </div>
    );
  }
}

export default SizemdHierarchyTertiaryGrayIconOnly;
