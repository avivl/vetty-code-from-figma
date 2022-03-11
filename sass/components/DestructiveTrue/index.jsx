import React from "react";
import DestructiveFalse3 from "../DestructiveFalse3";
import "./DestructiveTrue.sass";

class DestructiveTrue extends React.Component {
  render() {
    const { hintText, destructiveFalse3Props } = this.props;

    return (
      <div className="textarea-input-field-base-14">
        <DestructiveFalse3
          label={destructiveFalse3Props.label}
          className={destructiveFalse3Props.className}
          inputProps={destructiveFalse3Props.inputProps}
        />
        <p className="hint-text-3 inter-normal-cinnabar-14px">{hintText}</p>
      </div>
    );
  }
}

export default DestructiveTrue;
