import React from "react";
import DestructiveTrue from "../DestructiveTrue";
import styled from "styled-components";


class LabelTrueHintTextTrueDestructiveTru extends React.Component {
  render() {
    const { destructiveTrueProps } = this.props;

    return (
      <TextareaInputField>
        <DestructiveTrue
          hintText={destructiveTrueProps.hintText}
          inputWithLabel2Props={destructiveTrueProps.inputWithLabel2Props}
        />
      </TextareaInputField>
    );
  }
}

const TextareaInputField = styled.div`
  width: 904px;
  height: 180px;
  position: relative;
  margin-top: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LabelTrueHintTextTrueDestructiveTru;
