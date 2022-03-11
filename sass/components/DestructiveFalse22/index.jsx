import React from "react";
import DestructiveFalse2 from "../DestructiveFalse2";
import "./DestructiveFalse22.sass";

class DestructiveFalse22 extends React.Component {
  render() {
    const { input2Props } = this.props;

    return (
      <div className="textarea-input-field-2">
        <DestructiveFalse2 className={input2Props.className} input2Props={input2Props.input2Props} />
      </div>
    );
  }
}

export default DestructiveFalse22;
