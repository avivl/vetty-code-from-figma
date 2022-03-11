import React from "react";
import "./Content2.sass";

class Content2 extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <div className={`content-8 ${className || ""}`}>
        <div className="text-67 inter-medium-mirage-16px">{text}</div>
        <p className="supporting-text inter-normal-pale-sky-14px">{supportingText}</p>
      </div>
    );
  }
}

export default Content2;
