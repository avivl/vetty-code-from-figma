import React from "react";
import DestructiveFalse5 from "../DestructiveFalse5";
import "./DestructiveFalse52.sass";

class DestructiveFalse52 extends React.Component {
  render() {
    const { destructiveFalse5Props } = this.props;

    return (
      <div className="textarea-input-field-base-14">
        <DestructiveFalse5 label={destructiveFalse5Props.label} textProps={destructiveFalse5Props.textProps} />
      </div>
    );
  }
}

export default DestructiveFalse52;
