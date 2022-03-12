import React from "react";
import "./UButtonsIconOutlineResting.css";

class UButtonsIconOutlineResting extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <div className={`u-buttons-icon-outline-resting-6 ${className || ""}`}>
        <div className="overlap-group-5 border-1px-santas-gray-2">
          <img className="users" src={src} />
        </div>
      </div>
    );
  }
}

export default UButtonsIconOutlineResting;
