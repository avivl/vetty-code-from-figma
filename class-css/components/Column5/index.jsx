import React from "react";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import StyleTextSupportingTextFalseStateDe from "../StyleTextSupportingTextFalseStateDe";
import "./Column5.css";

class Column5 extends React.Component {
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
      <div className="column-25">
        <TextTrueCheckboxFalseColorWhite
          className={textTrueCheckboxFalseColorWhiteProp.className}
          helpIconFalseArrowFalseStateDefault={textTrueCheckboxFalseColorWhiteProp.helpIconFalseArrowFalseStateDefault}
        />
        <div className="divider-46"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe.className}>
          {styleTextSupportingTextFalseStateDe.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-46"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe2.className}>
          {styleTextSupportingTextFalseStateDe2.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-46"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe3.className}>
          {styleTextSupportingTextFalseStateDe3.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-46"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe4.className}>
          {styleTextSupportingTextFalseStateDe4.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-46"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe5.className}>
          {styleTextSupportingTextFalseStateDe5.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-46"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe6.className}>
          {styleTextSupportingTextFalseStateDe6.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-46"></div>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe7.className}>
          {styleTextSupportingTextFalseStateDe7.children}
        </StyleTextSupportingTextFalseStateDe>
        <div className="divider-46"></div>
      </div>
    );
  }
}

export default Column5;
