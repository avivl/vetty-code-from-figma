import React from "react";
import styled from "styled-components";
import { InterNormalThunderbird14px } from "../../styledMixins";


class StyleTextSupportingTextFalseStateDe3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <TableCell className={`table-cell-90 ${className || ""}`}>
        <Text className="text-132">{children}</Text>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 97px;
  height: 72px;
  display: flex;

  &.table-cell-90.table-cell-91 {
    width: 137px;
  }

  &.table-cell-90.table-cell-92 {
    width: 123px;
  }

  &.table-cell-90.table-cell-93 {
    width: 161px;
  }

  &.table-cell-90.table-cell-94 {
    width: 161px;
  }
`;

const Text = styled.div`
  ${InterNormalThunderbird14px}
  margin-top: 26px;
  width: 45px;
  height: 20px;
  margin-left: 24px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterNormalThunderbird14px}

  .table-cell-90.table-cell-91  & {
    width: 75px;
  }
`;

const Text2 = styled.div`
  ${InterNormalThunderbird14px}

  .table-cell-90.table-cell-92  & {
    width: 75px;
  }
`;

const Text3 = styled.div`
  ${InterNormalThunderbird14px}

  .table-cell-90.table-cell-93  & {
    width: 53px;
  }
`;

const Text4 = styled.div`
  ${InterNormalThunderbird14px}

  .table-cell-90.table-cell-94  & {
    width: 92px;
  }
`;

export default StyleTextSupportingTextFalseStateDe3;
