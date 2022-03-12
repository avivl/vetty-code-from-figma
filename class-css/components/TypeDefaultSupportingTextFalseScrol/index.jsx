import React from "react";
import SelectedTrueSupportingTextFalseType from "../SelectedTrueSupportingTextFalseType";
import SelectedFalseSupportingTextFalseTyp from "../SelectedFalseSupportingTextFalseTyp";
import "./TypeDefaultSupportingTextFalseScrol.css";

class TypeDefaultSupportingTextFalseScrol extends React.Component {
  render() {
    const {
      selectedTrueSupportingTextFalseType,
      selectedFalseSupportingTextFalseTyp,
      selectedFalseSupportingTextFalseTyp2,
      selectedFalseSupportingTextFalseTyp3,
    } = this.props;

    return (
      <div className="input-dropdown-menu border-1px-concrete">
        <div className="menu-items">
          <SelectedTrueSupportingTextFalseType
            chevronDown={selectedTrueSupportingTextFalseType.chevronDown}
            className={selectedTrueSupportingTextFalseType.className}
            textProps={selectedTrueSupportingTextFalseType.textProps}
          />
          <SelectedFalseSupportingTextFalseTyp
            className={selectedFalseSupportingTextFalseTyp.className}
            textProps={selectedFalseSupportingTextFalseTyp.textProps}
          />
          <SelectedFalseSupportingTextFalseTyp
            className={selectedFalseSupportingTextFalseTyp2.className}
            textProps={selectedFalseSupportingTextFalseTyp2.textProps}
          />
          <SelectedFalseSupportingTextFalseTyp
            className={selectedFalseSupportingTextFalseTyp3.className}
            textProps={selectedFalseSupportingTextFalseTyp3.textProps}
          />
        </div>
      </div>
    );
  }
}

export default TypeDefaultSupportingTextFalseScrol;
