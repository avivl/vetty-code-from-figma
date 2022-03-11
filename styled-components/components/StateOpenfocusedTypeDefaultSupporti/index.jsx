import React from "react";
import LabelTrueTypeDefaultStateDefault2 from "../LabelTrueTypeDefaultStateDefault2";
import TypeDefaultSupportingTextFalseScrol from "../TypeDefaultSupportingTextFalseScrol";
import styled from "styled-components";


class StateOpenfocusedTypeDefaultSupporti extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault2Pr, typeDefaultSupportingTextFalseScrol } = this.props;

    return (
      <InputDropdown>
        <LabelTrueTypeDefaultStateDefault2
          label={labelTrueTypeDefaultStateDefault2Pr.label}
          className={labelTrueTypeDefaultStateDefault2Pr.className}
          selectedTrueSupportingTextFalseType={labelTrueTypeDefaultStateDefault2Pr.selectedTrueSupportingTextFalseType}
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;
`;

export default StateOpenfocusedTypeDefaultSupporti;
