import React from "react";
import LabelTrueTypeDefaultStateDefault3 from "../LabelTrueTypeDefaultStateDefault3";
import TypeDefaultSupportingTextFalseScrol2 from "../TypeDefaultSupportingTextFalseScrol2";
import "./StateOpenfocusedTypeDefaultSupporti2.css";

class StateOpenfocusedTypeDefaultSupporti2 extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault3Pr, typeDefaultSupportingTextFalseScrol } = this.props;

    return (
      <div className="input-dropdown-21">
        <LabelTrueTypeDefaultStateDefault3
          label={labelTrueTypeDefaultStateDefault3Pr.label}
          className={labelTrueTypeDefaultStateDefault3Pr.className}
          selectedTrueSupportingTextFalseType={labelTrueTypeDefaultStateDefault3Pr.selectedTrueSupportingTextFalseType}
        />
        <TypeDefaultSupportingTextFalseScrol2
          selectedTrueSupportingTextFalseType={typeDefaultSupportingTextFalseScrol.selectedTrueSupportingTextFalseType}
          selectedFalseSupportingTextFalseTyp={typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp}
          selectedFalseSupportingTextFalseTyp2={
            typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp2
          }
          selectedFalseSupportingTextFalseTyp3={
            typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp3
          }
          selectedFalseSupportingTextFalseTyp4={
            typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp4
          }
        />
      </div>
    );
  }
}

export default StateOpenfocusedTypeDefaultSupporti2;
