import React from "react";
import TypeDefaultDestructiveFalse2 from "../TypeDefaultDestructiveFalse2";
import "./TypeDefaultLeadingIconFalseLabelTru2.sass";

class TypeDefaultLeadingIconFalseLabelTru2 extends React.Component {
  render() {
    const { className, typeDefaultDestructiveFalse2Props } = this.props;

    return (
      <div className={`input-field-17 ${className || ""}`}>
        <TypeDefaultDestructiveFalse2
          label={typeDefaultDestructiveFalse2Props.label}
          className={typeDefaultDestructiveFalse2Props.className}
          input2Props={typeDefaultDestructiveFalse2Props.input2Props}
        />
      </div>
    );
  }
}

export default TypeDefaultLeadingIconFalseLabelTru2;
