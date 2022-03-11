import React from "react";
import "./TextAndSupportingText.sass";

class TextAndSupportingText extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <div className={`text-and-supporting-text-7 ${className || ""}`}>
        <div className="text-117 inter-semi-bold-mirage-30px">{text}</div>
        <p className="supporting-text-12 inter-normal-pale-sky-16px">{supportingText}</p>
      </div>
    );
  }
}

export default TextAndSupportingText;
