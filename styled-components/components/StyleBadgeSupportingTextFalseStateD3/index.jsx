import React from "react";
import SizesmIconFalseColorBlueLight from "../SizesmIconFalseColorBlueLight";
import styled from "styled-components";


class StyleBadgeSupportingTextFalseStateD3 extends React.Component {
  render() {
    const { sizesmIconFalseColorBlueLightProps } = this.props;

    return (
      <TableCell>
        <SizesmIconFalseColorBlueLight iconFalse2Props={sizesmIconFalseColorBlueLightProps.iconFalse2Props} />
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
  min-width: 148px;
`;

export default StyleBadgeSupportingTextFalseStateD3;
