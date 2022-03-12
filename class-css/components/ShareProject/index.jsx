import React from "react";
import Row52 from "../Row52";
import Property1AmenitiesProperty2False2 from "../Property1AmenitiesProperty2False2";
import "./ShareProject.css";

class ShareProject extends React.Component {
  render() {
    const {
      className,
      row521Props,
      property1AmenitiesProperty2False21P,
      property1AmenitiesProperty2False22P,
      property1AmenitiesProperty2False23P,
      row522Props,
    } = this.props;

    return (
      <div className={`share-project-7 ${className || ""}`}>
        <div className="content-62">
          <div className="text-and-supporting-text-16">
            <div className="text-110 inter-medium-mirage-18px">Desired Skills</div>
            <Row52
              property1AmenitiesProperty2False21P={row521Props.property1AmenitiesProperty2False21P}
              property1AmenitiesProperty2False22P={row521Props.property1AmenitiesProperty2False22P}
              property1AmenitiesProperty2False23P={row521Props.property1AmenitiesProperty2False23P}
            />
            <div className="row-2-4">
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
            <Row52
              property1AmenitiesProperty2False21P={row522Props.property1AmenitiesProperty2False21P}
              property1AmenitiesProperty2False22P={row522Props.property1AmenitiesProperty2False22P}
              property1AmenitiesProperty2False23P={row522Props.property1AmenitiesProperty2False23P}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShareProject;
