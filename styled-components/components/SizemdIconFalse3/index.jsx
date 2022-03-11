import React from "react";
import styled from "styled-components";
import { Border1pxMischka, InterMediumOxfordBlue14px } from "../../styledMixins";


class SizemdIconFalse3 extends React.Component {
  render() {
    return (
      <ButtonBase>
        <Text>Login</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  ${Border1pxMischka}
  width: 69px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  min-width: 37px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase1 = styled.div`
  ${Border1pxMischka}
  width: 69px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text1 = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  min-width: 37px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase2 = styled.div`
  ${Border1pxMischka}
  width: 69px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text2 = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  min-width: 37px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconFalse3;
