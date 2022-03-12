import React from "react";
import "./Property1AmenitiesProperty2False.sass";

class Property1AmenitiesProperty2False extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`select-12 border-1px-blue-violet ${className || ""}`}>
        <div className="amenities inter-medium-mirage-14px">{children}</div>
      </div>
    );
  }
}

export default Property1AmenitiesProperty2False;
