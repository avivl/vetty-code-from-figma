import React from "react";
import styled from "styled-components";
import { InterMediumRoyalBlue16px } from "../../styledMixins";


class CurrentTrueBadgeFalseToggleFalseIco extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <NavItemBase className={`nav-item-base-2 ${className || ""}`}>
        <Content className="content-26">
          <Text className="text-95">{children}</Text>
        </Content>
      </NavItemBase>
    );
  }
}

const NavItemBase = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  background-color: var(--magnolia-2);
  border-radius: 6px;
  overflow: hidden;

  &.nav-item-base-2.nav-item-base-3 {
    width: 108px;
  }
`;

const Content = styled.div`
  margin-top: 8px;
  width: 76px;
  margin-left: 12px;
  display: flex;
`;

const Text = styled.div`
  ${InterMediumRoyalBlue16px}
  width: 76px;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Content1 = styled.div`
  .nav-item-base-2.nav-item-base-3 & {
    width: 84px;
  }
`;

const Text1 = styled.div`
  ${InterMediumRoyalBlue16px}

  .nav-item-base-2.nav-item-base-3  & {
    width: 84px;
  }
`;

export default CurrentTrueBadgeFalseToggleFalseIco;
