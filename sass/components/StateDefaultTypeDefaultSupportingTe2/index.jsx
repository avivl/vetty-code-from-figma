import React from "react";
import LabelTrueTypeDefaultStateDefault2 from "../LabelTrueTypeDefaultStateDefault2";
import "./StateDefaultTypeDefaultSupportingTe2.sass";

class StateDefaultTypeDefaultSupportingTe2 extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault2Props } = this.props;

    return (
      <div className="input-dropdown-16">
        <LabelTrueTypeDefaultStateDefault2
          label={labelTrueTypeDefaultStateDefault2Props.label}
          selectedTrueSupportingTextFalseTypeProps={
            labelTrueTypeDefaultStateDefault2Props.selectedTrueSupportingTextFalseTypeProps
          }
        />
      </div>
    );
  }
}

export default StateDefaultTypeDefaultSupportingTe2;
