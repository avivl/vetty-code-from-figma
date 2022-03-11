import React from "react";
import DestructiveFalse5 from "../DestructiveFalse5";
import styled from "styled-components";


class DestructiveFalse52 extends React.Component {
  render() {
    const { destructiveFalse5Props } = this.props;

    return (
      <TextareaInputField>
        <DestructiveFalse5 label={destructiveFalse5Props.label} textProps={destructiveFalse5Props.textProps} />
      </TextareaInputField>
    );
  }
}

const TextareaInputField = styled.div`
  height: 162px;
  position: relative;
  margin-top: 38px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;
`;

export default DestructiveFalse52;
