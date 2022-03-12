import React from "react";
import "./SupportingTextTrueTabsFalseActionsF.css";

class SupportingTextTrueTabsFalseActionsF extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`section-header-6 ${className || ""}`}>
        <div className="text-and-supporting-text-2">
          <div className="text-24 inter-medium-mirage-20px">{children}</div>
        </div>
        <div className="divider-6"></div>
      </div>
    );
  }
}

export default SupportingTextTrueTabsFalseActionsF;
