import React from "react";
import SizemdHierarchySecondaryGrayIconFal from "../SizemdHierarchySecondaryGrayIconFal";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import Section22 from "../Section22";
import Frame14016 from "../Frame14016";
import Frame14017 from "../Frame14017";
import ApplicantDetails from "../ApplicantDetails";
import SizexlHierarchyPrimaryIconFalseDest from "../SizexlHierarchyPrimaryIconFalseDest";
import Container from "../Container";
import Frame33760 from "../Frame33760";
import "./ScrollFloatingTitleStickyModuleSonT.sass";

class ScrollFloatingTitleStickyModuleSonT extends React.Component {
  render() {
    const {
      x5D7F96Dfdf28141Cd047F1675418350C1,
      vector7,
      charmingAndComfort1,
      charmingAndComfort2,
      divider,
      section,
      paragraph,
      supportingTextTrueTabsFalseActionsFProps,
      frame14016Props,
      frame14017Props,
      applicantDetailsProps,
      sizexlHierarchyPrimaryIconFalseDestProps,
      containerProps,
      frame33760Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="scroll-floating-title-sticky-module-son-the-side screen">
          <div className="overlap-group2">
            <div className="overlap-group1">
              <div className="header-navigation-5">
                <div className="container-7">
                  <div className="content-26">
                    <div className="frame-3-6">
                      <img
                        className="x5d7f96dfdf28141cd047f1675418350c-1-10"
                        src={x5D7F96Dfdf28141Cd047F1675418350C1}
                      />
                      <img className="vector-7-4" src={vector7} />
                    </div>
                    <div className="charming-and-comfort-12 valign-text-middle redhatdisplay-extra-bold-mirage-22px">
                      {charmingAndComfort1}
                    </div>
                    <div className="charming-and-comfort-13 valign-text-middle inter-normal-pale-sky-12px">
                      {charmingAndComfort2}
                    </div>
                  </div>
                  <SizemdHierarchySecondaryGrayIconFal />
                </div>
                <img className="divider-19" src={divider} />
              </div>
              <div className="container-8"></div>
              <div className="frame-14069-6">
                <div className="frame-14015-3">
                  <SupportingTextTrueTabsFalseActionsF>
                    {supportingTextTrueTabsFalseActionsFProps.children}
                  </SupportingTextTrueTabsFalseActionsF>
                  <img className="section-21" src={section} />
                  <p className="paragraph-29 inter-normal-pale-sky-16px">{paragraph}</p>
                  <Section22 />
                </div>
                <Frame14016 supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF} />
                <Frame14017 supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF} />
                <ApplicantDetails {...applicantDetailsProps} />
                <div className="footer-5">
                  <div className="divider-20"></div>
                  <SizexlHierarchyPrimaryIconFalseDest
                    sizexlIconFalseProps={sizexlHierarchyPrimaryIconFalseDestProps.sizexlIconFalseProps}
                  />
                </div>
              </div>
              <Container headingProps={containerProps.headingProps} />
            </div>
            <Frame33760
              className={frame33760Props.className}
              section32Props={frame33760Props.section32Props}
              frame14069Props={frame33760Props.frame14069Props}
            />
            <img className="group-75-1" src="/img/group-75-1@2x.svg" />
          </div>
          <img className="graphics-1" src="/img/graphics-1@2x.svg" />
        </div>
      </div>
    );
  }
}

export default ScrollFloatingTitleStickyModuleSonT;
