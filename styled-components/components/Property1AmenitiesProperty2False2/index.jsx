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
  height: 34px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 72px;
  background-color: var(--white);
  border-radius: 8px;

  &.select-26.select-27 {
    margin-left: 16px;
  }

  &.select-26.select-28 {
    margin-left: 16px;
    min-width: 126px;
  }

  &.select-26.select-30 {
    margin-left: 16px;
    min-width: 126px;
  }

  &.select-26.select-31 {
    margin-left: 16px;
  }

  &.select-26.select-32 {
    margin-left: 16px;
  }

  &.select-26.select-33 {
    margin-left: 16px;
    min-width: 126px;
  }

  &.select-26.select-34 {
    margin-left: 16px;
  }

  &.select-26.select-35 {
    margin-left: 16px;
    min-width: 126px;
  }

  &.select-26.select-36 {
    margin-left: 16px;
    min-width: 126px;
  }

  &.select-26.select-37 {
    margin-left: 16px;
  }

  &.select-26.select-38 {
    margin-left: 16px;
  }

  &.select-26.select-39 {
    margin-left: 16px;
    min-width: 126px;
  }
`;

const Amenities = styled.div`
  ${InterMediumMirage12px}
  min-height: 18px;
  min-width: 40px;
  opacity: 0.7;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Amenities1 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-28  & {
    min-width: 94px;
  }
`;

const Amenities2 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-30  & {
    min-width: 94px;
  }
`;

const Amenities3 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-33  & {
    min-width: 94px;
  }
`;

const Amenities4 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-35  & {
    min-width: 94px;
  }
`;

const Amenities5 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-36  & {
    min-width: 94px;
  }
`;

const Amenities6 = styled.div`
  ${InterMediumMirage12px}

  .select-26.select-39  & {
    min-width: 94px;
  }
`;

export default Property1AmenitiesProperty2False2;
