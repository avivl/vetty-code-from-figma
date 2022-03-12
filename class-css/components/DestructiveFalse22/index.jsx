import React from "react";
import DestructiveFalse23 from "../DestructiveFalse23";
import "./DestructiveFalse22.css";

class DestructiveFalse22 extends React.Component {
  render() {
    const { input2Props } = this.props;

    return (
      <div className="textarea-input-field-base-4">
        <DestructiveFalse23 className={input2Props.className} input2Props={input2Props.input2Props} />
      </div>
    );
  }
}

export default DestructiveFalse22;
