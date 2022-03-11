import React from "react";
import OpenFalseSupportingTextFalseTooltip from "../OpenFalseSupportingTextFalseTooltip";
import "./TypeDefaultDestructiveFalse5.sass";

class TypeDefaultDestructiveFalse5 extends React.Component {
  render() {
    const { label, text } = this.props;

    return (
      <div className="input-field-base-20">
        <div className="label-53 inter-medium-oxford-blue-14px">{label}</div>
        <div className="input-37 border-1px-mischka">
          <div className="text-101 inter-normal-pale-sky-16px">{text}</div>
          <OpenFalseSupportingTextFalseTooltip />
        </div>
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse5;
