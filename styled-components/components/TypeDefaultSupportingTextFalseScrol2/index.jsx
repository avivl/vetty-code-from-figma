import React from "react";
import SelectedTrueSupportingTextFalseType from "../SelectedTrueSupportingTextFalseType";
import SelectedFalseSupportingTextFalseTyp from "../SelectedFalseSupportingTextFalseTyp";
import styled from "styled-components";
import { Border1pxConcrete } from "../../styledMixins";


class TypeDefaultSupportingTextFalseScrol2 extends React.Component {
  render() {
    const {
      selectedTrueSupportingTextFalseType,
      selectedFalseSupportingTextFalseTyp,
      selectedFalseSupportingTextFalseTyp2,
      selectedFalseSupportingTextFalseTyp3,
      selectedFalseSupportingTextFalseTyp4,
    } = this.props;

    return (
      <InputDropdownMenu>
        <SelectedTrueSupportingTextFalseType
          className={selectedTrueSupportingTextFalseType.className}
          textProps={selectedTrueSupportingTextFalseType.textProps}
        />
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp.className}
          textProps={selectedFalseSupportingTextFalseTyp.textProps}
        />
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp2.className}
          textProps={selectedFalseSupportingTextFalseTyp2.textProps}
        />
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp3.className}
          textProps={selectedFalseSupportingTextFalseTyp3.textProps}
        />
        <SelectedFalseSupportingTextFalseTyp
          className={selectedFalseSupportingTextFalseTyp4.className}
          textProps={selectedFalseSupportingTextFalseTyp4.textProps}
        />
      </InputDropdownMenu>
    );
  }
}

const InputDropdownMenu = styled.div`
  ${Border1pxConcrete}
  width: 434px;
  height: 320px;
  position: relative;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px #10182808, 0px 12px 16px #10182814;
`;

export default TypeDefaultSupportingTextFalseScrol2;
