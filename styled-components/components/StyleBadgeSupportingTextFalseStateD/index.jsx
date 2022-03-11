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
  height: 72px;
  position: relative;
  display: flex;
  padding: 0 24px;
  align-items: center;
  min-width: 95px;
`;

export default StyleBadgeSupportingTextFalseStateD;
