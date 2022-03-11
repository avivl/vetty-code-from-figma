import React from "react";
import HeaderNavigation from "../HeaderNavigation";
import DividerChevronTypeTextBreakpointDes from "../DividerChevronTypeTextBreakpointDes";
import SizesmIconLeading from "../SizesmIconLeading";
import StateDefault from "../StateDefault";
import Frame14015 from "../Frame14015";
import Frame14016 from "../Frame14016";
import Frame14017 from "../Frame14017";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import TypeLeadingTextDestructiveFalse2 from "../TypeLeadingTextDestructiveFalse2";
import StateDefaultTypeDefaultSupportingTe from "../StateDefaultTypeDefaultSupportingTe";
import OpenedFalseTypeSingleDateStatePlace from "../OpenedFalseTypeSingleDateStatePlace";
import DestructiveFalse6 from "../DestructiveFalse6";
import Footer from "../Footer";
import Frame33760 from "../Frame33760";
import "./PublicWebPageHRView.sass";

class PublicWebPageHRView extends React.Component {
  render() {
    const {
      text,
      label,
      headerNavigationProps,
      dividerChevronTypeTextBreakpointDes,
      stateDefaultProps,
      frame14015Props,
      frame14016Props,
      frame14017Props,
      supportingTextTrueTabsFalseActionsF,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      statePlaceholderTypeDefaultSupporti,
      typeLeadingTextDestructiveFalse2Pro,
      stateDefaultTypeDefaultSupportingTe,
      statePlaceholderTypeDefaultSupporti2,
      statePlaceholderTypeDefaultSupporti3,
      destructiveFalse61Props,
      destructiveFalse62Props,
      destructiveFalse63Props,
      footerProps,
      frame33760Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-hr-view-1 screen">
          <HeaderNavigation
            companyLogoProps={headerNavigationProps.companyLogoProps}
            typeAvatarOpenFalseProps={headerNavigationProps.typeAvatarOpenFalseProps}
          />
          <DividerChevronTypeTextBreakpointDes
            chevronRight1={dividerChevronTypeTextBreakpointDes.chevronRight1}
            chevronRight2={dividerChevronTypeTextBreakpointDes.chevronRight2}
            currentFalseTypeTextIconFalseStateD={
              dividerChevronTypeTextBreakpointDes.currentFalseTypeTextIconFalseStateD
            }
            currentTrueTypeTextIconFalseStateDe={
              dividerChevronTypeTextBreakpointDes.currentTrueTypeTextIconFalseStateDe
            }
            currentFalseTypeTextIconFalseStateD2={
              dividerChevronTypeTextBreakpointDes.currentFalseTypeTextIconFalseStateD2
            }
          />
          <div className="container">
            <div className="heading">
              <div className="text-9 inter-medium-mirage-24px">{text}</div>
              <SizesmIconLeading />
              <StateDefault sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps} />
            </div>
            <div className="divider-1"></div>
          </div>
          <div className="flex-row">
            <img className="group-75" src="/img/group-75@2x.svg" />
            <div className="frame-14069">
              <Frame14015 supportingTextTrueTabsFalseActionsF={frame14015Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14016 supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14017 supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF} />
              <div className="applicant-details">
                <SupportingTextTrueTabsFalseActionsF>
                  {supportingTextTrueTabsFalseActionsF.children}
                </SupportingTextTrueTabsFalseActionsF>
                <div className="frame-3376">
                  <TypeDefaultLeadingIconFalseLabelTru
                    typeDefaultDestructiveFalseProps={
                      typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalseProps
                    }
                  />
                  <TypeDefaultLeadingIconFalseLabelTru
                    className={typeDefaultLeadingIconFalseLabelTru2.className}
                    typeDefaultDestructiveFalseProps={
                      typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalseProps
                    }
                  />
                </div>
                <div className="frame-3376">
                  <StatePlaceholderTypeDefaultSupporti
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <TypeLeadingTextDestructiveFalse2
                    typeLeadingTextDestructiveFalseProp={
                      typeLeadingTextDestructiveFalse2Pro.typeLeadingTextDestructiveFalseProp
                    }
                  />
                  <StateDefaultTypeDefaultSupportingTe
                    labelTrueTypeDefaultStateDefaultPro={
                      stateDefaultTypeDefaultSupportingTe.labelTrueTypeDefaultStateDefaultPro
                    }
                  />
                </div>
                <div className="frame-3376">
                  <StatePlaceholderTypeDefaultSupporti
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti2.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <StatePlaceholderTypeDefaultSupporti
                    className={statePlaceholderTypeDefaultSupporti3.className}
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti3.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <div className="frame-33765">
                    <div className="label inter-normal-oxford-blue-14px">{label}</div>
                    <OpenedFalseTypeSingleDateStatePlace />
                  </div>
                </div>
                <DestructiveFalse6 inputProps={destructiveFalse61Props.inputProps} />
                <DestructiveFalse6 inputProps={destructiveFalse62Props.inputProps} />
                <DestructiveFalse6 inputProps={destructiveFalse63Props.inputProps} />
              </div>
              <Footer stateDefaultProps={footerProps.stateDefaultProps} />
            </div>
            <Frame33760
              section32Props={frame33760Props.section32Props}
              frame14069Props={frame33760Props.frame14069Props}
            />
            <img className="graphics" src="/img/graphics@2x.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default PublicWebPageHRView;
