import React from "react";
import Text2 from "../Text2";
import "./Section5.sass";

class Section5 extends React.Component {
  render() {
    const { className, text2Props } = this.props;

    return (
      <div className={`section-37 ${className || ""}`}>
        <Text2 className={text2Props.className}>{text2Props.children}</Text2>
      </div>
    );
  }
}

export default Section5;
