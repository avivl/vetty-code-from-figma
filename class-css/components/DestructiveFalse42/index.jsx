import React from "react";
import DestructiveFalse43 from "../DestructiveFalse43";
import "./DestructiveFalse42.css";

class DestructiveFalse42 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <div className="textarea-input-field-base-11">
        <DestructiveFalse43 inputProps={inputProps.inputProps} />
      </div>
    );
  }
}

export default DestructiveFalse42;
