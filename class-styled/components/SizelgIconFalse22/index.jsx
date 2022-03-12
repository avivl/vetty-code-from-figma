import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue16px, Border1pxMischka } from "../../styledMixins";


class SizelgIconFalse22 extends React.Component {
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
  flex: 1;
  width: 375px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue16px}
  margin-top: 10px;
  width: 119px;
  height: 24px;
  margin-left: 128px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default SizelgIconFalse22;
