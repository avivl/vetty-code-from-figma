import React from "react";
import SizesmIconFalseColorPrimary from "../SizesmIconFalseColorPrimary";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import SizemdHierarchyPrimaryIconLeadingDe from "../SizemdHierarchyPrimaryIconLeadingDe";
import "./SupportingTextFalseStyleSimpleActio2.sass";

class SupportingTextFalseStyleSimpleActio2 extends React.Component {
  render() {
    const { sizesmIconFalseColorPrimaryProps, sizemdHierarchySecondaryGrayIconLea2Props } = this.props;

    return (
      <div className="card-header-1">
        <div className="content-39">
          <div className="text-and-badge-1">
            <div className="text-138 inter-medium-mirage-18px">Candidates</div>
            <SizesmIconFalseColorPrimary
              className={sizesmIconFalseColorPrimaryProps.className}
              iconFalseProps={sizesmIconFalseColorPrimaryProps.iconFalseProps}
            />
          </div>
          <div className="actions-3">
            <SizemdHierarchySecondaryGrayIconLea2
              className={sizemdHierarchySecondaryGrayIconLea2Props.className}
              sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea2Props.sizemdIconLeading2Props}
            />
            <SizemdHierarchyPrimaryIconLeadingDe />
          </div>
        </div>
        <div className="divider-44"></div>
      </div>
    );
  }
}

export default SupportingTextFalseStyleSimpleActio2;
