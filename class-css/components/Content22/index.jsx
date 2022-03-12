import React from "react";
import "./Content22.css";

class Content22 extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <div className={`text-and-supporting-text-6 ${className || ""}`}>
        <div className="text-95 inter-medium-mirage-16px">{text}</div>
        <p className="supporting-text-5 inter-normal-pale-sky-14px">{supportingText}</p>
      </div>
    );
  }
}

export default Content22;
