import React from "react";
import Input from "../Input";
import "./DestructiveFalse.sass";

class DestructiveFalse extends React.Component {
  render() {
    const { className, inputProps } = this.props;

    return (
      <div className={`input-with-label-22 ${className || ""}`}>
        <img className="label-25" src="/img/label@2x.png" />
        <Input text2Props={inputProps.text2Props} />
      </div>
    );
  }
}

export default DestructiveFalse;
