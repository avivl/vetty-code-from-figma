import React from "react";
import Text from "../Text";
import "./SelectedTrueSupportingTextFalseType.sass";

class SelectedTrueSupportingTextFalseType extends React.Component {
  render() {
    const { className, textProps } = this.props;

    return (
      <div className={`input-40 border-1px-mischka ${className || ""}`}>
        <Text className={textProps.className}>{textProps.children}</Text>
        <img className="chevron-down-2" src="/img/chevron-down@2x.svg" />
      </div>
    );
  }
}

export default SelectedTrueSupportingTextFalseType;
