import React from "react";
import Row52 from "../Row52";
import Property1AmenitiesProperty2False2 from "../Property1AmenitiesProperty2False2";
import styled from "styled-components";
import { InterMediumMirage18px } from "../../styledMixins";


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
      <ShareProject1 className={`share-project-3 ${className || ""}`}>
        <Text className="text-42">Desired Skills</Text>
        <Row52
          property1AmenitiesProperty2False21P={row521Props.property1AmenitiesProperty2False21P}
          property1AmenitiesProperty2False22P={row521Props.property1AmenitiesProperty2False22P}
          property1AmenitiesProperty2False23P={row521Props.property1AmenitiesProperty2False23P}
        />
        <Row2 className="row-2-1">
          <Property1AmenitiesProperty2False2>
            {property1AmenitiesProperty2False21P.children}
          </Property1AmenitiesProperty2False2>
          <Property1AmenitiesProperty2False2 className={property1AmenitiesProperty2False22P.className}>
            {property1AmenitiesProperty2False22P.children}
          </Property1AmenitiesProperty2False2>
          <Property1AmenitiesProperty2False2 className={property1AmenitiesProperty2False23P.className}>
            {property1AmenitiesProperty2False23P.children}
          </Property1AmenitiesProperty2False2>
        </Row2>
        <Row52
          property1AmenitiesProperty2False21P={row522Props.property1AmenitiesProperty2False21P}
          property1AmenitiesProperty2False22P={row522Props.property1AmenitiesProperty2False22P}
          property1AmenitiesProperty2False23P={row522Props.property1AmenitiesProperty2False23P}
        />
      </ShareProject1>
    );
  }
}

const ShareProject1 = styled.div`
  width: 343px;
  height: 220px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;

  &.share-project-3.share-project-4 {
    margin-top: unset;
  }
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  width: 311px;
  min-height: 44px;
  letter-spacing: 0;
  line-height: 28px;
`;

const Row2 = styled.div`
  height: 34px;
  position: relative;
  margin-top: 8px;
  margin-right: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 302px;
`;

export default ShareProject;
