import React from "react";
import Input2 from "../Input2";
import "./DestructiveFalse4.css";

class DestructiveFalse4 extends React.Component {
  render() {
    const { label, className, input2Props } = this.props;

    return (
      <div className={`textarea-input-field-base-6-1 ${className || ""}`}>
        <div className="input-with-label-32">
          <img className="label-34" src={label} />
          <Input2 className={input2Props.className} text2Props={input2Props.text2Props} />
        </div>
      </div>
    );
  }
}

export default DestructiveFalse4;
