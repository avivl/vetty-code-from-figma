import React from "react";
import "./LabelTrueTypeDefaultStatePlaceholde.sass";

class LabelTrueTypeDefaultStatePlaceholde extends React.Component {
  render() {
    const { label, text, className } = this.props;

    return (
      <div className={`input-dropdown-base-9 ${className || ""}`}>
        <div className="label-10 inter-medium-oxford-blue-14px">{label}</div>
        <div className="input-5 border-1px-mischka">
          <div className="text-36 inter-normal-pale-sky-16px">{text}</div>
          <img className="chevron-down" src="/img/chevron-down@2x.svg" />
        </div>
      </div>
    );
  }
}

export default LabelTrueTypeDefaultStatePlaceholde;
