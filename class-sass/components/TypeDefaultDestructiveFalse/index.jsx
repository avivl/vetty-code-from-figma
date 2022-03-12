import React from "react";
import Text2 from "../Text2";
import "./TypeDefaultDestructiveFalse.sass";

class TypeDefaultDestructiveFalse extends React.Component {
  render() {
    const { label, className, text2Props } = this.props;

    return (
      <div className={`input-field-base-7 ${className || ""}`}>
        <div className="input-with-label">
          <div className="label-1 inter-medium-oxford-blue-14px">{label}</div>
          <div className="input border-1px-mischka">
            <div className="content-22">
              <Text2 className={text2Props.className}>{text2Props.children}</Text2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse;
