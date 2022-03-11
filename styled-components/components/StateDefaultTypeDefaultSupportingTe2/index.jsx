import React from "react";
import LabelTrueTypeDefaultStateDefault2 from "../LabelTrueTypeDefaultStateDefault2";
import styled from "styled-components";


class StateDefaultTypeDefaultSupportingTe2 extends React.Component {
  render() {
    const { labelTrueTypeDefaultStateDefault2Pr } = this.props;

    return (
      <InputDropdown>
        <LabelTrueTypeDefaultStateDefault2
          label={labelTrueTypeDefaultStateDefault2Pr.label}
          selectedTrueSupportingTextFalseType={labelTrueTypeDefaultStateDefault2Pr.selectedTrueSupportingTextFalseType}
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  height: 70px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 434px;
`;

export default StateDefaultTypeDefaultSupportingTe2;
