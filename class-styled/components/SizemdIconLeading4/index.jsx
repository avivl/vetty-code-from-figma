import React from "react";
import styled from "styled-components";
import { InterMediumWhite14px } from "../../styledMixins";


class SizemdIconLeading4 extends React.Component {
  render() {
    return (
      <ButtonBase>
        <Users src="/img/users@2x.png" />
        <Text>Share</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  flex: 1;
  width: 99px;
  display: flex;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Users = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

const Text = styled.div`
  ${InterMediumWhite14px}
  margin-top: 10px;
  width: 39px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase1 = styled.div`
  flex: 1;
  width: 99px;
  display: flex;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Users1 = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

const Text1 = styled.div`
  ${InterMediumWhite14px}
  margin-top: 10px;
  width: 39px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase2 = styled.div`
  flex: 1;
  width: 99px;
  display: flex;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Users2 = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

const Text2 = styled.div`
  ${InterMediumWhite14px}
  margin-top: 10px;
  width: 39px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconLeading4;
