import React from "react";
import SizesmIconFalseColorBlueLight from "../SizesmIconFalseColorBlueLight";
import styled from "styled-components";


class StyleBadgeSupportingTextFalseStateH extends React.Component {
  render() {
    const { sizesmIconFalseColorBlueLightProps } = this.props;

    return (
      <TableCell>
        <SizesmIconFalseColorBlueLight
          className={sizesmIconFalseColorBlueLightProps.className}
          iconFalse2Props={sizesmIconFalseColorBlueLightProps.iconFalse2Props}
        />
      </TableCell>
    );
  }
}

const TableCell = styled.div`
  width: 119px;
  height: 72px;
  position: relative;
  display: flex;
  background-color: var(--white-lilac);
`;

export default StyleBadgeSupportingTextFalseStateH;
