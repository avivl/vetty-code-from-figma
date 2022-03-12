import React from "react";
import "./SizemdIconLeading3.sass";

class SizemdIconLeading3 extends React.Component {
  render() {
    const { text, className } = this.props;

    return (
      <div className={`button-base-23 ${className || ""}`}>
        <img className="arrow-left" src="/img/arrow-left@2x.png" />
        <div className="text-106 inter-medium-pale-sky-14px">{text}</div>
      </div>
    );
  }
}

export default SizemdIconLeading3;
