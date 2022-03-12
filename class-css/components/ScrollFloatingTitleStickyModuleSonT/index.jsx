import React from "react";
import Content11 from "../Content11";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import Section from "../Section";
import Section22 from "../Section22";
import Frame14016 from "../Frame14016";
import Frame14017 from "../Frame14017";
import ApplicantDetails from "../ApplicantDetails";
import SizexlHierarchyPrimaryIconFalseDest from "../SizexlHierarchyPrimaryIconFalseDest";
import TextAndSupportingText3 from "../TextAndSupportingText3";
import Actions from "../Actions";
import Frame33760 from "../Frame33760";
import "./ScrollFloatingTitleStickyModuleSonT.css";

class ScrollFloatingTitleStickyModuleSonT extends React.Component {
  render() {
    const {
      x5D7F96Dfdf28141Cd047F1675418350C1,
      vector7,
      charmingAndComfort1,
      charmingAndComfort2,
      divider,
      section,
      group75,
      graphics,
      supportingTextTrueTabsFalseActionsF,
      sectionProps,
      section22Props,
      frame14016Props,
      frame14017Props,
      applicantDetailsProps,
      sizexlHierarchyPrimaryIconFalseDest,
      actionsProps,
      frame33760Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="scroll-floating-title-sticky-module-son-the-side screen">
          <div className="overlap-group2">
            <div className="overlap-group1">
              <div className="header-navigation-5">
                <div className="container-11">
                  <div className="content-74">
                    <div className="company-logo-11">
                      <div className="frame-3-2">
                        <img
                          className="x5d7f96dfdf28141cd047f1675418350c-1-12"
                          src={x5D7F96Dfdf28141Cd047F1675418350C1}
                        />
                        <img className="vector-7-12" src={vector7} />
                      </div>
                      <div className="charming-and-comfort-20 valign-text-middle redhatdisplay-extra-bold-mirage-22px">
                        {charmingAndComfort1}
                      </div>
                      <div className="charming-and-comfort-21 valign-text-middle inter-normal-pale-sky-12px">
                        {charmingAndComfort2}
                      </div>
                    </div>
                  </div>
                  <Content11 />
                </div>
                <img className="divider-20" src={divider} />
              </div>
              <div className="container-12"></div>
              <div className="frame-14069-6">
                <div className="frame-14015-3">
                  <SupportingTextTrueTabsFalseActionsF>
                    {supportingTextTrueTabsFalseActionsF.children}
                  </SupportingTextTrueTabsFalseActionsF>
                  <img className="section-39" src={section} />
                  <Section className={sectionProps.className} text2Props={sectionProps.text2Props} />
                  <Section22 text21Props={section22Props.text21Props} text22Props={section22Props.text22Props} />
                </div>
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
                <div className="footer-5">
                  <div className="divider-21"></div>
                  <div className="content-75">
                    <div className="actions-8">
                      <SizexlHierarchyPrimaryIconFalseDest
                        sizexlIconFalseProps={sizexlHierarchyPrimaryIconFalseDest.sizexlIconFalseProps}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-13">
                <div className="content-76">
                  <div className="heading-10">
                    <TextAndSupportingText3 />
                    <Actions stateDefaultProps={actionsProps.stateDefaultProps} />
                  </div>
                  <div className="divider-22"></div>
                </div>
              </div>
            </div>
            <Frame33760
              shareProject={frame33760Props.shareProject}
              className={frame33760Props.className}
              section32Props={frame33760Props.section32Props}
              frame14069Props={frame33760Props.frame14069Props}
            />
            <img className="group-75-1" src={group75} />
          </div>
          <img className="graphics-1" src={graphics} />
        </div>
      </div>
    );
  }
}

export default ScrollFloatingTitleStickyModuleSonT;
