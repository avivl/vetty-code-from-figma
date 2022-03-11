import React from "react";
import styled from "styled-components";
import { InterMediumWhite14px } from "../../styledMixins";


class SizexlIconFalse extends React.Component {
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
  width: 121px;
  height: 44px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  background-color: var(--mercury);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumWhite14px}
  min-height: 20px;
  min-width: 81px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizexlIconFalse;
