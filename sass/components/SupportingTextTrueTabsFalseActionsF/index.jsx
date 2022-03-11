import React from "react";
import "./SupportingTextTrueTabsFalseActionsF.sass";

class SupportingTextTrueTabsFalseActionsF extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`section-header-6 ${className || ""}`}>
        <div className="text-22 inter-medium-mirage-20px">{children}</div>
        <div className="divider-5"></div>
      </div>
    );
  }
}

export default SupportingTextTrueTabsFalseActionsF;
