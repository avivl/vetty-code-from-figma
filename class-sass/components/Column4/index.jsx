import React from "react";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import TableCell2 from "../TableCell2";
import "./Column4.sass";

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
      <div className="column-23">
        <TextTrueCheckboxFalseColorWhite
          className={textTrueCheckboxFalseColorWhiteProp.className}
          helpIconFalseArrowFalseStateDefault={textTrueCheckboxFalseColorWhiteProp.helpIconFalseArrowFalseStateDefault}
        />
        <div className="divider-44"></div>
        <TableCell2 text={tableCell21Props.text} socialIconProps={tableCell21Props.socialIconProps} />
        <div className="divider-44"></div>
        <TableCell2
          text={tableCell22Props.text}
          className={tableCell22Props.className}
          socialIconProps={tableCell22Props.socialIconProps}
        />
        <div className="divider-44"></div>
        <TableCell2
          text={tableCell23Props.text}
          className={tableCell23Props.className}
          socialIconProps={tableCell23Props.socialIconProps}
        />
        <div className="divider-44"></div>
        <TableCell2
          text={tableCell24Props.text}
          className={tableCell24Props.className}
          socialIconProps={tableCell24Props.socialIconProps}
        />
        <div className="divider-44"></div>
        <TableCell2 text={tableCell25Props.text} socialIconProps={tableCell25Props.socialIconProps} />
        <div className="divider-44"></div>
        <TableCell2 text={tableCell26Props.text} socialIconProps={tableCell26Props.socialIconProps} />
        <div className="divider-44"></div>
        <TableCell2 text={tableCell27Props.text} socialIconProps={tableCell27Props.socialIconProps} />
      </div>
    );
  }
}

export default Column4;
