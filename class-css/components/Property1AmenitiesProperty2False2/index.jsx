import React from "react";
import "./Property1AmenitiesProperty2False2.css";

class Property1AmenitiesProperty2False2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`select-13-1 border-1px-blue-violet ${className || ""}`}>
        <div className="amenities-1 inter-medium-mirage-12px">{children}</div>
      </div>
    );
  }
}

export default Property1AmenitiesProperty2False2;
