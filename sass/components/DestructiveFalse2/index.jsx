import React from "react";
import Input2 from "../Input2";
import "./DestructiveFalse2.sass";

class DestructiveFalse2 extends React.Component {
  render() {
    const { className, input2Props } = this.props;

    return (
      <div className={`textarea-input-field-base-4-1 ${className || ""}`}>
        <img className="label-35" src="/img/label-3@2x.svg" />
        <Input2 className={input2Props.className}>{input2Props.children}</Input2>
      </div>
    );
  }
}

export default DestructiveFalse2;
