import React from "react";
import LabelTrueTypeDefaultStateDefault from "../LabelTrueTypeDefaultStateDefault";
import styled from "styled-components";


class StateDefaultTypeDefaultSupportingTe extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStateDefaultPro } = this.props;

    return (
      <InputDropdown className={`input-dropdown-4 ${className || ""}`}>
        <LabelTrueTypeDefaultStateDefault
          chevronDown={labelTrueTypeDefaultStateDefaultPro.chevronDown}
          className={labelTrueTypeDefaultStateDefaultPro.className}
          content6Props={labelTrueTypeDefaultStateDefaultPro.content6Props}
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  width: 234px;
  height: 70px;
  position: relative;
  margin-left: 24px;
  display: flex;

  &.input-dropdown-4.input-dropdown-5 {
    margin-left: 39px;
  }

  &.input-dropdown-4.input-dropdown-6 {
    margin-left: 39px;
  }
`;

export default StateDefaultTypeDefaultSupportingTe;
