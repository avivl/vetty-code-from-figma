import React from "react";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import StyleTextSupportingTextFalseStateDe from "../StyleTextSupportingTextFalseStateDe";
import StyleTextSupportingTextFalseStateDe3 from "../StyleTextSupportingTextFalseStateDe3";
import "./Column3.css";

class Column3 extends React.Component {
  render() {
    const {
      textTrueCheckboxFalseColorWhiteProp,
      styleTextSupportingTextFalseStateDe,
      styleTextSupportingTextFalseStateDe2,
      styleTextSupportingTextFalseStateDe3,
      styleTextSupportingTextFalseStateDe4,
      styleTextSupportingTextFalseStateDe5,
      styleTextSupportingTextFalseStateDe6,
      styleTextSupportingTextFalseStateDe7,
    } = this.props;

    return (
      <div className="column-21">
        <TextTrueCheckboxFalseColorWhite
          className={textTrueCheckboxFalseColorWhiteProp.className}
          helpIconFalseArrowFalseStateDefault={textTrueCheckboxFalseColorWhiteProp.helpIconFalseArrowFalseStateDefault}
        />
        <div className="divider-42"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe.className}>
          {styleTextSupportingTextFalseStateDe.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-42"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe2.className}>
          {styleTextSupportingTextFalseStateDe2.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-42"></div>
        <StyleTextSupportingTextFalseStateDe3 className={styleTextSupportingTextFalseStateDe3.className}>
          {styleTextSupportingTextFalseStateDe3.children}
        </StyleTextSupportingTextFalseStateDe3>
        <div className="divider-42"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe4.className}>
          {styleTextSupportingTextFalseStateDe4.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-42"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe5.className}>
          {styleTextSupportingTextFalseStateDe5.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-42"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe6.className}>
          {styleTextSupportingTextFalseStateDe6.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-42"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe7.className}>
          {styleTextSupportingTextFalseStateDe7.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-42"></div>
      </div>
    );
  }
}

export default Column3;
