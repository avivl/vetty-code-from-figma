import React from "react";
import "./TypeLeadingTextDestructiveFalse2.css";

class TypeLeadingTextDestructiveFalse2 extends React.Component {
  render() {
    const { addOn, textInput, className } = this.props;

    return (
      <div className={`input-field-base-10 ${className || ""}`}>
        <div className="input-with-label-26">
          <div className="label-27 inter-medium-oxford-blue-14px">Hourly Fee*</div>
          <div className="input-25 border-1px-mischka">
            <img className="add-on-2" src={addOn} />
            <img className="text-input-2" src={textInput} />
          </div>
        </div>
      </div>
    );
  }
}

export default TypeLeadingTextDestructiveFalse2;
