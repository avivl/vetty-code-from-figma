import React from "react";
import Text2 from "../Text2";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import "./BreadcrumbsFalseSupportingTextTrueS.css";

class BreadcrumbsFalseSupportingTextTrueS extends React.Component {
  render() {
    const { text, text2Props, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <div className="page-header">
        <div className="content-51">
          <div className="text-and-supporting-text-10">
            <div className="text-102 inter-medium-mirage-30px">{text}</div>
            <Text2 className={text2Props.className}>{text2Props.children}</Text2>
          </div>
          <div className="actions-3">
            <SizemdHierarchySecondaryGrayIconLea2
              sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BreadcrumbsFalseSupportingTextTrueS;
