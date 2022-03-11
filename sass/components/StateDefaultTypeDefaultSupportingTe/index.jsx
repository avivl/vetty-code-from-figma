import React from "react";
import LabelTrueTypeDefaultStateDefault from "../LabelTrueTypeDefaultStateDefault";
import "./StateDefaultTypeDefaultSupportingTe.sass";

class StateDefaultTypeDefaultSupportingTe extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStateDefaultPro } = this.props;

    return (
      <div className={`input-dropdown-11 ${className || ""}`}>
        <LabelTrueTypeDefaultStateDefault
          className={labelTrueTypeDefaultStateDefaultPro.className}
          textProps={labelTrueTypeDefaultStateDefaultPro.textProps}
        />
      </div>
    );
  }
}

export default StateDefaultTypeDefaultSupportingTe;
