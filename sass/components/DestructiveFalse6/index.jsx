import React from "react";
import DestructiveFalse from "../DestructiveFalse";
import "./DestructiveFalse6.sass";

class DestructiveFalse6 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <div className="textarea-input-field">
        <DestructiveFalse className={inputProps.className} inputProps={inputProps.inputProps} />
      </div>
    );
  }
}

export default DestructiveFalse6;
