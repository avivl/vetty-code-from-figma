import React from "react";
import InputWithLabel2 from "../InputWithLabel2";
import "./DestructiveFalse32.sass";

class DestructiveFalse32 extends React.Component {
  render() {
    const { inputWithLabel2Props } = this.props;

    return (
      <div className="textarea-input-field-base-8">
        <InputWithLabel2
          label={inputWithLabel2Props.label}
          className={inputWithLabel2Props.className}
          inputProps={inputWithLabel2Props.inputProps}
        />
      </div>
    );
  }
}

export default DestructiveFalse32;
