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
  width: 79px;
  height: 37px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;

  &.select.select-1 {
    margin-left: 16px;
  }

  &.select.select-2 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-4 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-5 {
    margin-left: 16px;
  }

  &.select.select-6 {
    margin-left: 16px;
  }

  &.select.select-7 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-8 {
    margin-left: 16px;
  }

  &.select.select-9 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-10 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-11 {
    margin-left: 16px;
  }

  &.select.select-12 {
    margin-left: 16px;
  }

  &.select.select-13 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-14 {
    margin-left: 16px;
  }

  &.select.select-15 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-16 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-17 {
    margin-left: 16px;
  }

  &.select.select-18 {
    margin-left: 16px;
  }

  &.select.select-19 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-20 {
    margin-left: 16px;
  }

  &.select.select-21 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-22 {
    width: 141px;
    margin-left: 16px;
  }

  &.select.select-23 {
    margin-left: 16px;
  }

  &.select.select-24 {
    margin-left: 16px;
  }

  &.select.select-25 {
    width: 141px;
    margin-left: 16px;
  }
`;

const Amenities = styled.div`
  ${InterMediumMirage14px}
  margin-top: 8px;
  width: 47px;
  height: 21px;
  margin-left: 16px;
  opacity: 0.7;
  text-align: center;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const Amenities1 = styled.div`
  ${InterMediumMirage14px}

  .select.select-2  & {
    width: 109px;
  }
`;

const Amenities2 = styled.div`
  ${InterMediumMirage14px}

  .select.select-4  & {
    width: 109px;
  }
`;

const Amenities3 = styled.div`
  ${InterMediumMirage14px}

  .select.select-7  & {
    width: 109px;
  }
`;

const Amenities4 = styled.div`
  ${InterMediumMirage14px}

  .select.select-9  & {
    width: 109px;
  }
`;

const Amenities5 = styled.div`
  ${InterMediumMirage14px}

  .select.select-10  & {
    width: 109px;
  }
`;

const Amenities6 = styled.div`
  ${InterMediumMirage14px}

  .select.select-13  & {
    width: 109px;
  }
`;

const Amenities7 = styled.div`
  ${InterMediumMirage14px}

  .select.select-15  & {
    width: 109px;
  }
`;

const Amenities8 = styled.div`
  ${InterMediumMirage14px}

  .select.select-16  & {
    width: 109px;
  }
`;

const Amenities9 = styled.div`
  ${InterMediumMirage14px}

  .select.select-19  & {
    width: 109px;
  }
`;

const Amenities10 = styled.div`
  ${InterMediumMirage14px}

  .select.select-21  & {
    width: 109px;
  }
`;

const Amenities11 = styled.div`
  ${InterMediumMirage14px}

  .select.select-22  & {
    width: 109px;
  }
`;

const Amenities12 = styled.div`
  ${InterMediumMirage14px}

  .select.select-25  & {
    width: 109px;
  }
`;

export default Property1AmenitiesProperty2False;
