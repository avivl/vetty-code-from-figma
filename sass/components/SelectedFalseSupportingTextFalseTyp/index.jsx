import React from "react";
import Text from "../Text";
import "./SelectedFalseSupportingTextFalseTyp.sass";

class SelectedFalseSupportingTextFalseTyp extends React.Component {
  render() {
    const { className, textProps } = this.props;

    return (
      <div className={`input-34 border-1px-mischka ${className || ""}`}>
        <Text className={textProps.className}>{textProps.children}</Text>
      </div>
    );
  }
}

export default SelectedFalseSupportingTextFalseTyp;
