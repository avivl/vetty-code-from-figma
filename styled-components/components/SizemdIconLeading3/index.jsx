import React from "react";
import styled from "styled-components";
import { InterMediumPaleSky14px } from "../../styledMixins";


class SizemdIconLeading3 extends React.Component {
  render() {
    const { text, className } = this.props;

    return (
      <ButtonBase className={`button-base-19 ${className || ""}`}>
        <ArrowLeft className="arrow-left" src="/img/arrow-left@2x.svg" />
        <Text className="text-40">{text}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  width: 61px;
  display: flex;
  align-items: flex-start;

  &.button-base-19.button-base-20 {
    width: 118px;
  }

  &.button-base-19.button-base-21 {
    width: 118px;
  }

  &.button-base-19.button-base-22 {
    width: 118px;
  }

  &.button-base-19.button-base-23 {
    width: 118px;
  }
`;

const ArrowLeft = styled.img`
  width: 20px;
  height: 20px;
`;

const Text = styled.div`
  ${InterMediumPaleSky14px}
  min-height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconLeading3;
