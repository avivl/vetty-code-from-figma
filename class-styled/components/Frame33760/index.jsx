import React from "react";
import Section32 from "../Section32";
import Frame14069 from "../Frame14069";
import styled from "styled-components";


class Frame33760 extends React.Component {
  render() {
    const { shareProject, className, section32Props, frame14069Props } = this.props;

    return (
      <Frame337601 className={`frame-33760 ${className || ""}`}>
        <ShareProject className="share-project" src={shareProject} />
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
      </Frame337601>
    );
  }
}

const Frame337601 = styled.div`
  width: 361px;
  height: 733px;
  position: relative;
  margin-left: 39px;
  margin-top: 23.17px;
  display: flex;
  flex-direction: column;

  &.frame-33760.frame-33760-1 {
    position: absolute;
    width: 360px;
    top: 360px;
    left: 1283px;
    margin-left: unset;
    margin-top: unset;
  }
`;

const ShareProject = styled.img`
  width: 360px;
  height: 266px;
`;

export default Frame33760;
