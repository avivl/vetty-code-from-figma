import React from "react";
import styled from "styled-components";
import { InterNormalSalem14px } from "../../styledMixins";


class StyleTextSupportingTextFalseStateDe2 extends React.Component {
  render() {
    return (
      <TableCell>
        <Text>$15.00</Text>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 97px;
  height: 72px;
  display: flex;
`;

const Text = styled.div`
  ${InterNormalSalem14px}
  margin-top: 26px;
  width: 45px;
  height: 20px;
  margin-left: 24px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default StyleTextSupportingTextFalseStateDe2;
