import React from "react";
import styled from "styled-components";
import { InterMediumPaleSky12px } from "../../styledMixins";


class HelpIconFalseArrowFalseStateDefault extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <TableHeader className={`table-header ${className || ""}`}>
        <Text className="text-71">{children}</Text>
      </TableHeader>
    );
  }
}

const TableHeader = styled.div`
  height: 18px;
  display: flex;
  align-items: flex-start;
  min-width: 57px;

  &.table-header.table-header-1 {
    min-width: 62px;
  }

  &.table-header.table-header-2 {
    min-width: 104px;
  }

  &.table-header.table-header-3 {
    min-width: 47px;
  }

  &.table-header.table-header-4 {
    min-width: 55px;
  }

  &.table-header.table-header-5 {
    min-width: 85px;
  }

  &.table-header.table-header-7 {
    min-width: 85px;
  }

  &.table-header.table-header-8 {
    min-width: 87px;
  }

  &.table-header.table-header-9 {
    min-width: 120px;
  }

  &.table-header.table-header-10 {
    min-width: 47px;
  }

  &.table-header.table-header-11 {
    min-width: 118px;
  }

  &.table-header.table-header-12 {
    min-width: 38px;
  }

  &.table-header.table-header-13 {
    min-width: 55px;
  }

  &.table-header.table-header-14 {
    min-width: 85px;
  }

  &.table-header.table-header-15 {
    min-width: 87px;
  }

  &.table-header.table-header-16 {
    min-width: 120px;
  }

  &.table-header.table-header-17 {
    min-width: 47px;
  }

  &.table-header.table-header-18 {
    min-width: 118px;
  }

  &.table-header.table-header-19 {
    min-width: 38px;
  }

  &.table-header.table-header-20 {
    min-width: 55px;
  }
`;

const Text = styled.div`
  ${InterMediumPaleSky12px}
  min-height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default HelpIconFalseArrowFalseStateDefault;
