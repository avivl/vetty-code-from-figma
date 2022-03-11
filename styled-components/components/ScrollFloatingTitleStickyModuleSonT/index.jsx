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
import styled from "styled-components";
import {
  InterNormalPaleSky16px,
  RedhatdisplayExtraBoldMirage22px,
  InterNormalPaleSky12px,
  ValignTextMiddle,
} from "../../styledMixins";
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
      paragraph,
      supportingTextTrueTabsFalseActionsF,
      frame14016Props,
      frame14017Props,
      applicantDetailsProps,
      sizexlHierarchyPrimaryIconFalseDest,
      containerProps,
      frame33760Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="scroll-floating-title-sticky-module-son-the-side screen">
          <OverlapGroup2>
            <OverlapGroup1>
              <HeaderNavigation>
                <Container1>
                  <Content>
                    <Frame3>
                      <X5d7f96dfdf28141cd047f1675418350c1 src={x5D7F96Dfdf28141Cd047F1675418350C1} />
                      <Vector7 src={vector7} />
                    </Frame3>
                    <CharmingAndComfort>{charmingAndComfort1}</CharmingAndComfort>
                    <CharmingAndComfort1>{charmingAndComfort2}</CharmingAndComfort1>
                  </Content>
                  <SizemdHierarchySecondaryGrayIconFal />
                </Container1>
                <Divider src={divider} />
              </HeaderNavigation>
              <Container2></Container2>
              <Frame14069>
                <Frame14015>
                  <SupportingTextTrueTabsFalseActionsF>
                    {supportingTextTrueTabsFalseActionsF.children}
                  </SupportingTextTrueTabsFalseActionsF>
                  <Section src={section} />
                  <Paragraph>{paragraph}</Paragraph>
                  <Section22 />
                </Frame14015>
                <Frame14016 supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF} />
                <Frame14017 supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF} />
                <ApplicantDetails {...applicantDetailsProps} />
                <Footer>
                  <Divider1></Divider1>
                  <SizexlHierarchyPrimaryIconFalseDest
                    sizexlIconFalseProps={sizexlHierarchyPrimaryIconFalseDest.sizexlIconFalseProps}
                  />
                </Footer>
              </Frame14069>
              <Container headingProps={containerProps.headingProps} />
            </OverlapGroup1>
            <Frame33760
              className={frame33760Props.className}
              section32Props={frame33760Props.section32Props}
              frame14069Props={frame33760Props.frame14069Props}
            />
            <Group75 src="/img/group-75-1@2x.svg" />
          </OverlapGroup2>
          <Graphics src="/img/graphics-1@2x.svg" />
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
  align-items: center;
  background-color: var(--white);
`;

const Container1 = styled.div`
  height: 72px;
  position: relative;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 1361px;
`;

const Content = styled.div`
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
  width: 1px;
  height: 1px;
`;

const Container2 = styled.div`
  position: absolute;
  width: 1280px;
  height: 1px;
  top: 303px;
  left: 224px;
`;

const Frame14069 = styled.div`
  position: absolute;
  width: 906px;
  top: 0;
  left: 216px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2615px;
`;

const Frame14015 = styled.div`
  width: 904px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 661px;
`;

const Section = styled.img`
  width: 1px;
  height: 1px;
  margin-top: 52px;
`;

const Paragraph = styled.p`
  ${InterNormalPaleSky16px}
  width: 904px;
  min-height: 272px;
  margin-top: 52px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Footer = styled.div`
  width: 905px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 61px;
`;

const Divider1 = styled.div`
  width: 905px;
  height: 1px;
  background-color: var(--gallery);
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
