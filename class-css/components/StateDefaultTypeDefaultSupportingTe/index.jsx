import React from "react";
import LabelTrueTypeDefaultStateDefault from "../LabelTrueTypeDefaultStateDefault";
import "./StateDefaultTypeDefaultSupportingTe.css";

class StateDefaultTypeDefaultSupportingTe extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStateDefaultPro } = this.props;

    return (
      <div className={`input-dropdown-7 ${className || ""}`}>
        <LabelTrueTypeDefaultStateDefault
          chevronDown={labelTrueTypeDefaultStateDefaultPro.chevronDown}
          className={labelTrueTypeDefaultStateDefaultPro.className}
          content6Props={labelTrueTypeDefaultStateDefaultPro.content6Props}
        />
      </div>
    );
  }
}

export default StateDefaultTypeDefaultSupportingTe;
