import React from "react";
import DestructiveFalse5 from "../DestructiveFalse5";
import "./LabelTrueHintTextFalseDestructiveFa5.sass";

class LabelTrueHintTextFalseDestructiveFa5 extends React.Component {
  render() {
    const { destructiveFalse5Props } = this.props;

    return (
      <div className="textarea-input-field-12">
        <DestructiveFalse5 label={destructiveFalse5Props.label} textProps={destructiveFalse5Props.textProps} />
      </div>
    );
  }
}

export default LabelTrueHintTextFalseDestructiveFa5;
