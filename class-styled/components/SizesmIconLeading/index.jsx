import React from "react";
import styled from "styled-components";
import { Border1pxMischka, InterMediumOxfordBlue14px } from "../../styledMixins";


class SizesmIconLeading extends React.Component {
  render() {
    return (
      <ButtonBase>
        <Text>View Candidates</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  ${Border1pxMischka}
  flex: 1;
  width: 142px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue14px}
  margin-top: 10px;
  width: 114px;
  height: 20px;
  margin-left: 14px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase1 = styled.div`
  ${Border1pxMischka}
  flex: 1;
  width: 142px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text1 = styled.div`
  ${InterMediumOxfordBlue14px}
  margin-top: 10px;
  width: 114px;
  height: 20px;
  margin-left: 14px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizesmIconLeading;
