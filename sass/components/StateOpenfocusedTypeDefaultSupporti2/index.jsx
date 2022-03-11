import React from "react";
import LabelTrueTypeDefaultStateDefault2 from "../LabelTrueTypeDefaultStateDefault2";
import TypeDefaultSupportingTextFalseScrol2 from "../TypeDefaultSupportingTextFalseScrol2";
import "./StateOpenfocusedTypeDefaultSupporti2.sass";

class StateOpenfocusedTypeDefaultSupporti2 extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault2Props, typeDefaultSupportingTextFalseScrol2Props } = this.props;

    return (
      <div className="input-dropdown-18">
        <LabelTrueTypeDefaultStateDefault2
          label={labelTrueTypeDefaultStateDefault2Props.label}
          className={labelTrueTypeDefaultStateDefault2Props.className}
          selectedTrueSupportingTextFalseTypeProps={
            labelTrueTypeDefaultStateDefault2Props.selectedTrueSupportingTextFalseTypeProps
          }
        />
        <TypeDefaultSupportingTextFalseScrol2
          selectedTrueSupportingTextFalseTypeProps={
            typeDefaultSupportingTextFalseScrol2Props.selectedTrueSupportingTextFalseTypeProps
          }
          selectedFalseSupportingTextFalseTyp1Props={
            typeDefaultSupportingTextFalseScrol2Props.selectedFalseSupportingTextFalseTyp1Props
          }
          selectedFalseSupportingTextFalseTyp2Props={
            typeDefaultSupportingTextFalseScrol2Props.selectedFalseSupportingTextFalseTyp2Props
          }
          selectedFalseSupportingTextFalseTyp3Props={
            typeDefaultSupportingTextFalseScrol2Props.selectedFalseSupportingTextFalseTyp3Props
          }
          selectedFalseSupportingTextFalseTyp4Props={
            typeDefaultSupportingTextFalseScrol2Props.selectedFalseSupportingTextFalseTyp4Props
          }
        />
      </div>
    );
  }
}

export default StateOpenfocusedTypeDefaultSupporti2;
