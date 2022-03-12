import React from "react";
import SizemdHierarchyTertiaryGrayIconOnly from "../SizemdHierarchyTertiaryGrayIconOnly";
import styled from "styled-components";


class StyleActionIconsSupportingTextFalse extends React.Component {
  render() {
    const { className, sizemdHierarchyTertiaryGrayIconOnly } = this.props;

    return (
      <TableCell className={`table-cell-99 ${className || ""}`}>
        <SizemdHierarchyTertiaryGrayIconOnly
          className={sizemdHierarchyTertiaryGrayIconOnly.className}
          sizemdIconOnlyProps={sizemdHierarchyTertiaryGrayIconOnly.sizemdIconOnlyProps}
        />
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 72px;
  height: 72px;
  position: relative;
  display: flex;

  &.table-cell-99.table-cell-100 {
    width: 108px;
  }

  &.table-cell-99.table-cell-101 {
    width: 108px;
  }

  &.table-cell-99.table-cell-102 {
    width: 108px;
  }

  &.table-cell-99.table-cell-103 {
    width: 108px;
  }

  &.table-cell-99.table-cell-104 {
    width: 108px;
  }

  &.table-cell-99.table-cell-105 {
    width: 108px;
  }

  &.table-cell-99.table-cell-106 {
    width: 108px;
  }

  &.table-cell-99.table-cell-107 {
    width: 108px;
  }

  &.table-cell-99.table-cell-108 {
    width: 108px;
  }

  &.table-cell-99.table-cell-109 {
    width: 108px;
  }

  &.table-cell-99.table-cell-110 {
    width: 108px;
  }

  &.table-cell-99.table-cell-111 {
    width: 108px;
  }

  &.table-cell-99.table-cell-112 {
    width: 108px;
  }

  &.table-cell-99.table-cell-113 {
    width: 108px;
  }
`;

export default StyleActionIconsSupportingTextFalse;
