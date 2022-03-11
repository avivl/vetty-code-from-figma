import React from "react";
import Progress60LabelFalse from "../Progress60LabelFalse";
import styled from "styled-components";


class StyleProgressBarSupportingTextTrueS extends React.Component {
  render() {
    return (
      <TableCell>
        <Progress60LabelFalse />
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
  min-width: 131px;
`;

export default StyleProgressBarSupportingTextTrueS;
