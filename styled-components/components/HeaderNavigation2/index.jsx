import React from "react";
import Frame3 from "../Frame3";
import StatePlaceholderTypeSearchSupportin from "../StatePlaceholderTypeSearchSupportin";
import OpenFalseCurrentFalseBadgeFalseColo from "../OpenFalseCurrentFalseBadgeFalseColo";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import SizesmHierarchyTertiaryGrayIconOnly from "../SizesmHierarchyTertiaryGrayIconOnly";
import OpenedFalseColorGrayThemeLightState from "../OpenedFalseColorGrayThemeLightState";
import styled from "styled-components";
import {
  InterNormalPaleSky12px,
  InterMediumMirage14px,
  InterNormalPaleSky14px,
  RedhatdisplayExtraBoldMirage22px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./HeaderNavigation2.css";

class HeaderNavigation2 extends React.Component {
  render() {
    const {
      charmingAndComfort1,
      charmingAndComfort2,
      text,
      supportingText,
      frame3Props,
      statePlaceholderTypeSearchSupportin,
      openFalseCurrentFalseBadgeFalseColo,
      typeAvatarOpenFalseProps,
      sizesmHierarchyTertiaryGrayIconOnly,
      openedFalseColorGrayThemeLightState,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="header-navigation screen">
          <Content>
            <Nav>
              <Header>
                <Frame3
                  vector7={frame3Props.vector7}
                  x5D7F96Dfdf28141Cd047F1675418350C1={frame3Props.x5D7F96Dfdf28141Cd047F1675418350C1}
                  className={frame3Props.className}
                />
                <CharmingAndComfort>{charmingAndComfort1}</CharmingAndComfort>
                <CharmingAndComfort1>{charmingAndComfort2}</CharmingAndComfort1>
              </Header>
              <StatePlaceholderTypeSearchSupportin
                labelFalseTypeSearchStatePlaceholde={
                  statePlaceholderTypeSearchSupportin.labelFalseTypeSearchStatePlaceholde
                }
              />
              <OpenFalseCurrentFalseBadgeFalseColo
                currentFalseBadgeFalseToggleFalseIc={
                  openFalseCurrentFalseBadgeFalseColo.currentFalseBadgeFalseToggleFalseIc
                }
              />
            </Nav>
            <Footer>
              <Divider src="/img/divider-7@2x.svg" />
              <Account>
                <AvatarLabelGroup>
                  <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
                  <TextAndSupportingText>
                    <Text>{text}</Text>
                    <SupportingText>{supportingText}</SupportingText>
                  </TextAndSupportingText>
                </AvatarLabelGroup>
                <SizesmHierarchyTertiaryGrayIconOnly
                  sizesmIconOnlyProps={sizesmHierarchyTertiaryGrayIconOnly.sizesmIconOnlyProps}
                />
              </Account>
            </Footer>
          </Content>
          <CloseX>
            <OpenedFalseColorGrayThemeLightState
              className={openedFalseColorGrayThemeLightState.className}
              socialIconProps={openedFalseColorGrayThemeLightState.socialIconProps}
            />
          </CloseX>
        </div>
      </div>
    );
  }
}

const Content = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 812px;
  background-color: var(--white);
  box-shadow: 0px 8px 8px #1018280a, 0px 20px 24px #1018281a;
`;

const Nav = styled.div`
  width: 312px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 173px;
`;

const Header = styled.div`
  position: relative;
  margin-top: 16px;
  display: flex;
  padding: 0 15px;
  align-items: flex-start;
  min-width: 312px;
`;

const CharmingAndComfort = styled.div`
  ${ValignTextMiddle}
  ${RedhatdisplayExtraBoldMirage22px}
            width: 55px;
  height: 33px;
  margin-left: 8px;
  margin-top: -0.44px;
  letter-spacing: 0;
  line-height: 33.1px;
  white-space: nowrap;
`;

const CharmingAndComfort1 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalPaleSky12px}
            width: 32px;
  height: 17px;
  align-self: center;
  margin-left: 5px;
  margin-top: 5px;
  letter-spacing: 0;
  line-height: 33.1px;
  white-space: nowrap;
`;

const Footer = styled.div`
  width: 312px;
  margin-top: 554px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85px;
`;

const Divider = styled.img`
  width: 296px;
  height: 1px;
`;

const Account = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 296px;
`;

const AvatarLabelGroup = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 191px;
`;

const TextAndSupportingText = styled.div`
  width: 139px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 40px;
`;

const Text = styled.div`
  ${InterMediumMirage14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const SupportingText = styled.div`
  ${InterNormalPaleSky14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const CloseX = styled.div`
  height: 64px;
  position: relative;
  margin-left: 15px;
  display: flex;
  align-items: center;
  min-width: 48px;
`;

export default HeaderNavigation2;
