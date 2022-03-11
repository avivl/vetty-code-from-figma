import React from "react";
import Input from "../Input";
import "./DestructiveFalse.sass";

class DestructiveFalse extends React.Component {
  render() {
    const { className, inputProps } = this.props;

    return (
      <div className={`textarea-input-field-base-2 ${className || ""}`}>
        <img className="label-29" src="/img/label@2x.svg" />
        <Input>{inputProps.children}</Input>
      </div>
    );
  }
}

export default DestructiveFalse;
