import React from "react";
import Text from "../Text";
import "./LabelTrueTypeDefaultStateDefault.sass";

class LabelTrueTypeDefaultStateDefault extends React.Component {
  render() {
    const { className, textProps } = this.props;

    return (
      <div className={`input-dropdown-base-10 ${className || ""}`}>
        <p className="label-23 inter-medium-oxford-blue-14px">Agency or a Single Freelancer</p>
        <div className="input-12 border-1px-mischka">
          <Text>{textProps.children}</Text>
          <img className="chevron-down-1" src="/img/chevron-down@2x.svg" />
        </div>
      </div>
    );
  }
}

export default LabelTrueTypeDefaultStateDefault;
