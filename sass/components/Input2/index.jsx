import React from "react";
import "./Input2.sass";

class Input2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`input-25 border-1px-mischka ${className || ""}`}>
        <div className="text-89 inter-normal-pale-sky-16px">{children}</div>
      </div>
    );
  }
}

export default Input2;
