import React from "react";
import Text from "../Text";
import "./TypeDefaultDestructiveTrue.css";

class TypeDefaultDestructiveTrue extends React.Component {
  render() {
    const { label, alertCircle, hintText, textProps } = this.props;

    return (
      <div className="input-field-base-20">
        <div className="input-with-label-46">
          <div className="label-50 inter-medium-oxford-blue-14px">{label}</div>
          <div className="input-41 border-1px-mona-lisa">
            <div className="content-80">
              <Text className={textProps.className}>{textProps.children}</Text>
            </div>
            <img className="alert-circle" src={alertCircle} />
          </div>
        </div>
        <p className="hint-text-2 inter-normal-cinnabar-14px">{hintText}</p>
      </div>
    );
  }
}

export default TypeDefaultDestructiveTrue;
