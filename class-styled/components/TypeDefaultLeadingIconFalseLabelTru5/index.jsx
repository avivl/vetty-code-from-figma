import React from "react";
import TypeDefaultDestructiveTrue from "../TypeDefaultDestructiveTrue";
import styled from "styled-components";


class TypeDefaultLeadingIconFalseLabelTru5 extends React.Component {
  render() {
    const { typeDefaultDestructiveTrueProps } = this.props;

    return (
      <InputField>
        <TypeDefaultDestructiveTrue
          label={typeDefaultDestructiveTrueProps.label}
          alertCircle={typeDefaultDestructiveTrueProps.alertCircle}
          hintText={typeDefaultDestructiveTrueProps.hintText}
          textProps={typeDefaultDestructiveTrueProps.textProps}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  width: 434px;
  height: 96px;
  position: relative;
  margin-top: 23px;
  display: flex;
  justify-content: center;
`;

export default TypeDefaultLeadingIconFalseLabelTru5;
