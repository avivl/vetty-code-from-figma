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
import styled from "styled-components";
import {
  InterMediumMirage18px,
  InterNormalPaleSky12px,
  InterNormalPaleSky14px,
  RedhatdisplayExtraBoldMirage22px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./PublicWebPageThankYou.css";

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
      typeHorizontalFillContainerActions2,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-thank-you screen">
          <OverlapGroup1>
            <HeaderNavigation>
              <Container1>
                <Frame3>
                  <OverlapGroup>
                    <Vector7 src="/img/vector-7-6@2x.svg" />
                    <X5d7f96dfdf28141cd047f1675418350c1 src="/img/5d7f96dfdf28141cd047f1675418350c-1-6@2x.svg" />
                  </OverlapGroup>
                </Frame3>
                <CharmingAndComfort>{charmingAndComfort1}</CharmingAndComfort>
                <CharmingAndComfort1>{charmingAndComfort2}</CharmingAndComfort1>
              </Container1>
              <Divider src="/img/divider@1x.svg" />
            </HeaderNavigation>
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
            <Frame140691>
              <Frame14015 supportingTextTrueTabsFalseActionsF={frame14015Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14016 supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14017 supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF} />
              <ApplicantDetails {...applicantDetailsProps} />
              <Footer stateDefaultProps={footerProps.stateDefaultProps} />
            </Frame140691>
            <Group75 src="/img/group-75-1@2x.svg" />
            <Modal>
              <Modal1>
                <Content>
                  <Element src="/img/element@2x.svg" />
                  <TextAndSupportingText>
                    <Text>{text}</Text>
                    <SupportingText>{supportingText}</SupportingText>
                  </TextAndSupportingText>
                </Content>
                <TypeHorizontalFillContainerActions2
                  sizelgHierarchySecondaryGrayIconFal={
                    typeHorizontalFillContainerActions2.sizelgHierarchySecondaryGrayIconFal
                  }
                />
              </Modal1>
            </Modal>
          </OverlapGroup1>
          <Graphics src="/img/graphics-2@2x.svg" />
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
  width: 1851px;
  height: 2825px;
  position: relative;
  margin-left: -123px;
`;

const HeaderNavigation = styled.div`
  position: absolute;
  width: 1728px;
  height: 73px;
  top: 0;
  left: 123px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
`;

const Container1 = styled.div`
  height: 72px;
  display: flex;
  padding: 19px 31px;
  align-items: center;
  min-width: 1361px;
`;

const Frame3 = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 0.87px;
  display: flex;
  padding: 3.6px 5.5px;
  align-items: flex-start;
  background-color: var(--royal-blue);
  border-radius: 16px;
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  width: 20px;
  height: 22px;
  position: relative;
`;

const Vector7 = styled.img`
  position: absolute;
  width: 14px;
  height: 5px;
  top: 17px;
  left: 3px;
`;

const X5d7f96dfdf28141cd047f1675418350c1 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
`;

const CharmingAndComfort = styled.div`
  ${ValignTextMiddle}
  ${RedhatdisplayExtraBoldMirage22px}
            width: 55px;
  height: 33px;
  align-self: flex-start;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 33.1px;
  white-space: nowrap;
`;

const CharmingAndComfort1 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalPaleSky12px}
            width: 32px;
  height: 17px;
  margin-left: 5px;
  margin-top: 5px;
  letter-spacing: 0;
  line-height: 33.1px;
  white-space: nowrap;
`;

const Divider = styled.img`
  width: 1728px;
  height: 1px;
`;

const Frame140691 = styled.div`
  position: absolute;
  width: 906px;
  top: 214px;
  left: 339px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2611px;
`;

const Group75 = styled.img`
  position: absolute;
  width: 135px;
  height: 367px;
  top: 211px;
  left: 0;
`;

const Modal = styled.div`
  position: absolute;
  height: 950px;
  top: 0;
  left: 123px;
  display: flex;
  padding: 0 652.5px;
  align-items: center;
  min-width: 1728px;
  background-color: var(--oxford-blue-2);
  backdrop-filter: blur(16px) brightness(100%);
  -webkit-backdrop-filter: blur(16px) brightness(100%);
`;

const Modal1 = styled.div`
  width: 423px;
  height: 302px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  align-items: center;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 8px 8px #1018280a, 0px 20px 24px #1018281a;
`;

const Content = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 178px;
`;

const Element = styled.img`
  width: 70px;
  height: 84px;
  margin-top: -2px;
`;

const TextAndSupportingText = styled.div`
  width: 375px;
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 76px;
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  width: 375px;
  min-height: 28px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky14px}
  width: 375px;
  min-height: 40px;
  margin-top: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
`;

const Graphics = styled.img`
  width: 58px;
  height: 222px;
  margin-left: 24px;
  margin-top: 296.77px;
`;

export default PublicWebPageThankYou;
