import React from "react";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import StyleActionIconsSupportingTextFalse from "../StyleActionIconsSupportingTextFalse";
import styled from "styled-components";


class Column6 extends React.Component {
  render() {
    const {
      textTrueCheckboxFalseColorWhiteProp,
      styleActionIconsSupportingTextFalse,
      styleActionIconsSupportingTextFalse2,
      styleActionIconsSupportingTextFalse3,
      styleActionIconsSupportingTextFalse4,
      styleActionIconsSupportingTextFalse5,
      styleActionIconsSupportingTextFalse6,
      styleActionIconsSupportingTextFalse7,
    } = this.props;

    return (
      <Column>
        <TextTrueCheckboxFalseColorWhite
          className={textTrueCheckboxFalseColorWhiteProp.className}
          helpIconFalseArrowFalseStateDefault={textTrueCheckboxFalseColorWhiteProp.helpIconFalseArrowFalseStateDefault}
        />
        <Divider></Divider>
        <StyleActionIconsSupportingTextFalse
          className={styleActionIconsSupportingTextFalse.className}
          sizemdHierarchyTertiaryGrayIconOnly={styleActionIconsSupportingTextFalse.sizemdHierarchyTertiaryGrayIconOnly}
        />
        <Divider></Divider>
        <StyleActionIconsSupportingTextFalse
          className={styleActionIconsSupportingTextFalse2.className}
          sizemdHierarchyTertiaryGrayIconOnly={styleActionIconsSupportingTextFalse2.sizemdHierarchyTertiaryGrayIconOnly}
        />
        <Divider></Divider>
        <StyleActionIconsSupportingTextFalse
          className={styleActionIconsSupportingTextFalse3.className}
          sizemdHierarchyTertiaryGrayIconOnly={styleActionIconsSupportingTextFalse3.sizemdHierarchyTertiaryGrayIconOnly}
        />
        <Divider></Divider>
        <StyleActionIconsSupportingTextFalse
          className={styleActionIconsSupportingTextFalse4.className}
          sizemdHierarchyTertiaryGrayIconOnly={styleActionIconsSupportingTextFalse4.sizemdHierarchyTertiaryGrayIconOnly}
        />
        <Divider></Divider>
        <StyleActionIconsSupportingTextFalse
          className={styleActionIconsSupportingTextFalse5.className}
          sizemdHierarchyTertiaryGrayIconOnly={styleActionIconsSupportingTextFalse5.sizemdHierarchyTertiaryGrayIconOnly}
        />
        <Divider></Divider>
        <StyleActionIconsSupportingTextFalse
          className={styleActionIconsSupportingTextFalse6.className}
          sizemdHierarchyTertiaryGrayIconOnly={styleActionIconsSupportingTextFalse6.sizemdHierarchyTertiaryGrayIconOnly}
        />
        <Divider></Divider>
        <StyleActionIconsSupportingTextFalse
          className={styleActionIconsSupportingTextFalse7.className}
          sizemdHierarchyTertiaryGrayIconOnly={styleActionIconsSupportingTextFalse7.sizemdHierarchyTertiaryGrayIconOnly}
        />
        <Divider></Divider>
      </Column>
    );
  }
}

const Column = styled.div`
  width: 108px;
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
  width: 108px;
  height: 556px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider1 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

export default Column6;
