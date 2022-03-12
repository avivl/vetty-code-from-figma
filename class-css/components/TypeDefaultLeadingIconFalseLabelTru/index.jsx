import React from "react";
import TypeDefaultDestructiveFalse from "../TypeDefaultDestructiveFalse";
import "./TypeDefaultLeadingIconFalseLabelTru.css";

class TypeDefaultLeadingIconFalseLabelTru extends React.Component {
  render() {
    const { className, typeDefaultDestructiveFalseProps } = this.props;

    return (
      <div className={`input-field ${className || ""}`}>
        <TypeDefaultDestructiveFalse
          label={typeDefaultDestructiveFalseProps.label}
          className={typeDefaultDestructiveFalseProps.className}
          text2Props={typeDefaultDestructiveFalseProps.text2Props}
        />
      </div>
    );
  }
}

export default TypeDefaultLeadingIconFalseLabelTru;
