import React from "react";
import LabelTrueTypeDefaultStatePlaceholde2 from "../LabelTrueTypeDefaultStatePlaceholde2";
import "./StatePlaceholderTypeDefaultSupporti2.sass";

class StatePlaceholderTypeDefaultSupporti2 extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStatePlaceholde } = this.props;

    return (
      <div className={`input-dropdown-12 ${className || ""}`}>
        <LabelTrueTypeDefaultStatePlaceholde2
          label={labelTrueTypeDefaultStatePlaceholde.label}
          className={labelTrueTypeDefaultStatePlaceholde.className}
          text2Props={labelTrueTypeDefaultStatePlaceholde.text2Props}
        />
      </div>
    );
  }
}

export default StatePlaceholderTypeDefaultSupporti2;
