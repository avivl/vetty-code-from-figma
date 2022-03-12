import React from "react";
import Text2 from "../Text2";
import "./LabelTrueTypeDefaultStatePlaceholde2.sass";

class LabelTrueTypeDefaultStatePlaceholde2 extends React.Component {
  render() {
    const { label, className, text2Props } = this.props;

    return (
      <div className={`input-dropdown-base-12 ${className || ""}`}>
        <div className="input-with-label-18">
          <div className="label-17 inter-medium-oxford-blue-14px">{label}</div>
          <div className="input-18 border-1px-mischka">
            <div className="content-38">
              <Text2 className={text2Props.className}>{text2Props.children}</Text2>
            </div>
            <img className="chevron-down-7" src="/img/chevron-down@2x.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default LabelTrueTypeDefaultStatePlaceholde2;
