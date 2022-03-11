import React from "react";
import DestructiveFalse4 from "../DestructiveFalse4";
import "./LabelTrueHintTextFalseDestructiveFa4.sass";

class LabelTrueHintTextFalseDestructiveFa4 extends React.Component {
  render() {
    const { destructiveFalse4Props } = this.props;

    return (
      <div className="textarea-input-field-8">
        <DestructiveFalse4 inputProps={destructiveFalse4Props.inputProps} />
      </div>
    );
  }
}

export default LabelTrueHintTextFalseDestructiveFa4;
