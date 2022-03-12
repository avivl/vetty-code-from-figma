import React from "react";
import SizesmIconOnly from "../SizesmIconOnly";
import "./SizesmHierarchyTertiaryGrayIconOnly.css";

class SizesmHierarchyTertiaryGrayIconOnly extends React.Component {
  render() {
    const { sizesmIconOnlyProps } = this.props;

    return (
      <div className="button-28">
        <SizesmIconOnly src={sizesmIconOnlyProps.src} />
      </div>
    );
  }
}

export default SizesmHierarchyTertiaryGrayIconOnly;
