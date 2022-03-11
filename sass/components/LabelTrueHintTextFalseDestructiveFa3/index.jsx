import React from "react";
import DestructiveFalse3 from "../DestructiveFalse3";
import "./LabelTrueHintTextFalseDestructiveFa3.sass";

class LabelTrueHintTextFalseDestructiveFa3 extends React.Component {
  render() {
    const { className, destructiveFalse3Props } = this.props;

    return (
      <div className={`textarea-input-field-4 ${className || ""}`}>
        <DestructiveFalse3
          label={destructiveFalse3Props.label}
          className={destructiveFalse3Props.className}
          inputProps={destructiveFalse3Props.inputProps}
        />
      </div>
    );
  }
}

export default LabelTrueHintTextFalseDestructiveFa3;
