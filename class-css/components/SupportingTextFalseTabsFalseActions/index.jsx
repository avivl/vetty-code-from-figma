import React from "react";
import "./SupportingTextFalseTabsFalseActions.css";

class SupportingTextFalseTabsFalseActions extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`section-header-7 ${className || ""}`}>
        <div className="text-109 inter-medium-mirage-18px">{children}</div>
      </div>
    );
  }
}

export default SupportingTextFalseTabsFalseActions;
