import React from "react";
import Text2 from "../Text2";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import "./BreadcrumbsFalseSupportingTextTrueS3.sass";

class BreadcrumbsFalseSupportingTextTrueS3 extends React.Component {
  render() {
    const { text2Props, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <div className="page-header-4">
        <div className="content-107">
          <div className="text-and-supporting-text-32">
            <div className="text-155 inter-medium-mirage-24px">
              Technical Program Manager, Mobile Software Engineering
            </div>
            <Text2 className={text2Props.className}>{text2Props.children}</Text2>
          </div>
          <div className="actions-14">
            <SizemdHierarchySecondaryGrayIconLea2
              className={sizemdHierarchySecondaryGrayIconLea.className}
              sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BreadcrumbsFalseSupportingTextTrueS3;
