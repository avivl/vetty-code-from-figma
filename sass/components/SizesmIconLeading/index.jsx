import React from "react";
import "./SizesmIconLeading.sass";

class SizesmIconLeading extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`button-base border-1px-mischka ${className || ""}`}>
        <div className="text-19 inter-medium-oxford-blue-14px">View Candidates</div>
      </div>
    );
  }
}

export default SizesmIconLeading;
