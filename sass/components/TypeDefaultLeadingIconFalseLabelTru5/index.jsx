import React from "react";
import TypeDefaultDestructiveTrue from "../TypeDefaultDestructiveTrue";
import "./TypeDefaultLeadingIconFalseLabelTru5.sass";

class TypeDefaultLeadingIconFalseLabelTru5 extends React.Component {
  render() {
    const { typeDefaultDestructiveTrueProps } = this.props;

    return (
      <div className="input-field-23">
        <TypeDefaultDestructiveTrue
          label={typeDefaultDestructiveTrueProps.label}
          hintText={typeDefaultDestructiveTrueProps.hintText}
          textProps={typeDefaultDestructiveTrueProps.textProps}
        />
      </div>
    );
  }
}

export default TypeDefaultLeadingIconFalseLabelTru5;
