import React from "react";
import SizesmIconFalseColorPrimary from "../SizesmIconFalseColorPrimary";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import "./SupportingTextFalseStyleSimpleActio.sass";

class SupportingTextFalseStyleSimpleActio extends React.Component {
  render() {
    const { text, sizesmIconFalseColorPrimaryProps, sizemdHierarchySecondaryGrayIconLea2Props } = this.props;

    return (
      <div className="card-header">
        <div className="content-37">
          <div className="text-and-badge">
            <div className="text-122 inter-medium-mirage-18px">{text}</div>
            <SizesmIconFalseColorPrimary iconFalseProps={sizesmIconFalseColorPrimaryProps.iconFalseProps} />
          </div>
          <SizemdHierarchySecondaryGrayIconLea2
            className={sizemdHierarchySecondaryGrayIconLea2Props.className}
            sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea2Props.sizemdIconLeading2Props}
          />
        </div>
        <div className="divider-34"></div>
      </div>
    );
  }
}

export default SupportingTextFalseStyleSimpleActio;
