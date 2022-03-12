import React from "react";
import Text2 from "../Text2";
import "./Input.css";

class Input extends React.Component {
  render() {
    const { className, text2Props } = this.props;

    return (
      <div className={`input-16-1 border-1px-mischka ${className || ""}`}>
        <Text2 className={text2Props.className}>{text2Props.children}</Text2>
      </div>
    );
  }
}

export default Input;
