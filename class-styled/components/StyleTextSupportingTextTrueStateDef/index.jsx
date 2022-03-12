import React from "react";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterNormalMirage14px } from "../../styledMixins";


class StyleTextSupportingTextTrueStateDef extends React.Component {
  render() {
    const { text, supportingText, className } = this.props;

    return (
      <TableCell className={`table-cell ${className || ""}`}>
        <TextAndSupportingText className="text-and-supporting-text-27">
          <Text className="text-129">{text}</Text>
          <SupportingText className="supporting-text-14">{supportingText}</SupportingText>
        </TextAndSupportingText>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 381px;
  height: 72px;
  display: flex;

  &.table-cell.table-cell-2 {
    width: 263px;
  }

  &.table-cell.table-cell-3 {
    width: 263px;
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

  &.table-cell.table-cell-9 {
    width: 263px;
  }

  &.table-cell.table-cell-10 {
    width: 263px;
  }

  &.table-cell.table-cell-11 {
    width: 263px;
  }

  &.table-cell.table-cell-12 {
    width: 263px;
    background-color: var(--white-lilac);
  }

  &.table-cell.table-cell-13 {
    width: 263px;
  }

  &.table-cell.table-cell-14 {
    width: 263px;
  }

  &.table-cell.table-cell-15 {
    width: 263px;
  }
`;

const TextAndSupportingText = styled.div`
  margin-top: 16px;
  width: 111px;
  height: 40px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${InterNormalMirage14px}
  width: 102px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const SupportingText = styled.div`
  ${InterNormalPaleSky14px}
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const TextAndSupportingText1 = styled.div`
  .table-cell.table-cell-2 & {
    width: 220px;
  }
`;

const TextAndSupportingText2 = styled.div`
  .table-cell.table-cell-3 & {
    width: 220px;
  }
`;

const Text1 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-3  & {
    width: 89px;
  }
`;

const TextAndSupportingText3 = styled.div`
  .table-cell.table-cell-4 & {
    width: 199px;
  }
`;

const TextAndSupportingText4 = styled.div`
  .table-cell.table-cell-5 & {
    width: 167px;
  }
`;

const Text2 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-5  & {
    width: 103px;
  }
`;

const TextAndSupportingText5 = styled.div`
  .table-cell.table-cell-6 & {
    width: 186px;
  }
`;

const Text3 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-6  & {
    width: 85px;
  }
`;

const TextAndSupportingText6 = styled.div`
  .table-cell.table-cell-7 & {
    width: 192px;
  }
`;

const Text4 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-7  & {
    width: 109px;
  }
`;

const TextAndSupportingText7 = styled.div`
  .table-cell.table-cell-8 & {
    width: 197px;
  }
`;

const Text5 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-8  & {
    width: 95px;
  }
`;

const TextAndSupportingText8 = styled.div`
  .table-cell.table-cell-9 & {
    width: 220px;
  }
`;

const TextAndSupportingText9 = styled.div`
  .table-cell.table-cell-10 & {
    width: 220px;
  }
`;

const Text6 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-10  & {
    width: 89px;
  }
`;

const TextAndSupportingText10 = styled.div`
  .table-cell.table-cell-11 & {
    width: 199px;
  }
`;

const TextAndSupportingText11 = styled.div`
  .table-cell.table-cell-12 & {
    width: 167px;
  }
`;

const Text7 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-12  & {
    width: 103px;
  }
`;

const TextAndSupportingText12 = styled.div`
  .table-cell.table-cell-13 & {
    width: 186px;
  }
`;

const Text8 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-13  & {
    width: 85px;
  }
`;

const TextAndSupportingText13 = styled.div`
  .table-cell.table-cell-14 & {
    width: 192px;
  }
`;

const Text9 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-14  & {
    width: 109px;
  }
`;

const TextAndSupportingText14 = styled.div`
  .table-cell.table-cell-15 & {
    width: 197px;
  }
`;

const Text10 = styled.div`
  ${InterNormalMirage14px}

  .table-cell.table-cell-15  & {
    width: 95px;
  }
`;

export default StyleTextSupportingTextTrueStateDef;
