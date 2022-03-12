import React from "react";
import "./TextAndSupportingText32.sass";

class TextAndSupportingText32 extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <div className={`text-and-supporting-text-27 ${className || ""}`}>
        <div className="text-135 inter-semi-bold-mirage-30px">{text}</div>
        <p className="supporting-text-17 inter-normal-pale-sky-16px">{supportingText}</p>
      </div>
    );
  }
}

export default TextAndSupportingText32;
