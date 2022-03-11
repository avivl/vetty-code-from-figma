import React from "react";
import SizemdIconLeading3 from "../SizemdIconLeading3";
import "./SizemdHierarchyLinkGrayIconLeadingD.sass";

class SizemdHierarchyLinkGrayIconLeadingD extends React.Component {
  render() {
    const { className, sizemdIconLeading3Props } = this.props;

    return (
      <div className={`button-15 ${className || ""}`}>
        <SizemdIconLeading3 text={sizemdIconLeading3Props.text} className={sizemdIconLeading3Props.className} />
      </div>
    );
  }
}

export default SizemdHierarchyLinkGrayIconLeadingD;
