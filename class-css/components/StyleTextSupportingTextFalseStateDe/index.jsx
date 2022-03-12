import React from "react";
import "./StyleTextSupportingTextFalseStateDe.css";

class StyleTextSupportingTextFalseStateDe extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`table-cell-5-1 ${className || ""}`}>
        <div className="text-148 inter-normal-pale-sky-14px">{children}</div>
      </div>
    );
  }
}

export default StyleTextSupportingTextFalseStateDe;
