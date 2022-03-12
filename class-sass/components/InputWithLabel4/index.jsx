import React from "react";
import Text2 from "../Text2";
import "./InputWithLabel4.sass";

class InputWithLabel4 extends React.Component {
  render() {
    const { label, className, text2Props } = this.props;

    return (
      <div className={`input-with-label-34-1 ${className || ""}`}>
        <div className="label-35 inter-medium-oxford-blue-14px">{label}</div>
        <div className="input-32 border-1px-mischka">
          <div className="content-70">
            <Text2 className={text2Props.className}>{text2Props.children}</Text2>
          </div>
        </div>
      </div>
    );
  }
}

export default InputWithLabel4;
