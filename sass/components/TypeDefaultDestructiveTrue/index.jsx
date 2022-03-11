import React from "react";
import Text from "../Text";
import "./TypeDefaultDestructiveTrue.sass";

class TypeDefaultDestructiveTrue extends React.Component {
  render() {
    const { label, hintText, textProps } = this.props;

    return (
      <div className="input-field-base-19">
        <div className="input-with-label-1">
          <div className="label-52 inter-medium-oxford-blue-14px">{label}</div>
          <div className="input-36 border-1px-mona-lisa">
            <Text className={textProps.className}>{textProps.children}</Text>
            <img className="alert-circle" src="/img/alert-circle@2x.svg" />
          </div>
        </div>
        <p className="hint-text-2 inter-normal-cinnabar-14px">{hintText}</p>
      </div>
    );
  }
}

export default TypeDefaultDestructiveTrue;
