import React from "react";
import styled from "styled-components";
import { InterMediumPaleSky12px } from "../../styledMixins";


class TableCell3 extends React.Component {
  render() {
    return (
      <TableCell>
        <Frame33761>
          <Text>Select Status</Text>
          <ChevronDown src="/img/chevron-down@2x.png" />
        </Frame33761>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 118px;
  height: 72px;
  display: flex;
`;

const Frame33761 = styled.div`
  margin-top: 17px;
  width: 118px;
  height: 38px;
  display: flex;
`;

const Text = styled.div`
  ${InterMediumPaleSky12px}
  margin-top: 10px;
  width: 77px;
  height: 18px;
  margin-left: 7.5px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const ChevronDown = styled.img`
  margin-top: 11px;
  width: 16px;
  height: 16px;
  margin-left: 10px;
`;

const TableCell1 = styled.div`
  width: 118px;
  height: 72px;
  display: flex;
`;

const Frame337611 = styled.div`
  margin-top: 17px;
  width: 118px;
  height: 38px;
  display: flex;
`;

const Text1 = styled.div`
  ${InterMediumPaleSky12px}
  margin-top: 10px;
  width: 77px;
  height: 18px;
  margin-left: 7.5px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const ChevronDown1 = styled.img`
  margin-top: 11px;
  width: 16px;
  height: 16px;
  margin-left: 10px;
`;

export default TableCell3;
