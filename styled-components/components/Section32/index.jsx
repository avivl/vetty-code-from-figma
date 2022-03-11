import React from "react";
import Row5 from "../Row5";
import Property1AmenitiesProperty2False from "../Property1AmenitiesProperty2False";
import styled from "styled-components";
import { InterMediumMirage16px, ValignTextMiddle } from "../../styledMixins";


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
      <Section className={`section-2 ${className || ""}`}>
        <Heading className="heading-1">Desired Skills</Heading>
        <Row5
          property1AmenitiesProperty2False1Pr={row51Props.property1AmenitiesProperty2False1Pr}
          property1AmenitiesProperty2False2Pr={row51Props.property1AmenitiesProperty2False2Pr}
          property1AmenitiesProperty2False3Pr={row51Props.property1AmenitiesProperty2False3Pr}
        />
        <Row2 className="row-2">
          <Property1AmenitiesProperty2False>
            {property1AmenitiesProperty2False1Pr.children}
          </Property1AmenitiesProperty2False>
          <Property1AmenitiesProperty2False className={property1AmenitiesProperty2False2Pr.className}>
            {property1AmenitiesProperty2False2Pr.children}
          </Property1AmenitiesProperty2False>
          <Property1AmenitiesProperty2False className={property1AmenitiesProperty2False3Pr.className}>
            {property1AmenitiesProperty2False3Pr.children}
          </Property1AmenitiesProperty2False>
        </Row2>
        <Row5
          property1AmenitiesProperty2False1Pr={row52Props.property1AmenitiesProperty2False1Pr}
          property1AmenitiesProperty2False2Pr={row52Props.property1AmenitiesProperty2False2Pr}
          property1AmenitiesProperty2False3Pr={row52Props.property1AmenitiesProperty2False3Pr}
        />
      </Section>
    );
  }
}

const Section = styled.div`
  width: 360px;
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 217px;

  &.section-2.section-4 {
    position: absolute;
    top: 214px;
    left: 1283px;
    margin-top: unset;
  }

  &.section-2.section-5 {
    margin-top: unset;
  }
`;

const Heading = styled.div`
  ${ValignTextMiddle}
  ${InterMediumMirage16px}
            width: 360px;
  height: 37px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Row2 = styled.div`
  height: 37px;
  position: relative;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 331px;
`;

export default Section32;
