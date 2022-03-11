import React from "react";
import SelectedTrueSupportingTextFalseType from "../SelectedTrueSupportingTextFalseType";
import "./LabelTrueTypeDefaultStateDefault2.sass";

class LabelTrueTypeDefaultStateDefault2 extends React.Component {
  render() {
    const { label, className, selectedTrueSupportingTextFalseTypeProps } = this.props;

    return (
      <div className={`input-dropdown-base-16-1 ${className || ""}`}>
        <div className="label-56 inter-medium-oxford-blue-14px">{label}</div>
        <SelectedTrueSupportingTextFalseType
          className={selectedTrueSupportingTextFalseTypeProps.className}
          textProps={selectedTrueSupportingTextFalseTypeProps.textProps}
        />
      </div>
    );
  }
}

export default LabelTrueTypeDefaultStateDefault2;
