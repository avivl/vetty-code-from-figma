import React from "react";
import DestructiveFalse23 from "../DestructiveFalse23";
import styled from "styled-components";


class DestructiveFalse22 extends React.Component {
  render() {
    const { input2Props } = this.props;

    return (
      <TextareaInputFieldBase>
        <DestructiveFalse23 className={input2Props.className} input2Props={input2Props.input2Props} />
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  height: 162px;
  width: 346px;
  position: relative;
  display: flex;
`;

const TextareaInputFieldBase1 = styled.div`
  height: 162px;
  width: 346px;
  position: relative;
  display: flex;
`;

export default DestructiveFalse22;
