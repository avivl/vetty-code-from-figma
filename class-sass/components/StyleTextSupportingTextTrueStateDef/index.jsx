import React from "react";
import "./StyleTextSupportingTextTrueStateDef.sass";

class StyleTextSupportingTextTrueStateDef extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <div className={`table-cell-4 ${className || ""}`}>
        <div className="text-and-supporting-text-31">
          <div className="text-144 inter-normal-mirage-14px">{text}</div>
          <div className="supporting-text-18 inter-normal-pale-sky-14px">{supportingText}</div>
        </div>
      </div>
    );
  }
}

export default StyleTextSupportingTextTrueStateDef;
