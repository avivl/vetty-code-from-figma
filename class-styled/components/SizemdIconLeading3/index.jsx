import React from "react";
import styled from "styled-components";
import { InterMediumPaleSky14px } from "../../styledMixins";


class SizemdIconLeading3 extends React.Component {
  render() {
    const { text, className } = this.props;

    return (
      <ButtonBase className={`button-base-20 ${className || ""}`}>
        <ArrowLeft className="arrow-left" src="/img/arrow-left@2x.png" />
        <Text className="text-100">{text}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  flex: 1;
  width: 61px;
  display: flex;

  &.button-base-20.button-base-21 {
    width: 118px;
  }

  &.button-base-20.button-base-22 {
    width: 118px;
  }

  &.button-base-20.button-base-23 {
    width: 118px;
  }

  &.button-base-20.button-base-24 {
    width: 118px;
  }
`;

const ArrowLeft = styled.img`
  width: 20px;
  height: 20px;
`;

const Text = styled.div`
  ${InterMediumPaleSky14px}
  width: 33px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumPaleSky14px}

  .button-base-20.button-base-21  & {
    width: 90px;
  }
`;

const Text2 = styled.div`
  ${InterMediumPaleSky14px}

  .button-base-20.button-base-22  & {
    width: 90px;
  }
`;

const Text3 = styled.div`
  ${InterMediumPaleSky14px}

  .button-base-20.button-base-23  & {
    width: 90px;
  }
`;

const Text4 = styled.div`
  ${InterMediumPaleSky14px}

  .button-base-20.button-base-24  & {
    width: 90px;
  }
`;

export default SizemdIconLeading3;
