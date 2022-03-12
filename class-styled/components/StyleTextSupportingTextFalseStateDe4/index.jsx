import React from "react";
import styled from "styled-components";
import { InterNormalCinnabar14px } from "../../styledMixins";


class StyleTextSupportingTextFalseStateDe4 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <TableCell>
        <Text>{children}</Text>
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 123px;
  height: 72px;
  display: flex;
`;

const Text = styled.div`
  ${InterNormalCinnabar14px}
  margin-top: 26px;
  width: 45px;
  height: 20px;
  margin-left: 24px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default StyleTextSupportingTextFalseStateDe4;
