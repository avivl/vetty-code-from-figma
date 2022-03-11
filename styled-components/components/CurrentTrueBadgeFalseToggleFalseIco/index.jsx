import React from "react";
import styled from "styled-components";
import { InterMediumRoyalBlue16px } from "../../styledMixins";


class CurrentTrueBadgeFalseToggleFalseIco extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <NavItemBase className={`nav-item-base-3 ${className || ""}`}>
        <Text className="text-34">{children}</Text>
      </NavItemBase>
    );
  }
}

const NavItemBase = styled.div`
  width: 100px;
  height: 40px;
  margin-left: 16px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  background-color: var(--magnolia-2);
  border-radius: 6px;
  overflow: hidden;

  &.nav-item-base-3.nav-item-base-4 {
    width: 108px;
    margin-left: unset;
  }
`;

const Text = styled.div`
  ${InterMediumRoyalBlue16px}
  min-height: 24px;
  min-width: 76px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumRoyalBlue16px}

  .nav-item-base-3.nav-item-base-4  & {
    min-width: 84px;
  }
`;

export default CurrentTrueBadgeFalseToggleFalseIco;
