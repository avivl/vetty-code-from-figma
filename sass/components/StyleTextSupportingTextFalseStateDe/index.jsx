import React from "react";
import "./StyleTextSupportingTextFalseStateDe.sass";

class StyleTextSupportingTextFalseStateDe extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`table-cell-4-1 ${className || ""}`}>
        <div className="text-130 inter-normal-pale-sky-14px">{children}</div>
      </div>
    );
  }
}

export default StyleTextSupportingTextFalseStateDe;
