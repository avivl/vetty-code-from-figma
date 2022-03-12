import React from "react";
import "./TextAndSupportingText3.sass";

class TextAndSupportingText3 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`text-and-supporting-text-20 ${className || ""}`}>
        <div className="text-121 inter-medium-mirage-24px">Technical Program Manager, Mobile Software Engineering</div>
      </div>
    );
  }
}

export default TextAndSupportingText3;
