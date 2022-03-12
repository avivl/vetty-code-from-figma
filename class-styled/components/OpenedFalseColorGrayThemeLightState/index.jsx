import React from "react";
import SocialIcon from "../SocialIcon";
import styled from "styled-components";


class OpenedFalseColorGrayThemeLightState extends React.Component {
  render() {
    const { className, socialIconProps } = this.props;

    return (
      <ApplicationNavMenuButton className={`application-nav-menu-button ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} />
      </ApplicationNavMenuButton>
    );
  }
}

const ApplicationNavMenuButton = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin-left: 164px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;

  &.application-nav-menu-button.application-nav-menu-button-1 {
    margin-left: 8px;
  }

  &.application-nav-menu-button.application-nav-menu-button-2 {
    margin-left: unset;
    background-color: unset;
  }
`;

export default OpenedFalseColorGrayThemeLightState;
