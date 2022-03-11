import React from "react";
import "./TypeDefaultDestructiveFalse.sass";

class TypeDefaultDestructiveFalse extends React.Component {
  render() {
    const { label, text, className } = this.props;

    return (
      <div className={`input-field-base-7 ${className || ""}`}>
        <div className="label-1 inter-medium-oxford-blue-14px">{label}</div>
        <div className="input border-1px-mischka">
          <div className="text-31 inter-normal-pale-sky-16px">{text}</div>
        </div>
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse;
