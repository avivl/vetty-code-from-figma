import React from "react";
import SizesmIconFalseColorPrimary from "../SizesmIconFalseColorPrimary";
import "./StyleBadgeSupportingTextFalseStateD.sass";

class StyleBadgeSupportingTextFalseStateD extends React.Component {
  render() {
    const { sizesmIconFalseColorPrimaryProps } = this.props;

    return (
      <div className="table-cell-35">
        <SizesmIconFalseColorPrimary
          className={sizesmIconFalseColorPrimaryProps.className}
          iconFalseProps={sizesmIconFalseColorPrimaryProps.iconFalseProps}
        />
      </div>
    );
  }
}

export default StyleBadgeSupportingTextFalseStateD;
