import React from "react";
import Text from "../Text";
import "./SelectedFalseSupportingTextFalseTyp.css";

class SelectedFalseSupportingTextFalseTyp extends React.Component {
  render() {
    const { className, textProps } = this.props;

    return (
      <div className={`input-39 border-1px-mischka ${className || ""}`}>
        <div className="content-79">
          <Text className={textProps.className}>{textProps.children}</Text>
        </div>
      </div>
    );
  }
}

export default SelectedFalseSupportingTextFalseTyp;
