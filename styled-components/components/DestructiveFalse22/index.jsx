import React from "react";
import DestructiveFalse2 from "../DestructiveFalse2";
import styled from "styled-components";


class DestructiveFalse22 extends React.Component {
  render() {
    const { input2Props } = this.props;

    return (
      <TextareaInputField>
        <DestructiveFalse2 className={input2Props.className} input2Props={input2Props.input2Props} />
      </TextareaInputField>
    );
  }
}

const TextareaInputField = styled.div`
  height: 162px;
  position: relative;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  min-width: 346px;
`;

const TextareaInputField1 = styled.div`
  height: 162px;
  position: relative;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  min-width: 346px;
`;

export default DestructiveFalse22;
