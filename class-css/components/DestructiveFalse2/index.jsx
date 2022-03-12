import React from "react";
import Input from "../Input";
import "./DestructiveFalse2.css";

class DestructiveFalse2 extends React.Component {
  render() {
    const { label, className, inputProps } = this.props;

    return (
      <div className={`textarea-input-field-base-2-1 ${className || ""}`}>
        <div className="input-with-label-24">
          <img className="label-26" src={label} />
          <Input text2Props={inputProps.text2Props} />
        </div>
      </div>
    );
  }
}

export default DestructiveFalse2;
