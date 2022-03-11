import React from "react";
import TypeLeadingTextDestructiveFalse from "../TypeLeadingTextDestructiveFalse";
import "./TypeLeadingTextDestructiveFalse2.sass";

class TypeLeadingTextDestructiveFalse2 extends React.Component {
  render() {
    const { className, typeLeadingTextDestructiveFalseProp } = this.props;

    return (
      <div className={`input-field-4 ${className || ""}`}>
        <TypeLeadingTextDestructiveFalse className={typeLeadingTextDestructiveFalseProp.className} />
      </div>
    );
  }
}

export default TypeLeadingTextDestructiveFalse2;
