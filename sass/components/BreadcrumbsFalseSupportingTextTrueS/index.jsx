import React from "react";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import "./BreadcrumbsFalseSupportingTextTrueS.sass";

class BreadcrumbsFalseSupportingTextTrueS extends React.Component {
  render() {
    const { text, supportingText, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <div className="page-header">
        <div className="text-and-supporting-text-1">
          <div className="text-74 inter-medium-mirage-30px">{text}</div>
          <p className="supporting-text-1 inter-normal-pale-sky-16px">{supportingText}</p>
        </div>
        <SizemdHierarchySecondaryGrayIconLea2
          sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
        />
      </div>
    );
  }
}

export default BreadcrumbsFalseSupportingTextTrueS;
