import React from "react";
import Text from "../Text";
import "./SelectedTrueSupportingTextFalseType.sass";

class SelectedTrueSupportingTextFalseType extends React.Component {
  render() {
    const { chevronDown, className, textProps } = this.props;

    return (
      <div className={`input-45 border-1px-mischka ${className || ""}`}>
        <div className="content-82">
          <Text className={textProps.className}>{textProps.children}</Text>
        </div>
        <img className="chevron-down-11" src={chevronDown} />
      </div>
    );
  }
}

export default SelectedTrueSupportingTextFalseType;
