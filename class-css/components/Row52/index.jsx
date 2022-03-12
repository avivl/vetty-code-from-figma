import React from "react";
import Property1AmenitiesProperty2False2 from "../Property1AmenitiesProperty2False2";
import "./Row52.css";

class Row52 extends React.Component {
  render() {
    const {
      property1AmenitiesProperty2False21P,
      property1AmenitiesProperty2False22P,
      property1AmenitiesProperty2False23P,
    } = this.props;

    return (
      <div className="row-5">
        <Property1AmenitiesProperty2False2>
          {property1AmenitiesProperty2False21P.children}
        </Property1AmenitiesProperty2False2>
        <Property1AmenitiesProperty2False2 className={property1AmenitiesProperty2False22P.className}>
          {property1AmenitiesProperty2False22P.children}
        </Property1AmenitiesProperty2False2>
        <Property1AmenitiesProperty2False2 className={property1AmenitiesProperty2False23P.className}>
          {property1AmenitiesProperty2False23P.children}
        </Property1AmenitiesProperty2False2>
      </div>
    );
  }
}

export default Row52;
