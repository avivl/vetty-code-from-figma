import React from "react";
import SizemdPlaceholderFalseTextTrueStatu from "../SizemdPlaceholderFalseTextTrueStatu";
import "./TypeAvatarOpenFalse.css";

class TypeAvatarOpenFalse extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`dropdown ${className || ""}`}>
        <SizemdPlaceholderFalseTextTrueStatu />
      </div>
    );
  }
}

export default TypeAvatarOpenFalse;
