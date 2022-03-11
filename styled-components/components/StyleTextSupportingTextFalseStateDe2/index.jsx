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
  height: 72px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  min-width: 97px;
`;

const Text = styled.div`
  ${InterNormalSalem14px}
  min-height: 20px;
  min-width: 45px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default StyleTextSupportingTextFalseStateDe2;
