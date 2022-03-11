import React from "react";
import "./Text.sass";

class Text extends React.Component {
  render() {
    const { children, className } = this.props;

    return <div className={`text-41 inter-normal-mirage-16px ${className || ""}`}>{children}</div>;
  }
}

export default Text;
