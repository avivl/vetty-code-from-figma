import React from "react";
import LabelTrueTypeDefaultStateDefault2 from "../LabelTrueTypeDefaultStateDefault2";
import TypeDefaultSupportingTextFalseScrol2 from "../TypeDefaultSupportingTextFalseScrol2";
import styled from "styled-components";


class StateOpenfocusedTypeDefaultSupporti2 extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault2Pr, typeDefaultSupportingTextFalseScrol } = this.props;

    return (
      <InputDropdown>
        <LabelTrueTypeDefaultStateDefault2
          label={labelTrueTypeDefaultStateDefault2Pr.label}
          className={labelTrueTypeDefaultStateDefault2Pr.className}
          selectedTrueSupportingTextFalseType={labelTrueTypeDefaultStateDefault2Pr.selectedTrueSupportingTextFalseType}
        />
        <TypeDefaultSupportingTextFalseScrol2
          selectedTrueSupportingTextFalseType={typeDefaultSupportingTextFalseScrol.selectedTrueSupportingTextFalseType}
          selectedFalseSupportingTextFalseTyp={typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp}
          selectedFalseSupportingTextFalseTyp2={
            typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp2
          }
          selectedFalseSupportingTextFalseTyp3={
            typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp3
          }
          selectedFalseSupportingTextFalseTyp4={
            typeDefaultSupportingTextFalseScrol.selectedFalseSupportingTextFalseTyp4
          }
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  width: 434px;
  position: relative;
  margin-left: 59px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;
`;

export default StateOpenfocusedTypeDefaultSupporti2;
