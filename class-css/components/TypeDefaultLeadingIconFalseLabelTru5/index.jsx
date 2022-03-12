import React from "react";
import TypeDefaultDestructiveTrue from "../TypeDefaultDestructiveTrue";
import "./TypeDefaultLeadingIconFalseLabelTru5.css";

class TypeDefaultLeadingIconFalseLabelTru5 extends React.Component {
  render() {
    const { typeDefaultDestructiveTrueProps } = this.props;

    return (
      <div className="input-field-22">
        <TypeDefaultDestructiveTrue
          label={typeDefaultDestructiveTrueProps.label}
          alertCircle={typeDefaultDestructiveTrueProps.alertCircle}
          hintText={typeDefaultDestructiveTrueProps.hintText}
          textProps={typeDefaultDestructiveTrueProps.textProps}
        />
      </div>
    );
  }
}

export default TypeDefaultLeadingIconFalseLabelTru5;
