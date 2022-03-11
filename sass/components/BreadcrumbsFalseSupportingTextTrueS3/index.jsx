import React from "react";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import "./BreadcrumbsFalseSupportingTextTrueS3.sass";

class BreadcrumbsFalseSupportingTextTrueS3 extends React.Component {
  render() {
    const { className, sizemdHierarchySecondaryGrayIconLea2Props } = this.props;

    return (
      <div className={`page-header-4 ${className || ""}`}>
        <div className="text-and-supporting-text-11">
          <div className="text-136 inter-medium-mirage-24px">
            Technical Program Manager, Mobile Software Engineering
          </div>
          <p className="supporting-text-14 inter-normal-pale-sky-16px">
            Track your candidates that came from your advertised links.
          </p>
        </div>
        <SizemdHierarchySecondaryGrayIconLea2
          className={sizemdHierarchySecondaryGrayIconLea2Props.className}
          sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea2Props.sizemdIconLeading2Props}
        />
      </div>
    );
  }
}

export default BreadcrumbsFalseSupportingTextTrueS3;
