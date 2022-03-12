import React from "react";
import HelpIconFalseArrowFalseStateDefault from "../HelpIconFalseArrowFalseStateDefault";
import styled from "styled-components";


class TextTrueCheckboxFalseColorWhite extends React.Component {
  render() {
    const { className, helpIconFalseArrowFalseStateDefault } = this.props;

    return (
      <TableHeaderCell className={`table-header-cell ${className || ""}`}>
        <HelpIconFalseArrowFalseStateDefault className={helpIconFalseArrowFalseStateDefault.className}>
          {helpIconFalseArrowFalseStateDefault.children}
        </HelpIconFalseArrowFalseStateDefault>
      </TableHeaderCell>
    );
  }
}

const TableHeaderCell = styled.div`
  width: 381px;
  height: 44px;
  position: relative;
  display: flex;
  background-color: var(--white);

  &.table-header-cell.table-header-cell-1 {
    width: 97px;
  }

  &.table-header-cell.table-header-cell-2 {
    width: 137px;
  }

  &.table-header-cell.table-header-cell-3 {
    width: 165px;
  }

  &.table-header-cell.table-header-cell-4 {
    width: 131px;
  }

  &.table-header-cell.table-header-cell-5 {
    width: 152px;
  }

  &.table-header-cell.table-header-cell-6 {
    width: 263px;
  }

  &.table-header-cell.table-header-cell-7 {
    width: 117px;
  }

  &.table-header-cell.table-header-cell-8 {
    width: 123px;
  }

  &.table-header-cell.table-header-cell-9 {
    width: 161px;
  }

  &.table-header-cell.table-header-cell-10 {
    width: 177px;
  }

  &.table-header-cell.table-header-cell-11 {
    width: 149px;
  }

  &.table-header-cell.table-header-cell-12 {
    width: 118px;
  }

  &.table-header-cell.table-header-cell-13 {
    width: 108px;
  }

  &.table-header-cell.table-header-cell-14 {
    width: 263px;
  }

  &.table-header-cell.table-header-cell-15 {
    width: 117px;
  }

  &.table-header-cell.table-header-cell-16 {
    width: 123px;
  }

  &.table-header-cell.table-header-cell-17 {
    width: 161px;
  }

  &.table-header-cell.table-header-cell-18 {
    width: 177px;
  }

  &.table-header-cell.table-header-cell-19 {
    width: 149px;
  }

  &.table-header-cell.table-header-cell-20 {
    width: 118px;
  }

  &.table-header-cell.table-header-cell-21 {
    width: 108px;
  }

  &.table-header-cell.table-header-cell-22 {
    width: 263px;
  }

  &.table-header-cell.table-header-cell-23 {
    width: 117px;
  }

  &.table-header-cell.table-header-cell-24 {
    width: 123px;
  }

  &.table-header-cell.table-header-cell-25 {
    width: 161px;
  }

  &.table-header-cell.table-header-cell-26 {
    width: 177px;
  }

  &.table-header-cell.table-header-cell-27 {
    width: 149px;
  }

  &.table-header-cell.table-header-cell-28 {
    width: 118px;
  }

  &.table-header-cell.table-header-cell-29 {
    width: 108px;
  }
`;

export default TextTrueCheckboxFalseColorWhite;
