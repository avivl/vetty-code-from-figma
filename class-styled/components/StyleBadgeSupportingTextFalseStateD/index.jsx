import React from "react";
import SizesmIconFalseColorPrimary from "../SizesmIconFalseColorPrimary";
import styled from "styled-components";


class StyleBadgeSupportingTextFalseStateD extends React.Component {
  render() {
    const { sizesmIconFalseColorPrimaryProps } = this.props;

    return (
      <TableCell>
        <SizesmIconFalseColorPrimary
          className={sizesmIconFalseColorPrimaryProps.className}
          iconFalseProps={sizesmIconFalseColorPrimaryProps.iconFalseProps}
        />
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  margin-left: 11.5px;
  width: 95px;
  height: 72px;
  position: relative;
  display: flex;
`;

const TableCell1 = styled.div`
  margin-left: 11.5px;
  width: 95px;
  height: 72px;
  position: relative;
  display: flex;
`;

export default StyleBadgeSupportingTextFalseStateD;
