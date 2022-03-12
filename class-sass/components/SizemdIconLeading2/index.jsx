import React from "react";
import "./SizemdIconLeading2.sass";

class SizemdIconLeading2 extends React.Component {
  render() {
    const { text, className } = this.props;

    return (
      <div className={`button-base-13 border-1px-mischka ${className || ""}`}>
        <img className="plus" src="/img/plus@2x.svg" />
        <div className="text-103 inter-medium-oxford-blue-14px">{text}</div>
      </div>
    );
  }
}

export default SizemdIconLeading2;
