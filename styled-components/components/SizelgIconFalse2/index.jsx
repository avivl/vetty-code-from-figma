import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue16px, Border1pxMischka } from "../../styledMixins";


class SizelgIconFalse2 extends React.Component {
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
  ${Border1pxMischka}
  width: 375px;
  height: 44px;
  display: flex;
  padding: 0 128px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue16px}
  min-height: 24px;
  min-width: 119px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default SizelgIconFalse2;
