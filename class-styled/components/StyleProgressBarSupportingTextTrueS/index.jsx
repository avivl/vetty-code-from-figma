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
  width: 131px;
  height: 72px;
  position: relative;
  display: flex;
`;

export default StyleProgressBarSupportingTextTrueS;
