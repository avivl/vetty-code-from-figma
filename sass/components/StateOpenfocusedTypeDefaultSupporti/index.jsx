import React from "react";
import LabelTrueTypeDefaultStateDefault2 from "../LabelTrueTypeDefaultStateDefault2";
import TypeDefaultSupportingTextFalseScrol from "../TypeDefaultSupportingTextFalseScrol";
import "./StateOpenfocusedTypeDefaultSupporti.sass";

class StateOpenfocusedTypeDefaultSupporti extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault2Props, typeDefaultSupportingTextFalseScrolProps } = this.props;

    return (
      <div className="input-dropdown-17">
        <LabelTrueTypeDefaultStateDefault2
          label={labelTrueTypeDefaultStateDefault2Props.label}
          className={labelTrueTypeDefaultStateDefault2Props.className}
          selectedTrueSupportingTextFalseTypeProps={
            labelTrueTypeDefaultStateDefault2Props.selectedTrueSupportingTextFalseTypeProps
          }
        />
        <TypeDefaultSupportingTextFalseScrol
          selectedTrueSupportingTextFalseTypeProps={
            typeDefaultSupportingTextFalseScrolProps.selectedTrueSupportingTextFalseTypeProps
          }
          selectedFalseSupportingTextFalseTyp1Props={
            typeDefaultSupportingTextFalseScrolProps.selectedFalseSupportingTextFalseTyp1Props
          }
          selectedFalseSupportingTextFalseTyp2Props={
            typeDefaultSupportingTextFalseScrolProps.selectedFalseSupportingTextFalseTyp2Props
          }
          selectedFalseSupportingTextFalseTyp3Props={
            typeDefaultSupportingTextFalseScrolProps.selectedFalseSupportingTextFalseTyp3Props
          }
        />
      </div>
    );
  }
}

export default StateOpenfocusedTypeDefaultSupporti;
