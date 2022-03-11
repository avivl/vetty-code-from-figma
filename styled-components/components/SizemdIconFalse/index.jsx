import React from "react";
import styled from "styled-components";
import { InterMediumWhite14px } from "../../styledMixins";


class SizemdIconFalse extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ButtonBase className={`button-base-2 ${className || ""}`}>
        <Text className="text-8">Apply to Job</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  width: 117px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.button-base-2.button-base-3 {
    background-color: var(--mischka);
  }

  &.button-base-2.button-base-5 {
    background-color: var(--mischka);
  }

  &.button-base-2.button-base-6 {
    background-color: var(--mischka);
  }

  &.button-base-2.button-base-7 {
    background-color: var(--mischka);
  }

  &.button-base-2.button-base-8 {
    background-color: var(--mischka);
  }
`;

const Text = styled.div`
  ${InterMediumWhite14px}
  min-height: 20px;
  min-width: 85px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumWhite14px}

  .button-base-2.button-base-3  & {
    opacity: 0.5;
  }
`;

const Text2 = styled.div`
  ${InterMediumWhite14px}

  .button-base-2.button-base-5  & {
    opacity: 0.5;
  }
`;

const Text3 = styled.div`
  ${InterMediumWhite14px}

  .button-base-2.button-base-6  & {
    opacity: 0.5;
  }
`;

const Text4 = styled.div`
  ${InterMediumWhite14px}

  .button-base-2.button-base-7  & {
    opacity: 0.5;
  }
`;

const Text5 = styled.div`
  ${InterMediumWhite14px}

  .button-base-2.button-base-8  & {
    opacity: 0.5;
  }
`;

export default SizemdIconFalse;
