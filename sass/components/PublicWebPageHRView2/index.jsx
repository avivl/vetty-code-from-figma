import React from "react";
import CompanyLogo from "../CompanyLogo";
import OpenedFalseColorGrayThemeLightState from "../OpenedFalseColorGrayThemeLightState";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import SizesmIconLeading from "../SizesmIconLeading";
import StateDefault from "../StateDefault";
import Section3 from "../Section3";
import ShareProject from "../ShareProject";
import Frame140692 from "../Frame140692";
import SupportingTextFalseTabsFalseActions from "../SupportingTextFalseTabsFalseActions";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import TypeLeadingTextDestructiveFalse2 from "../TypeLeadingTextDestructiveFalse2";
import StateDefaultTypeDefaultSupportingTe from "../StateDefaultTypeDefaultSupportingTe";
import Frame33765 from "../Frame33765";
import DestructiveFalse22 from "../DestructiveFalse22";
import Footer2 from "../Footer2";
import "./PublicWebPageHRView2.sass";

class PublicWebPageHRView2 extends React.Component {
  render() {
    const {
      text,
      companyLogoProps,
      openedFalseColorGrayThemeLightState,
      sizemdHierarchyLinkGrayIconLeadingD,
      sizesmIconLeadingProps,
      stateDefaultProps,
      section3Props,
      shareProjectProps,
      frame140692Props,
      supportingTextFalseTabsFalseActions,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      statePlaceholderTypeDefaultSupporti,
      typeLeadingTextDestructiveFalse2Pro,
      stateDefaultTypeDefaultSupportingTe,
      statePlaceholderTypeDefaultSupporti2,
      statePlaceholderTypeDefaultSupporti3,
      destructiveFalse221Props,
      destructiveFalse222Props,
      destructiveFalse223Props,
      footer2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-hr-view screen">
          <div className="header-navigation-4">
            <div className="content-23">
              <CompanyLogo frame3Props={companyLogoProps.frame3Props} />
              <OpenedFalseColorGrayThemeLightState
                socialIconProps={openedFalseColorGrayThemeLightState.socialIconProps}
              />
            </div>
            <img className="divider-14" src="/img/divider-2@2x.svg" />
          </div>
          <div className="main-1">
            <div className="page-header-1">
              <div className="content-24">
                <SizemdHierarchyLinkGrayIconLeadingD
                  sizemdIconLeading3Props={sizemdHierarchyLinkGrayIconLeadingD.sizemdIconLeading3Props}
                />
                <div className="text-79 inter-medium-mirage-24px">{text}</div>
              </div>
              <div className="actions">
                <SizesmIconLeading className={sizesmIconLeadingProps.className} />
                <StateDefault
                  className={stateDefaultProps.className}
                  sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
                />
              </div>
            </div>
            <Section3 supportingTextFalseTabsFalseActions={section3Props.supportingTextFalseTabsFalseActions} />
            <div className="section-12">
              <div className="container-5">
                <img className="share-project-6" src="/img/share-project-1@2x.svg" />
                <ShareProject
                  row521Props={shareProjectProps.row521Props}
                  property1AmenitiesProperty2False21P={shareProjectProps.property1AmenitiesProperty2False21P}
                  property1AmenitiesProperty2False22P={shareProjectProps.property1AmenitiesProperty2False22P}
                  property1AmenitiesProperty2False23P={shareProjectProps.property1AmenitiesProperty2False23P}
                  row522Props={shareProjectProps.row522Props}
                />
              </div>
              <div className="frame-33760-2">
                <Frame140692
                  preferenceAgencyProps={frame140692Props.preferenceAgencyProps}
                  content2Props={frame140692Props.content2Props}
                />
                <SupportingTextFalseTabsFalseActions className={supportingTextFalseTabsFalseActions.className}>
                  {supportingTextFalseTabsFalseActions.children}
                </SupportingTextFalseTabsFalseActions>
                <div className="frame-33762">
                  <TypeDefaultLeadingIconFalseLabelTru2
                    typeDefaultDestructiveFalse2Props={
                      typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalse2Props
                    }
                  />
                  <TypeDefaultLeadingIconFalseLabelTru2
                    className={typeDefaultLeadingIconFalseLabelTru2.className}
                    typeDefaultDestructiveFalse2Props={
                      typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalse2Props
                    }
                  />
                  <StatePlaceholderTypeDefaultSupporti
                    className={statePlaceholderTypeDefaultSupporti.className}
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <TypeLeadingTextDestructiveFalse2
                    className={typeLeadingTextDestructiveFalse2Pro.className}
                    typeLeadingTextDestructiveFalseProp={
                      typeLeadingTextDestructiveFalse2Pro.typeLeadingTextDestructiveFalseProp
                    }
                  />
                  <StateDefaultTypeDefaultSupportingTe
                    className={stateDefaultTypeDefaultSupportingTe.className}
                    labelTrueTypeDefaultStateDefaultPro={
                      stateDefaultTypeDefaultSupportingTe.labelTrueTypeDefaultStateDefaultPro
                    }
                  />
                  <StatePlaceholderTypeDefaultSupporti
                    className={statePlaceholderTypeDefaultSupporti2.className}
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
                  <Frame33765 />
                  <DestructiveFalse22 input2Props={destructiveFalse221Props.input2Props} />
                  <DestructiveFalse22 input2Props={destructiveFalse222Props.input2Props} />
                  <DestructiveFalse22 input2Props={destructiveFalse223Props.input2Props} />
                </div>
                <Footer2 stateDefaultProps={footer2Props.stateDefaultProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PublicWebPageHRView2;
