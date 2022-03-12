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
import styled from "styled-components";
import { RedhatdisplayExtraBoldMirage22px, InterNormalPaleSky12px, ValignTextMiddle } from "../../styledMixins";
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
          <OverlapGroup2>
            <OverlapGroup1>
              <HeaderNavigation>
                <Container>
                  <Content>
                    <CompanyLogo>
                      <Frame3>
                        <X5d7f96dfdf28141cd047f1675418350c1 src={x5D7F96Dfdf28141Cd047F1675418350C1} />
                        <Vector7 src={vector7} />
                      </Frame3>
                      <CharmingAndComfort>{charmingAndComfort1}</CharmingAndComfort>
                      <CharmingAndComfort1>{charmingAndComfort2}</CharmingAndComfort1>
                    </CompanyLogo>
                  </Content>
                  <Content11 />
                </Container>
                <Divider src={divider} />
              </HeaderNavigation>
              <Container1></Container1>
              <Frame14069>
                <Frame14015>
                  <SupportingTextTrueTabsFalseActionsF>
                    {supportingTextTrueTabsFalseActionsF.children}
                  </SupportingTextTrueTabsFalseActionsF>
                  <Section1 src={section} />
                  <Section className={sectionProps.className} text2Props={sectionProps.text2Props} />
                  <Section22 text21Props={section22Props.text21Props} text22Props={section22Props.text22Props} />
                </Frame14015>
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
                <Footer>
                  <Divider1></Divider1>
                  <Content1>
                    <Actions1>
                      <SizexlHierarchyPrimaryIconFalseDest
                        sizexlIconFalseProps={sizexlHierarchyPrimaryIconFalseDest.sizexlIconFalseProps}
                      />
                    </Actions1>
                  </Content1>
                </Footer>
              </Frame14069>
              <Container2>
                <Content2>
                  <Heading>
                    <TextAndSupportingText3 />
                    <Actions stateDefaultProps={actionsProps.stateDefaultProps} />
                  </Heading>
                  <Divider2></Divider2>
                </Content2>
              </Container2>
            </OverlapGroup1>
            <Frame33760
              shareProject={frame33760Props.shareProject}
              className={frame33760Props.className}
              section32Props={frame33760Props.section32Props}
              frame14069Props={frame33760Props.frame14069Props}
            />
            <Group75 src={group75} />
          </OverlapGroup2>
          <Graphics src={graphics} />
        </div>
      </div>
    );
  }
}

const OverlapGroup2 = styled.div`
  width: 1851px;
  height: 2615px;
  position: relative;
  margin-left: -123px;
  margin-top: -229px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1728px;
  height: 2615px;
  top: 0;
  left: 123px;
`;

const HeaderNavigation = styled.div`
  position: absolute;
  width: 1728px;
  height: 74px;
  top: 135px;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const Container = styled.div`
  margin-left: 183.5px;
  width: 1361px;
  height: 72px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  margin-top: 19.4px;
  width: 147px;
  margin-left: 32px;
  display: flex;
`;

const CompanyLogo = styled.div`
  height: 33.12676239013672px;
  display: flex;
  align-items: flex-start;
  min-width: 147px;
`;

const Frame3 = styled.div`
  width: 32px;
  height: 32px;
  margin-left: -1px;
  align-self: flex-end;
  margin-bottom: 0.13px;
  display: flex;
  flex-direction: column;
  padding: 7.2px 15.2px;
  align-items: flex-end;
  background-color: var(--royal-blue);
  border-radius: 16px;
  overflow: hidden;
`;

const X5d7f96dfdf28141cd047f1675418350c1 = styled.img`
  width: 1px;
  height: 1px;
  margin-top: 6px;
  margin-right: 0;
`;

const Vector7 = styled.img`
  width: 1px;
  height: 1px;
  margin-top: 9px;
`;

const CharmingAndComfort = styled.div`
  ${ValignTextMiddle}
  ${RedhatdisplayExtraBoldMirage22px}
            width: 55px;
  height: 33px;
  margin-left: 8px;
  margin-top: -0.44px;
  letter-spacing: 0;
  line-height: 33.1px;
  white-space: nowrap;
`;

const CharmingAndComfort1 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalPaleSky12px}
            width: 32px;
  height: 17px;
  align-self: center;
  margin-left: 5px;
  margin-top: 5px;
  letter-spacing: 0;
  line-height: 33.1px;
  white-space: nowrap;
`;

const Divider = styled.img`
  margin-left: 863.5px;
  width: 1px;
  height: 1px;
`;

const Container1 = styled.div`
  position: absolute;
  width: 1280px;
  height: 1px;
  top: 303px;
  left: 224px;
`;

const Frame14069 = styled.div`
  position: absolute;
  width: 906px;
  height: 2615px;
  top: 0;
  left: 216px;
  display: flex;
  flex-direction: column;
`;

const Frame14015 = styled.div`
  width: 904px;
  height: 661px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section1 = styled.img`
  margin-left: 451.5px;
  width: 1px;
  height: 1px;
  margin-top: 51.5px;
`;

const Footer = styled.div`
  width: 905px;
  height: 61px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Divider1 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Content1 = styled.div`
  width: 905px;
  margin-top: 16px;
  display: flex;
`;

const Actions1 = styled.div`
  width: 905px;
  height: 44px;
  position: relative;
  display: flex;
`;

const Container2 = styled.div`
  position: absolute;
  width: 1361px;
  height: 91px;
  top: 229px;
  left: 184px;
  display: flex;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #0000000d;
`;

const Content2 = styled.div`
  width: 1297px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 91px;
`;

const Heading = styled.div`
  width: 1297px;
  height: 40px;
  position: relative;
  margin-top: 40px;
  display: flex;
`;

const Divider2 = styled.div`
  width: 1297px;
  height: 1px;
  margin-top: 10px;
  background-color: #4e5aa6;
`;

const Group75 = styled.img`
  position: absolute;
  width: 135px;
  height: 367px;
  top: 440px;
  left: 0;
`;

const Graphics = styled.img`
  width: 58px;
  height: 222px;
  margin-left: 24px;
  margin-top: 296.77px;
`;

export default ScrollFloatingTitleStickyModuleSonT;
