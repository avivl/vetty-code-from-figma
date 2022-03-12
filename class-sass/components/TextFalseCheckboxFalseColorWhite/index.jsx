import React from "react";
import "./TextFalseCheckboxFalseColorWhite.sass";

class TextFalseCheckboxFalseColorWhite extends React.Component {
  render() {
    const { className } = this.props;

    return <div className={`table-header-cell-30 ${className || ""}`}></div>;
  }
}

export default TextFalseCheckboxFalseColorWhite;
