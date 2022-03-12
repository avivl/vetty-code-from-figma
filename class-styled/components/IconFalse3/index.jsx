import React from "react";
import styled from "styled-components";
import { InterMediumAllports12px } from "../../styledMixins";


class IconFalse3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <BadgeBase className={`badge-base-6 ${className || ""}`}>
        <Text className="text-142">{children}</Text>
      </BadgeBase>
    );
  }
}

const BadgeBase = styled.div`
  flex: 1;
  width: 100px;
  display: flex;
  background-color: var(--alice-blue);
  border-radius: 16px;

  &.badge-base-6.badge-base-7 {
    width: 53px;
  }
`;

const Text = styled.div`
  ${InterMediumAllports12px}
  margin-top: 2px;
  width: 84px;
  height: 18px;
  margin-left: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumAllports12px}

  .badge-base-6.badge-base-7  & {
    width: 37px;
  }
`;

export default IconFalse3;
