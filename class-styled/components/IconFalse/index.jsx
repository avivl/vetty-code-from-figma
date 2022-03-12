import React from "react";
import styled from "styled-components";
import { InterMediumPurpleHeart12px } from "../../styledMixins";


class IconFalse extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <BadgeBase className={`badge-base ${className || ""}`}>
        <Text className="text-127">{children}</Text>
      </BadgeBase>
    );
  }
}

const BadgeBase = styled.div`
  flex: 1;
  width: 23px;
  display: flex;
  background-color: var(--magnolia);
  border-radius: 16px;

  &.badge-base.badge-base-1 {
    width: 24px;
  }

  &.badge-base.badge-base-3 {
    width: 47px;
  }

  &.badge-base.badge-base-4 {
    width: 47px;
  }
`;

const Text = styled.div`
  ${InterMediumPurpleHeart12px}
  margin-top: 2px;
  width: 7px;
  height: 18px;
  margin-left: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumPurpleHeart12px}

  .badge-base.badge-base-1  & {
    width: 8px;
  }
`;

const Text2 = styled.div`
  ${InterMediumPurpleHeart12px}

  .badge-base.badge-base-3  & {
    width: 31px;
  }
`;

const Text3 = styled.div`
  ${InterMediumPurpleHeart12px}

  .badge-base.badge-base-4  & {
    width: 31px;
  }
`;

export default IconFalse;
