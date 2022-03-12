import React from "react";
import styled from "styled-components";
import { InterMediumSalem12px } from "../../styledMixins";


class IconFalse32 extends React.Component {
  render() {
    return (
      <BadgeBase>
        <Text>Hired</Text>
      </BadgeBase>
    );
  }
}

const BadgeBase = styled.div`
  flex: 1;
  width: 47px;
  display: flex;
  background-color: var(--narvik);
  border-radius: 16px;
`;

const Text = styled.div`
  ${InterMediumSalem12px}
  margin-top: 2px;
  width: 31px;
  height: 18px;
  margin-left: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const BadgeBase1 = styled.div`
  flex: 1;
  width: 47px;
  display: flex;
  background-color: var(--narvik);
  border-radius: 16px;
`;

const Text1 = styled.div`
  ${InterMediumSalem12px}
  margin-top: 2px;
  width: 31px;
  height: 18px;
  margin-left: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default IconFalse32;
