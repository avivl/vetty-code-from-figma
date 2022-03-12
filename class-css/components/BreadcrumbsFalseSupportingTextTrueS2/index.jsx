import React from "react";
import Text2 from "../Text2";
import SizemdHierarchyPrimaryIconFalseDest from "../SizemdHierarchyPrimaryIconFalseDest";
import "./BreadcrumbsFalseSupportingTextTrueS2.css";

class BreadcrumbsFalseSupportingTextTrueS2 extends React.Component {
  render() {
    const { text, text2Props, sizemdHierarchyPrimaryIconFalseDest } = this.props;

    return (
      <div className="page-header-3">
        <div className="content-104">
          <div className="text-and-supporting-text-30">
            <div className="text-138 inter-medium-mirage-30px">{text}</div>
            <Text2 className={text2Props.className}>{text2Props.children}</Text2>
          </div>
          <div className="actions-12">
            <SizemdHierarchyPrimaryIconFalseDest
              sizemdIconFalse5Props={sizemdHierarchyPrimaryIconFalseDest.sizemdIconFalse5Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BreadcrumbsFalseSupportingTextTrueS2;
