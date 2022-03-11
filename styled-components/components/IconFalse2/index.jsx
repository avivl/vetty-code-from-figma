import React from "react";
import styled from "styled-components";


class IconFalse2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <BadgeBase className={`badge-base-4 ${className || ""}`}>
        <Text className="text-84">{children}</Text>
      </BadgeBase>
    );
  }
}

const BadgeBase = styled.div`
  height: 22px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 79px;
  background-color: #fef2f1;
  border-radius: 16px;

  &.badge-base-4.badge-base-5 {
    min-width: 100px;
    background-color: #f0f9ff;
  }

  &.badge-base-4.badge-base-6 {
    min-width: 106px;
    background-color: #fff9eb;
  }
`;

const Text = styled.div`
  min-height: 18px;
  min-width: 63px;
  font-family: var(--font-family-inter);
  font-weight: 500;
  color: #b32218;
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  .badge-base-4.badge-base-5 & {
    min-width: 84px;
    color: #016aa2;
  }
`;

const Text2 = styled.div`
  .badge-base-4.badge-base-6 & {
    min-width: 90px;
    color: #b54707;
  }
`;

export default IconFalse2;
