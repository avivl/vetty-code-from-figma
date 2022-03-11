import React from "react";
import SizemdHierarchyPrimaryIconFalseDest from "../SizemdHierarchyPrimaryIconFalseDest";
import "./BreadcrumbsFalseSupportingTextTrueS2.sass";

class BreadcrumbsFalseSupportingTextTrueS2 extends React.Component {
  render() {
    const { text, supportingText, sizemdHierarchyPrimaryIconFalseDestProps } = this.props;

    return (
      <div className="page-header-3">
        <div className="text-and-supporting-text-10">
          <div className="text-120 inter-medium-mirage-30px">{text}</div>
          <p className="supporting-text-13 inter-normal-pale-sky-16px">{supportingText}</p>
        </div>
        <SizemdHierarchyPrimaryIconFalseDest
          sizemdIconFalse5Props={sizemdHierarchyPrimaryIconFalseDestProps.sizemdIconFalse5Props}
        />
      </div>
    );
  }
}

export default BreadcrumbsFalseSupportingTextTrueS2;
