import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";
import { InterNormalPaleSky14px } from "../../styledMixins";


class TableCell extends React.Component {
  render() {
    const { text, className, socialIconProps } = this.props;

    return (
      <TableCell1 className={`table-cell-95 ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
        <Text className="text-133">{text}</Text>
      </TableCell1>
    );
  }
}

const TableCell1 = styled.div`
  width: 165px;
  height: 72px;
  position: relative;
  display: flex;
`;

const Text = styled.div`
  ${InterNormalPaleSky14px}
  margin-top: 26px;
  width: 91px;
  height: 20px;
  margin-left: 12px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell-95.table-cell-96  & {
    width: 64px;
  }
`;

const Text2 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell-95.table-cell-97  & {
    width: 54px;
  }
`;

export default TableCell;
