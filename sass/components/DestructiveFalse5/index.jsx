import React from "react";
import Text from "../Text";
import "./DestructiveFalse5.sass";

class DestructiveFalse5 extends React.Component {
  render() {
    const { label, textProps } = this.props;

    return (
      <div className="textarea-input-field-base-13">
        <p className="label-54 inter-medium-oxford-blue-14px">{label}</p>
        <div className="input-38 border-1px-perfume">
          <Text className={textProps.className}>{textProps.children}</Text>
        </div>
      </div>
    );
  }
}

export default DestructiveFalse5;
