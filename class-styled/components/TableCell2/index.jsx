import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";
import { InterNormalPaleSky14px } from "../../styledMixins";


class TableCell2 extends React.Component {
  render() {
    const { text, className, socialIconProps } = this.props;

    return (
      <TableCell className={`table-cell-114 ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
        <Text className="text-139">{text}</Text>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 177px;
  height: 72px;
  position: relative;
  display: flex;

  &.table-cell-114.table-cell-119 {
    background-color: var(--white-lilac);
  }
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

  .table-cell-114.table-cell-115  & {
    width: 64px;
  }
`;

const Text2 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell-114.table-cell-116  & {
    width: 54px;
  }
`;

const Text3 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell-114.table-cell-117  & {
    width: 64px;
  }
`;

const Text4 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell-114.table-cell-118  & {
    width: 54px;
  }
`;

export default TableCell2;
