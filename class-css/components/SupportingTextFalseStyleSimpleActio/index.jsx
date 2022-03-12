import React from "react";
import SizesmIconFalseColorPrimary from "../SizesmIconFalseColorPrimary";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import "./SupportingTextFalseStyleSimpleActio.css";

class SupportingTextFalseStyleSimpleActio extends React.Component {
  render() {
    const { text, sizesmIconFalseColorPrimaryProps, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <div className="card-header">
        <div className="content-105">
          <div className="text-and-badge">
            <div className="text-140 inter-medium-mirage-18px">{text}</div>
            <SizesmIconFalseColorPrimary iconFalseProps={sizesmIconFalseColorPrimaryProps.iconFalseProps} />
          </div>
          <div className="actions-13">
            <SizemdHierarchySecondaryGrayIconLea2
              className={sizemdHierarchySecondaryGrayIconLea.className}
              sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
            />
          </div>
        </div>
        <div className="divider-31"></div>
      </div>
    );
  }
}

export default SupportingTextFalseStyleSimpleActio;
