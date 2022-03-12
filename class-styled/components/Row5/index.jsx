import React from "react";
import Property1AmenitiesProperty2False from "../Property1AmenitiesProperty2False";
import styled from "styled-components";


class Row5 extends React.Component {
  render() {
    const {
      property1AmenitiesProperty2False1Pr,
      property1AmenitiesProperty2False2Pr,
      property1AmenitiesProperty2False3Pr,
    } = this.props;

    return (
      <Row51>
        <Property1AmenitiesProperty2False>
          {property1AmenitiesProperty2False1Pr.children}
        </Property1AmenitiesProperty2False>
        <Property1AmenitiesProperty2False className={property1AmenitiesProperty2False2Pr.className}>
          {property1AmenitiesProperty2False2Pr.children}
        </Property1AmenitiesProperty2False>
        <Property1AmenitiesProperty2False className={property1AmenitiesProperty2False3Pr.className}>
          {property1AmenitiesProperty2False3Pr.children}
        </Property1AmenitiesProperty2False>
      </Row51>
    );
  }
}

const Row51 = styled.div`
  margin-left: 14.5px;
  width: 331px;
  height: 37px;
  position: relative;
  margin-top: 16px;
  display: flex;
`;

const Row52 = styled.div`
  margin-left: 14.5px;
  width: 331px;
  height: 37px;
  position: relative;
  margin-top: 16px;
  display: flex;
`;

const Row53 = styled.div`
  margin-left: 14.5px;
  width: 331px;
  height: 37px;
  position: relative;
  margin-top: 16px;
  display: flex;
`;

const Row54 = styled.div`
  margin-left: 14.5px;
  width: 331px;
  height: 37px;
  position: relative;
  margin-top: 16px;
  display: flex;
`;

export default Row5;
