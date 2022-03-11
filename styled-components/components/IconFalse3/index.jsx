import React from "react";
import styled from "styled-components";
import { InterMediumSalem12px } from "../../styledMixins";


class IconFalse3 extends React.Component {
  render() {
    return (
      <BadgeBase>
        <Text>Hired</Text>
      </BadgeBase>
    );
  }
}

const BadgeBase = styled.div`
  height: 22px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 47px;
  background-color: var(--narvik);
  border-radius: 16px;
`;

const Text = styled.div`
  ${InterMediumSalem12px}
  min-height: 18px;
  min-width: 31px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default IconFalse3;
