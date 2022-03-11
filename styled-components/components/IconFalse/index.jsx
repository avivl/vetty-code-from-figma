import React from "react";
import styled from "styled-components";
import { InterMediumPurpleHeart12px } from "../../styledMixins";


class IconFalse extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <BadgeBase className={`badge-base ${className || ""}`}>
        <Text className="text-70">{children}</Text>
      </BadgeBase>
    );
  }
}

const BadgeBase = styled.div`
  height: 22px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 23px;
  background-color: var(--magnolia);
  border-radius: 16px;

  &.badge-base.badge-base-1 {
    min-width: 24px;
  }

  &.badge-base.badge-base-3 {
    min-width: 47px;
  }
`;

const Text = styled.div`
  ${InterMediumPurpleHeart12px}
  min-height: 18px;
  min-width: 7px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumPurpleHeart12px}

  .badge-base.badge-base-1  & {
    min-width: 8px;
  }
`;

const Text2 = styled.div`
  ${InterMediumPurpleHeart12px}

  .badge-base.badge-base-3  & {
    min-width: 31px;
  }
`;

export default IconFalse;
