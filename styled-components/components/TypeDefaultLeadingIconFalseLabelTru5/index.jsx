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
          hintText={typeDefaultDestructiveTrueProps.hintText}
          textProps={typeDefaultDestructiveTrueProps.textProps}
        />
      </InputField>
    );
  }
}

const InputField = styled.div`
  height: 96px;
  position: relative;
  margin-top: 23px;
  display: flex;
  align-items: flex-start;
  min-width: 434px;
`;

export default TypeDefaultLeadingIconFalseLabelTru5;
