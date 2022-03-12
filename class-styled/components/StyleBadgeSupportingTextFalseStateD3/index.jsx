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
  margin-left: -15px;
  width: 148px;
  height: 72px;
  position: relative;
  display: flex;
`;

export default StyleBadgeSupportingTextFalseStateD3;
