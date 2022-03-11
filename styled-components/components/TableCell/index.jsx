import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";
import { InterNormalPaleSky14px } from "../../styledMixins";


class TableCell extends React.Component {
  render() {
    const { text, className, socialIconProps } = this.props;

    return (
      <TableCell1 className={`table-cell-61 ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
        <Text className="text-76">{text}</Text>
      </TableCell1>
    );
  }
}

const TableCell1 = styled.div`
  height: 72px;
  position: relative;
  display: flex;
  padding: 0 14px;
  justify-content: flex-end;
  align-items: center;
  min-width: 165px;

  &.table-cell-61.table-cell-62 {
    padding: 0 24px;
    justify-content: unset;
  }

  &.table-cell-61.table-cell-63 {
    padding: 0 24px;
    justify-content: unset;
  }
`;

const Text = styled.div`
  ${InterNormalPaleSky14px}
  min-height: 20px;
  margin-left: 12px;
  min-width: 91px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell-61.table-cell-62  & {
    min-width: 64px;
  }
`;

const Text2 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell-61.table-cell-63  & {
    min-width: 54px;
  }
`;

export default TableCell;
