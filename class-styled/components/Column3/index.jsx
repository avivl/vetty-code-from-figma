import React from "react";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import StyleTextSupportingTextFalseStateDe from "../StyleTextSupportingTextFalseStateDe";
import StyleTextSupportingTextFalseStateDe3 from "../StyleTextSupportingTextFalseStateDe3";
import styled from "styled-components";


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
      <Column>
        <TextTrueCheckboxFalseColorWhite
          className={textTrueCheckboxFalseColorWhiteProp.className}
          helpIconFalseArrowFalseStateDefault={textTrueCheckboxFalseColorWhiteProp.helpIconFalseArrowFalseStateDefault}
        />
        <Divider></Divider>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe.className}>
          {styleTextSupportingTextFalseStateDe.children}
        </StyleTextSupportingTextFalseStateDe>
        <Divider></Divider>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe2.className}>
          {styleTextSupportingTextFalseStateDe2.children}
        </StyleTextSupportingTextFalseStateDe>
        <Divider></Divider>
        <StyleTextSupportingTextFalseStateDe3 className={styleTextSupportingTextFalseStateDe3.className}>
          {styleTextSupportingTextFalseStateDe3.children}
        </StyleTextSupportingTextFalseStateDe3>
        <Divider></Divider>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe4.className}>
          {styleTextSupportingTextFalseStateDe4.children}
        </StyleTextSupportingTextFalseStateDe>
        <Divider></Divider>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe5.className}>
          {styleTextSupportingTextFalseStateDe5.children}
        </StyleTextSupportingTextFalseStateDe>
        <Divider></Divider>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe6.className}>
          {styleTextSupportingTextFalseStateDe6.children}
        </StyleTextSupportingTextFalseStateDe>
        <Divider></Divider>
        <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe7.className}>
          {styleTextSupportingTextFalseStateDe7.children}
        </StyleTextSupportingTextFalseStateDe>
        <Divider></Divider>
      </Column>
    );
  }
}

const Column = styled.div`
  width: 161px;
  height: 556px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Column1 = styled.div`
  width: 161px;
  height: 556px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider1 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

export default Column3;
