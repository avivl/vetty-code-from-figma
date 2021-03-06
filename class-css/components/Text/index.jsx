import React from "react";
import "./Text.css";

class Text extends React.Component {
  render() {
    const { children, className } = this.props;

    return <div className={`text-78 inter-normal-mirage-16px ${className || ""}`}>{children}</div>;
  }
}

export default Text;
