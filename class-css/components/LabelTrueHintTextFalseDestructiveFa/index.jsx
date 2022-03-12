import React from "react";
import DestructiveFalse62 from "../DestructiveFalse62";
import "./LabelTrueHintTextFalseDestructiveFa.css";

class LabelTrueHintTextFalseDestructiveFa extends React.Component {
  render() {
    const { destructiveFalse62Props } = this.props;

    return (
      <div className="textarea-input-field">
        <DestructiveFalse62 inputProps={destructiveFalse62Props.inputProps} />
      </div>
    );
  }
}

export default LabelTrueHintTextFalseDestructiveFa;
