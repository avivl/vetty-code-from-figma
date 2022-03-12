import React from "react";
import Content6 from "../Content6";
import "./LabelTrueTypeDefaultStateDefault.sass";

class LabelTrueTypeDefaultStateDefault extends React.Component {
  render() {
    const { chevronDown, className, content6Props } = this.props;

    return (
      <div className={`input-dropdown-base-6 ${className || ""}`}>
        <div className="input-with-label-12">
          <p className="label-10 inter-medium-oxford-blue-14px">Agency or a Single Freelancer</p>
          <div className="input-12 border-1px-mischka">
            <Content6 textProps={content6Props.textProps} />
            <img className="chevron-down-1" src={chevronDown} />
          </div>
        </div>
      </div>
    );
  }
}

export default LabelTrueTypeDefaultStateDefault;
