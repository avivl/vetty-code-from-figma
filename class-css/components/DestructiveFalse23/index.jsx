import React from "react";
import Input2 from "../Input2";
import "./DestructiveFalse23.css";

class DestructiveFalse23 extends React.Component {
  render() {
    const { className, input2Props } = this.props;

    return (
      <div className={`input-with-label-30 ${className || ""}`}>
        <img className="label-33" src="/img/label-3@2x.png" />
        <Input2 text2Props={input2Props.text2Props} />
      </div>
    );
  }
}

export default DestructiveFalse23;
