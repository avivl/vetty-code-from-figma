import React from "react";
import styled from "styled-components";
import { InterMediumWhite14px } from "../../styledMixins";


class SizemdIconLeading4 extends React.Component {
  render() {
    return (
      <ButtonBase>
        <Users src="/img/users-6@2x.svg" />
        <Text>Share</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  width: 99px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Users = styled.img`
  width: 20px;
  height: 20px;
`;

const Text = styled.div`
  ${InterMediumWhite14px}
  min-height: 20px;
  margin-left: 8px;
  min-width: 39px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase1 = styled.div`
  width: 99px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Users1 = styled.img`
  width: 20px;
  height: 20px;
`;

const Text1 = styled.div`
  ${InterMediumWhite14px}
  min-height: 20px;
  margin-left: 8px;
  min-width: 39px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconLeading4;
