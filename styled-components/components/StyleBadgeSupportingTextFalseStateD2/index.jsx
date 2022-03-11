import React from "react";
import SizesmIconFalseColorError from "../SizesmIconFalseColorError";
import styled from "styled-components";


class StyleBadgeSupportingTextFalseStateD2 extends React.Component {
  render() {
    const { sizesmIconFalseColorErrorProps } = this.props;

    return (
      <TableCell>
        <SizesmIconFalseColorError iconFalse2Props={sizesmIconFalseColorErrorProps.iconFalse2Props} />
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
  min-width: 127px;
`;

export default StyleBadgeSupportingTextFalseStateD2;
