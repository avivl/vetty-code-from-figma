import React from "react";
import Content3 from "../Content3";
import styled from "styled-components";


class CurrentFalseBadgeFalseToggleFalseIc extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <NavItemBase className={`nav-item-base ${className || ""}`}>
        <Content3 />
      </NavItemBase>
    );
  }
}

const NavItemBase = styled.div`
  width: 100px;
  height: 40px;
  position: relative;
  display: flex;
  background-color: var(--white);
  border-radius: 6px;
  overflow: hidden;

  &.nav-item-base.nav-item-base-1 {
    width: 87px;
    margin-left: 4px;
  }
`;

export default CurrentFalseBadgeFalseToggleFalseIc;
