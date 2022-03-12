import React from "react";
import Property1AmenitiesProperty2False from "../Property1AmenitiesProperty2False";
import "./Row5.sass";

class Row5 extends React.Component {
  render() {
    const {
      property1AmenitiesProperty2False1Pr,
      property1AmenitiesProperty2False2Pr,
      property1AmenitiesProperty2False3Pr,
    } = this.props;

    return (
      <div className="row">
        <Property1AmenitiesProperty2False>
          {property1AmenitiesProperty2False1Pr.children}
        </Property1AmenitiesProperty2False>
        <Property1AmenitiesProperty2False className={property1AmenitiesProperty2False2Pr.className}>
          {property1AmenitiesProperty2False2Pr.children}
        </Property1AmenitiesProperty2False>
        <Property1AmenitiesProperty2False className={property1AmenitiesProperty2False3Pr.className}>
          {property1AmenitiesProperty2False3Pr.children}
        </Property1AmenitiesProperty2False>
      </div>
    );
  }
}

export default Row5;
