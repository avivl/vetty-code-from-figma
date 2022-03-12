import React from "react";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import StyleTextSupportingTextTrueStateDef from "../StyleTextSupportingTextTrueStateDef";
import "./Column.css";

class Column extends React.Component {
  render() {
    const {
      textTrueCheckboxFalseColorWhiteProp,
      styleTextSupportingTextTrueStateDef,
      styleTextSupportingTextTrueStateDef2,
      styleTextSupportingTextTrueStateDef3,
      styleTextSupportingTextTrueStateDef4,
      styleTextSupportingTextTrueStateDef5,
      styleTextSupportingTextTrueStateDef6,
      styleTextSupportingTextTrueStateDef7,
    } = this.props;

    return (
      <div className="column-17">
        <TextTrueCheckboxFalseColorWhite
          className={textTrueCheckboxFalseColorWhiteProp.className}
          helpIconFalseArrowFalseStateDefault={textTrueCheckboxFalseColorWhiteProp.helpIconFalseArrowFalseStateDefault}
        />
        <div className="divider-38"></div>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef.text}
          supportingText={styleTextSupportingTextTrueStateDef.supportingText}
          className={styleTextSupportingTextTrueStateDef.className}
        />
        <div className="divider-38"></div>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef2.text}
          supportingText={styleTextSupportingTextTrueStateDef2.supportingText}
          className={styleTextSupportingTextTrueStateDef2.className}
        />
        <div className="divider-38"></div>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef3.text}
          supportingText={styleTextSupportingTextTrueStateDef3.supportingText}
          className={styleTextSupportingTextTrueStateDef3.className}
        />
        <div className="divider-38"></div>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef4.text}
          supportingText={styleTextSupportingTextTrueStateDef4.supportingText}
          className={styleTextSupportingTextTrueStateDef4.className}
        />
        <div className="divider-38"></div>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef5.text}
          supportingText={styleTextSupportingTextTrueStateDef5.supportingText}
          className={styleTextSupportingTextTrueStateDef5.className}
        />
        <div className="divider-38"></div>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef6.text}
          supportingText={styleTextSupportingTextTrueStateDef6.supportingText}
          className={styleTextSupportingTextTrueStateDef6.className}
        />
        <div className="divider-38"></div>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef7.text}
          supportingText={styleTextSupportingTextTrueStateDef7.supportingText}
          className={styleTextSupportingTextTrueStateDef7.className}
        />
        <div className="divider-38"></div>
      </div>
    );
  }
}

export default Column;
