import React from "react";
import LabelTrueTypeDefaultStatePlaceholde from "../LabelTrueTypeDefaultStatePlaceholde";
import "./StatePlaceholderTypeDefaultSupporti.sass";

class StatePlaceholderTypeDefaultSupporti extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStatePlaceholde } = this.props;

    return (
      <div className={`input-dropdown ${className || ""}`}>
        <LabelTrueTypeDefaultStatePlaceholde
          label={labelTrueTypeDefaultStatePlaceholde.label}
          text={labelTrueTypeDefaultStatePlaceholde.text}
          className={labelTrueTypeDefaultStatePlaceholde.className}
        />
      </div>
    );
  }
}

export default StatePlaceholderTypeDefaultSupporti;
