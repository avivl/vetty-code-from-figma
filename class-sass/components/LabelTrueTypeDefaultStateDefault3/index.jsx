import React from "react";
import SelectedTrueSupportingTextFalseType from "../SelectedTrueSupportingTextFalseType";
import "./LabelTrueTypeDefaultStateDefault3.sass";

class LabelTrueTypeDefaultStateDefault3 extends React.Component {
  render() {
    const { label, className, selectedTrueSupportingTextFalseType } = this.props;

    return (
      <div className={`input-dropdown-base-21 ${className || ""}`}>
        <div className="input-with-label-49">
          <div className="label-53 inter-medium-oxford-blue-14px">{label}</div>
          <SelectedTrueSupportingTextFalseType
            chevronDown={selectedTrueSupportingTextFalseType.chevronDown}
            className={selectedTrueSupportingTextFalseType.className}
            textProps={selectedTrueSupportingTextFalseType.textProps}
          />
        </div>
      </div>
    );
  }
}

export default LabelTrueTypeDefaultStateDefault3;
