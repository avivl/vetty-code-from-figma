import React from "react";
import styled from "styled-components";
import { InterNormalThunderbird14px } from "../../styledMixins";


class StyleTextSupportingTextFalseStateDe3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <TableCell className={`table-cell-57 ${className || ""}`}>
        <Text className="text-75">{children}</Text>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  height: 72px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  min-width: 97px;

  &.table-cell-57.table-cell-58 {
    min-width: 137px;
  }

  &.table-cell-57.table-cell-59 {
    min-width: 123px;
  }

  &.table-cell-57.table-cell-60 {
    min-width: 161px;
  }
`;

const Text = styled.div`
  ${InterNormalThunderbird14px}
  min-height: 20px;
  min-width: 45px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterNormalThunderbird14px}

  .table-cell-57.table-cell-58  & {
    min-width: 75px;
  }
`;

const Text2 = styled.div`
  ${InterNormalThunderbird14px}

  .table-cell-57.table-cell-59  & {
    min-width: 75px;
  }
`;

const Text3 = styled.div`
  ${InterNormalThunderbird14px}

  .table-cell-57.table-cell-60  & {
    min-width: 53px;
  }
`;

export default StyleTextSupportingTextFalseStateDe3;
