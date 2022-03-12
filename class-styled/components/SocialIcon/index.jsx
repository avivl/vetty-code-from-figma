import React from "react";
import styled from "styled-components";


class SocialIcon extends React.Component {
  render() {
    const { src, className } = this.props;

    return <Menu2 className={`menu-2 ${className || ""}`} src={src} />;
  }
}

const Menu2 = styled.img`
  margin-top: 8px;
  width: 24px;
  height: 24px;
  margin-left: 8px;

  &.menu-2.social-icon {
    margin-top: 10px;
    margin-left: 85px;
  }

  &.menu-2.home {
    margin-top: -0.2px;
    margin-left: unset;
  }

  &.menu-2.social-icon-1 {
    margin-top: 10px;
    margin-left: 88px;
  }

  &.menu-2.us {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.uy {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.se {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-1 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-2 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-3 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-4 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-5 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.uy-1 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.se-1 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-6 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-7 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-8 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-9 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-10 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.uy-2 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.se-2 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-11 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-12 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-13 {
    margin-top: 24px;
    margin-left: 24px;
  }

  &.menu-2.us-14 {
    margin-top: 24px;
    margin-left: 24px;
  }
`;

export default SocialIcon;
