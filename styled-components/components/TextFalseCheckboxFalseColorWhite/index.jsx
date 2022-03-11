import React from "react";
import styled from "styled-components";


class TextFalseCheckboxFalseColorWhite extends React.Component {
  render() {
    const { className } = this.props;

    return <TableHeaderCell className={`table-header-cell-22 ${className || ""}`}></TableHeaderCell>;
  }
}

const TableHeaderCell = styled.div`
  width: 72px;
  height: 44px;
  background-color: var(--white);

  &.table-header-cell-22.divider-62 {
    height: 1px;
    background-color: var(--gallery);
  }

  &.table-header-cell-22.divider-63 {
    height: 1px;
    background-color: var(--gallery);
  }

  &.table-header-cell-22.divider-64 {
    height: 1px;
    background-color: var(--gallery);
  }

  &.table-header-cell-22.divider-65 {
    height: 1px;
    background-color: var(--gallery);
  }

  &.table-header-cell-22.divider-66 {
    height: 1px;
    background-color: var(--gallery);
  }

  &.table-header-cell-22.divider-67 {
    height: 1px;
    background-color: var(--gallery);
  }

  &.table-header-cell-22.divider-68 {
    height: 1px;
    background-color: var(--gallery);
  }
`;

export default TextFalseCheckboxFalseColorWhite;
