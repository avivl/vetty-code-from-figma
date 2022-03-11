import React from "react";
import SizesmIconFalseColorWarning from "../SizesmIconFalseColorWarning";
import styled from "styled-components";


class StyleBadgeSupportingTextFalseStateD4 extends React.Component {
  render() {
    const { sizesmIconFalseColorWarningProps } = this.props;

    return (
      <TableCell>
        <SizesmIconFalseColorWarning iconFalse2Props={sizesmIconFalseColorWarningProps.iconFalse2Props} />
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
  min-width: 154px;
`;

export default StyleBadgeSupportingTextFalseStateD4;
