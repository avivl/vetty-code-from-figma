import React from "react";
import Input2 from "../Input2";
import "./TypeDefaultDestructiveFalse2.sass";

class TypeDefaultDestructiveFalse2 extends React.Component {
  render() {
    const { label, className, input2Props } = this.props;

    return (
      <div className={`input-field-base-14-1 ${className || ""}`}>
        <div className="label-30 inter-medium-oxford-blue-14px">{label}</div>
        <Input2>{input2Props.children}</Input2>
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse2;
