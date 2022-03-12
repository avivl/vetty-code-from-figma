import React from "react";
import Content10 from "../Content10";
import Heading from "../Heading";
import Section32 from "../Section32";
import Frame14069 from "../Frame14069";
import Frame14015 from "../Frame14015";
import Frame14016 from "../Frame14016";
import Frame14017 from "../Frame14017";
import ApplicantDetails from "../ApplicantDetails";
import Footer from "../Footer";
import TypeHorizontalFillContainerActions2 from "../TypeHorizontalFillContainerActions2";
import "./PublicWebPageThankYou.sass";

class PublicWebPageThankYou extends React.Component {
  render() {
    const {
      divider,
      group75,
      element,
      text,
      supportingText,
      graphics,
      content10Props,
      headingProps,
      section32Props,
      frame14069Props,
      frame14015Props,
      frame14016Props,
      frame14017Props,
      applicantDetailsProps,
      footerProps,
      typeHorizontalFillContainerActions2,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-thank-you screen">
          <div className="overlap-group1-1">
            <div className="header-navigation-7">
              <div className="container-16">
                <Content10 className={content10Props.className} content2Props={content10Props.content2Props} />
              </div>
              <img className="divider-24" src={divider} />
            </div>
            <div className="container-17">
              <div className="content-87">
                <Heading
                  textAndSupportingText3Props={headingProps.textAndSupportingText3Props}
                  stateDefaultProps={headingProps.stateDefaultProps}
                />
                <div className="divider-25"></div>
              </div>
            </div>
            <Section32
              className={section32Props.className}
              row51Props={section32Props.row51Props}
              property1AmenitiesProperty2False1Pr={section32Props.property1AmenitiesProperty2False1Pr}
              property1AmenitiesProperty2False2Pr={section32Props.property1AmenitiesProperty2False2Pr}
              property1AmenitiesProperty2False3Pr={section32Props.property1AmenitiesProperty2False3Pr}
              row52Props={section32Props.row52Props}
            />
            <Frame14069
              className={frame14069Props.className}
              preferenceAgencyProps={frame14069Props.preferenceAgencyProps}
              uButtonsIconOutlineRestingProps={frame14069Props.uButtonsIconOutlineRestingProps}
              content7Props={frame14069Props.content7Props}
            />
            <div className="frame-14069-7">
              <Frame14015
                supportingTextTrueTabsFalseActionsF={frame14015Props.supportingTextTrueTabsFalseActionsF}
                sectionProps={frame14015Props.sectionProps}
                section22Props={frame14015Props.section22Props}
              />
              <Frame14016
                supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF}
                sectionProps={frame14016Props.sectionProps}
                section22Props={frame14016Props.section22Props}
              />
              <Frame14017
                supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF}
                sectionProps={frame14017Props.sectionProps}
              />
              <ApplicantDetails {...applicantDetailsProps} />
              <Footer stateDefaultProps={footerProps.stateDefaultProps} />
            </div>
            <img className="group-75-2" src={group75} />
            <div className="modal">
              <div className="modal-1">
                <div className="content-88">
                  <img className="element" src={element} />
                  <div className="text-and-supporting-text-23">
                    <div className="text-123 inter-medium-mirage-18px">{text}</div>
                    <p className="supporting-text-10 inter-normal-pale-sky-14px">{supportingText}</p>
                  </div>
                </div>
                <TypeHorizontalFillContainerActions2
                  sizelgHierarchySecondaryGrayIconFal={
                    typeHorizontalFillContainerActions2.sizelgHierarchySecondaryGrayIconFal
                  }
                />
              </div>
            </div>
          </div>
          <img className="graphics-2" src={graphics} />
        </div>
      </div>
    );
  }
}

export default PublicWebPageThankYou;
