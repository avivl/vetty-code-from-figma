import React from "react";
import TypeDefaultDestructiveFalse4 from "../TypeDefaultDestructiveFalse4";
import styled from "styled-components";


class TypeDefaultLeadingIconFalseLabelTru4 extends React.Component {
  render() {
    const { typeDefaultDestructiveFalse4Props } = this.props;

    return (
      <InputField>
        <TypeDefaultDestructiveFalse4
          className={typeDefaultDestructiveFalse4Props.className}
          selectedFalseSupportingTextFalseTyp={typeDefaultDestructiveFalse4Props.selectedFalseSupportingTextFalseTyp}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  width: 434px;
  height: 70px;
  position: relative;
  margin-top: 14px;
  display: flex;
  justify-content: center;
`;

export default TypeDefaultLeadingIconFalseLabelTru4;
