import React from "react";
import SelectedFalseSupportingTextFalseTyp from "../SelectedFalseSupportingTextFalseTyp";
import "./TypeDefaultDestructiveFalse4.sass";

class TypeDefaultDestructiveFalse4 extends React.Component {
  render() {
    const { className, selectedFalseSupportingTextFalseTypProps } = this.props;

    return (
      <div className={`input-field-base-18-1 ${className || ""}`}>
        <div className="label-51 inter-medium-oxford-blue-14px">Full Name *</div>
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTypProps.className}
          textProps={selectedFalseSupportingTextFalseTypProps.textProps}
        />
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse4;
