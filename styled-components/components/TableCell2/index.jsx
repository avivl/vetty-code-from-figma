import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";
import { InterNormalPaleSky14px } from "../../styledMixins";


class TableCell2 extends React.Component {
  render() {
    const { text, className, socialIconProps } = this.props;

    return (
      <TableCell className={`table-cell-74 ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} />
        <Text className="text-83">{text}</Text>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  height: 72px;
  position: relative;
  display: flex;
  padding: 0 24px;
  align-items: center;
  min-width: 177px;
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

  .table-cell-74.table-cell-75  & {
    min-width: 64px;
  }
`;

const Text2 = styled.div`
  ${InterNormalPaleSky14px}

  .table-cell-74.table-cell-76  & {
    min-width: 54px;
  }
`;

export default TableCell2;
