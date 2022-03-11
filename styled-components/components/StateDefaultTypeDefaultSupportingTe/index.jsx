import React from "react";
import LabelTrueTypeDefaultStateDefault from "../LabelTrueTypeDefaultStateDefault";
import styled from "styled-components";


class StateDefaultTypeDefaultSupportingTe extends React.Component {
  render() {
    const { className, labelTrueTypeDefaultStateDefaultPro } = this.props;

    return (
      <InputDropdown className={`input-dropdown-12 ${className || ""}`}>
        <LabelTrueTypeDefaultStateDefault
          className={labelTrueTypeDefaultStateDefaultPro.className}
          textProps={labelTrueTypeDefaultStateDefaultPro.textProps}
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  height: 70px;
  position: relative;
  margin-left: 24px;
  display: flex;
  align-items: flex-start;
  min-width: 234px;

  &.input-dropdown-12.input-dropdown-13 {
    margin-top: 24px;
    min-width: 346px;
    margin-left: unset;
  }

  &.input-dropdown-12.input-dropdown-14 {
    margin-left: 39px;
  }

  &.input-dropdown-12.input-dropdown-15 {
    margin-top: 24px;
    min-width: 346px;
    margin-left: unset;
  }

  &.input-dropdown-12.input-dropdown-16 {
    margin-left: 39px;
  }
`;

export default StateDefaultTypeDefaultSupportingTe;
