import React from "react";
import "./SupportingTextFalseTabsFalseActions.sass";

class SupportingTextFalseTabsFalseActions extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`section-header-7 ${className || ""}`}>
        <div className="text-85 inter-medium-mirage-18px">{children}</div>
      </div>
    );
  }
}

export default SupportingTextFalseTabsFalseActions;
