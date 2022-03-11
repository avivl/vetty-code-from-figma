import React from "react";
import Property1AmenitiesProperty2False2 from "../Property1AmenitiesProperty2False2";
import styled from "styled-components";


class Row52 extends React.Component {
  render() {
    const {
      property1AmenitiesProperty2False21P,
      property1AmenitiesProperty2False22P,
      property1AmenitiesProperty2False23P,
    } = this.props;

    return (
      <Row5>
        <Property1AmenitiesProperty2False2>
          {property1AmenitiesProperty2False21P.children}
        </Property1AmenitiesProperty2False2>
        <Property1AmenitiesProperty2False2 className={property1AmenitiesProperty2False22P.className}>
          {property1AmenitiesProperty2False22P.children}
        </Property1AmenitiesProperty2False2>
        <Property1AmenitiesProperty2False2 className={property1AmenitiesProperty2False23P.className}>
          {property1AmenitiesProperty2False23P.children}
        </Property1AmenitiesProperty2False2>
      </Row5>
    );
  }
}

const Row5 = styled.div`
  height: 34px;
  position: relative;
  margin-top: 8px;
  margin-right: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 302px;
`;

const Row51 = styled.div`
  height: 34px;
  position: relative;
  margin-top: 8px;
  margin-right: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 302px;
`;

export default Row52;
