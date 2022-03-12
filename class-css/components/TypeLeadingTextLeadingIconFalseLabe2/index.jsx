import React from "react";
import TypeLeadingTextDestructiveFalse2 from "../TypeLeadingTextDestructiveFalse2";
import "./TypeLeadingTextLeadingIconFalseLabe2.css";

class TypeLeadingTextLeadingIconFalseLabe2 extends React.Component {
  render() {
    const { className, typeLeadingTextDestructiveFalse2Pro } = this.props;

    return (
      <div className={`input-field-10 ${className || ""}`}>
        <TypeLeadingTextDestructiveFalse2
          addOn={typeLeadingTextDestructiveFalse2Pro.addOn}
          textInput={typeLeadingTextDestructiveFalse2Pro.textInput}
          className={typeLeadingTextDestructiveFalse2Pro.className}
        />
      </div>
    );
  }
}

export default TypeLeadingTextLeadingIconFalseLabe2;
