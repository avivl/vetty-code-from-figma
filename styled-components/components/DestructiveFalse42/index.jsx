import React from "react";
import DestructiveFalse4 from "../DestructiveFalse4";
import styled from "styled-components";


class DestructiveFalse42 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <TextareaInputField>
        <DestructiveFalse4 inputProps={inputProps.inputProps} />
      </TextareaInputField>
    );
  }
}

const TextareaInputField = styled.div`
  height: 162px;
  position: relative;
  margin-top: 30px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;
`;

const TextareaInputField1 = styled.div`
  height: 162px;
  position: relative;
  margin-top: 30px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;
`;

export default DestructiveFalse42;
