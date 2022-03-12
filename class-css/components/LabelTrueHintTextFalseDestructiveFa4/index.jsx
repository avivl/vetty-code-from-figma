import React from "react";
import DestructiveFalse4 from "../DestructiveFalse4";
import "./LabelTrueHintTextFalseDestructiveFa4.css";

class LabelTrueHintTextFalseDestructiveFa4 extends React.Component {
  render() {
    const { destructiveFalse4Props } = this.props;

    return (
      <div className="textarea-input-field-6">
        <DestructiveFalse4
          label={destructiveFalse4Props.label}
          className={destructiveFalse4Props.className}
          input2Props={destructiveFalse4Props.input2Props}
        />
      </div>
    );
  }
}

export default LabelTrueHintTextFalseDestructiveFa4;
