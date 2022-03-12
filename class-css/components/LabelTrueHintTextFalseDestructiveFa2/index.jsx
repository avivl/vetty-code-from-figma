import React from "react";
import DestructiveFalse2 from "../DestructiveFalse2";
import "./LabelTrueHintTextFalseDestructiveFa2.css";

class LabelTrueHintTextFalseDestructiveFa2 extends React.Component {
  render() {
    const { destructiveFalse2Props } = this.props;

    return (
      <div className="textarea-input-field-2">
        <DestructiveFalse2
          label={destructiveFalse2Props.label}
          className={destructiveFalse2Props.className}
          inputProps={destructiveFalse2Props.inputProps}
        />
      </div>
    );
  }
}

export default LabelTrueHintTextFalseDestructiveFa2;
