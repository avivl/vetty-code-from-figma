import React from "react";
import InputWithLabel4 from "../InputWithLabel4";
import styled from "styled-components";


class TypeDefaultDestructiveFalse2 extends React.Component {
  render() {
    const { inputWithLabel4Props } = this.props;

    return (
      <InputFieldBase>
        <InputWithLabel4
          label={inputWithLabel4Props.label}
          className={inputWithLabel4Props.className}
          text2Props={inputWithLabel4Props.text2Props}
        />
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 360px;
  position: relative;
  display: flex;
`;

const InputFieldBase1 = styled.div`
  width: 360px;
  position: relative;
  display: flex;
`;

const InputFieldBase2 = styled.div`
  width: 360px;
  position: relative;
  display: flex;
`;

const InputFieldBase3 = styled.div`
  width: 360px;
  position: relative;
  display: flex;
`;

export default TypeDefaultDestructiveFalse2;
