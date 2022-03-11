import React from "react";
import styled from "styled-components";
import { InterMediumWhite16px } from "../../styledMixins";


class SizelgIconFalse extends React.Component {
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
  width: 360px;
  height: 44px;
  display: flex;
  padding: 0 136px;
  align-items: center;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumWhite16px}
  min-height: 24px;
  min-width: 88px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default SizelgIconFalse;
