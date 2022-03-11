import React from "react";
import Input from "../Input";
import "./DestructiveFalse4.sass";

class DestructiveFalse4 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <div className="textarea-input-field-base-11">
        <p className="label-40 inter-medium-ebony-clay-14px">
          Add links for similar work you’ve done in the past (seperate by rows)
        </p>
        <Input className={inputProps.className}>{inputProps.children}</Input>
      </div>
    );
  }
}

export default DestructiveFalse4;
