import React from "react";
import Content3 from "../Content3";
import SizemdHierarchySecondaryGrayIconFal from "../SizemdHierarchySecondaryGrayIconFal";
import Heading from "../Heading";
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
import Section32 from "../Section32";
import Frame14069 from "../Frame14069";
import "./PublicWebPageCandidateView2.sass";

class PublicWebPageCandidateView2 extends React.Component {
  render() {
    const {
      label,
      content3Props,
      headingProps,
      frame14015Props,
      frame14016Props,
      frame14017Props,
      supportingTextTrueTabsFalseActionsFProps,
      typeDefaultLeadingIconFalseLabelTru1Props,
      typeDefaultLeadingIconFalseLabelTru2Props,
      statePlaceholderTypeDefaultSupporti1Props,
      typeLeadingTextDestructiveFalse2Props,
      stateDefaultTypeDefaultSupportingTeProps,
      statePlaceholderTypeDefaultSupporti2Props,
      statePlaceholderTypeDefaultSupporti3Props,
      destructiveFalse61Props,
      destructiveFalse62Props,
      destructiveFalse63Props,
      footerProps,
      section32Props,
      frame14069Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-candidate-view screen">
          <div className="header-navigation-8">
            <div className="container-12">
              <Content3 className={content3Props.className} frame3Props={content3Props.frame3Props} />
              <SizemdHierarchySecondaryGrayIconFal />
            </div>
            <img className="divider-24" src="/img/divider@1x.svg" />
          </div>
          <div className="container-13">
            <Heading className={headingProps.className} stateDefaultProps={headingProps.stateDefaultProps} />
            <div className="divider-25"></div>
          </div>
          <div className="flex-row-5">
            <img className="group-75-3" src="/img/group-75-1@2x.svg" />
            <div className="frame-14069-8">
              <Frame14015 supportingTextTrueTabsFalseActionsF={frame14015Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14016 supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14017 supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF} />
              <div className="applicant-details-3">
                <SupportingTextTrueTabsFalseActionsF>
                  {supportingTextTrueTabsFalseActionsFProps.children}
                </SupportingTextTrueTabsFalseActionsF>
                <div className="frame-3376-1">
                  <TypeDefaultLeadingIconFalseLabelTru
                    typeDefaultDestructiveFalseProps={
                      typeDefaultLeadingIconFalseLabelTru1Props.typeDefaultDestructiveFalseProps
                    }
                  />
                  <TypeDefaultLeadingIconFalseLabelTru
                    className={typeDefaultLeadingIconFalseLabelTru2Props.className}
                    typeDefaultDestructiveFalseProps={
                      typeDefaultLeadingIconFalseLabelTru2Props.typeDefaultDestructiveFalseProps
                    }
                  />
                </div>
                <div className="frame-3376-1">
                  <StatePlaceholderTypeDefaultSupporti
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti1Props.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <TypeLeadingTextDestructiveFalse2
                    typeLeadingTextDestructiveFalseProp={
                      typeLeadingTextDestructiveFalse2Props.typeLeadingTextDestructiveFalseProp
                    }
                  />
                  <StateDefaultTypeDefaultSupportingTe
                    labelTrueTypeDefaultStateDefaultPro={
                      stateDefaultTypeDefaultSupportingTeProps.labelTrueTypeDefaultStateDefaultPro
                    }
                  />
                </div>
                <div className="frame-3376-1">
                  <StatePlaceholderTypeDefaultSupporti
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti2Props.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <StatePlaceholderTypeDefaultSupporti
                    className={statePlaceholderTypeDefaultSupporti3Props.className}
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti3Props.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <div className="frame-33765-3">
                    <div className="label-55 inter-normal-oxford-blue-14px">{label}</div>
                    <OpenedFalseTypeSingleDateStatePlace />
                  </div>
                </div>
                <DestructiveFalse6 inputProps={destructiveFalse61Props.inputProps} />
                <DestructiveFalse6 inputProps={destructiveFalse62Props.inputProps} />
                <DestructiveFalse6 inputProps={destructiveFalse63Props.inputProps} />
              </div>
              <Footer stateDefaultProps={footerProps.stateDefaultProps} />
            </div>
            <div className="frame-33760-4">
              <Section32
                className={section32Props.className}
                row51Props={section32Props.row51Props}
                property1AmenitiesProperty2False1Pr={section32Props.property1AmenitiesProperty2False1Pr}
                property1AmenitiesProperty2False2Pr={section32Props.property1AmenitiesProperty2False2Pr}
                property1AmenitiesProperty2False3Pr={section32Props.property1AmenitiesProperty2False3Pr}
                row52Props={section32Props.row52Props}
              />
              <Frame14069
                preferenceAgencyProps={frame14069Props.preferenceAgencyProps}
                content2Props={frame14069Props.content2Props}
              />
            </div>
            <img className="graphics-3" src="/img/graphics-3@2x.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default PublicWebPageCandidateView2;
