import React from "react";
import SelectedTrueSupportingTextFalseType from "../SelectedTrueSupportingTextFalseType";
import SelectedFalseSupportingTextFalseTyp from "../SelectedFalseSupportingTextFalseTyp";
import "./TypeDefaultSupportingTextFalseScrol2.sass";

class TypeDefaultSupportingTextFalseScrol2 extends React.Component {
  render() {
    const {
      selectedTrueSupportingTextFalseTypeProps,
      selectedFalseSupportingTextFalseTyp1Props,
      selectedFalseSupportingTextFalseTyp2Props,
      selectedFalseSupportingTextFalseTyp3Props,
      selectedFalseSupportingTextFalseTyp4Props,
    } = this.props;

    return (
      <div className="input-dropdown-menu-1 border-1px-concrete">
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
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp4Props.className}
          textProps={selectedFalseSupportingTextFalseTyp4Props.textProps}
        />
      </div>
    );
  }
}

export default TypeDefaultSupportingTextFalseScrol2;
