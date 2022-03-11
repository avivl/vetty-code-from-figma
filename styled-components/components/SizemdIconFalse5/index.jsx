import React from "react";
import styled from "styled-components";
import { InterMediumWhite14px } from "../../styledMixins";


class SizemdIconFalse5 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ButtonBase>
        <Text>{children}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  width: 163px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumWhite14px}
  min-height: 20px;
  min-width: 131px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconFalse5;
