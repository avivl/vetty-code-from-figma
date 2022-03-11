import React from "react";
import styled from "styled-components";
import { InterMediumWhite16px } from "../../styledMixins";


class SizelgIconFalse3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ButtonBase className={`button-base-32 ${className || ""}`}>
        <Text className="text-62">{children}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  width: 360px;
  height: 44px;
  display: flex;
  padding: 0 154px;
  align-items: center;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.button-base-32.button-base-33 {
    padding: 0 120px;
  }

  &.button-base-32.button-base-34 {
    padding: 0 118.5px;
  }

  &.button-base-32.button-base-35 {
    padding: 0 145px;
  }

  &.button-base-32.button-base-36 {
    padding: 0 118.5px;
  }
`;

const Text = styled.div`
  ${InterMediumWhite16px}
  min-height: 24px;
  min-width: 52px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumWhite16px}

  .button-base-32.button-base-33  & {
    min-width: 120px;
  }
`;

const Text2 = styled.div`
  ${InterMediumWhite16px}

  .button-base-32.button-base-34  & {
    min-width: 123px;
  }
`;

const Text3 = styled.div`
  ${InterMediumWhite16px}

  .button-base-32.button-base-35  & {
    min-width: 70px;
  }
`;

const Text4 = styled.div`
  ${InterMediumWhite16px}

  .button-base-32.button-base-36  & {
    min-width: 123px;
  }
`;

export default SizelgIconFalse3;
