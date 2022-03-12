import React from "react";
import styled from "styled-components";
import { Border1pxBlueViolet, InterMediumMirage12px } from "../../styledMixins";


class Property1AmenitiesProperty2False2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Select className={`select-26 ${className || ""}`}>
        <Amenities className="amenities-1">{children}</Amenities>
      </Select>
    );
  }
}

const Select = styled.div`
  ${Border1pxBlueViolet}
  width: 72px;
  height: 34px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;

  &.select-26.select-27 {
    margin-left: 16px;
  }

  &.select-26.select-28 {
    width: 126px;
    margin-left: 16px;
  }

  &.select-26.select-30 {
    width: 126px;
    margin-left: 16px;
  }

  &.select-26.select-31 {
    margin-left: 16px;
  }

  &.select-26.select-32 {
    margin-left: 16px;
  }

  &.select-26.select-33 {
    width: 126px;
    margin-left: 16px;
  }

  &.select-26.select-34 {
    margin-left: 16px;
  }

  &.select-26.select-35 {
    width: 126px;
    margin-left: 16px;
  }

  &.select-26.select-36 {
    width: 126px;
    margin-left: 16px;
  }

  &.select-26.select-37 {
    margin-left: 16px;
  }

  &.select-26.select-38 {
    margin-left: 16px;
  }

  &.select-26.select-39 {
    width: 126px;
    margin-left: 16px;
  }
`;

const Amenities = styled.div`
  ${InterMediumMirage12px}
  margin-top: 8px;
  width: 40px;
  height: 18px;
  margin-left: 16px;
  opacity: 0.7;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Amenities1 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-28  & {
    width: 94px;
  }
`;

const Amenities2 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-30  & {
    width: 94px;
  }
`;

const Amenities3 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-33  & {
    width: 94px;
  }
`;

const Amenities4 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-35  & {
    width: 94px;
  }
`;

const Amenities5 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-36  & {
    width: 94px;
  }
`;

const Amenities6 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-39  & {
    width: 94px;
  }
`;

export default Property1AmenitiesProperty2False2;
