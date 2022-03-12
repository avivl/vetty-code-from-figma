import React from "react";
import Content5 from "../Content5";
import "./LabelTrueTypeDefaultStatePlaceholde.sass";

class LabelTrueTypeDefaultStatePlaceholde extends React.Component {
  render() {
    const { label, chevronDown, className, content5Props } = this.props;

    return (
      <div className={`input-dropdown-base-5 ${className || ""}`}>
        <div className="input-with-label-5">
          <div className="label-2 inter-medium-oxford-blue-14px">{label}</div>
          <div className="input-4 border-1px-mischka">
            <Content5 text2Props={content5Props.text2Props} />
            <img className="chevron-down" src={chevronDown} />
          </div>
        </div>
      </div>
    );
  }
}

export default LabelTrueTypeDefaultStatePlaceholde;
