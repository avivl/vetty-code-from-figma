import React from "react";
import "./StyleTextSupportingTextTrueStateDef.sass";

class StyleTextSupportingTextTrueStateDef extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <div className={`table-cell-3 ${className || ""}`}>
        <div className="text-128 inter-normal-mirage-14px">{text}</div>
        <div className="text-128 variant-1 inter-normal-pale-sky-14px">{supportingText}</div>
      </div>
    );
  }
}

export default StyleTextSupportingTextTrueStateDef;
