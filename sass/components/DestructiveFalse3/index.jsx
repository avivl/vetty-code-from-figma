import React from "react";
import Input from "../Input";
import "./DestructiveFalse3.sass";

class DestructiveFalse3 extends React.Component {
  render() {
    const { label, className, inputProps } = this.props;

    return (
      <div className={`textarea-input-field-base-8 ${className || ""}`}>
        <p className="label-36 inter-medium-oxford-blue-14px">{label}</p>
        <Input className={inputProps.className}>{inputProps.children}</Input>
      </div>
    );
  }
}

export default DestructiveFalse3;
