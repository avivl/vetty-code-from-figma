import React from "react";
import TypeDefaultDestructiveFalse from "../TypeDefaultDestructiveFalse";
import "./TypeDefaultDestructiveFalse22.sass";

class TypeDefaultDestructiveFalse22 extends React.Component {
  render() {
    const { label, typeDefaultDestructiveFalseProps } = this.props;

    return (
      <div className="input-field-base-16">
        <TypeDefaultDestructiveFalse
          label={typeDefaultDestructiveFalseProps.label}
          text={typeDefaultDestructiveFalseProps.text}
          className={typeDefaultDestructiveFalseProps.className}
        />
        <p className="hint-text inter-normal-pale-sky-14px">{label}</p>
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse22;
