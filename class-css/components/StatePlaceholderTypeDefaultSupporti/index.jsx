import React from "react";
import LabelTrueTypeDefaultStatePlaceholde from "../LabelTrueTypeDefaultStatePlaceholde";
import "./StatePlaceholderTypeDefaultSupporti.css";

class StatePlaceholderTypeDefaultSupporti extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStatePlaceholde } = this.props;

    return (
      <div className={`input-dropdown ${className || ""}`}>
        <LabelTrueTypeDefaultStatePlaceholde
          label={labelTrueTypeDefaultStatePlaceholde.label}
          chevronDown={labelTrueTypeDefaultStatePlaceholde.chevronDown}
          className={labelTrueTypeDefaultStatePlaceholde.className}
          content5Props={labelTrueTypeDefaultStatePlaceholde.content5Props}
        />
      </div>
    );
  }
}

export default StatePlaceholderTypeDefaultSupporti;
