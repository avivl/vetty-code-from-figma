import React from "react";
import SizesmIconLeading from "../SizesmIconLeading";
import "./Button.sass";

class Button extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`button ${className || ""}`}>
        <SizesmIconLeading />
      </div>
    );
  }
}

export default Button;
