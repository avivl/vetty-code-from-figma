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
  flex: 1;
  width: 163px;
  display: flex;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumWhite14px}
  margin-top: 10px;
  width: 131px;
  height: 20px;
  margin-left: 16px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconFalse5;
