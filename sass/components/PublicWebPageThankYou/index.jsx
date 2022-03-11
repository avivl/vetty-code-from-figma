import React from "react";
import Container from "../Container";
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
      charmingAndComfort1,
      charmingAndComfort2,
      text,
      supportingText,
      containerProps,
      section32Props,
      frame14069Props,
      frame14015Props,
      frame14016Props,
      frame14017Props,
      applicantDetailsProps,
      footerProps,
      typeHorizontalFillContainerActions2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-thank-you screen">
          <div className="overlap-group1-1">
            <div className="header-navigation-7">
              <div className="container-11">
                <div className="frame-3-7">
                  <div className="overlap-group-18">
                    <img className="vector-7-5" src="/img/vector-7-6@2x.svg" />
                    <img
                      className="x5d7f96dfdf28141cd047f1675418350c-1-11"
                      src="/img/5d7f96dfdf28141cd047f1675418350c-1-6@2x.svg"
                    />
                  </div>
                </div>
                <div className="charming-and-comfort-16 valign-text-middle redhatdisplay-extra-bold-mirage-22px">
                  {charmingAndComfort1}
                </div>
                <div className="charming-and-comfort-17 valign-text-middle inter-normal-pale-sky-12px">
                  {charmingAndComfort2}
                </div>
              </div>
              <img className="divider-23" src="/img/divider@1x.svg" />
            </div>
            <Container className={containerProps.className} headingProps={containerProps.headingProps} />
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
              content2Props={frame14069Props.content2Props}
            />
            <div className="frame-14069-7">
              <Frame14015 supportingTextTrueTabsFalseActionsF={frame14015Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14016 supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14017 supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF} />
              <ApplicantDetails {...applicantDetailsProps} />
              <Footer stateDefaultProps={footerProps.stateDefaultProps} />
            </div>
            <img className="group-75-2" src="/img/group-75-1@2x.svg" />
            <div className="modal">
              <div className="modal-1">
                <div className="content-30">
                  <img className="element" src="/img/element@2x.svg" />
                  <div className="text-and-supporting-text-3">
                    <div className="text-103 inter-medium-mirage-18px">{text}</div>
                    <p className="supporting-text-7 inter-normal-pale-sky-14px">{supportingText}</p>
                  </div>
                </div>
                <TypeHorizontalFillContainerActions2
                  sizelgHierarchySecondaryGrayIconFalProps={
                    typeHorizontalFillContainerActions2Props.sizelgHierarchySecondaryGrayIconFalProps
                  }
                />
              </div>
            </div>
          </div>
          <img className="graphics-2" src="/img/graphics-2@2x.svg" />
        </div>
      </div>
    );
  }
}

export default PublicWebPageThankYou;
