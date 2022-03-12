import React from "react";
import DestructiveFalse from "../DestructiveFalse";
import "./DestructiveFalse62.css";

class DestructiveFalse62 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <div className="textarea-input-field-base">
        <DestructiveFalse className={inputProps.className} inputProps={inputProps.inputProps} />
      </div>
    );
  }
}

export default DestructiveFalse62;
