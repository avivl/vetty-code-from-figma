import React from "react";
import "./Frame4.css";

class Frame4 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`frame-4 ${className || ""}`}>
        <div className="overlap-group-16">
          <img className="vector-7-5" src="/img/vector-7@2x.png" />
          <img
            className="x5d7f96dfdf28141cd047f1675418350c-1-10"
            src="/img/5d7f96dfdf28141cd047f1675418350c-1@2x.png"
          />
        </div>
      </div>
    );
  }
}

export default Frame4;
