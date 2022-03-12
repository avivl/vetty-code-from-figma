import React from "react";
import InputWithLabel2 from "../InputWithLabel2";
import "./DestructiveTrue.css";

class DestructiveTrue extends React.Component {
  render() {
    const { hintText, inputWithLabel2Props } = this.props;

    return (
      <div className="textarea-input-field-base-15">
        <InputWithLabel2
          label={inputWithLabel2Props.label}
          className={inputWithLabel2Props.className}
          inputProps={inputWithLabel2Props.inputProps}
        />
        <p className="hint-text-3 inter-normal-cinnabar-14px">{hintText}</p>
      </div>
    );
  }
}

export default DestructiveTrue;
