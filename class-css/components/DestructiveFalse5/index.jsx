import React from "react";
import Text from "../Text";
import "./DestructiveFalse5.css";

class DestructiveFalse5 extends React.Component {
  render() {
    const { label, textProps } = this.props;

    return (
      <div className="input-with-label-48">
        <p className="label-52 inter-medium-oxford-blue-14px">{label}</p>
        <div className="input-43 border-1px-perfume">
          <Text className={textProps.className}>{textProps.children}</Text>
        </div>
      </div>
    );
  }
}

export default DestructiveFalse5;
