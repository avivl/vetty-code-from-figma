import React from "react";
import LabelTrueTypeDefaultStateDefault3 from "../LabelTrueTypeDefaultStateDefault3";
import styled from "styled-components";


class StateDefaultTypeDefaultSupportingTe3 extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault3Pr } = this.props;

    return (
      <InputDropdown>
        <LabelTrueTypeDefaultStateDefault3
          label={labelTrueTypeDefaultStateDefault3Pr.label}
          selectedTrueSupportingTextFalseType={labelTrueTypeDefaultStateDefault3Pr.selectedTrueSupportingTextFalseType}
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
`;

export default StateDefaultTypeDefaultSupportingTe3;
