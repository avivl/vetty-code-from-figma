import React from "react";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterNormalMirage14px } from "../../styledMixins";


class StyleTextSupportingTextTrueStateDef extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <TableCell className={`table-cell ${className || ""}`}>
        <Text className="text-72">{text}</Text>
        <SupportingText className="supporting-text-11">{supportingText}</SupportingText>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 381px;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  align-items: flex-start;
  min-height: 72px;

  &.table-cell.table-cell-2 {
    width: 263px;
    padding: 16px 19px;
  }

  &.table-cell.table-cell-3 {
    width: 263px;
    padding: 16px 19px;
  }

  &.table-cell.table-cell-4 {
    width: 263px;
  }

  &.table-cell.table-cell-5 {
    width: 263px;
  }

  &.table-cell.table-cell-6 {
    width: 263px;
  }

  &.table-cell.table-cell-7 {
    width: 263px;
  }

  &.table-cell.table-cell-8 {
    width: 263px;
  }
`;

const Text = styled.div`
  ${InterNormalMirage14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const SupportingText = styled.div`
  ${InterNormalPaleSky14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-2  & {
    margin-left: 5px;
  }
`;

const SupportingText1 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell.table-cell-2  & {
    align-self: flex-end;
    min-width: 220px;
  }
`;

const Text2 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-3  & {
    margin-left: 5px;
  }
`;

const SupportingText2 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell.table-cell-3  & {
    align-self: flex-end;
    min-width: 220px;
  }
`;

export default StyleTextSupportingTextTrueStateDef;
