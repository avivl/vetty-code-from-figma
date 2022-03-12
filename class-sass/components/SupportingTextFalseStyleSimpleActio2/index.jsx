import React from "react";
import SizesmIconFalseColorPrimary from "../SizesmIconFalseColorPrimary";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import SizemdHierarchyPrimaryIconLeadingDe from "../SizemdHierarchyPrimaryIconLeadingDe";
import "./SupportingTextFalseStyleSimpleActio2.sass";

class SupportingTextFalseStyleSimpleActio2 extends React.Component {
  render() {
    const { sizesmIconFalseColorPrimaryProps, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <div className="card-header-1">
        <div className="content-110">
          <div className="text-and-badge-1">
            <div className="text-159 inter-medium-mirage-18px">Candidates</div>
            <SizesmIconFalseColorPrimary
              className={sizesmIconFalseColorPrimaryProps.className}
              iconFalseProps={sizesmIconFalseColorPrimaryProps.iconFalseProps}
            />
          </div>
          <div className="actions-17">
            <SizemdHierarchySecondaryGrayIconLea2
              className={sizemdHierarchySecondaryGrayIconLea.className}
              sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
            />
            <SizemdHierarchyPrimaryIconLeadingDe />
          </div>
        </div>
        <div className="divider-34"></div>
      </div>
    );
  }
}

export default SupportingTextFalseStyleSimpleActio2;
