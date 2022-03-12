import React from "react";
import styled from "styled-components";
import { InterMediumWhite14px } from "../../styledMixins";


class SizemdIconFalse extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ButtonBase className={`button-base-1 ${className || ""}`}>
        <Text className="text-8">Apply to Job</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  flex: 1;
  width: 117px;
  display: flex;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.button-base-1.button-base-2 {
    background-color: var(--mischka);
  }

  &.button-base-1.button-base-4 {
    background-color: var(--mischka);
  }

  &.button-base-1.button-base-5 {
    background-color: var(--mischka);
  }

  &.button-base-1.button-base-6 {
    background-color: var(--mischka);
  }

  &.button-base-1.button-base-7 {
    background-color: var(--mischka);
  }
`;

const Text = styled.div`
  ${InterMediumWhite14px}
  margin-top: 10px;
  width: 85px;
  height: 20px;
  margin-left: 16px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumWhite14px}

  .button-base-1.button-base-2  & {
    opacity: 0.5;
  }
`;

const Text2 = styled.div`
  ${InterMediumWhite14px}

  .button-base-1.button-base-4  & {
    opacity: 0.5;
  }
`;

const Text3 = styled.div`
  ${InterMediumWhite14px}

  .button-base-1.button-base-5  & {
    opacity: 0.5;
  }
`;

const Text4 = styled.div`
  ${InterMediumWhite14px}

  .button-base-1.button-base-6  & {
    opacity: 0.5;
  }
`;

const Text5 = styled.div`
  ${InterMediumWhite14px}

  .button-base-1.button-base-7  & {
    opacity: 0.5;
  }
`;

export default SizemdIconFalse;
