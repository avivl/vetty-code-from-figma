import React from "react";
import Row5 from "../Row5";
import Property1AmenitiesProperty2False from "../Property1AmenitiesProperty2False";
import "./Section32.sass";

class Section32 extends React.Component {
  render() {
    const {
      className,
      row51Props,
      property1AmenitiesProperty2False1Pr,
      property1AmenitiesProperty2False2Pr,
      property1AmenitiesProperty2False3Pr,
      row52Props,
    } = this.props;

    return (
      <div className={`section-7 ${className || ""}`}>
        <div className="heading-1 valign-text-middle inter-medium-mirage-16px">Desired Skills</div>
        <Row5
          property1AmenitiesProperty2False1Pr={row51Props.property1AmenitiesProperty2False1Pr}
          property1AmenitiesProperty2False2Pr={row51Props.property1AmenitiesProperty2False2Pr}
          property1AmenitiesProperty2False3Pr={row51Props.property1AmenitiesProperty2False3Pr}
        />
        <div className="row-2">
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
        <Row5
          property1AmenitiesProperty2False1Pr={row52Props.property1AmenitiesProperty2False1Pr}
          property1AmenitiesProperty2False2Pr={row52Props.property1AmenitiesProperty2False2Pr}
          property1AmenitiesProperty2False3Pr={row52Props.property1AmenitiesProperty2False3Pr}
        />
      </div>
    );
  }
}

export default Section32;
