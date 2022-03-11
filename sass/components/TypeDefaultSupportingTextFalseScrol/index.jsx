import React from "react";
import SelectedTrueSupportingTextFalseType from "../SelectedTrueSupportingTextFalseType";
import SelectedFalseSupportingTextFalseTyp from "../SelectedFalseSupportingTextFalseTyp";
import "./TypeDefaultSupportingTextFalseScrol.sass";

class TypeDefaultSupportingTextFalseScrol extends React.Component {
  render() {
    const {
      selectedTrueSupportingTextFalseTypeProps,
      selectedFalseSupportingTextFalseTyp1Props,
      selectedFalseSupportingTextFalseTyp2Props,
      selectedFalseSupportingTextFalseTyp3Props,
    } = this.props;

    return (
      <div className="input-dropdown-menu border-1px-concrete">
        <SelectedTrueSupportingTextFalseType
          className={selectedTrueSupportingTextFalseTypeProps.className}
          textProps={selectedTrueSupportingTextFalseTypeProps.textProps}
        />
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp1Props.className}
          textProps={selectedFalseSupportingTextFalseTyp1Props.textProps}
        />
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp2Props.className}
          textProps={selectedFalseSupportingTextFalseTyp2Props.textProps}
        />
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp3Props.className}
          textProps={selectedFalseSupportingTextFalseTyp3Props.textProps}
        />
      </div>
    );
  }
}

export default TypeDefaultSupportingTextFalseScrol;
