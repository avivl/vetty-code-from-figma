import React from "react";
import SizemdIconLeading2 from "../SizemdIconLeading2";
import "./SizemdHierarchySecondaryGrayIconLea2.sass";

class SizemdHierarchySecondaryGrayIconLea2 extends React.Component {
  render() {
    const { className, sizemdIconLeading2Props } = this.props;

    return (
      <div className={`button-02 ${className || ""}`}>
        <SizemdIconLeading2 text={sizemdIconLeading2Props.text} className={sizemdIconLeading2Props.className} />
      </div>
    );
  }
}

export default SizemdHierarchySecondaryGrayIconLea2;
