import React from "react";
import InputWithLabel2 from "../InputWithLabel2";
import styled from "styled-components";
import { InterNormalCinnabar14px } from "../../styledMixins";


class DestructiveTrue extends React.Component {
  render() {
    const { hintText, inputWithLabel2Props } = this.props;

    return (
      <TextareaInputFieldBase>
        <InputWithLabel2
          label={inputWithLabel2Props.label}
          className={inputWithLabel2Props.className}
          inputProps={inputWithLabel2Props.inputProps}
        />
        <HintText>{hintText}</HintText>
      </TextareaInputFieldBase>
    );
  }
}

const TextareaInputFieldBase = styled.div`
  height: 180px;
  width: 904px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const HintText = styled.p`
  ${InterNormalCinnabar14px}
  height: 20px;
  margin-top: 6px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default DestructiveTrue;
