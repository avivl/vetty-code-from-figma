import React from "react";
import DestructiveFalse5 from "../DestructiveFalse5";
import styled from "styled-components";


class DestructiveFalse52 extends React.Component {
  render() {
    const { destructiveFalse5Props } = this.props;

    return (
      <TextareaInputFieldBase>
        <DestructiveFalse5 label={destructiveFalse5Props.label} textProps={destructiveFalse5Props.textProps} />
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  height: 162px;
  width: 904px;
  position: relative;
  display: flex;
`;

export default DestructiveFalse52;
