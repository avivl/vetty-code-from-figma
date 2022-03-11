import React from "react";
import "./TypeLeadingTextDestructiveFalse.sass";

class TypeLeadingTextDestructiveFalse extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`input-field-base-8 ${className || ""}`}>
        <div className="label-17 inter-medium-oxford-blue-14px">Hourly Fee*</div>
        <div className="input-11 border-1px-mischka">
          <img className="add-on" src="/img/add-on@2x.svg" />
          <img className="text-input" src="/img/text-input@2x.svg" />
        </div>
      </div>
    );
  }
}

export default TypeLeadingTextDestructiveFalse;
