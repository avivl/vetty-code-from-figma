import React from "react";
import styled from "styled-components";
import { InterMediumThunderbird12px } from "../../styledMixins";


class IconFalse2 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <BadgeBase>
        <Text>{children}</Text>
      </BadgeBase>
    );
  }
}

const BadgeBase = styled.div`
  flex: 1;
  width: 79px;
  display: flex;
  background-color: var(--chardon);
  border-radius: 16px;
`;

const Text = styled.div`
  ${InterMediumThunderbird12px}
  margin-top: 2px;
  width: 63px;
  height: 18px;
  margin-left: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const BadgeBase1 = styled.div`
  flex: 1;
  width: 79px;
  display: flex;
  background-color: var(--chardon);
  border-radius: 16px;
`;

const Text1 = styled.div`
  ${InterMediumThunderbird12px}
  margin-top: 2px;
  width: 63px;
  height: 18px;
  margin-left: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default IconFalse2;
