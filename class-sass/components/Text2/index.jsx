import React from "react";
import "./Text2.sass";

class Text2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return <p className={`paragraph-8 inter-normal-pale-sky-16px ${className || ""}`}>{children}</p>;
  }
}

export default Text2;
