import React from "react";
import Input from "../Input";
import "./InputWithLabel2.css";

class InputWithLabel2 extends React.Component {
  render() {
    const { label, className, inputProps } = this.props;

    return (
      <div className={`input-with-label-38-1 ${className || ""}`}>
        <p className="label-37 inter-medium-oxford-blue-14px">{label}</p>
        <Input className={inputProps.className} text2Props={inputProps.text2Props} />
      </div>
    );
  }
}

export default InputWithLabel2;
