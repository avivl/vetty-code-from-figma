import React from "react";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import StyleTextSupportingTextTrueStateDef from "../StyleTextSupportingTextTrueStateDef";
import styled from "styled-components";


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
      <Column1>
        <TextTrueCheckboxFalseColorWhite
          className={textTrueCheckboxFalseColorWhiteProp.className}
          helpIconFalseArrowFalseStateDefault={textTrueCheckboxFalseColorWhiteProp.helpIconFalseArrowFalseStateDefault}
        />
        <Divider></Divider>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef.text}
          supportingText={styleTextSupportingTextTrueStateDef.supportingText}
          className={styleTextSupportingTextTrueStateDef.className}
        />
        <Divider></Divider>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef2.text}
          supportingText={styleTextSupportingTextTrueStateDef2.supportingText}
          className={styleTextSupportingTextTrueStateDef2.className}
        />
        <Divider></Divider>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef3.text}
          supportingText={styleTextSupportingTextTrueStateDef3.supportingText}
          className={styleTextSupportingTextTrueStateDef3.className}
        />
        <Divider></Divider>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef4.text}
          supportingText={styleTextSupportingTextTrueStateDef4.supportingText}
          className={styleTextSupportingTextTrueStateDef4.className}
        />
        <Divider></Divider>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef5.text}
          supportingText={styleTextSupportingTextTrueStateDef5.supportingText}
          className={styleTextSupportingTextTrueStateDef5.className}
        />
        <Divider></Divider>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef6.text}
          supportingText={styleTextSupportingTextTrueStateDef6.supportingText}
          className={styleTextSupportingTextTrueStateDef6.className}
        />
        <Divider></Divider>
        <StyleTextSupportingTextTrueStateDef
          text={styleTextSupportingTextTrueStateDef7.text}
          supportingText={styleTextSupportingTextTrueStateDef7.supportingText}
          className={styleTextSupportingTextTrueStateDef7.className}
        />
        <Divider></Divider>
      </Column1>
    );
  }
}

const Column1 = styled.div`
  width: 263px;
  height: 556px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Column2 = styled.div`
  width: 263px;
  height: 556px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider1 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

export default Column;
