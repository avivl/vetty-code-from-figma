import React from "react";
import Section32 from "../Section32";
import Frame14069 from "../Frame14069";
import "./Frame33760.sass";

class Frame33760 extends React.Component {
  render() {
    const { shareProject, className, section32Props, frame14069Props } = this.props;

    return (
      <div className={`frame-33760 ${className || ""}`}>
        <img className="share-project" src={shareProject} />
        <Section32
          row51Props={section32Props.row51Props}
          property1AmenitiesProperty2False1Pr={section32Props.property1AmenitiesProperty2False1Pr}
          property1AmenitiesProperty2False2Pr={section32Props.property1AmenitiesProperty2False2Pr}
          property1AmenitiesProperty2False3Pr={section32Props.property1AmenitiesProperty2False3Pr}
          row52Props={section32Props.row52Props}
        />
        <Frame14069
          preferenceAgencyProps={frame14069Props.preferenceAgencyProps}
          uButtonsIconOutlineRestingProps={frame14069Props.uButtonsIconOutlineRestingProps}
          content7Props={frame14069Props.content7Props}
        />
      </div>
    );
  }
}

export default Frame33760;
