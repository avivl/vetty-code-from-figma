import React from "react";
import TypeDefaultDestructiveFalse from "../TypeDefaultDestructiveFalse";
import "./TypeDefaultLeadingIconFalseLabelTru.sass";

class TypeDefaultLeadingIconFalseLabelTru extends React.Component {
  render() {
    const { className, typeDefaultDestructiveFalseProps } = this.props;

    return (
      <div className={`input-field ${className || ""}`}>
        <TypeDefaultDestructiveFalse
          label={typeDefaultDestructiveFalseProps.label}
          text={typeDefaultDestructiveFalseProps.text}
          className={typeDefaultDestructiveFalseProps.className}
        />
      </div>
    );
  }
}

export default TypeDefaultLeadingIconFalseLabelTru;
