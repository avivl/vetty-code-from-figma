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
  height: 44px;
  position: relative;
  display: flex;
  padding: 0 24px;
  align-items: center;
  min-width: 381px;
  background-color: var(--white);

  &.table-header-cell.table-header-cell-1 {
    padding: 0 11px;
    justify-content: flex-end;
    min-width: 97px;
  }

  &.table-header-cell.table-header-cell-2 {
    padding: 0 9px;
    justify-content: flex-end;
    min-width: 137px;
  }

  &.table-header-cell.table-header-cell-3 {
    min-width: 165px;
  }

  &.table-header-cell.table-header-cell-4 {
    min-width: 131px;
  }

  &.table-header-cell.table-header-cell-5 {
    min-width: 152px;
  }

  &.table-header-cell.table-header-cell-6 {
    min-width: 263px;
  }

  &.table-header-cell.table-header-cell-7 {
    padding: 0 16px;
    min-width: 117px;
  }

  &.table-header-cell.table-header-cell-8 {
    padding: 0 12px;
    justify-content: flex-end;
    min-width: 123px;
  }

  &.table-header-cell.table-header-cell-9 {
    padding: 0 17px;
    justify-content: flex-end;
    min-width: 161px;
  }

  &.table-header-cell.table-header-cell-10 {
    min-width: 177px;
  }

  &.table-header-cell.table-header-cell-11 {
    padding: 0 15.5px;
    min-width: 149px;
  }

  &.table-header-cell.table-header-cell-12 {
    padding: 0 40px;
    min-width: 118px;
  }

  &.table-header-cell.table-header-cell-13 {
    min-width: 108px;
  }

  &.table-header-cell.table-header-cell-14 {
    min-width: 263px;
  }

  &.table-header-cell.table-header-cell-15 {
    padding: 0 16px;
    min-width: 117px;
  }

  &.table-header-cell.table-header-cell-16 {
    padding: 0 12px;
    justify-content: flex-end;
    min-width: 123px;
  }

  &.table-header-cell.table-header-cell-17 {
    padding: 0 17px;
    justify-content: flex-end;
    min-width: 161px;
  }

  &.table-header-cell.table-header-cell-18 {
    min-width: 177px;
  }

  &.table-header-cell.table-header-cell-19 {
    padding: 0 15.5px;
    min-width: 149px;
  }

  &.table-header-cell.table-header-cell-20 {
    padding: 0 40px;
    min-width: 118px;
  }

  &.table-header-cell.table-header-cell-21 {
    min-width: 108px;
  }
`;

export default TextTrueCheckboxFalseColorWhite;
