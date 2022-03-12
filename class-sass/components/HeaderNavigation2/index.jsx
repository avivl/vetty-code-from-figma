import React from "react";
import Content10 from "../Content10";
import StatePlaceholderTypeSearchSupportin from "../StatePlaceholderTypeSearchSupportin";
import OpenFalseCurrentFalseBadgeFalseColo from "../OpenFalseCurrentFalseBadgeFalseColo";
import Content from "../Content";
import SizesmHierarchyTertiaryGrayIconOnly from "../SizesmHierarchyTertiaryGrayIconOnly";
import OpenedFalseColorGrayThemeLightState from "../OpenedFalseColorGrayThemeLightState";
import "./HeaderNavigation2.sass";

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
      <div className="header-navigation-9 screen">
        <div className="content-90">
          <div className="nav">
            <div className="header-1">
              <Content10 className={content10Props.className} content2Props={content10Props.content2Props} />
            </div>
            <div className="search-1">
              <StatePlaceholderTypeSearchSupportin
                labelFalseTypeSearchStatePlaceholde={
                  statePlaceholderTypeSearchSupportin.labelFalseTypeSearchStatePlaceholde
                }
              />
            </div>
            <div className="navigation-5">
              <OpenFalseCurrentFalseBadgeFalseColo
                currentFalseBadgeFalseToggleFalseIc={
                  openFalseCurrentFalseBadgeFalseColo.currentFalseBadgeFalseToggleFalseIc
                }
              />
            </div>
          </div>
          <div className="footer-6">
            <img className="divider-28" src={divider} />
            <div className="account">
              <div className="avatar-label-group-1">
                <Content />
                <div className="text-and-supporting-text-24">
                  <div className="text-125 inter-medium-mirage-14px">{text}</div>
                  <div className="supporting-text-12 inter-normal-pale-sky-14px">{supportingText}</div>
                </div>
              </div>
              <div className="icon">
                <SizesmHierarchyTertiaryGrayIconOnly
                  sizesmIconOnlyProps={sizesmHierarchyTertiaryGrayIconOnly.sizesmIconOnlyProps}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="close-x">
          <OpenedFalseColorGrayThemeLightState
            className={openedFalseColorGrayThemeLightState.className}
            socialIconProps={openedFalseColorGrayThemeLightState.socialIconProps}
          />
        </div>
      </div>
    );
  }
}

export default HeaderNavigation2;
