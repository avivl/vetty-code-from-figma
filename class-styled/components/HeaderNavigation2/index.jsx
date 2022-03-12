import React from "react";
import Content10 from "../Content10";
import StatePlaceholderTypeSearchSupportin from "../StatePlaceholderTypeSearchSupportin";
import OpenFalseCurrentFalseBadgeFalseColo from "../OpenFalseCurrentFalseBadgeFalseColo";
import Content from "../Content";
import SizesmHierarchyTertiaryGrayIconOnly from "../SizesmHierarchyTertiaryGrayIconOnly";
import OpenedFalseColorGrayThemeLightState from "../OpenedFalseColorGrayThemeLightState";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterMediumMirage14px } from "../../styledMixins";
import "./HeaderNavigation2.css";

class HeaderNavigation2 extends React.Component {
  render() {
    const {
      divider,
      text,
      supportingText,
      content10Props,
      statePlaceholderTypeSearchSupportin,
      openFalseCurrentFalseBadgeFalseColo,
      sizesmHierarchyTertiaryGrayIconOnly,
      openedFalseColorGrayThemeLightState,
    } = this.props;

    return (
      <div className="header-navigation screen">
        <Content1>
          <Nav>
            <Header>
              <Content10 className={content10Props.className} content2Props={content10Props.content2Props} />
            </Header>
            <Search>
              <StatePlaceholderTypeSearchSupportin
                labelFalseTypeSearchStatePlaceholde={
                  statePlaceholderTypeSearchSupportin.labelFalseTypeSearchStatePlaceholde
                }
              />
            </Search>
            <Navigation>
              <OpenFalseCurrentFalseBadgeFalseColo
                currentFalseBadgeFalseToggleFalseIc={
                  openFalseCurrentFalseBadgeFalseColo.currentFalseBadgeFalseToggleFalseIc
                }
              />
            </Navigation>
          </Nav>
          <Footer>
            <Divider src={divider} />
            <Account>
              <AvatarLabelGroup>
                <Content />
                <TextAndSupportingText>
                  <Text>{text}</Text>
                  <SupportingText>{supportingText}</SupportingText>
                </TextAndSupportingText>
              </AvatarLabelGroup>
              <Icon>
                <SizesmHierarchyTertiaryGrayIconOnly
                  sizesmIconOnlyProps={sizesmHierarchyTertiaryGrayIconOnly.sizesmIconOnlyProps}
                />
              </Icon>
            </Account>
          </Footer>
        </Content1>
        <CloseX>
          <OpenedFalseColorGrayThemeLightState
            className={openedFalseColorGrayThemeLightState.className}
            socialIconProps={openedFalseColorGrayThemeLightState.socialIconProps}
          />
        </CloseX>
      </div>
    );
  }
}

const Content1 = styled.div`
  width: 312px;
  height: 812px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 0px 8px 8px #1018280a, 0px 20px 24px #1018281a;
`;

const Nav = styled.div`
  height: 173.12677001953125px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 312px;
  height: 33.12676239013672px;
  position: relative;
  margin-top: 16px;
  display: flex;
`;

const Search = styled.div`
  width: 312px;
  height: 44px;
  position: relative;
  margin-top: 20px;
  display: flex;
`;

const Navigation = styled.div`
  width: 312px;
  height: 40px;
  position: relative;
  margin-top: 20px;
  display: flex;
`;

const Footer = styled.div`
  height: 85px;
  margin-top: 553.9px;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.img`
  margin-left: 8px;
  width: 296px;
  height: 1px;
`;

const Account = styled.div`
  margin-left: 8px;
  width: 296px;
  margin-top: 20px;
  display: flex;
`;

const AvatarLabelGroup = styled.div`
  width: 191px;
  position: relative;
  margin-left: 8px;
  display: flex;
`;

const TextAndSupportingText = styled.div`
  width: 139px;
  height: 40px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${InterMediumMirage14px}
  width: 87px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const SupportingText = styled.div`
  ${InterNormalPaleSky14px}
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin-left: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
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
