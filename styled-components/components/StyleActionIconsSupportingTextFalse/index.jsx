import React from "react";
import SizemdHierarchyTertiaryGrayIconOnly from "../SizemdHierarchyTertiaryGrayIconOnly";
import styled from "styled-components";


class StyleActionIconsSupportingTextFalse extends React.Component {
  render() {
    const { className, sizemdHierarchyTertiaryGrayIconOnly } = this.props;

    return (
      <TableCell className={`table-cell-65 ${className || ""}`}>
        <SizemdHierarchyTertiaryGrayIconOnly
          sizemdIconOnlyProps={sizemdHierarchyTertiaryGrayIconOnly.sizemdIconOnlyProps}
        />
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  height: 72px;
  position: relative;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 72px;

  &.table-cell-65.table-cell-66 {
    padding: 0 34px;
    min-width: 108px;
  }

  &.table-cell-65.table-cell-67 {
    padding: 0 34px;
    min-width: 108px;
  }

  &.table-cell-65.table-cell-68 {
    padding: 0 34px;
    min-width: 108px;
  }

  &.table-cell-65.table-cell-69 {
    padding: 0 34px;
    min-width: 108px;
  }

  &.table-cell-65.table-cell-70 {
    padding: 0 34px;
    min-width: 108px;
  }

  &.table-cell-65.table-cell-71 {
    padding: 0 34px;
    min-width: 108px;
  }

  &.table-cell-65.table-cell-72 {
    padding: 0 34px;
    min-width: 108px;
  }
`;

export default StyleActionIconsSupportingTextFalse;
