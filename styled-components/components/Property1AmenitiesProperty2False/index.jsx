import React from "react";
import styled from "styled-components";
import { Border1pxBlueViolet, InterMediumMirage14px } from "../../styledMixins";


class Property1AmenitiesProperty2False extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Select className={`select ${className || ""}`}>
        <Amenities className="amenities">{children}</Amenities>
      </Select>
    );
  }
}

const Select = styled.div`
  ${Border1pxBlueViolet}
  height: 37px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 79px;
  background-color: var(--white);
  border-radius: 8px;

  &.select.select-1 {
    margin-left: 16px;
  }

  &.select.select-2 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-4 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-5 {
    margin-left: 16px;
  }

  &.select.select-6 {
    margin-left: 16px;
  }

  &.select.select-7 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-8 {
    margin-left: 16px;
  }

  &.select.select-9 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-10 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-11 {
    margin-left: 16px;
  }

  &.select.select-12 {
    margin-left: 16px;
  }

  &.select.select-13 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-14 {
    margin-left: 16px;
  }

  &.select.select-15 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-16 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-17 {
    margin-left: 16px;
  }

  &.select.select-18 {
    margin-left: 16px;
  }

  &.select.select-19 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-20 {
    margin-left: 16px;
  }

  &.select.select-21 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-22 {
    margin-left: 16px;
    min-width: 141px;
  }

  &.select.select-23 {
    margin-left: 16px;
  }

  &.select.select-24 {
    margin-left: 16px;
  }

  &.select.select-25 {
    margin-left: 16px;
    min-width: 141px;
  }
`;

const Amenities = styled.div`
  ${InterMediumMirage14px}
  min-height: 21px;
  min-width: 47px;
  opacity: 0.7;
  text-align: center;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const Amenities1 = styled.div`
  ${InterMediumMirage14px}

  .select.select-2  & {
    min-width: 109px;
  }
`;

const Amenities2 = styled.div`
  ${InterMediumMirage14px}

  .select.select-4  & {
    min-width: 109px;
  }
`;

const Amenities3 = styled.div`
  ${InterMediumMirage14px}

  .select.select-7  & {
    min-width: 109px;
  }
`;

const Amenities4 = styled.div`
  ${InterMediumMirage14px}

  .select.select-9  & {
    min-width: 109px;
  }
`;

const Amenities5 = styled.div`
  ${InterMediumMirage14px}

  .select.select-10  & {
    min-width: 109px;
  }
`;

const Amenities6 = styled.div`
  ${InterMediumMirage14px}

  .select.select-13  & {
    min-width: 109px;
  }
`;

const Amenities7 = styled.div`
  ${InterMediumMirage14px}

  .select.select-15  & {
    min-width: 109px;
  }
`;

const Amenities8 = styled.div`
  ${InterMediumMirage14px}

  .select.select-16  & {
    min-width: 109px;
  }
`;

const Amenities9 = styled.div`
  ${InterMediumMirage14px}

  .select.select-19  & {
    min-width: 109px;
  }
`;

const Amenities10 = styled.div`
  ${InterMediumMirage14px}

  .select.select-21  & {
    min-width: 109px;
  }
`;

const Amenities11 = styled.div`
  ${InterMediumMirage14px}

  .select.select-22  & {
    min-width: 109px;
  }
`;

const Amenities12 = styled.div`
  ${InterMediumMirage14px}

  .select.select-25  & {
    min-width: 109px;
  }
`;

export default Property1AmenitiesProperty2False;
