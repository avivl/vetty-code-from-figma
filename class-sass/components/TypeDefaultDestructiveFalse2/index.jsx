import React from "react";
import InputWithLabel4 from "../InputWithLabel4";
import "./TypeDefaultDestructiveFalse2.sass";

class TypeDefaultDestructiveFalse2 extends React.Component {
  render() {
    const { inputWithLabel4Props } = this.props;

    return (
      <div className="input-field-base-12">
        <InputWithLabel4
          label={inputWithLabel4Props.label}
          className={inputWithLabel4Props.className}
          text2Props={inputWithLabel4Props.text2Props}
        />
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse2;
