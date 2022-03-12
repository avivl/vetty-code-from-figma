import React from "react";
import styled from "styled-components";
import { InterMediumVesuvius12px } from "../../styledMixins";


class IconFalse4 extends React.Component {
  render() {
    return (
      <BadgeBase>
        <Text>Not Compatible</Text>
      </BadgeBase>
    );
  }
}

const BadgeBase = styled.div`
  flex: 1;
  width: 106px;
  display: flex;
  background-color: var(--buttery-white);
  border-radius: 16px;
`;

const Text = styled.div`
  ${InterMediumVesuvius12px}
  margin-top: 2px;
  width: 90px;
  height: 18px;
  margin-left: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const BadgeBase1 = styled.div`
  flex: 1;
  width: 106px;
  display: flex;
  background-color: var(--buttery-white);
  border-radius: 16px;
`;

const Text1 = styled.div`
  ${InterMediumVesuvius12px}
  margin-top: 2px;
  width: 90px;
  height: 18px;
  margin-left: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default IconFalse4;
