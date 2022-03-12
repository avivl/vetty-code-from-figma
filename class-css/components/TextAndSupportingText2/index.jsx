import React from "react";
import "./TextAndSupportingText2.css";

class TextAndSupportingText2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`text-and-supporting-text-12 ${className || ""}`}>
        <div className="text-107 inter-medium-mirage-24px">Technical Program Manager, Mobile Software Engineering</div>
      </div>
    );
  }
}

export default TextAndSupportingText2;
