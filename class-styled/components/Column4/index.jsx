import React from "react";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import TableCell2 from "../TableCell2";
import styled from "styled-components";


class Column4 extends React.Component {
  render() {
    const {
      textTrueCheckboxFalseColorWhiteProp,
      tableCell21Props,
      tableCell22Props,
      tableCell23Props,
      tableCell24Props,
      tableCell25Props,
      tableCell26Props,
      tableCell27Props,
    } = this.props;

    return (
      <Column>
        <TextTrueCheckboxFalseColorWhite
          className={textTrueCheckboxFalseColorWhiteProp.className}
          helpIconFalseArrowFalseStateDefault={textTrueCheckboxFalseColorWhiteProp.helpIconFalseArrowFalseStateDefault}
        />
        <Divider></Divider>
        <TableCell2 text={tableCell21Props.text} socialIconProps={tableCell21Props.socialIconProps} />
        <Divider></Divider>
        <TableCell2
          text={tableCell22Props.text}
          className={tableCell22Props.className}
          socialIconProps={tableCell22Props.socialIconProps}
        />
        <Divider></Divider>
        <TableCell2
          text={tableCell23Props.text}
          className={tableCell23Props.className}
          socialIconProps={tableCell23Props.socialIconProps}
        />
        <Divider></Divider>
        <TableCell2
          text={tableCell24Props.text}
          className={tableCell24Props.className}
          socialIconProps={tableCell24Props.socialIconProps}
        />
        <Divider></Divider>
        <TableCell2 text={tableCell25Props.text} socialIconProps={tableCell25Props.socialIconProps} />
        <Divider></Divider>
        <TableCell2 text={tableCell26Props.text} socialIconProps={tableCell26Props.socialIconProps} />
        <Divider></Divider>
        <TableCell2 text={tableCell27Props.text} socialIconProps={tableCell27Props.socialIconProps} />
      </Column>
    );
  }
}

const Column = styled.div`
  width: 177px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Column1 = styled.div`
  width: 177px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider1 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

export default Column4;
