import React from "react";
import "./Input.sass";

class Input extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`input-13-1 border-1px-mischka ${className || ""}`}>
        <p className="text-62 inter-normal-pale-sky-16px">{children}</p>
      </div>
    );
  }
}

export default Input;
