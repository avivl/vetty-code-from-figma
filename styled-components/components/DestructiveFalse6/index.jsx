import React from "react";
import DestructiveFalse from "../DestructiveFalse";
import styled from "styled-components";


class DestructiveFalse6 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <TextareaInputField>
        <DestructiveFalse className={inputProps.className} inputProps={inputProps.inputProps} />
      </TextareaInputField>
    );
  }
}

const TextareaInputField = styled.div`
  height: 162px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;
`;

const TextareaInputField1 = styled.div`
  height: 162px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;
`;

export default DestructiveFalse6;
