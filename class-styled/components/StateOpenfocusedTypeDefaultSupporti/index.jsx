import React from "react";
import LabelTrueTypeDefaultStateDefault3 from "../LabelTrueTypeDefaultStateDefault3";
import TypeDefaultSupportingTextFalseScrol from "../TypeDefaultSupportingTextFalseScrol";
import styled from "styled-components";


class StateOpenfocusedTypeDefaultSupporti extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault3Pr, typeDefaultSupportingTextFalseScrol } = this.props;

    return (
      <InputDropdown>
        <LabelTrueTypeDefaultStateDefault3
          label={labelTrueTypeDefaultStateDefault3Pr.label}
          className={labelTrueTypeDefaultStateDefault3Pr.className}
          selectedTrueSupportingTextFalseType={labelTrueTypeDefaultStateDefault3Pr.selectedTrueSupportingTextFalseType}
        />
        <TypeDefaultSupportingTextFalseScrol
          selectedTrueSupportingTextFalseType={typeDefaultSupportingTextFalseScrol.selectedTrueSupportingTextFalseType}
          selectedFalseSupportingTextFalseTyp={typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp}
          selectedFalseSupportingTextFalseTyp2={
            typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp2
          }
          selectedFalseSupportingTextFalseTyp3={
            typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp3
          }
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  width: 434px;
  height: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default StateOpenfocusedTypeDefaultSupporti;
