import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue16px } from "../../styledMixins";


class CurrentFalseBadgeFalseToggleFalseIc extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <NavItemBase className={`nav-item-base ${className || ""}`}>
        <Text className="text-4">Job Posts</Text>
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
  background-color: var(--white);
  border-radius: 6px;
  overflow: hidden;

  &.nav-item-base.nav-item-base-1 {
    width: 87px;
    margin-left: 4px;
    padding: unset;
  }
`;

const Text = styled.div`
  ${InterMediumOxfordBlue16px}
  min-height: 24px;
  min-width: 76px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumOxfordBlue16px}

  .nav-item-base.nav-item-base-1  & {
    margin-left: 12px;
  }
`;

export default CurrentFalseBadgeFalseToggleFalseIc;
