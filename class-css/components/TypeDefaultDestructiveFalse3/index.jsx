import React from "react";
import InputWithLabel4 from "../InputWithLabel4";
import "./TypeDefaultDestructiveFalse3.css";

class TypeDefaultDestructiveFalse3 extends React.Component {
  render() {
    const { inputWithLabel4Props } = this.props;

    return (
      <div className="input-field-base-17">
        <InputWithLabel4
          label={inputWithLabel4Props.label}
          className={inputWithLabel4Props.className}
          text2Props={inputWithLabel4Props.text2Props}
        />
        <p className="hint-text inter-normal-pale-sky-14px">Must be at least 8 characters.</p>
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse3;
