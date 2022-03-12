import React from "react";
import SelectedFalseSupportingTextFalseTyp from "../SelectedFalseSupportingTextFalseTyp";
import "./TypeDefaultDestructiveFalse4.css";

class TypeDefaultDestructiveFalse4 extends React.Component {
  render() {
    const { className, selectedFalseSupportingTextFalseTyp } = this.props;

    return (
      <div className={`input-field-base-19-1 ${className || ""}`}>
        <div className="input-with-label-45">
          <div className="label-49 inter-medium-oxford-blue-14px">Full Name *</div>
          <SelectedFalseSupportingTextFalseTyp
            className={selectedFalseSupportingTextFalseTyp.className}
            textProps={selectedFalseSupportingTextFalseTyp.textProps}
          />
        </div>
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse4;
