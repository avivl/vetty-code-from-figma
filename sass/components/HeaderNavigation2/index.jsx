import React from "react";
import Frame3 from "../Frame3";
import StatePlaceholderTypeSearchSupportin from "../StatePlaceholderTypeSearchSupportin";
import OpenFalseCurrentFalseBadgeFalseColo from "../OpenFalseCurrentFalseBadgeFalseColo";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import SizesmHierarchyTertiaryGrayIconOnly from "../SizesmHierarchyTertiaryGrayIconOnly";
import OpenedFalseColorGrayThemeLightState from "../OpenedFalseColorGrayThemeLightState";
import "./HeaderNavigation2.sass";

class HeaderNavigation2 extends React.Component {
  render() {
    const {
      charmingAndComfort1,
      charmingAndComfort2,
      text,
      supportingText,
      frame3Props,
      statePlaceholderTypeSearchSupportinProps,
      openFalseCurrentFalseBadgeFalseColoProps,
      typeAvatarOpenFalseProps,
      openedFalseColorGrayThemeLightStateProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="header-navigation-9 screen">
          <div className="content-31">
            <div className="nav">
              <div className="header-1">
                <Frame3
                  vector7={frame3Props.vector7}
                  x5D7F96Dfdf28141Cd047F1675418350C1={frame3Props.x5D7F96Dfdf28141Cd047F1675418350C1}
                  className={frame3Props.className}
                />
                <div className="charming-and-comfort-18 valign-text-middle redhatdisplay-extra-bold-mirage-22px">
                  {charmingAndComfort1}
                </div>
                <div className="charming-and-comfort-19 valign-text-middle inter-normal-pale-sky-12px">
                  {charmingAndComfort2}
                </div>
              </div>
              <StatePlaceholderTypeSearchSupportin
                labelFalseTypeSearchStatePlaceholdeProps={
                  statePlaceholderTypeSearchSupportinProps.labelFalseTypeSearchStatePlaceholdeProps
                }
              />
              <OpenFalseCurrentFalseBadgeFalseColo
                currentFalseBadgeFalseToggleFalseIc2Props={
                  openFalseCurrentFalseBadgeFalseColoProps.currentFalseBadgeFalseToggleFalseIc2Props
                }
              />
            </div>
            <div className="footer-6">
              <img className="divider-26" src="/img/divider-7@2x.svg" />
              <div className="account">
                <div className="avatar-label-group">
                  <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
                  <div className="text-and-supporting-text-4">
                    <div className="text-105 inter-medium-mirage-14px">{text}</div>
                    <div className="text-105 inter-normal-pale-sky-14px">{supportingText}</div>
                  </div>
                </div>
                <SizesmHierarchyTertiaryGrayIconOnly />
              </div>
            </div>
          </div>
          <div className="close-x">
            <OpenedFalseColorGrayThemeLightState
              className={openedFalseColorGrayThemeLightStateProps.className}
              socialIconProps={openedFalseColorGrayThemeLightStateProps.socialIconProps}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderNavigation2;
